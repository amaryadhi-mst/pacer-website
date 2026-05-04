import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
  boolean,
  decimal,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Complaints table (public access, no login required)
export const complaints = mysqlTable("complaints", {
  id: int("id").autoincrement().primaryKey(),
  complaintId: varchar("complaintId", { length: 32 }).notNull().unique(), // PAC-COMP-YYYY-MM-XXXX
  userId: int("userId"), // nullable, optional if logged in
  fullName: varchar("fullName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 32 }),
  organization: varchar("organization", { length: 255 }),
  complaintType: mysqlEnum("complaintType", [
    "general",
    "certification",
    "training",
    "technical",
    "staff",
    "other",
  ]).notNull(),
  subject: varchar("subject", { length: 500 }).notNull(),
  description: text("description").notNull(),
  attachmentUrl: text("attachmentUrl"),
  preferredContact: mysqlEnum("preferredContact", ["email", "phone"]).default("email"),
  status: mysqlEnum("status", ["submitted", "acknowledged", "in_progress", "resolved", "closed"])
    .default("submitted")
    .notNull(),
  assignedTo: varchar("assignedTo", { length: 255 }),
  resolution: text("resolution"),
  satisfactionRating: int("satisfactionRating"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  resolvedAt: timestamp("resolvedAt"),
});

export type Complaint = typeof complaints.$inferSelect;
export type InsertComplaint = typeof complaints.$inferInsert;

// Appeals table (login required)
export const appeals = mysqlTable("appeals", {
  id: int("id").autoincrement().primaryKey(),
  appealId: varchar("appealId", { length: 32 }).notNull().unique(), // PAC-APP-YYYY-MM-XXXX
  userId: int("userId").notNull(),
  certificationRef: varchar("certificationRef", { length: 255 }),
  appealType: mysqlEnum("appealType", [
    "certification_decision",
    "exam_result",
    "assessment_process",
    "suspension_revocation",
    "other",
  ]).notNull(),
  reason: text("reason").notNull(),
  desiredOutcome: text("desiredOutcome"),
  supportingDocUrl: text("supportingDocUrl"),
  status: mysqlEnum("status", [
    "submitted",
    "under_review",
    "hearing_scheduled",
    "decided",
    "closed",
  ])
    .default("submitted")
    .notNull(),
  committeeAssigned: varchar("committeeAssigned", { length: 255 }),
  hearingDate: timestamp("hearingDate"),
  decision: text("decision"),
  decisionDate: timestamp("decisionDate"),
  appealFeePaid: boolean("appealFeePaid").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Appeal = typeof appeals.$inferSelect;
export type InsertAppeal = typeof appeals.$inferInsert;

// Downloads / Resources table
export const downloads = mysqlTable("downloads", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description"),
  category: mysqlEnum("category", [
    "brochure",
    "scheme",
    "application_form",
    "policy",
    "other",
  ]).notNull(),
  fileUrl: text("fileUrl").notNull(),
  fileSize: varchar("fileSize", { length: 32 }),
  downloadCount: int("downloadCount").default(0),
  isActive: boolean("isActive").default(true),
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Download = typeof downloads.$inferSelect;

// Partners table
export const partners = mysqlTable("partners", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  partnerType: mysqlEnum("partnerType", ["training", "certification"]).notNull(),
  description: text("description"),
  logoUrl: text("logoUrl"),
  websiteUrl: text("websiteUrl"),
  location: varchar("location", { length: 255 }),
  isActive: boolean("isActive").default(true),
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Partner = typeof partners.$inferSelect;

// Blog posts table
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 500 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  category: mysqlEnum("category", [
    "certification_insights",
    "career_tips",
    "industry_updates",
    "training_methodologies",
  ]).notNull(),
  authorName: varchar("authorName", { length: 255 }),
  coverImageUrl: text("coverImageUrl"),
  isPublished: boolean("isPublished").default(false),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;

// Certification applications / registrations
export const certificationApplications = mysqlTable("certification_applications", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  certificationScheme: varchar("certificationScheme", { length: 64 }).notNull(), // e.g. ISO9001, ISO14001
  auditorLevel: mysqlEnum("auditorLevel", [
    "provisional",
    "auditor",
    "lead_auditor",
    "business_improvement",
  ]).notNull(),
  status: mysqlEnum("status", [
    "draft",
    "submitted",
    "under_review",
    "approved",
    "rejected",
    "certified",
  ])
    .default("draft")
    .notNull(),
  paymentStatus: mysqlEnum("paymentStatus", ["pending", "paid", "refunded"])
    .default("pending")
    .notNull(),
  paymentAmount: decimal("paymentAmount", { precision: 12, scale: 2 }),
  paymentRef: varchar("paymentRef", { length: 255 }),
  certificateNumber: varchar("certificateNumber", { length: 128 }),
  issuedAt: timestamp("issuedAt"),
  expiresAt: timestamp("expiresAt"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CertificationApplication = typeof certificationApplications.$inferSelect;

// Webinars table
export const webinars = mysqlTable("webinars", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description"),
  speaker: varchar("speaker", { length: 255 }),
  scheduledAt: timestamp("scheduledAt"),
  durationMinutes: int("durationMinutes"),
  registrationUrl: text("registrationUrl"),
  recordingUrl: text("recordingUrl"),
  isUpcoming: boolean("isUpcoming").default(true),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Webinar = typeof webinars.$inferSelect;
