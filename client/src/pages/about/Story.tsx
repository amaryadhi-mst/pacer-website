import { Shield, Award, Users, Globe } from "lucide-react";
const LOGO_URL = "/manus-storage/pacer-logo-vertical_1bd10e2f.jpg";
export default function Story() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4">Tentang Kami</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Tentang PACER</h1>
          <p className="text-white/50 max-w-3xl">Lembaga Sertifikasi Profesi terpercaya yang berkomitmen meningkatkan kompetensi profesional Indonesia.</p>
        </div>
      </div>
      <div className="container py-16 space-y-16">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="gold-badge mb-4">Sejarah Kami</div>
            <h2 className="text-3xl font-black text-[#0F2557] mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>Perjalanan PACER</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>PACER (Professional Career Certification) didirikan dengan visi untuk menjadi lembaga sertifikasi profesi terbaik di Indonesia yang mampu menghasilkan auditor sistem manajemen yang kompeten dan diakui secara internasional.</p>
              <p>Berawal dari kebutuhan industri akan tenaga auditor sistem manajemen yang tersertifikasi dan kompeten, PACER hadir sebagai solusi yang menjembatani antara kebutuhan industri dengan pengembangan kompetensi profesional.</p>
              <p>Dengan akreditasi dari Komite Akreditasi Nasional (KAN) berdasarkan ISO/IEC 17024, PACER memastikan bahwa setiap proses sertifikasi dilakukan dengan standar tertinggi, objektif, dan dapat dipertanggungjawabkan.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="silver-card p-8">
              <img src={LOGO_URL} alt="PACER Logo" className="w-48 h-auto mx-auto" />
            </div>
          </div>
        </section>
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={24} />, title: "KAN Accredited", desc: "Terakreditasi KAN berdasarkan ISO/IEC 17024" },
              { icon: <Award size={24} />, title: "6 Skema", desc: "ISO 9001, 14001, 45001, 27001, 22000 & BNSP" },
              { icon: <Users size={24} />, title: "500+ Alumni", desc: "Profesional tersertifikasi di seluruh Indonesia" },
              { icon: <Globe size={24} />, title: "MRA Member", desc: "Diakui internasional melalui jaringan MRA" },
            ].map((item) => (
              <div key={item.title} className="silver-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mx-auto mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="gold-badge mb-6">Legalitas & Akreditasi</div>
          <h2 className="text-3xl font-black text-[#0F2557] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>Dasar Hukum & Akreditasi</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Akreditasi KAN", desc: "Terakreditasi oleh Komite Akreditasi Nasional (KAN) sebagai Lembaga Sertifikasi Profesi berdasarkan ISO/IEC 17024" },
              { title: "Badan Hukum", desc: "Terdaftar sebagai badan hukum yang sah di Indonesia dengan izin operasional dari instansi terkait" },
              { title: "Anggota IAF", desc: "KAN sebagai anggota IAF (International Accreditation Forum) memastikan sertifikat PACER diakui secara internasional" },
              { title: "Kode Etik", desc: "Beroperasi berdasarkan kode etik profesi yang ketat untuk menjaga integritas dan objektivitas proses sertifikasi" },
            ].map((item) => (
              <div key={item.title} className="silver-card p-5 flex gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0" />
                <div><h3 className="text-white font-bold mb-1">{item.title}</h3><p className="text-white/50 text-sm">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
