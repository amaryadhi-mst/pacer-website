// PACER Stripe Products & Pricing Configuration
// All prices in IDR (Indonesian Rupiah) — Stripe uses smallest currency unit
// For IDR: 1 IDR = 1 unit (IDR is a zero-decimal currency in Stripe)

export const PACER_PRODUCTS = {
  // ─── Certification Application Fees ────────────────────────────────────────
  certification: {
    iso9001_provisional: {
      name: "Sertifikasi Auditor Provisional SMM (ISO 9001)",
      description: "Biaya pendaftaran sertifikasi Auditor Provisional Sistem Manajemen Mutu berdasarkan ISO 9001:2015",
      amount: 1500000, // IDR 1,500,000
      currency: "idr",
      category: "certification",
    },
    iso9001_auditor: {
      name: "Sertifikasi Auditor SMM (ISO 9001)",
      description: "Biaya pendaftaran sertifikasi Auditor Sistem Manajemen Mutu berdasarkan ISO 9001:2015",
      amount: 2000000, // IDR 2,000,000
      currency: "idr",
      category: "certification",
    },
    iso9001_lead_auditor: {
      name: "Sertifikasi Auditor Utama SMM (ISO 9001)",
      description: "Biaya pendaftaran sertifikasi Auditor Utama Sistem Manajemen Mutu berdasarkan ISO 9001:2015",
      amount: 2500000, // IDR 2,500,000
      currency: "idr",
      category: "certification",
    },
    iso14001_provisional: {
      name: "Sertifikasi Auditor Provisional SML (ISO 14001)",
      description: "Biaya pendaftaran sertifikasi Auditor Provisional Sistem Manajemen Lingkungan berdasarkan ISO 14001:2015",
      amount: 1500000,
      currency: "idr",
      category: "certification",
    },
    iso14001_auditor: {
      name: "Sertifikasi Auditor SML (ISO 14001)",
      description: "Biaya pendaftaran sertifikasi Auditor Sistem Manajemen Lingkungan berdasarkan ISO 14001:2015",
      amount: 2000000,
      currency: "idr",
      category: "certification",
    },
    iso14001_lead_auditor: {
      name: "Sertifikasi Auditor Utama SML (ISO 14001)",
      description: "Biaya pendaftaran sertifikasi Auditor Utama Sistem Manajemen Lingkungan berdasarkan ISO 14001:2015",
      amount: 2500000,
      currency: "idr",
      category: "certification",
    },
    iso45001_provisional: {
      name: "Sertifikasi Auditor Provisional SMK3 (ISO 45001)",
      description: "Biaya pendaftaran sertifikasi Auditor Provisional Sistem Manajemen K3 berdasarkan ISO 45001:2018",
      amount: 1500000,
      currency: "idr",
      category: "certification",
    },
    iso45001_auditor: {
      name: "Sertifikasi Auditor SMK3 (ISO 45001)",
      description: "Biaya pendaftaran sertifikasi Auditor Sistem Manajemen K3 berdasarkan ISO 45001:2018",
      amount: 2000000,
      currency: "idr",
      category: "certification",
    },
    iso45001_lead_auditor: {
      name: "Sertifikasi Auditor Utama SMK3 (ISO 45001)",
      description: "Biaya pendaftaran sertifikasi Auditor Utama Sistem Manajemen K3 berdasarkan ISO 45001:2018",
      amount: 2500000,
      currency: "idr",
      category: "certification",
    },
    iso27001_provisional: {
      name: "Sertifikasi Auditor Provisional SMKI (ISO 27001)",
      description: "Biaya pendaftaran sertifikasi Auditor Provisional Sistem Manajemen Keamanan Informasi berdasarkan ISO 27001:2022",
      amount: 1750000,
      currency: "idr",
      category: "certification",
    },
    iso27001_auditor: {
      name: "Sertifikasi Auditor SMKI (ISO 27001)",
      description: "Biaya pendaftaran sertifikasi Auditor Sistem Manajemen Keamanan Informasi berdasarkan ISO 27001:2022",
      amount: 2250000,
      currency: "idr",
      category: "certification",
    },
    iso27001_lead_auditor: {
      name: "Sertifikasi Auditor Utama SMKI (ISO 27001)",
      description: "Biaya pendaftaran sertifikasi Auditor Utama Sistem Manajemen Keamanan Informasi berdasarkan ISO 27001:2022",
      amount: 2750000,
      currency: "idr",
      category: "certification",
    },
    iso22000_provisional: {
      name: "Sertifikasi Auditor Provisional SMKP (ISO 22000)",
      description: "Biaya pendaftaran sertifikasi Auditor Provisional Sistem Manajemen Keamanan Pangan berdasarkan ISO 22000:2018",
      amount: 1500000,
      currency: "idr",
      category: "certification",
    },
    iso22000_auditor: {
      name: "Sertifikasi Auditor SMKP (ISO 22000)",
      description: "Biaya pendaftaran sertifikasi Auditor Sistem Manajemen Keamanan Pangan berdasarkan ISO 22000:2018",
      amount: 2000000,
      currency: "idr",
      category: "certification",
    },
    iso22000_lead_auditor: {
      name: "Sertifikasi Auditor Utama SMKP (ISO 22000)",
      description: "Biaya pendaftaran sertifikasi Auditor Utama Sistem Manajemen Keamanan Pangan berdasarkan ISO 22000:2018",
      amount: 2500000,
      currency: "idr",
      category: "certification",
    },
  },

  // ─── Appeal Fees ────────────────────────────────────────────────────────────
  appeal: {
    standard: {
      name: "Biaya Pengajuan Banding (Appeal)",
      description: "Biaya administrasi pengajuan banding atas keputusan sertifikasi PACER. Biaya akan dikembalikan jika banding dikabulkan.",
      amount: 500000, // IDR 500,000
      currency: "idr",
      category: "appeal",
    },
  },

  // ─── Training Registration Fees ─────────────────────────────────────────────
  training: {
    iso_interpretation_basic: {
      name: "Pelatihan Interpretasi ISO (Dasar)",
      description: "Pelatihan interpretasi standar ISO untuk pemula — 2 hari, sertifikat kehadiran",
      amount: 2500000, // IDR 2,500,000
      currency: "idr",
      category: "training",
    },
    iso_audit_technique: {
      name: "Pelatihan Teknik Audit ISO",
      description: "Pelatihan teknik audit sistem manajemen ISO — 3 hari, sertifikat kompetensi",
      amount: 3500000,
      currency: "idr",
      category: "training",
    },
    lead_auditor_course: {
      name: "Kursus Auditor Utama (Lead Auditor Course)",
      description: "Kursus intensif 5 hari untuk persiapan sertifikasi Auditor Utama",
      amount: 6500000,
      currency: "idr",
      category: "training",
    },
    internal_auditor: {
      name: "Pelatihan Auditor Internal",
      description: "Pelatihan auditor internal sistem manajemen — 2 hari",
      amount: 2000000,
      currency: "idr",
      category: "training",
    },
  },
} as const;

export type ProductKey = keyof typeof PACER_PRODUCTS;
