import { Link } from "wouter";
import { Award, ArrowRight, CheckCircle } from "lucide-react";
const BNSP_SCHEMES = [
  { title: "Manajer Mutu", code: "BNSP-MM", desc: "Sertifikasi kompetensi Manajer Mutu berdasarkan SKKNI bidang manajemen mutu", level: "Manajer" },
  { title: "Auditor Internal", code: "BNSP-AI", desc: "Sertifikasi kompetensi Auditor Internal sistem manajemen", level: "Auditor" },
  { title: "Konsultan Sistem Manajemen", code: "BNSP-KSM", desc: "Sertifikasi kompetensi Konsultan Sistem Manajemen", level: "Konsultan" },
];
export default function BNSP() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Award size={12} />Sertifikasi BNSP</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Sertifikasi BNSP</h1>
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Badan Nasional Sertifikasi Profesi</h2>
          <p className="text-white/50 max-w-3xl leading-relaxed">Sertifikasi profesi berdasarkan Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang diakui secara nasional oleh BNSP.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {BNSP_SCHEMES.map((s) => (
            <div key={s.code} className="silver-card p-6">
              <div className="level-badge level-3 mb-4">{s.code}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm mb-4">{s.desc}</p>
              <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">{s.level}</div>
            </div>
          ))}
        </div>
        <div className="silver-card p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Tertarik dengan Sertifikasi BNSP?</h2>
          <p className="text-white/50 mb-6">Hubungi tim kami untuk informasi lengkap mengenai skema sertifikasi BNSP yang tersedia.</p>
          <Link href="/about/contact" className="btn-primary">Hubungi Kami <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  );
}
