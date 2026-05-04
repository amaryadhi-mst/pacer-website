import { Link } from "wouter";
import {
  Award, FileText, TrendingUp, GraduationCap,
  ArrowRight, CheckCircle, Star, Globe, Users, Shield,
  ChevronRight, Zap, Target, BookOpen, MapPin, Phone, Mail,
  BadgeCheck, Sparkles, BarChart3, Layers
} from "lucide-react";

const LOGO_URL = "/manus-storage/pacer-logo-horizontal_c5716704.png";

const products = [
  {
    id: "01", key: "cert",
    title: "Professional Certification",
    subtitle: "KAN & BNSP Accredited",
    description: "Sertifikasi auditor sistem manajemen ISO berstandar internasional. Diakui secara nasional dan global oleh industri.",
    icon: Award,
    href: "/services/certification/iso9001",
    bg: "linear-gradient(145deg, #1B3A6B 0%, #2563EB 55%, #1E40AF 100%)",
    glow: "rgba(37,99,235,0.30)",
    accent: "#93C5FD",
    border: "rgba(37,99,235,0.40)",
    features: ["ISO 9001 · 14001 · 45001", "ISO 27001 · 22000", "BNSP Recognized"],
    badge: "KAN Terakreditasi",
  },
  {
    id: "02", key: "cv",
    title: "Professional Curriculum",
    subtitle: "Verified CV & Portfolio",
    description: "CV profesional terverifikasi dengan QR code autentikasi. Tampil percaya diri di hadapan recruiter global.",
    icon: FileText,
    href: "/services/verified-cv",
    bg: "linear-gradient(145deg, #065F46 0%, #059669 55%, #047857 100%)",
    glow: "rgba(16,185,129,0.30)",
    accent: "#6EE7B7",
    border: "rgba(16,185,129,0.40)",
    features: ["ATS-Friendly Templates", "QR Code Verification", "Digital Portfolio"],
    badge: "Verified & Trusted",
  },
  {
    id: "03", key: "career",
    title: "Professional Career Management",
    subtitle: "Individual & Corporate",
    description: "Manajemen karir komprehensif untuk individu dan korporasi. Dari asesmen hingga penempatan kerja ideal.",
    icon: TrendingUp,
    href: "/services/career/individuals",
    bg: "linear-gradient(145deg, #4C1D95 0%, #7C3AED 55%, #6D28D9 100%)",
    glow: "rgba(139,92,246,0.30)",
    accent: "#C4B5FD",
    border: "rgba(139,92,246,0.40)",
    features: ["Career Assessment", "Talent Management", "Job Placement Support"],
    badge: "Individual & Corporate",
  },
  {
    id: "04", key: "train",
    title: "Professional Training",
    subtitle: "Multi-Method Delivery",
    description: "Pelatihan profesional dengan metode classroom, virtual, blended, in-house, dan e-learning yang fleksibel.",
    icon: GraduationCap,
    href: "/services/training",
    bg: "linear-gradient(145deg, #92400E 0%, #D97706 55%, #B45309 100%)",
    glow: "rgba(245,158,11,0.30)",
    accent: "#FDE68A",
    border: "rgba(245,158,11,0.40)",
    features: ["Classroom & Virtual", "In-House Training", "E-Learning Platform"],
    badge: "5 Metode Delivery",
  },
];

const isoStandards = [
  { code: "ISO 9001", name: "Quality Management", href: "/services/certification/iso9001", color: "#1D4ED8", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.20)" },
  { code: "ISO 14001", name: "Environmental", href: "/services/certification/iso14001", color: "#065F46", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.20)" },
  { code: "ISO 45001", name: "OH&S", href: "/services/certification/iso45001", color: "#92400E", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.20)" },
  { code: "ISO 27001", name: "Info Security", href: "/services/certification/iso27001", color: "#4C1D95", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.20)" },
  { code: "ISO 22000", name: "Food Safety", href: "/services/certification/iso22000", color: "#991B1B", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.20)" },
  { code: "BNSP", name: "Nasional", href: "/services/certification/bnsp", color: "#0E7490", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.20)" },
];

