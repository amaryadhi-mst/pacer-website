import { Shield, CheckCircle } from "lucide-react";
export default function QualityPolicy() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Shield size={12} />Kebijakan Mutu</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Kebijakan Mutu</h1>
          <p className="text-white/50 max-w-2xl">Komitmen PACER terhadap kualitas dan standar tertinggi dalam layanan sertifikasi profesi.</p>
        </div>
      </div>
      <div className="container py-16 max-w-4xl">
        <div className="silver-card p-10 space-y-8">
          <div>
            <div className="gold-badge mb-4">Pernyataan Kebijakan Mutu</div>
            <p className="text-white/70 leading-relaxed text-lg">PACER berkomitmen untuk menyelenggarakan layanan sertifikasi profesi yang kompeten, tidak memihak, dan konsisten sesuai dengan persyaratan ISO/IEC 17024 dan peraturan perundang-undangan yang berlaku di Indonesia.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Komitmen Kami</h3>
            <div className="space-y-3">
              {[
                "Menjaga independensi, objektivitas, dan integritas dalam setiap proses sertifikasi",
                "Memastikan kompetensi seluruh personel yang terlibat dalam proses sertifikasi",
                "Menerapkan sistem manajemen mutu yang efektif dan terus melakukan perbaikan berkelanjutan",
                "Melindungi kerahasiaan informasi peserta sertifikasi sesuai ketentuan yang berlaku",
                "Menangani setiap keluhan dan banding secara adil, transparan, dan tepat waktu",
                "Memastikan aksesibilitas layanan sertifikasi bagi seluruh calon peserta yang memenuhi persyaratan",
                "Menjaga kesesuaian dengan persyaratan akreditasi KAN dan standar internasional ISO/IEC 17024",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-[#475569]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-sm">Kebijakan mutu ini ditinjau secara berkala dan dikomunikasikan kepada seluruh personel PACER. Dokumen ini merupakan komitmen resmi manajemen PACER terhadap kualitas layanan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
