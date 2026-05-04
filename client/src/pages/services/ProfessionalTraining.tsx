import { Link } from "wouter";
import { BookOpen, Users, Monitor, Home, Globe, ArrowRight, CheckCircle } from "lucide-react";
export default function ProfessionalTraining() {
  const methods = [
    { icon: <Users size={20} />, name: "Classroom", desc: "Pelatihan tatap muka di fasilitas PACER atau lokasi klien dengan instruktur berpengalaman" },
    { icon: <Monitor size={20} />, name: "Virtual", desc: "Pelatihan online real-time melalui platform video conference dengan interaksi langsung" },
    { icon: <Globe size={20} />, name: "Blended", desc: "Kombinasi pembelajaran online dan tatap muka untuk fleksibilitas maksimal" },
    { icon: <Home size={20} />, name: "In-House", desc: "Pelatihan khusus di lokasi perusahaan klien dengan kurikulum yang disesuaikan" },
    { icon: <BookOpen size={20} />, name: "E-Learning", desc: "Modul pembelajaran mandiri yang dapat diakses kapan saja dan di mana saja" },
  ];
  const programs = [
    { title: "Interpretasi ISO 9001:2015", duration: "2 hari", level: "Dasar", code: "TRN-9001-INT" },
    { title: "Teknik Audit Sistem Manajemen", duration: "2 hari", level: "Menengah", code: "TRN-AUDIT-01" },
    { title: "Lead Auditor ISO 9001", duration: "5 hari", level: "Lanjutan", code: "TRN-9001-LA" },
    { title: "Interpretasi ISO 14001:2015", duration: "2 hari", level: "Dasar", code: "TRN-14001-INT" },
    { title: "Lead Auditor ISO 14001", duration: "5 hari", level: "Lanjutan", code: "TRN-14001-LA" },
    { title: "Interpretasi ISO 45001:2018", duration: "2 hari", level: "Dasar", code: "TRN-45001-INT" },
    { title: "Lead Auditor ISO 45001", duration: "5 hari", level: "Lanjutan", code: "TRN-45001-LA" },
    { title: "Interpretasi ISO 27001:2022", duration: "2 hari", level: "Dasar", code: "TRN-27001-INT" },
    { title: "Interpretasi ISO 22000:2018", duration: "2 hari", level: "Dasar", code: "TRN-22000-INT" },
    { title: "HACCP & Food Safety", duration: "2 hari", level: "Menengah", code: "TRN-HACCP-01" },
    { title: "Integrated Management System", duration: "3 hari", level: "Lanjutan", code: "TRN-IMS-01" },
    { title: "Risk Management ISO 31000", duration: "2 hari", level: "Menengah", code: "TRN-RISK-01" },
  ];
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><BookOpen size={12} />Professional Training</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Professional Training</h1>
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4">Pelatihan Sistem Manajemen ISO</h2>
          <p className="text-white/50 max-w-3xl leading-relaxed">Program pelatihan komprehensif untuk sistem manajemen ISO yang disampaikan oleh instruktur bersertifikat dengan pengalaman industri yang luas.</p>
          <div className="mt-6"><Link href="/about/contact" className="btn-primary">Daftar Pelatihan <ArrowRight size={16} /></Link></div>
        </div>
      </div>
      <div className="container py-16 space-y-16">
        <section>
          <div className="gold-badge mb-4">Metode Pelatihan</div>
          <h2 className="text-3xl font-black text-[#0F2557] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>Metode Pembelajaran Fleksibel</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {methods.map((m) => (
              <div key={m.name} className="silver-card p-5 text-center">
                <div className="service-icon mx-auto mb-3">{m.icon}</div>
                <h3 className="text-white font-bold mb-2">{m.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="gold-badge mb-4">Program Pelatihan</div>
          <h2 className="text-3xl font-black text-[#0F2557] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>Katalog Program Pelatihan</h2>
          <div className="overflow-x-auto">
            <table className="scheme-table">
              <thead><tr><th>Kode</th><th>Program Pelatihan</th><th>Durasi</th><th>Level</th><th>Aksi</th></tr></thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.code}>
                    <td><span className="level-badge level-2">{p.code}</span></td>
                    <td className="text-[#0F2557]">{p.title}</td>
                    <td>{p.duration}</td>
                    <td><span className={`level-badge ${p.level === "Dasar" ? "level-1" : p.level === "Menengah" ? "level-2" : "level-3"}`}>{p.level}</span></td>
                    <td><Link href="/about/contact" className="text-yellow-400 text-xs hover:underline">Daftar</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="silver-card p-10 text-center">
          <h2 className="text-3xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Butuh <span className="text-yellow-400">Pelatihan In-House</span>?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Kami menyediakan pelatihan khusus di lokasi perusahaan Anda dengan kurikulum yang disesuaikan dengan kebutuhan organisasi.</p>
          <Link href="/about/contact" className="btn-primary">Hubungi Kami <ArrowRight size={16} /></Link>
        </section>
      </div>
    </div>
  );
}
