import { Wrench, Calculator, FileCheck, Search } from "lucide-react";
export default function Tools() {
  const tools = [
    { icon: <Calculator size={24} />, title: "Kalkulator Biaya Sertifikasi", desc: "Estimasi biaya sertifikasi berdasarkan skema dan tingkatan yang dipilih", status: "Segera Hadir" },
    { icon: <FileCheck size={24} />, title: "Cek Kelayakan Sertifikasi", desc: "Periksa apakah Anda memenuhi persyaratan untuk mendaftar sertifikasi tertentu", status: "Segera Hadir" },
    { icon: <Search size={24} />, title: "Verifikasi Sertifikat", desc: "Verifikasi keaslian sertifikat PACER menggunakan nomor sertifikat atau QR Code", status: "Tersedia" },
    { icon: <Wrench size={24} />, title: "Panduan Persiapan Audit", desc: "Checklist dan panduan persiapan audit sistem manajemen yang komprehensif", status: "Segera Hadir" },
  ];
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Wrench size={12} />Tools & Kalkulator</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Tools & Kalkulator</h1>
          <p className="text-white/50 max-w-2xl">Alat bantu dan kalkulator untuk mendukung perjalanan sertifikasi dan pengembangan karir Anda.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((t) => (
            <div key={t.title} className="silver-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">{t.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-white font-bold">{t.title}</h3>
                    <span className={`status-badge ${t.status === "Tersedia" ? "status-resolved" : "status-submitted"}`}>{t.status}</span>
                  </div>
                  <p className="text-white/50 text-sm">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
