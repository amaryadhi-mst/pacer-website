import { GraduationCap, MapPin, Mail, Users, BookOpen, Award } from "lucide-react";

const trainingPartners = [
  {
    name: "Universitas Indonesia",
    type: "Perguruan Tinggi",
    location: "Depok, Jawa Barat",
    description: "Mitra pelatihan untuk program pengembangan kompetensi auditor sistem manajemen di lingkungan akademik.",
    programs: ["ISO 9001 Lead Auditor", "ISO 14001 Internal Auditor", "Awareness Training"],
    color: "#1D4ED8",
    bg: "rgba(37,99,235,0.06)",
    border: "rgba(37,99,235,0.15)",
  },
  {
    name: "Institut Pertanian Bogor",
    type: "Perguruan Tinggi",
    location: "Bogor, Jawa Barat",
    description: "Kolaborasi pelatihan ISO 22000 Food Safety Management System untuk industri pangan dan agribisnis.",
    programs: ["ISO 22000 Lead Auditor", "HACCP Training", "Food Safety Awareness"],
    color: "#065F46",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
  },
  {
    name: "Lembaga Pelatihan Kerja Nasional",
    type: "Lembaga Pemerintah",
    location: "Jakarta Selatan",
    description: "Mitra resmi untuk program pelatihan berbasis kompetensi yang terintegrasi dengan standar BNSP.",
    programs: ["BNSP Competency Training", "Vocational Training", "Assessor Training"],
    color: "#92400E",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
  {
    name: "PT. Mitra Konsultan Indonesia",
    type: "Konsultan Bisnis",
    location: "Bandung, Jawa Barat",
    description: "Penyedia layanan konsultasi dan pelatihan implementasi sistem manajemen ISO untuk industri manufaktur.",
    programs: ["ISO 45001 OHS Training", "Integrated Management System", "Internal Auditor Training"],
    color: "#4C1D95",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
  },
  {
    name: "Asosiasi Profesional Indonesia",
    type: "Asosiasi Profesi",
    location: "Jakarta Pusat",
    description: "Jaringan profesional yang mendukung pengembangan kompetensi anggota melalui program sertifikasi PACER.",
    programs: ["Professional Development", "Leadership Training", "Certification Preparation"],
    color: "#0E7490",
    bg: "rgba(6,182,212,0.06)",
    border: "rgba(6,182,212,0.15)",
  },
  {
    name: "Balai Latihan Kerja Bogor",
    type: "BLK Pemerintah",
    location: "Bogor, Jawa Barat",
    description: "Pusat pelatihan kerja resmi pemerintah yang bermitra dengan PACER untuk program sertifikasi profesi.",
    programs: ["Vocational Skills Training", "Competency Assessment", "Job Placement Support"],
    color: "#991B1B",
    bg: "rgba(239,68,68,0.06)",
    border: "rgba(239,68,68,0.15)",
  },
];

export default function TrainingPartners() {
  return (
    <div style={{ background: "#F1F4F8", minHeight: "100vh" }}>
      {/* Page Header */}
      <section style={{
        background: "linear-gradient(160deg, #0F2557 0%, #1B3A6B 60%, #2563EB 100%)",
        padding: "8rem 0 5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Partners</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>/</span>
            <span style={{ color: "#FDE68A", fontSize: "0.8rem", fontWeight: 600 }}>Training Partner</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "4rem", height: "4rem", borderRadius: "1.125rem",
              background: "rgba(245,158,11,0.20)", border: "1px solid rgba(245,158,11,0.40)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <GraduationCap size={28} color="#FDE68A" />
            </div>
            <div>
              <h1 style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
                color: "white", lineHeight: 1.1,
              }}>Training Partner</h1>
              <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "1rem", marginTop: "0.4rem" }}>
                Mitra pelatihan resmi PACER di seluruh Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "2.5rem 0", background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
            {[
              { icon: Users, value: "6+", label: "Training Partner Aktif", color: "#1D4ED8" },
              { icon: BookOpen, value: "15+", label: "Program Pelatihan", color: "#065F46" },
              { icon: Award, value: "5", label: "Skema Sertifikasi", color: "#92400E" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.value} style={{ textAlign: "center", padding: "1.5rem" }}>
                  <Icon size={22} color={s.color} style={{ margin: "0 auto 0.75rem" }} />
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem", fontWeight: 900, color: "#0F2557" }}>{s.value}</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {trainingPartners.map((partner) => (
              <div key={partner.name} style={{
                background: "white",
                borderRadius: "1.25rem",
                border: `1px solid ${partner.border}`,
                padding: "2rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "3rem", height: "3rem", borderRadius: "0.875rem",
                    background: partner.bg, border: `1px solid ${partner.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <GraduationCap size={20} color={partner.color} />
                  </div>
                  <span style={{
                    padding: "0.25rem 0.75rem", borderRadius: "100px",
                    background: partner.bg, border: `1px solid ${partner.border}`,
                    color: partner.color, fontSize: "0.68rem", fontWeight: 700,
                  }}>{partner.type}</span>
                </div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#0F2557", marginBottom: "0.5rem" }}>{partner.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.875rem" }}>
                  <MapPin size={12} color="#94A3B8" />
                  <span style={{ color: "#64748B", fontSize: "0.78rem" }}>{partner.location}</span>
                </div>
                <p style={{ color: "#475569", fontSize: "0.83rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{partner.description}</p>
                <div style={{ borderTop: `1px solid ${partner.border}`, paddingTop: "1rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.625rem" }}>Program Tersedia</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {partner.programs.map((prog) => (
                      <div key={prog} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: partner.color, flexShrink: 0 }} />
                        <span style={{ color: "#475569", fontSize: "0.78rem" }}>{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", background: "white", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.75rem", fontWeight: 900, color: "#0F2557", marginBottom: "1rem" }}>
            Ingin Menjadi Training Partner?
          </h2>
          <p style={{ color: "#475569", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Bergabunglah dengan jaringan mitra pelatihan PACER dan bantu kami mengembangkan kompetensi profesional Indonesia.
          </p>
          <a href="mailto:info@pacer.co.id" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.875rem 2rem", borderRadius: "0.875rem",
            background: "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
            color: "white", fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none", boxShadow: "0 4px 20px rgba(37,99,235,0.25)",
          }}>
            <Mail size={16} /> Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}
