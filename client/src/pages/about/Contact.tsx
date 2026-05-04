import { MapPin, Phone, Mail, Clock } from "lucide-react";
export default function Contact() {
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4">Hubungi Kami</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Kontak PACER</h1>
          <p className="text-white/50 max-w-2xl">Tim kami siap membantu Anda dengan informasi sertifikasi, pelatihan, dan layanan PACER lainnya.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="gold-badge mb-4">Informasi Kontak</div>
            {[
              { icon: <MapPin size={20} />, title: "Alamat", content: "Jl. Gereja No. 9, Bogor" },
              { icon: <Phone size={20} />, title: "Telepon", content: "0251-8340450" },
              { icon: <Mail size={20} />, title: "Email", content: "info@pacer.co.id" },
              { icon: <Clock size={20} />, title: "Jam Operasional", content: "Senin – Jumat: 08.00 – 17.00 WIB" },
            ].map((item) => (
              <div key={item.title} className="silver-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0">{item.icon}</div>
                <div><h3 className="text-white font-bold mb-1">{item.title}</h3><p className="text-[#475569]">{item.content}</p></div>
              </div>
            ))}
          </div>
          <div className="silver-card p-8">
            <div className="gold-badge mb-6">Kirim Pesan</div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white/60 text-sm mb-2">Nama Lengkap</label>
                <input type="text" className="form-input" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Email</label>
                <input type="email" className="form-input" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Subjek</label>
                <input type="text" className="form-input" placeholder="Subjek pesan" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Pesan</label>
                <textarea rows={5} className="form-input resize-none" placeholder="Tulis pesan Anda..." />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
