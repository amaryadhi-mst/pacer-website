import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const LOGO_URL = "/manus-storage/pacer-logo-horizontal_c5716704.png";

const serviceLinks = [
  { label: "ISO 9001 Certification", href: "/services/certification/iso9001" },
  { label: "ISO 14001 Certification", href: "/services/certification/iso14001" },
  { label: "ISO 45001 Certification", href: "/services/certification/iso45001" },
  { label: "ISO 27001 Certification", href: "/services/certification/iso27001" },
  { label: "ISO 22000 Certification", href: "/services/certification/iso22000" },
  { label: "BNSP Certifications", href: "/services/certification/bnsp" },
  { label: "Verified CV", href: "/services/verified-cv" },
  { label: "Professional Training", href: "/services/training" },
];

const companyLinks = [
  { label: "Our Story & Vision", href: "/about/story" },
  { label: "Certification Schemes", href: "/about/scheme" },
  { label: "Quality Policy", href: "/about/quality-policy" },
  { label: "Training Partners", href: "/partners/training" },
  { label: "Certification Partners", href: "/partners/certification" },
  { label: "Blog & Articles", href: "/resources/blog" },
  { label: "Download Center", href: "/resources/downloads" },
  { label: "Webinars", href: "/resources/webinars" },
];

const supportLinks = [
  { label: "Submit Complaint", href: "/complaints" },
  { label: "Submit Appeal", href: "/appeals" },
  { label: "Contact Us", href: "/about/contact" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #0F2557 0%, #1E3A8A 40%, #1E40AF 100%)",
      borderTop: "3px solid rgba(245,158,11,0.50)"
    }}>
      {/* Top accent bar */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #F59E0B, #FBBF24, #F59E0B)", opacity: 0.9 }} />

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img src={LOGO_URL} alt="PACER" className="h-10 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.70)" }}>
              PT. Sertifikasi Karir Profesional (PACER) — Lembaga Sertifikasi Profesi berbasis ISO/IEC 17024 yang terakreditasi KAN.
            </p>
            {/* Accreditation badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.4rem 0.9rem", borderRadius: "8px",
              background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.35)",
              marginBottom: "1.25rem",
            }}>
              <span style={{ color: "#FDE68A", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                KAN TERAKREDITASI · ISO/IEC 17024
              </span>
            </div>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
                { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
                { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
                { icon: <Youtube size={16} />, href: "#", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.60)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FDE68A"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,158,11,0.50)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,158,11,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.60)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#FDE68A" }}>Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.60)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.60)"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#FDE68A" }}>Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.60)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.60)"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#FDE68A" }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#FDE68A" }} />
                <span>Jl. Gereja No. 9, Bogor</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Phone size={14} className="shrink-0" style={{ color: "#FDE68A" }} />
                <a href="tel:025183404500" style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"}
                >0251-8340450</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Mail size={14} className="shrink-0" style={{ color: "#FDE68A" }} />
                <a href="mailto:info@pacer.co.id" style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"}
                >info@pacer.co.id</a>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FDE68A" }}>Support</h4>
              {supportLinks.map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.60)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.60)"}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", margin: "2.5rem 0 1.5rem" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
          <p>© {new Date().getFullYear()} PT. Sertifikasi Karir Profesional (PACER). All rights reserved.</p>
          <div className="flex gap-4">
            <span>Terakreditasi KAN — ISO/IEC 17024</span>
            <span>|</span>
            <span>NIB: 0225000912391</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
