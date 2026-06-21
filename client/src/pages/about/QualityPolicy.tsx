import { Shield, CheckCircle } from "lucide-react";

export default function QualityPolicy() {
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
            <Shield size={12} /> Kebijakan Mutu
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Kebijakan Mutu
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "580px", lineHeight: 1.7 }}>
            Komitmen PACER terhadap kualitas dan standar tertinggi dalam layanan sertifikasi profesi.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem", maxWidth: "860px" }}>
        <div className="silver-card" style={{ padding: "2.5rem" }}>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.85rem", borderRadius: "99px",
              background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
              color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1rem",
            }}>
              Pernyataan Kebijakan Mutu
            </div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "1.05rem" }}>
              PACER berkomitmen untuk menyelenggarakan layanan sertifikasi profesi yang kompeten, tidak memihak, dan konsisten sesuai dengan persyaratan ISO/IEC 17024 dan peraturan perundang-undangan yang berlaku di Indonesia.
            </p>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", fontSize: "1.125rem", marginBottom: "1.25rem" }}>Komitmen Kami</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                "Menjaga independensi, objektivitas, dan integritas dalam setiap proses sertifikasi",
                "Memastikan kompetensi seluruh personel yang terlibat dalam proses sertifikasi",
                "Menerapkan sistem manajemen mutu yang efektif dan terus melakukan perbaikan berkelanjutan",
                "Melindungi kerahasiaan informasi peserta sertifikasi sesuai ketentuan yang berlaku",
                "Menangani setiap keluhan dan banding secara adil, transparan, dan tepat waktu",
                "Memastikan aksesibilitas layanan sertifikasi bagi seluruh calon peserta yang memenuhi persyaratan",
                "Menjaga kesesuaian dengan persyaratan akreditasi KAN dan standar internasional ISO/IEC 17024",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={16} style={{ color: "#10B981", marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ color: "#475569", lineHeight: 1.6, fontSize: "0.9rem" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(37,99,235,0.10)", paddingTop: "1.5rem" }}>
            <p style={{ color: "#94A3B8", fontSize: "0.82rem", lineHeight: 1.7 }}>
              Kebijakan mutu ini ditinjau secara berkala dan dikomunikasikan kepada seluruh personel PACER. Dokumen ini merupakan komitmen resmi manajemen PACER terhadap kualitas layanan.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