const stats = [
  { value: "5+", label: "Skema Sertifikasi", icon: BadgeCheck, color: "#1D4ED8" },
  { value: "500+", label: "Profesional Tersertifikasi", icon: Users, color: "#065F46" },
  { value: "5", label: "Metode Training", icon: Layers, color: "#92400E" },
  { value: "KAN", label: "Terakreditasi ISO 17024", icon: Shield, color: "#4C1D95" },
];

const whyItems = [
  { icon: Shield, title: "KAN Terakreditasi", desc: "Akreditasi resmi dari KAN sesuai ISO/IEC 17024:2012", color: "#1D4ED8", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.15)" },
  { icon: Globe, title: "Diakui Internasional", desc: "Sertifikat diakui global oleh industri dan lembaga internasional", color: "#065F46", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)" },
  { icon: Target, title: "Berbasis Kompetensi", desc: "Penilaian berbasis bukti nyata kompetensi di tempat kerja", color: "#92400E", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.15)" },
  { icon: Zap, title: "Proses Efisien", desc: "Proses sertifikasi yang transparan, cepat, dan mudah diikuti", color: "#4C1D95", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.15)" },
  { icon: Users, title: "Tim Asesor Ahli", desc: "Asesor bersertifikat dengan pengalaman industri yang luas", color: "#991B1B", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.15)" },
  { icon: BookOpen, title: "Skema Lengkap", desc: "5 skema ISO + BNSP mencakup berbagai bidang sistem manajemen", color: "#0E7490", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.15)" },
];

const processSteps = [
  { step: "01", label: "Pendaftaran", desc: "Isi formulir & upload dokumen persyaratan", color: "#1D4ED8", bg: "rgba(37,99,235,0.08)" },
  { step: "02", label: "Verifikasi", desc: "Tim PACER memverifikasi kelengkapan berkas", color: "#065F46", bg: "rgba(16,185,129,0.08)" },
  { step: "03", label: "Asesmen", desc: "Uji kompetensi tertulis & praktik lapangan", color: "#92400E", bg: "rgba(245,158,11,0.08)" },
  { step: "04", label: "Keputusan", desc: "Komite skema menetapkan keputusan sertifikasi", color: "#4C1D95", bg: "rgba(139,92,246,0.08)" },
  { step: "05", label: "Sertifikat", desc: "Sertifikat diterbitkan & dikirimkan", color: "#065F46", bg: "rgba(16,185,129,0.08)" },
];

