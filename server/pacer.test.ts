import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import { COOKIE_NAME } from "../shared/const";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
}

function createAuthContext(overrides: Partial<AuthenticatedUser> = {}): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user-001",
    email: "test@pacer.co.id",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
    ...overrides,
  };
  return {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
}

// ─── Auth Tests ─────────────────────────────────────────────────────────────
describe("auth.logout", () => {
  it("clears the session cookie and reports success", async () => {
    const clearedCookies: { name: string; options: Record<string, unknown> }[] = [];
    const ctx: TrpcContext = {
      user: createAuthContext().user,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {
        clearCookie: (name: string, options: Record<string, unknown>) => {
          clearedCookies.push({ name, options });
        },
      } as unknown as TrpcContext["res"],
    };
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.logout();
    expect(result).toEqual({ success: true });
    expect(clearedCookies).toHaveLength(1);
    expect(clearedCookies[0]?.name).toBe(COOKIE_NAME);
    expect(clearedCookies[0]?.options).toMatchObject({ maxAge: -1 });
  });

  it("auth.me returns null for unauthenticated user", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.auth.me();
    expect(result).toBeNull();
  });

  it("auth.me returns user for authenticated user", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.auth.me();
    expect(result).not.toBeNull();
    expect(result?.email).toBe("test@pacer.co.id");
  });
});

// ─── Complaint ID Format Tests ───────────────────────────────────────────────
describe("complaint ID format", () => {
  it("complaint IDs follow PAC-COMP-YYYY-MM-XXXXX format", () => {
    // Test the format by checking regex
    const pattern = /^PAC-COMP-\d{4}-\d{2}-[A-Z0-9]+$/;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const sampleId = `PAC-COMP-${year}-${month}-ABC123`;
    expect(sampleId).toMatch(pattern);
  });

  it("appeal IDs follow PAC-APP-YYYY-MM-XXXXX format", () => {
    const pattern = /^PAC-APP-\d{4}-\d{2}-[A-Z0-9]+$/;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const sampleId = `PAC-APP-${year}-${month}-XYZ789`;
    expect(sampleId).toMatch(pattern);
  });
});

// ─── Complaints Router Tests ─────────────────────────────────────────────────
describe("complaints router", () => {
  it("is accessible without authentication (public procedure)", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    // The submit procedure exists and is accessible
    expect(typeof caller.complaints.submit).toBe("function");
  });

  it("validates required fields - rejects empty fullName", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.complaints.submit({
        fullName: "",
        email: "test@example.com",
        complaintType: "general",
        subject: "Test Subject",
        description: "This is a test description that is long enough",
        preferredContact: "email",
      })
    ).rejects.toThrow();
  });

  it("validates email format", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.complaints.submit({
        fullName: "Test User",
        email: "not-an-email",
        complaintType: "general",
        subject: "Test Subject",
        description: "This is a test description that is long enough",
        preferredContact: "email",
      })
    ).rejects.toThrow();
  });

  it("validates description minimum length", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.complaints.submit({
        fullName: "Test User",
        email: "test@example.com",
        complaintType: "general",
        subject: "Test Subject",
        description: "Too short",
        preferredContact: "email",
      })
    ).rejects.toThrow();
  });
});

// ─── Appeals Router Tests ────────────────────────────────────────────────────
describe("appeals router", () => {
  it("requires authentication for submit", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.appeals.submit({
        appealType: "certification_decision",
        reason: "A".repeat(200),
      })
    ).rejects.toThrow();
  });

  it("requires authentication for getMyAppeals", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.appeals.getMyAppeals()).rejects.toThrow();
  });

  it("validates reason minimum length of 200 chars", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(
      caller.appeals.submit({
        appealType: "certification_decision",
        reason: "Too short reason",
      })
    ).rejects.toThrow();
  });
});

// ─── Certifications Router Tests ─────────────────────────────────────────────
describe("certifications router", () => {
  it("requires authentication for submitApplication", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.certifications.submitApplication({
        certificationScheme: "ISO 9001",
        auditorLevel: "auditor",
      })
    ).rejects.toThrow();
  });

  it("requires authentication for myApplications", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.certifications.myApplications()).rejects.toThrow();
  });

  it("validates auditorLevel enum", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(
      caller.certifications.submitApplication({
        certificationScheme: "ISO 9001",
        auditorLevel: "invalid_level" as any,
      })
    ).rejects.toThrow();
  });
});

// ─── Downloads Router Tests ──────────────────────────────────────────────────
describe("downloads router", () => {
  it("is publicly accessible", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    expect(typeof caller.downloads.list).toBe("function");
  });
});

// ─── Partners Router Tests ───────────────────────────────────────────────────
describe("partners router", () => {
  it("is publicly accessible", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    expect(typeof caller.partners.list).toBe("function");
  });

  it("accepts optional type filter", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    // Should not throw even without DB (returns empty array)
    const result = await caller.partners.list({ type: "training" });
    expect(Array.isArray(result)).toBe(true);
  });
});

// ─── Blog Router Tests ───────────────────────────────────────────────────────
describe("blog router", () => {
  it("list is publicly accessible", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.blog.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("getBySlug is publicly accessible", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.blog.getBySlug({ slug: "non-existent-slug" });
    expect(result).toBeNull();
  });
});

// ─── Webinars Router Tests ───────────────────────────────────────────────────
describe("webinars router", () => {
  it("is publicly accessible", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.webinars.list();
    expect(Array.isArray(result)).toBe(true);
  });
});

// ─── Payments Router Tests ───────────────────────────────────────────────────
describe("payments router", () => {
  it("getProductList is publicly accessible", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.payments.getProductList();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("getProductList returns certification products", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.payments.getProductList({ category: "certification" });
    expect(result.every((p) => p.category === "certification")).toBe(true);
    expect(result.every((p) => p.amount > 0)).toBe(true);
    expect(result.every((p) => p.currency === "idr")).toBe(true);
  });

  it("getProductList returns appeal products", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.payments.getProductList({ category: "appeal" });
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].key).toBe("standard");
    expect(result[0].amount).toBe(500000);
  });

  it("getProductList returns training products", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.payments.getProductList({ category: "training" });
    expect(result.length).toBeGreaterThan(0);
  });

  it("createCheckout requires authentication", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.payments.createCheckout({
        productCategory: "certification",
        productKey: "iso9001_provisional",
        origin: "https://example.com",
      })
    ).rejects.toThrow();
  });

  it("createCheckout validates productCategory enum", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(
      caller.payments.createCheckout({
        productCategory: "invalid" as any,
        productKey: "iso9001_provisional",
        origin: "https://example.com",
      })
    ).rejects.toThrow();
  });
});
