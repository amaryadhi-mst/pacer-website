import { Link } from "wouter";
import { Building2, ArrowRight, Users, Award, Search, BarChart } from "lucide-react";
export default function CareerCorporations() {
  const services = [
    { icon: <Users size={20} />, title: "Talent Management", desc: "Sistem manajemen talenta terintegrasi untuk mengidentifikasi, mengembangkan, dan mempertahankan karyawan berpotensi tinggi" },
    { icon: <Award size={20} />, title: "Bulk Certification", desc: "Program sertifikasi massal untuk tim atau departemen dengan harga korporasi dan jadwal yang fleksibel" },
    { icon: <Search size={20} />, title: "Recruitment Support", desc: "Dukungan rekrutmen berbasis kompetensi untuk memastikan kandidat yang tepat di posisi yang tepat" },
    { icon: <BarChart size={20} />, title: "Competency Mapping", desc: "Pemetaan kompetensi organisasi untuk mengidentifikasi gap dan merancang program pengembangan yang efektif" },
  ];
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Building2 size={12} />Career Management — Korporasi</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Career Management</h1>
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Untuk Korporasi & Organisasi</h2>
          <p className="text-white/50 max-w-3xl leading-relaxed">Solusi manajemen sumber daya manusia berbasis kompetensi untuk organisasi yang ingin membangun tim profesional bersertifikat dan berdaya saing tinggi.</p>
          <div className="mt-6"><Link href="/about/contact" className="btn-primary">Konsultasi Korporasi <ArrowRight size={16} /></Link></div>
        </div>
      </div>
      <div className="container py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="silver-card p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">{s.icon}</div>
              <div><h3 className="text-white font-bold mb-2">{s.title}</h3><p className="text-white/50 text-sm">{s.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="silver-card p-10 text-center">
          <h2 className="text-3xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Tingkatkan <span className="text-yellow-400">Kompetensi Tim</span> Anda</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Hubungi tim kami untuk mendapatkan penawaran korporasi yang disesuaikan dengan kebutuhan organisasi Anda.</p>
          <Link href="/about/contact" className="btn-primary">Minta Penawaran <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  );
}
