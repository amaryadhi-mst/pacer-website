import { Shield, Award, Users, Globe } from "lucide-react";
const LOGO_URL = "/manus-storage/pacer-logo-vertical_1bd10e2f.jpg";

export default function Story() {
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
            Tentang Kami
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Tentang PACER
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "680px", lineHeight: 1.7 }}>
            Lembaga Sertifikasi Profesi terpercaya yang berkomitmen meningkatkan kompetensi profesional Indonesia.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

          {/* Story section */}
          <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
                color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>
                Sejarah Kami
              </div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.875rem", fontWeight: 900, color: "#0F2557", marginBottom: "1.5rem" }}>
                Perjalanan PACER
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#475569", lineHeight: 1.75, fontSize: "0.95rem" }}>
                <p>PACER (Professional Career Certification) didirikan dengan visi untuk menjadi lembaga sertifikasi profesi terbaik di Indonesia yang mampu menghasilkan auditor sistem manajemen yang kompeten dan diakui secara internasional.</p>
                <p>Berawal dari kebutuhan industri akan tenaga auditor sistem manajemen yang tersertifikasi dan kompeten, PACER hadir sebagai solusi yang menjembatani antara kebutuhan industri dengan pengembangan kompetensi profesional.</p>
                <p>Dengan akreditasi dari Komite Akreditasi Nasional (KAN) berdasarkan ISO/IEC 17024, PACER memastikan bahwa setiap proses sertifikasi dilakukan dengan standar tertinggi, objektif, dan dapat dipertanggungjawabkan.</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="silver-card" style={{ padding: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={LOGO_URL} alt="PACER Logo" style={{ width: "12rem", height: "auto", margin: "0 auto" }} />
              </div>
            </div>
          </section>

          {/* Stats */}
          <section>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {[
                { icon: <Shield size={24} />, title: "KAN Accredited", desc: "Terakreditasi KAN berdasarkan ISO/IEC 17024", color: "#1D4ED8", bg: "#EFF6FF", border: "rgba(37,99,235,0.15)" },
                { icon: <Award size={24} />, title: "6 Skema", desc: "ISO 9001, 14001, 45001, 27001, 22000 & BNSP", color: "#92400E", bg: "#FFFBEB", border: "rgba(245,158,11,0.15)" },
                { icon: <Users size={24} />, title: "500+ Alumni", desc: "Profesional tersertifikasi di seluruh Indonesia", color: "#065F46", bg: "#ECFDF5", border: "rgba(16,185,129,0.15)" },
                { icon: <Globe size={24} />, title: "MRA Member", desc: "Diakui internasional melalui jaringan MRA", color: "#4C1D95", bg: "#F5F3FF", border: "rgba(139,92,246,0.15)" },
              ].map((item) => (
                <div key={item.title} className="silver-card" style={{ padding: "1.75rem", textAlign: "center" }}>
                  <div style={{
                    width: "3rem", height: "3rem", borderRadius: "0.875rem",
                    background: item.bg, border: `1px solid ${item.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: item.color, margin: "0 auto 1rem",
                  }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Legal */}
          <section>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.85rem", borderRadius: "99px",
              background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.20)",
              color: "#1E40AF", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1rem",
            }}>
              Legalitas & Akreditasi
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.875rem", fontWeight: 900, color: "#0F2557", marginBottom: "2rem" }}>
              Dasar Hukum & Akreditasi
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { title: "Akreditasi KAN", desc: "Terakreditasi oleh Komite Akreditasi Nasional (KAN) sebagai Lembaga Sertifikasi Profesi berdasarkan ISO/IEC 17024" },
                { title: "Badan Hukum", desc: "Terdaftar sebagai badan hukum yang sah di Indonesia dengan izin operasional dari instansi terkait" },
                { title: "Anggota IAF", desc: "KAN sebagai anggota IAF (International Accreditation Forum) memastikan sertifikat PACER diakui secara internasional" },
                { title: "Kode Etik", desc: "Beroperasi berdasarkan kode etik profesi yang ketat untuk menjaga integritas dan objektivitas proses sertifikasi" },
              ].map((item) => (
                <div key={item.title} className="silver-card" style={{ padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#F59E0B", marginTop: "0.5rem", flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", marginBottom: "0.35rem" }}>{item.title}</h3>
                    <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
