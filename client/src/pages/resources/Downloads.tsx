import { trpc } from "@/lib/trpc";
import { Download, FileText, ArrowRight } from "lucide-react";
export default function Downloads() {
  const { data: downloads, isLoading } = trpc.downloads.list.useQuery();
  const sampleDownloads = [
    { id: 1, title: "Skema Sertifikasi ISO 9001 (Rev. 2 2025)", description: "Dokumen skema sertifikasi auditor SMM berdasarkan ISO 9001:2015", category: "scheme", fileUrl: "#", fileSize: "2.4 MB" },
    { id: 2, title: "Skema Sertifikasi ISO 14001 (Rev. 2 2025)", description: "Dokumen skema sertifikasi auditor SML berdasarkan ISO 14001:2015", category: "scheme", fileUrl: "#", fileSize: "2.1 MB" },
    { id: 3, title: "Skema Sertifikasi ISO 45001 (Rev. 2 2025)", description: "Dokumen skema sertifikasi auditor SMK3 berdasarkan ISO 45001:2018", category: "scheme", fileUrl: "#", fileSize: "2.3 MB" },
    { id: 4, title: "Skema Sertifikasi ISO 27001 (Rev. 2 2025)", description: "Dokumen skema sertifikasi auditor SMKI berdasarkan ISO 27001:2022", category: "scheme", fileUrl: "#", fileSize: "2.0 MB" },
    { id: 5, title: "Skema Sertifikasi ISO 22000 (Rev. 2 2025)", description: "Dokumen skema sertifikasi auditor SMKP berdasarkan ISO 22000:2018", category: "scheme", fileUrl: "#", fileSize: "2.2 MB" },
    { id: 6, title: "Formulir Pendaftaran Sertifikasi", description: "Formulir aplikasi pendaftaran sertifikasi profesi PACER", category: "application_form", fileUrl: "#", fileSize: "0.5 MB" },
    { id: 7, title: "Brosur Layanan PACER 2025", description: "Informasi lengkap layanan sertifikasi dan pelatihan PACER", category: "brochure", fileUrl: "#", fileSize: "3.5 MB" },
    { id: 8, title: "Kebijakan Mutu PACER", description: "Dokumen kebijakan mutu dan komitmen layanan PACER", category: "policy", fileUrl: "#", fileSize: "0.8 MB" },
  ];
  const displayDownloads = (downloads && downloads.length > 0) ? downloads : sampleDownloads;
  const categoryLabels: Record<string, string> = { scheme: "Skema Sertifikasi", application_form: "Formulir", brochure: "Brosur", policy: "Kebijakan", other: "Lainnya" };
  const categoryColors: Record<string, string> = { scheme: "level-2", application_form: "level-3", brochure: "level-1", policy: "level-4", other: "level-1" };
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Download size={12} />Download Center</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Download Center</h1>
          <p className="text-white/50 max-w-2xl">Unduh dokumen skema sertifikasi, formulir pendaftaran, brosur, dan dokumen resmi PACER lainnya.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-4">
          {displayDownloads.map((d: any) => (
            <div key={d.id} className="silver-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 shrink-0"><FileText size={18} /></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`level-badge ${categoryColors[d.category] || "level-1"} text-xs`}>{categoryLabels[d.category] || d.category}</span>
                  {d.fileSize && <span className="text-white/30 text-xs">{d.fileSize}</span>}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{d.title}</h3>
                <p className="text-white/40 text-xs mb-3">{d.description}</p>
                <a href={d.fileUrl} className="flex items-center gap-1 text-yellow-400 text-xs font-semibold hover:text-yellow-300 transition-colors"><Download size={12} />Unduh Dokumen</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
