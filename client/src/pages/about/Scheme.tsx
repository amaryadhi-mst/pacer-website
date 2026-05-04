import { Link } from "wouter";
import { FileText, ArrowRight } from "lucide-react";
const SCHEMES = [
  { code: "SS-01", title: "Auditor Sistem Manajemen Mutu", standard: "ISO 9001:2015", rev: "Rev. 2 2025", href: "/services/certification/iso9001" },
  { code: "SS-02", title: "Auditor Sistem Manajemen Lingkungan", standard: "ISO 14001:2015", rev: "Rev. 2 2025", href: "/services/certification/iso14001" },
  { code: "SS-03", title: "Auditor Sistem Manajemen K3", standard: "ISO 45001:2018", rev: "Rev. 2 2025", href: "/services/certification/iso45001" },
  { code: "SS-04", title: "Auditor Sistem Manajemen Keamanan Pangan", standard: "ISO 22000:2018", rev: "Rev. 2 2025", href: "/services/certification/iso22000" },
  { code: "SS-05", title: "Auditor Sistem Manajemen Keamanan Informasi", standard: "ISO/IEC 27001:2022", rev: "Rev. 2 2025", href: "/services/certification/iso27001" },
];
export default function Scheme() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><FileText size={12} />Skema Sertifikasi</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Skema Sertifikasi</h1>
          <p className="text-white/50 max-w-2xl">Dokumen skema sertifikasi resmi PACER yang telah diakreditasi oleh KAN.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="space-y-4">
          {SCHEMES.map((s) => (
            <Link key={s.code} href={s.href}>
              <a className="silver-card p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="level-badge level-2">{s.code}</div>
                  <div>
                    <h3 className="text-white font-bold">{s.title}</h3>
                    <p className="text-white/40 text-sm">{s.standard} · {s.rev}</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-yellow-400/50" />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