export default function Home() {
  return (
    <div style={{ background: "#F1F4F8", minHeight: "100vh", overflowX: "hidden" }}>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #E8EDF5 0%, #F1F4F8 40%, #EDF0F7 100%)",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(15,37,87,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,37,87,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }} />
        {/* Glow orbs */}
        <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)", top: "-200px", left: "-100px", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", bottom: "-100px", right: "-80px", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "6rem", paddingBottom: "5rem" }}>
          {/* Badge */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.4rem 1.25rem", borderRadius: "100px",
              background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)",
              color: "#B45309", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              <Star size={11} /> ISO/IEC 17024 · KAN Terakreditasi · BNSP
            </span>
          </div>

          {/* Headline */}
          <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#0F2557",
              marginBottom: "1.75rem",
              letterSpacing: "-0.03em",
            }}>
              Sertifikasi{" "}
              <span style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Profesional
              </span>
              <br />
              Karir{" "}
              <span style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tanpa Batas
              </span>
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: "#475569",
              lineHeight: 1.75,
              maxWidth: "580px",
              margin: "0 auto 3rem",
            }}>
              PACER — Lembaga Sertifikasi Profesi berbasis ISO/IEC 17024 yang mengembangkan kompetensi auditor sistem manajemen bertaraf internasional.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4.5rem" }}>
              <Link href="/services/certification/iso9001" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem", borderRadius: "0.875rem",
                background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                color: "#0A0A0A", fontWeight: 800, fontSize: "0.95rem",
                boxShadow: "0 4px 25px rgba(245,158,11,0.40)",
                transition: "all 0.25s ease", textDecoration: "none",
              }}>
                Mulai Sertifikasi <ArrowRight size={17} />
              </Link>
              <Link href="/about/story" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem", borderRadius: "0.875rem",
                background: "rgba(15,37,87,0.06)", border: "1px solid rgba(15,37,87,0.18)",
                color: "#0F2557", fontWeight: 600, fontSize: "0.95rem",
                transition: "all 0.25s ease", textDecoration: "none",
              }}>
                <Sparkles size={15} /> Tentang PACER
              </Link>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
              maxWidth: "800px", margin: "0 auto",
            }}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.value} style={{
                    padding: "1.25rem 0.75rem",
                    borderRadius: "1rem",
                    background: "rgba(15,37,87,0.05)",
                    border: "1px solid rgba(15,37,87,0.12)",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                  }}>
                    <Icon size={18} color={s.color} style={{ margin: "0 auto 0.5rem" }} />
                    <div style={{
                      fontFamily: "Montserrat, sans-serif", fontSize: "1.6rem", fontWeight: 900,
                      color: "#0F2557", lineHeight: 1,
                    }}>{s.value}</div>
                    <div style={{ color: "#64748B", fontSize: "0.68rem", marginTop: "0.3rem", lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ textAlign: "center", paddingBottom: "2.5rem", opacity: 0.4 }}>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#94A3B8", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, #94A3B8, transparent)" }} />
          </div>
        </div>
      </section>

      {/* 4 PRODUCTS SECTION */}
      <section style={{ padding: "7rem 0", background: "#F1F4F8" }}>
        <div className="container">
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.35rem 1rem", borderRadius: "100px",
              background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
              color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}>
              <Zap size={11} /> Layanan Unggulan PACER
            </span>
            <h2 style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 900, color: "#0F2557",
              lineHeight: 1.15, marginTop: "0.75rem",
              letterSpacing: "-0.02em",
            }}>
              4 Produk{" "}
              <span style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Utama
              </span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", marginTop: "0.875rem", maxWidth: "440px", margin: "0.875rem auto 0" }}>
              Solusi lengkap untuk pengembangan karir profesional Anda
            </p>
          </div>

          {/* 2x2 Product Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.75rem", maxWidth: "1000px", margin: "0 auto" }}>
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <Link key={p.key} href={p.href} style={{
                  display: "block",
                  textDecoration: "none",
                  borderRadius: "1.75rem",
                  background: p.bg,
                  border: `1px solid ${p.border}`,
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  boxShadow: `0 6px 30px ${p.glow}`,
                }}>
                  {/* Glow overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `radial-gradient(circle at 85% 15%, ${p.accent}20 0%, transparent 55%)`,
                    pointerEvents: "none",
                  }} />
                  {/* Top accent line */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                    background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
                  }} />

                  <div style={{ padding: "2.75rem", position: "relative", zIndex: 1 }}>
                    {/* Top row: icon + number */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
                      <div style={{
                        width: "3.75rem", height: "3.75rem",
                        borderRadius: "1.125rem",
                        background: "rgba(255,255,255,0.15)",
                        border: `1px solid rgba(255,255,255,0.25)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon size={30} color="white" strokeWidth={1.5} />
                      </div>
                      <span style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "4.5rem", fontWeight: 900,
                        color: "rgba(255,255,255,0.08)",
                        lineHeight: 1, userSelect: "none",
                      }}>{p.id}</span>
                    </div>

                    {/* Badge */}
                    <div style={{ marginBottom: "1rem" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: "0.3rem",
                        padding: "0.25rem 0.75rem", borderRadius: "100px",
                        background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.30)",
                        color: "white", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em",
                      }}>{p.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "clamp(1.4rem, 2.8vw, 1.8rem)",
                      fontWeight: 900, color: "white",
                      lineHeight: 1.15, marginBottom: "0.875rem",
                    }}>{p.title}</h3>

                    {/* Description */}
                    <p style={{
                      color: "rgba(255,255,255,0.70)",
                      fontSize: "0.875rem", lineHeight: 1.65,
                      marginBottom: "1.75rem",
                    }}>{p.description}</p>

                    {/* Features */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                      {p.features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <CheckCircle size={14} color={p.accent} />
                          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontWeight: 500 }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      padding: "0.625rem 1.25rem", borderRadius: "0.75rem",
                      background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.30)",
                      color: "white", fontWeight: 700, fontSize: "0.82rem",
                    }}>
                      Pelajari Lebih <ChevronRight size={15} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ISO STANDARDS SECTION */}
      <section style={{
        padding: "3.5rem 0",
        background: "white",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.875rem", borderRadius: "100px",
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.20)",
              color: "#1D4ED8", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              <Shield size={11} /> Skema Sertifikasi KAN & BNSP
            </span>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {isoStandards.map((iso) => (
              <Link key={iso.code} href={iso.href} style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.875rem",
                background: iso.bg, border: `1px solid ${iso.border}`,
                textDecoration: "none", transition: "all 0.3s ease",
                minWidth: "160px",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: iso.color }} />
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 900, color: iso.color, fontFamily: "Montserrat, sans-serif" }}>{iso.code}</div>
                  <div style={{ fontSize: "0.68rem", color: "#64748B", marginTop: "0.1rem" }}>{iso.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PACER SECTION */}
      <section style={{ padding: "7rem 0", background: "#F1F4F8" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            {/* Left */}
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.35rem 1rem", borderRadius: "100px",
                background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.20)",
                color: "#1D4ED8", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}>
                <Star size={11} /> Mengapa PACER?
              </span>
              <h2 style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 900, color: "#0F2557",
                lineHeight: 1.2, marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}>
                Standar{" "}
                <span style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Terbaik
                </span>
                <br />untuk Karir Anda
              </h2>
              <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
                PT. Sertifikasi Karir Profesional (PACER) adalah Lembaga Sertifikasi Profesi yang didirikan berdasarkan kepedulian terhadap profesionalisme auditor sistem manajemen di Indonesia. Beroperasi sesuai standar SNI ISO/IEC 17024:2012.
              </p>
              {/* PACER acronym */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                {[
                  { word: "Professional", color: "#1D4ED8", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.20)" },
                  { word: "Active", color: "#065F46", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.20)" },
                  { word: "Care", color: "#92400E", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.20)" },
                  { word: "Effective", color: "#4C1D95", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.20)" },
                  { word: "Reliable", color: "#991B1B", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.20)" },
                ].map((item) => (
                  <div key={item.word} style={{
                    padding: "0.4rem 1rem", borderRadius: "100px",
                    background: item.bg, border: `1px solid ${item.border}`,
                    color: item.color, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.03em",
                  }}>{item.word}</div>
                ))}
              </div>
              <Link href="/about/story" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 1.75rem", borderRadius: "0.875rem",
                background: "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
                color: "white", fontWeight: 700, fontSize: "0.9rem",
                textDecoration: "none", boxShadow: "0 4px 20px rgba(37,99,235,0.30)",
              }}>
                Tentang Kami <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: 2x3 grid of why cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {whyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} style={{
                    padding: "1.5rem",
                    borderRadius: "1.125rem",
                    background: "white",
                    border: `1px solid ${item.border}`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                  }}>
                    <div style={{
                      width: "2.5rem", height: "2.5rem",
                      borderRadius: "0.75rem",
                      background: item.bg,
                      border: `1px solid ${item.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "0.875rem",
                    }}>
                      <Icon size={17} color={item.color} />
                    </div>
                    <h4 style={{ color: "#0F2557", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.35rem" }}>{item.title}</h4>
                    <p style={{ color: "#64748B", fontSize: "0.73rem", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section style={{ padding: "6rem 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.35rem 1rem", borderRadius: "100px",
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.20)",
              color: "#065F46", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}>
              <Target size={11} /> Alur Sertifikasi
            </span>
            <h2 style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900, color: "#0F2557",
              lineHeight: 1.2, marginTop: "0.75rem",
              letterSpacing: "-0.02em",
            }}>
              Proses{" "}
              <span style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mudah</span>
              {" "}& {" "}
              <span style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Transparan</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", position: "relative", maxWidth: "960px", margin: "0 auto" }}>
            <div style={{
              position: "absolute", top: "2.75rem", left: "10%", right: "10%", height: "2px",
              background: "linear-gradient(90deg, #2563EB, #10B981, #F59E0B, #8B5CF6, #10B981)",
              zIndex: 0, opacity: 0.3,
            }} />
            {processSteps.map((item) => (
              <div key={item.step} style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 0.25rem" }}>
                <div style={{
                  width: "5.5rem", height: "5.5rem", borderRadius: "50%",
                  background: item.bg,
                  border: `2px solid ${item.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  boxShadow: `0 4px 20px ${item.color}25`,
                }}>
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.15rem", fontWeight: 900, color: item.color,
                  }}>{item.step}</span>
                </div>
                <h4 style={{ color: "#0F2557", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.4rem" }}>{item.label}</h4>
                <p style={{ color: "#64748B", fontSize: "0.7rem", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/services/certification/iso9001" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.9rem 2rem", borderRadius: "0.875rem",
              background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
              color: "#0A0A0A", fontWeight: 800, fontSize: "0.95rem",
              textDecoration: "none", boxShadow: "0 4px 25px rgba(245,158,11,0.35)",
            }}>
              Daftar Sekarang <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "5rem 0", background: "#F1F4F8" }}>
        <div className="container">
          <div style={{
            borderRadius: "2rem",
            background: "linear-gradient(135deg, #0F2557 0%, #1B3A6B 40%, #2563EB 100%)",
            padding: "5rem 3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(37,99,235,0.30)",
            boxShadow: "0 20px 80px rgba(37,99,235,0.20)",
          }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)", top: "-150px", right: "-80px", filter: "blur(60px)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.35rem 1rem", borderRadius: "100px",
                background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.40)",
                color: "#FDE68A", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}>
                <Zap size={11} /> Mulai Perjalanan Anda
              </span>
              <h2 style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 900, color: "white",
                lineHeight: 1.2, marginTop: "0.75rem", marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}>
                Tingkatkan Karir Anda<br />
                <span style={{ background: "linear-gradient(135deg, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Bersama PACER
                </span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                Bergabunglah dengan ratusan profesional yang telah mendapatkan sertifikasi internasional melalui PACER.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/services/certification/iso9001" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 2rem", borderRadius: "0.875rem",
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  color: "#0A0A0A", fontWeight: 800, fontSize: "0.95rem",
                  textDecoration: "none", boxShadow: "0 4px 25px rgba(245,158,11,0.40)",
                }}>
                  Daftar Sertifikasi <ArrowRight size={17} />
                </Link>
                <Link href="/about/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 2rem", borderRadius: "0.875rem",
                  background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.25)",
                  color: "white", fontWeight: 600, fontSize: "0.95rem",
                  textDecoration: "none",
                }}>
                  <Mail size={16} /> Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ padding: "2.5rem 0", background: "white", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            {[
              { icon: MapPin, text: "Jl. Gereja No. 9, Bogor", color: "#1D4ED8" },
              { icon: Phone, text: "0251-8340450", color: "#065F46" },
              { icon: Mail, text: "info@pacer.co.id", color: "#92400E" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Icon size={15} color={c.color} />
                  <span style={{ color: "#475569", fontSize: "0.85rem" }}>{c.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
