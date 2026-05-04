import { Link } from "wouter";
import { FileText, QrCode, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";
export default function VerifiedCV() {
  const templates = [
    { name: "ATS-Friendly", desc: "Dioptimalkan untuk sistem pelacak lamaran (ATS) perusahaan modern", tag: "Populer" },
    { name: "Professional", desc: "Desain elegan dan formal untuk posisi senior dan eksekutif", tag: "Premium" },
    { name: "Creative", desc: "Desain kreatif untuk industri media, desain, dan teknologi", tag: "Baru" },
    { name: "Academic", desc: "Format akademis untuk peneliti, dosen, dan profesional pendidikan", tag: "" },
  ];
  const features = [
    { icon: <QrCode size={20} />, title: "QR Code Verifikasi", desc: "Setiap CV dilengkapi QR Code unik yang dapat dipindai untuk memverifikasi keaslian dan data pemegang CV" },
    { icon: <Shield size={20} />, title: "Verifikasi Sertifikat", desc: "Sertifikat PACER dan pencapaian profesional Anda terverifikasi langsung di dalam CV" },
    { icon: <Star size={20} />, title: "Profil Digital", desc: "Profil digital yang dapat diakses online dengan URL khusus untuk berbagi ke rekruter" },
    { icon: <FileText size={20} />, title: "Multi-Format Export", desc: "Export ke PDF, Word, dan format digital yang kompatibel dengan semua platform rekrutmen" },
  ];
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><FileText size={12} />Verified CV</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Verified CV</h1>
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4">CV Profesional Terverifikasi</h2>
          <p className="text-white/50 max-w-3xl leading-relaxed">Buat CV profesional yang terverifikasi dengan teknologi QR Code PACER. Tingkatkan kredibilitas dan kepercayaan rekruter terhadap profil karir Anda.</p>
          <div className="mt-6 flex gap-4">
            <Link href="/dashboard" className="btn-primary">Buat CV Sekarang <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
      <div className="container py-16 space-y-16">
        <section>
          <div className="gold-badge mb-4">Template</div>
          <h2 className="text-3xl font-black text-[#0F2557] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>Pilih Template CV Anda</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((t) => (
              <div key={t.name} className="silver-card p-6">
                {t.tag && <div className="gold-badge mb-3 text-xs">{t.tag}</div>}
                <div className="w-full h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center border border-white/10">
                  <FileText size={32} className="text-white/20" />
                </div>
                <h3 className="text-white font-bold mb-2">{t.name}</h3>
                <p className="text-white/50 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="gold-badge mb-4">Fitur Unggulan</div>
          <h2 className="text-3xl font-black text-[#0F2557] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>Keunggulan Verified CV PACER</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="silver-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">{f.icon}</div>
                <div><h3 className="text-white font-bold mb-2">{f.title}</h3><p className="text-white/50 text-sm">{f.desc}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="silver-card p-10 text-center">
          <h2 className="text-3xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Siap Membuat <span className="text-yellow-400">Verified CV</span>?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Login ke dashboard Anda dan mulai buat CV profesional terverifikasi sekarang.</p>
          <Link href="/dashboard" className="btn-primary">Mulai Sekarang <ArrowRight size={16} /></Link>
        </section>
      </div>
    </div>
  );
}
