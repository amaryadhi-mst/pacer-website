import { Link } from "wouter";
import { Award, FileText, BookOpen, Briefcase, ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4">Layanan</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Semua Layanan PACER
          </h1>
          <p className="text-white/50 max-w-2xl">
            Solusi komprehensif untuk pengembangan kompetensi dan karir profesional Anda.
          </p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: <Award size={32} />, title: "Professional Certification", desc: "Sertifikasi auditor sistem manajemen ISO yang terakreditasi KAN.", href: "/services/certification/iso9001" },
            { icon: <FileText size={32} />, title: "Verified CV", desc: "CV profesional terverifikasi dengan QR Code untuk kredibilitas karir.", href: "/services/verified-cv" },
            { icon: <BookOpen size={32} />, title: "Professional Training", desc: "Pelatihan sistem manajemen ISO oleh instruktur bersertifikat.", href: "/services/training" },
            { icon: <Briefcase size={32} />, title: "Career Management", desc: "Layanan manajemen karir untuk individu dan korporasi.", href: "/services/career/individuals" },
          ].map((s) => (
            <Link key={s.title} href={s.href}>
              <a className="silver-card p-8 flex gap-6 items-start">
                <div className="service-icon shrink-0">{s.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-white/50 mb-4">{s.desc}</p>
                  <span className="text-yellow-400 text-sm font-semibold flex items-center gap-1">Selengkapnya <ArrowRight size={14} /></span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
