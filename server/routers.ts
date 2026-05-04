import { COOKIE_NAME } from "@shared/const";
import Stripe from "stripe";
import { PACER_PRODUCTS } from "./products";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import {
  complaints,
  appeals,
  downloads,
  partners,
  blogPosts,
  webinars,
  certificationApplications,
} from "../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import { nanoid } from "nanoid";
import { notifyOwner } from "./_core/notification";

// Helper to generate complaint ID: PAC-COMP-YYYY-MM-XXXX
function generateComplaintId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const rand = nanoid(6).toUpperCase();
  return `PAC-COMP-${year}-${month}-${rand}`;
}

// Helper to generate appeal ID: PAC-APP-YYYY-MM-XXXX
function generateAppealId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const rand = nanoid(6).toUpperCase();
  return `PAC-APP-${year}-${month}-${rand}`;
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Complaints (public) ─────────────────────────────────────────────────
  complaints: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(2).max(255),
          email: z.string().email().max(320),
          phone: z.string().max(32).optional(),
          organization: z.string().max(255).optional(),
          complaintType: z.enum(["general", "certification", "training", "technical", "staff", "other"]),
          subject: z.string().min(5).max(500),
          description: z.string().min(20),
          preferredContact: z.enum(["email", "phone"]).default("email"),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database unavailable");
        const complaintId = generateComplaintId();
        await db.insert(complaints).values({
          complaintId,
          fullName: input.fullName,
          email: input.email,
          phone: input.phone ?? null,
          organization: input.organization ?? null,
          complaintType: input.complaintType,
          subject: input.subject,
          description: input.description,
          preferredContact: input.preferredContact,
          status: "submitted",
        });
        await notifyOwner({
          title: `New Complaint: ${complaintId}`,
          content: `From: ${input.fullName} (${input.email})\nType: ${input.complaintType}\nSubject: ${input.subject}`,
        });
        return { complaintId };
      }),

    getMyComplaints: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(complaints)
        .where(eq(complaints.userId, ctx.user.id))
        .orderBy(desc(complaints.createdAt));
    }),

    getAll: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Forbidden");
      const db = await getDb();
      if (!db) return [];
      return db.select().from(complaints).orderBy(desc(complaints.createdAt));
    }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["submitted", "acknowledged", "in_progress", "resolved", "closed"]),
        resolution: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new Error("Forbidden");
        const db = await getDb();
        if (!db) throw new Error("Database unavailable");
        await db.update(complaints)
          .set({ status: input.status, resolution: input.resolution ?? null })
          .where(eq(complaints.id, input.id));
        return { success: true };
      }),
  }),

  // ─── Appeals (protected) ─────────────────────────────────────────────────
  appeals: router({
    submit: protectedProcedure
      .input(
        z.object({
          certificationRef: z.string().max(255).optional(),
          appealType: z.enum(["certification_decision", "exam_result", "assessment_process", "suspension_revocation", "other"]),
          reason: z.string().min(200),
          desiredOutcome: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database unavailable");
        const appealId = generateAppealId();
        await db.insert(appeals).values({
          appealId,
          userId: ctx.user.id,
          certificationRef: input.certificationRef ?? null,
          appealType: input.appealType,
          reason: input.reason,
          desiredOutcome: input.desiredOutcome ?? null,
          status: "submitted",
        });
        await notifyOwner({
          title: `New Appeal: ${appealId}`,
          content: `From: ${ctx.user.name} (${ctx.user.email})\nType: ${input.appealType}\nCertification: ${input.certificationRef ?? "N/A"}`,
        });
        return { appealId };
      }),

    getMyAppeals: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(appeals)
        .where(eq(appeals.userId, ctx.user.id))
        .orderBy(desc(appeals.createdAt));
    }),

    getAll: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Forbidden");
      const db = await getDb();
      if (!db) return [];
      return db.select().from(appeals).orderBy(desc(appeals.createdAt));
    }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["submitted", "under_review", "hearing_scheduled", "decided", "closed"]),
        decision: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new Error("Forbidden");
        const db = await getDb();
        if (!db) throw new Error("Database unavailable");
        await db.update(appeals)
          .set({ status: input.status, decision: input.decision ?? null })
          .where(eq(appeals.id, input.id));
        return { success: true };
      }),
  }),

  // ─── Downloads (public) ──────────────────────────────────────────────────
  downloads: router({
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }).optional())
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        const rows = await db
          .select()
          .from(downloads)
          .where(eq(downloads.isActive, true))
          .orderBy(downloads.sortOrder, downloads.createdAt);
        if (input?.category) {
          return rows.filter((r) => r.category === input.category);
        }
        return rows;
      }),
  }),

  // ─── Partners (public) ───────────────────────────────────────────────────
  partners: router({
    list: publicProcedure
      .input(z.object({ type: z.enum(["training", "certification"]).optional() }).optional())
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        const rows = await db
          .select()
          .from(partners)
          .where(eq(partners.isActive, true))
          .orderBy(partners.sortOrder);
        if (input?.type) {
          return rows.filter((r) => r.partnerType === input.type);
        }
        return rows;
      }),
  }),

  // ─── Blog (public) ───────────────────────────────────────────────────────
  blog: router({
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }).optional())
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        const rows = await db
          .select()
          .from(blogPosts)
          .where(eq(blogPosts.isPublished, true))
          .orderBy(desc(blogPosts.publishedAt));
        if (input?.category) {
          return rows.filter((r) => r.category === input.category);
        }
        return rows;
      }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        const rows = await db
          .select()
          .from(blogPosts)
          .where(and(eq(blogPosts.slug, input.slug), eq(blogPosts.isPublished, true)))
          .limit(1);
        return rows[0] ?? null;
      }),
  }),

  // ─── Webinars (public) ───────────────────────────────────────────────────
  webinars: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(webinars)
        .where(eq(webinars.isActive, true))
        .orderBy(desc(webinars.scheduledAt));
    }),
  }),

  // ─── Certifications (protected) ──────────────────────────────────────────
  // ─── Payments (Stripe) ──────────────────────────────────────────────────────
  payments: router({
    createCheckout: protectedProcedure
      .input(
        z.object({
          productCategory: z.enum(["certification", "appeal", "training"]),
          productKey: z.string(),
          applicationId: z.number().optional(),
          appealId: z.string().optional(),
          origin: z.string(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const stripeKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeKey) throw new Error("Stripe not configured");
        const stripe = new Stripe(stripeKey, { apiVersion: "2025-04-30" as any });

        // Resolve product
        let product: { name: string; description: string; amount: number; currency: string } | undefined;
        if (input.productCategory === "certification") {
          product = (PACER_PRODUCTS.certification as any)[input.productKey];
        } else if (input.productCategory === "appeal") {
          product = (PACER_PRODUCTS.appeal as any)[input.productKey] ?? PACER_PRODUCTS.appeal.standard;
        } else if (input.productCategory === "training") {
          product = (PACER_PRODUCTS.training as any)[input.productKey];
        }
        if (!product) throw new Error("Product not found: " + input.productKey);

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: product.currency,
                product_data: {
                  name: product.name,
                  description: product.description,
                },
                unit_amount: product.amount,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          customer_email: ctx.user.email ?? undefined,
          client_reference_id: ctx.user.id.toString(),
          metadata: {
            user_id: ctx.user.id.toString(),
            customer_email: ctx.user.email ?? "",
            customer_name: ctx.user.name ?? "",
            product_category: input.productCategory,
            product_key: input.productKey,
            application_id: input.applicationId?.toString() ?? "",
            appeal_id: input.appealId ?? "",
          },
          allow_promotion_codes: true,
          success_url: `${input.origin}/dashboard?payment=success&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${input.origin}/dashboard?payment=cancelled`,
        });

        return { checkoutUrl: session.url };
      }),

    getProductList: publicProcedure
      .input(z.object({ category: z.enum(["certification", "appeal", "training"]).optional() }).optional())
      .query(({ input }) => {
        const allProducts: Array<{ key: string; category: string; name: string; description: string; amount: number; currency: string }> = [];
        const categories = input?.category ? [input.category] : ["certification", "appeal", "training"] as const;
        for (const cat of categories) {
          const group = PACER_PRODUCTS[cat as keyof typeof PACER_PRODUCTS] as Record<string, { name: string; description: string; amount: number; currency: string; category: string }>;
          for (const [key, val] of Object.entries(group)) {
            allProducts.push({ key, category: cat, name: val.name, description: val.description, amount: val.amount, currency: val.currency });
          }
        }
        return allProducts;
      }),
  }),

  certifications: router({
    submitApplication: protectedProcedure
      .input(
        z.object({
          certificationScheme: z.string().max(64),
          auditorLevel: z.enum(["provisional", "auditor", "lead_auditor", "business_improvement"]),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database unavailable");
        await db.insert(certificationApplications).values({
          userId: ctx.user.id,
          certificationScheme: input.certificationScheme,
          auditorLevel: input.auditorLevel,
          notes: input.notes ?? null,
          status: "draft",
          paymentStatus: "pending",
        });
        return { success: true };
      }),

    myApplications: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(certificationApplications)
        .where(eq(certificationApplications.userId, ctx.user.id))
        .orderBy(desc(certificationApplications.createdAt));
    }),
  }),
});

export type AppRouter = typeof appRouter;
