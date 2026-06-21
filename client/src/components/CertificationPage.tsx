import { Link } from "wouter";
import { ArrowRight, CheckCircle, FileText, Clock, DollarSign, Award, Users, BookOpen, AlertCircle, ChevronRight } from "lucide-react";

export interface CertScheme {
  code: string;
  title: string;
  standard: string;
  description: string;
  levels: {
    name: string;
    code: string;
    requirements: string[];
    examFormat: string;
    validity: string;
    fee: string;
    colorClass: string;
  }[];
  eligibility: string[];
  process: string[];
  benefits: string[];
  faq?: { q: string; a: string }[];
}

export default function CertificationPage({ scheme }: { scheme: CertScheme }) {
  return (
    <div style={{ background: "#F8FAFF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}
            >Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}
            >Services</Link>
            <ChevronRight size={14} />
            <span style={{ color: "#FDE68A" }}>{scheme.code}</span>
          </div>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.3rem 0.85rem", borderRadius: "99px",
            background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.40)",
            color: "#FDE68A", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: "1.25rem",
          }}>
            <Award size={12} />
            Sertifikasi Profesi — KAN Accredited
          </div>

          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
            {scheme.code}
          </h1>
          <h2 style={{ fontSize: "1.35rem", color: "#FDE68A", fontWeight: 600, marginBottom: "1rem" }}>{scheme.title}</h2>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "680px", lineHeight: 1.7, marginBottom: "1.75rem" }}>{scheme.description}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            <Link href="/dashboard" className="btn-primary">
              Daftar Sekarang
              <ArrowRight size={16} />
            </Link>
            <Link href="/resources/downloads" className="btn-outline-dark">
              <FileText size={16} />
              Download Skema
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

          {/* Certification Levels */}
          <section>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.85rem", borderRadius: "99px",
              background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
              color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1rem",
            }}>
              Tingkat Sertifikasi
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.875rem", fontWeight: 900, color: "#0F2557", marginBottom: "2rem" }}>
              Skema & Tingkatan Sertifikasi
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {scheme.levels.map((level) => (
                <div key={level.code} className="silver-card" style={{ padding: "1.5rem" }}>
                  <div className={`level-${level.colorClass || "1"}`} style={{ marginBottom: "1rem", display: "inline-block" }}>{level.code}</div>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#0F2557", marginBottom: "1rem" }}>{level.name}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#64748B" }}>
                      <Clock size={14} style={{ color: "#F59E0B", flexShrink: 0 }} />
                      <span>Masa berlaku: <strong style={{ color: "#374151" }}>{level.validity}</strong></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#64748B" }}>
                      <DollarSign size={14} style={{ color: "#F59E0B", flexShrink: 0 }} />
                      <span>Biaya: <strong style={{ color: "#374151" }}>{level.fee}</strong></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "#64748B" }}>
                      <BookOpen size={14} style={{ color: "#F59E0B", flexShrink: 0, marginTop: "2px" }} />
                      <span>Ujian: <strong style={{ color: "#374151" }}>{level.examFormat}</strong></span>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(37,99,235,0.10)", paddingTop: "1rem" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94A3B8", marginBottom: "0.75rem" }}>Persyaratan</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {level.requirements.map((req, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "#475569" }}>
                          <CheckCircle size={13} style={{ color: "#F59E0B", marginTop: "2px", flexShrink: 0 }} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility & Process */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            <section>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
                color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>
                Persyaratan Umum
              </div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#0F2557", marginBottom: "1.5rem" }}>
                Persyaratan Pendaftaran
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {scheme.eligibility.map((item, i) => (
                  <div key={i} className="silver-card" style={{ padding: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{
                      width: "1.5rem", height: "1.5rem", borderRadius: "50%",
                      background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#92400E", fontSize: "0.72rem", fontWeight: 800, flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.20)",
                color: "#1E40AF", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>
                Proses Sertifikasi
              </div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#0F2557", marginBottom: "1.5rem" }}>
                Tahapan Sertifikasi
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {scheme.process.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", paddingBottom: i < scheme.process.length - 1 ? "1.25rem" : "0", position: "relative" }}>
                    {i < scheme.process.length - 1 && (
                      <div style={{ position: "absolute", left: "0.875rem", top: "1.75rem", bottom: 0, width: "2px", background: "linear-gradient(to bottom, rgba(37,99,235,0.25), rgba(37,99,235,0.08))" }} />
                    )}
                    <div style={{
                      width: "1.75rem", height: "1.75rem", borderRadius: "50%",
                      background: "#EFF6FF", border: "2px solid rgba(37,99,235,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#1E40AF", fontSize: "0.72rem", fontWeight: 800, flexShrink: 0, zIndex: 1,
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, paddingTop: "0.2rem" }}>{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Benefits */}
          <section>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.3rem 0.85rem", borderRadius: "99px",
              background: "#ECFDF5", border: "1px solid rgba(16,185,129,0.20)",
              color: "#065F46", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: "1rem",
            }}>
              Manfaat
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#0F2557", marginBottom: "1.5rem" }}>
              Manfaat Sertifikasi
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
              {scheme.benefits.map((benefit, i) => (
                <div key={i} className="silver-card" style={{ padding: "1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={16} style={{ color: "#10B981", marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6 }}>{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          {scheme.faq && scheme.faq.length > 0 && (
            <section>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "#F5F3FF", border: "1px solid rgba(139,92,246,0.20)",
                color: "#4C1D95", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>
                FAQ
              </div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#0F2557", marginBottom: "1.5rem" }}>
                Pertanyaan Umum
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {scheme.faq.map((item, i) => (
                  <details key={i} className="silver-card" style={{ overflow: "hidden" }}>
                    <summary style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "1.25rem", cursor: "pointer",
                      color: "#1E293B", fontWeight: 600, fontSize: "0.95rem",
                      listStyle: "none",
                    }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                        <AlertCircle size={16} style={{ color: "#F59E0B", flexShrink: 0 }} />
                        {item.q}
                      </span>
                      <ArrowRight size={16} style={{ color: "#94A3B8", flexShrink: 0 }} />
                    </summary>
                    <div style={{ padding: "0 1.25rem 1.25rem", color: "#475569", fontSize: "0.875rem", lineHeight: 1.7, borderTop: "1px solid rgba(37,99,235,0.08)", paddingTop: "1rem", marginTop: 0 }}>
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section style={{
            borderRadius: "1.5rem",
            background: "linear-gradient(135deg, #0F2557 0%, #1B3A6B 40%, #2563EB 100%)",
            padding: "3.5rem 2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(37,99,235,0.20)",
          }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)", top: "-100px", right: "-60px", filter: "blur(50px)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.875rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>
                Siap Mendaftar Sertifikasi{" "}
                <span style={{ background: "linear-gradient(135deg, #F59E0B, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {scheme.code}
                </span>?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
                Hubungi tim kami untuk konsultasi gratis atau langsung daftarkan diri Anda melalui portal online PACER.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="/dashboard" className="btn-primary">
                  Daftar Sekarang
                  <ArrowRight size={16} />
                </Link>
                <Link href="/about/contact" className="btn-outline-dark">
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
