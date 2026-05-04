import { Users } from "lucide-react";
const TEAM = [
  { name: "Direktur Utama", role: "Pimpinan Lembaga", desc: "Bertanggung jawab atas keseluruhan operasional dan strategi pengembangan PACER" },
  { name: "Manajer Sertifikasi", role: "Kepala Divisi Sertifikasi", desc: "Memimpin proses sertifikasi dan memastikan kepatuhan terhadap standar ISO/IEC 17024" },
  { name: "Koordinator Asesor", role: "Koordinasi Tim Asesor", desc: "Mengelola dan mengkoordinasikan tim asesor untuk setiap skema sertifikasi" },
  { name: "Manajer Pelatihan", role: "Kepala Divisi Pelatihan", desc: "Mengembangkan dan mengelola program pelatihan sistem manajemen ISO" },
  { name: "Komite Teknis", role: "Pengawasan Teknis", desc: "Memastikan objektivitas dan kualitas proses sertifikasi melalui pengawasan independen" },
  { name: "Tim Administrasi", role: "Layanan Peserta", desc: "Memberikan dukungan administratif dan layanan prima kepada seluruh peserta sertifikasi" },
];
export default function Team() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Users size={12} />Tim Kami</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Tim PACER</h1>
          <p className="text-white/50 max-w-2xl">Para profesional berpengalaman yang berkomitmen memberikan layanan sertifikasi terbaik.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="silver-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 mx-auto mb-4"><Users size={24} /></div>
              <h3 className="text-white font-bold mb-1">{m.name}</h3>
              <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">{m.role}</div>
              <p className="text-white/50 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
