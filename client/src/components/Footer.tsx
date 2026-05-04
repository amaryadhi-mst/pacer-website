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
    <footer style={{ background: "linear-gradient(135deg, oklch(0.20 0.09 250) 0%, oklch(0.16 0.07 255) 100%)", borderTop: "1px solid oklch(0.40 0.06 250 / 0.4)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img src={LOGO_URL} alt="PACER" className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "oklch(0.75 0.02 250)" }}>
              PT. Sertifikasi Karir Profesional (PACER) — Lembaga Sertifikasi Profesi berbasis ISO/IEC 17024 yang terakreditasi KAN.
            </p>
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
                  style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.10)", color: "oklch(0.65 0.02 250)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.75 0.16 55)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.75 0.16 55 / 0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.65 0.02 250)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(1 0 0 / 0.10)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.75 0.16 55)" }}>Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.65 0.02 250)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.95 0.005 250)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.65 0.02 250)"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.75 0.16 55)" }}>Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.65 0.02 250)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.95 0.005 250)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.65 0.02 250)"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.75 0.16 55)" }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "oklch(0.65 0.02 250)" }}>
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "oklch(0.75 0.16 55)" }} />
                <span>Jl. Gereja No. 9, Bogor</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "oklch(0.65 0.02 250)" }}>
                <Phone size={14} className="shrink-0" style={{ color: "oklch(0.75 0.16 55)" }} />
                <a href="tel:025183404500" className="transition-colors hover:text-white">0251-8340450</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "oklch(0.65 0.02 250)" }}>
                <Mail size={14} className="shrink-0" style={{ color: "oklch(0.75 0.16 55)" }} />
                <a href="mailto:info@pacer.co.id" className="transition-colors hover:text-white">info@pacer.co.id</a>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.75 0.16 55)" }}>Support</h4>
              {supportLinks.map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.65 0.02 250)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.95 0.005 250)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.65 0.02 250)"}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-line-full mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "oklch(0.50 0.02 250)" }}>
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
