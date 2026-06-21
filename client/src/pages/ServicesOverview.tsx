import { Link } from "wouter";
import { Award, FileText, BookOpen, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Award size={32} />,
    title: "Professional Certification",
    desc: "Sertifikasi auditor sistem manajemen ISO yang terakreditasi KAN.",
    href: "/services/certification/iso9001",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    border: "rgba(37,99,235,0.15)",
  },
  {
    icon: <FileText size={32} />,
    title: "Verified CV",
    desc: "CV profesional terverifikasi dengan QR Code untuk kredibilitas karir.",
    href: "/services/verified-cv",
    color: "#065F46",
    bg: "#ECFDF5",
    border: "rgba(16,185,129,0.15)",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Professional Training",
    desc: "Pelatihan sistem manajemen ISO oleh instruktur bersertifikat.",
    href: "/services/training",
    color: "#92400E",
    bg: "#FFFBEB",
    border: "rgba(245,158,11,0.15)",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Career Management",
    desc: "Layanan manajemen karir untuk individu dan korporasi.",
    href: "/services/career/individuals",
    color: "#4C1D95",
    bg: "#F5F3FF",
    border: "rgba(139,92,246,0.15)",
  },
];

export default function ServicesOverview() {
  return (
    <div style={{ background: "#F8FAFF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.3rem 0.85rem", borderRadius: "99px",
            background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.40)",
            color: "#FDE68A", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: "1.25rem",
          }}>
            Layanan
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Semua Layanan PACER
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "580px", lineHeight: 1.7 }}>
            Solusi komprehensif untuk pengembangan kompetensi dan karir profesional Anda.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {services.map((s) => (
            <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
              <div className="silver-card" style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", cursor: "pointer" }}>
                <div style={{
                  width: "4rem", height: "4rem", borderRadius: "1rem",
                  background: s.bg, border: `1px solid ${s.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: s.color, flexShrink: 0,
                }}>{s.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "#64748B", marginBottom: "1rem", lineHeight: 1.6, fontSize: "0.9rem" }}>{s.desc}</p>
                  <span style={{ color: s.color, fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    Selengkapnya <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
