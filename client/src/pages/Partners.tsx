import { Link } from "wouter";
import { Building2, BookOpen, Award, MapPin, Globe, ArrowRight } from "lucide-react";
const TRAINING_PARTNERS = [
  { name: "PT. Mitra Sistem Manajemen", city: "Jakarta", specialization: "ISO 9001, ISO 14001", type: "Platinum" },
  { name: "CV. Konsultan Mutu Indonesia", city: "Surabaya", specialization: "ISO 45001, ISO 22000", type: "Gold" },
  { name: "Lembaga Pelatihan Profesional", city: "Bandung", specialization: "ISO 27001, ISO 9001", type: "Gold" },
  { name: "PT. Solusi Manajemen Terpadu", city: "Medan", specialization: "ISO 9001, ISO 14001, ISO 45001", type: "Silver" },
  { name: "Yayasan Pendidikan Profesi", city: "Yogyakarta", specialization: "ISO 22000, HACCP", type: "Silver" },
  { name: "PT. Konsultindo Nusantara", city: "Makassar", specialization: "ISO 9001, ISO 27001", type: "Silver" },
];
const CERT_PARTNERS = [
  { name: "Badan Sertifikasi Nasional", city: "Jakarta", scope: "Sertifikasi Sistem Manajemen", type: "Nasional" },
  { name: "PT. Sertifikasi Mutu Indonesia", city: "Jakarta", scope: "ISO 9001, ISO 14001, ISO 45001", type: "Nasional" },
  { name: "Lembaga Sertifikasi Profesi Teknik", city: "Bandung", scope: "Kompetensi Teknik", type: "Nasional" },
];
const typeColors: Record<string, string> = { Platinum: "level-3", Gold: "level-2", Silver: "level-1", Nasional: "level-4" };
export default function Partners() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Building2 size={12} />Mitra PACER</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Partners</h1>
          <p className="text-white/50 max-w-3xl">Jaringan mitra PACER yang tersebar di seluruh Indonesia untuk memastikan layanan sertifikasi dan pelatihan yang mudah diakses.</p>
        </div>
      </div>
      <div className="container py-16 space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400"><BookOpen size={18} /></div>
            <div>
              <div className="gold-badge mb-1">Training Partner</div>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Mitra Pelatihan</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRAINING_PARTNERS.map((p) => (
              <div key={p.name} className="silver-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`level-badge ${typeColors[p.type]}`}>{p.type}</span>
                  <BookOpen size={16} className="text-white/20" />
                </div>
                <h3 className="text-white font-bold mb-2">{p.name}</h3>
                <div className="flex items-center gap-1 text-white/40 text-xs mb-2"><MapPin size={12} />{p.city}</div>
                <p className="text-white/50 text-xs">{p.specialization}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400"><Award size={18} /></div>
            <div>
              <div className="gold-badge mb-1">Certification Partner</div>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Mitra Sertifikasi</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {CERT_PARTNERS.map((p) => (
              <div key={p.name} className="silver-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`level-badge ${typeColors[p.type]}`}>{p.type}</span>
                  <Award size={16} className="text-white/20" />
                </div>
                <h3 className="text-white font-bold mb-2">{p.name}</h3>
                <div className="flex items-center gap-1 text-white/40 text-xs mb-2"><MapPin size={12} />{p.city}</div>
                <p className="text-white/50 text-xs">{p.scope}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="silver-card p-10 text-center">
          <Globe size={32} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Bergabung sebagai <span className="text-yellow-400">Mitra PACER</span></h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Jadilah bagian dari jaringan mitra PACER dan perluas jangkauan layanan Anda ke seluruh Indonesia.</p>
          <Link href="/about/contact" className="btn-primary">Daftar sebagai Mitra <ArrowRight size={16} /></Link>
        </section>
      </div>
    </div>
  );
}
