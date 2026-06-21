import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
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
            Hubungi Kami
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Kontak PACER
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "580px", lineHeight: 1.7 }}>
            Tim kami siap membantu Anda dengan informasi sertifikasi, pelatihan, dan layanan PACER lainnya.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>

          {/* Contact Info */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.85rem", borderRadius: "99px",
              background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
              color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1.5rem",
            }}>
              Informasi Kontak
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <MapPin size={20} />, title: "Alamat", content: "Jl. Gereja No. 9, Bogor", color: "#1D4ED8", bg: "#EFF6FF", border: "rgba(37,99,235,0.15)" },
                { icon: <Phone size={20} />, title: "Telepon", content: "0251-8340450", color: "#065F46", bg: "#ECFDF5", border: "rgba(16,185,129,0.15)" },
                { icon: <Mail size={20} />, title: "Email", content: "info@pacer.co.id", color: "#92400E", bg: "#FFFBEB", border: "rgba(245,158,11,0.15)" },
                { icon: <Clock size={20} />, title: "Jam Operasional", content: "Senin – Jumat: 08.00 – 17.00 WIB", color: "#4C1D95", bg: "#F5F3FF", border: "rgba(139,92,246,0.15)" },
              ].map((item) => (
                <div key={item.title} className="silver-card" style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem",
                    background: item.bg, border: `1px solid ${item.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: item.color, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", marginBottom: "0.25rem" }}>{item.title}</h3>
                    <p style={{ color: "#475569", fontSize: "0.9rem" }}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="silver-card" style={{ padding: "2rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.85rem", borderRadius: "99px",
              background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.20)",
              color: "#1E40AF", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1.5rem",
            }}>
              Kirim Pesan
            </div>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: "block", color: "#374151", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Nama Lengkap</label>
                <input type="text" className="form-input" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label style={{ display: "block", color: "#374151", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Email</label>
                <input type="email" className="form-input" placeholder="email@example.com" />
              </div>
              <div>
                <label style={{ display: "block", color: "#374151", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Subjek</label>
                <input type="text" className="form-input" placeholder="Subjek pesan" />
              </div>
              <div>
                <label style={{ display: "block", color: "#374151", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }}>Pesan</label>
                <textarea rows={5} className="form-input" style={{ resize: "none" }} placeholder="Tulis pesan Anda..." />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Kirim Pesan</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
