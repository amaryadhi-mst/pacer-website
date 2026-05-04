import { Link } from "wouter";
import { User, ArrowRight, Target, Map, Search, TrendingUp } from "lucide-react";
export default function CareerIndividuals() {
  const services = [
    { icon: <Target size={20} />, title: "Career Assessment", desc: "Penilaian komprehensif terhadap kompetensi, minat, dan nilai-nilai profesional Anda untuk menentukan arah karir yang tepat" },
    { icon: <Map size={20} />, title: "Career Roadmap", desc: "Peta jalan karir yang terstruktur dan terukur berdasarkan tujuan profesional dan kondisi pasar kerja terkini" },
    { icon: <Search size={20} />, title: "Job Search Support", desc: "Dukungan pencarian kerja termasuk optimasi profil LinkedIn, strategi networking, dan persiapan wawancara" },
    { icon: <TrendingUp size={20} />, title: "Competency Development", desc: "Program pengembangan kompetensi yang disesuaikan dengan gap analysis hasil asesmen karir Anda" },
  ];
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><User size={12} />Career Management — Individu</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Career Management</h1>
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Untuk Individu Profesional</h2>
          <p className="text-white/50 max-w-3xl leading-relaxed">Layanan manajemen karir terpadu untuk membantu Anda merencanakan, mengembangkan, dan mencapai tujuan karir profesional dengan strategi yang tepat.</p>
          <div className="mt-6"><Link href="/about/contact" className="btn-primary">Konsultasi Karir <ArrowRight size={16} /></Link></div>
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
          <h2 className="text-3xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Mulai <span className="text-yellow-400">Perjalanan Karir</span> Anda</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Konsultasikan tujuan karir Anda dengan konsultan kami dan dapatkan rencana pengembangan yang personal.</p>
          <Link href="/about/contact" className="btn-primary">Jadwalkan Konsultasi <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  );
}
