import { trpc } from "@/lib/trpc";
import { Video, Calendar, Clock, ExternalLink } from "lucide-react";
export default function Webinars() {
  const { data: webinars } = trpc.webinars.list.useQuery();
  const samples = [
    { id: 1, title: "Pengantar ISO 9001:2015 untuk Pemula", speaker: "Dr. Ahmad Fauzi, Lead Auditor", scheduledAt: new Date("2025-06-15T09:00:00"), durationMinutes: 90, isUpcoming: true, registrationUrl: "#" },
    { id: 2, title: "Strategi Audit Efektif dalam Sistem Manajemen Lingkungan", speaker: "Ir. Siti Rahayu, Auditor Utama SML", scheduledAt: new Date("2025-05-20T13:00:00"), durationMinutes: 120, isUpcoming: false, recordingUrl: "#" },
    { id: 3, title: "Implementasi ISO 45001 di Industri Manufaktur", speaker: "Budi Santoso, OHSAS Expert", scheduledAt: new Date("2025-04-10T10:00:00"), durationMinutes: 90, isUpcoming: false, recordingUrl: "#" },
  ];
  const display = (webinars && webinars.length > 0) ? webinars : samples;
  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Video size={12} />Webinar Library</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Webinar Library</h1>
          <p className="text-white/50 max-w-2xl">Webinar dan seminar online seputar sistem manajemen ISO, sertifikasi profesi, dan pengembangan karir.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="space-y-4">
          {display.map((w: any) => (
            <div key={w.id} className="silver-card p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`status-badge ${w.isUpcoming ? "status-in_progress" : "status-resolved"}`}>{w.isUpcoming ? "Upcoming" : "Recorded"}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{w.title}</h3>
                <p className="text-yellow-400/70 text-sm mb-2">{w.speaker}</p>
                <div className="flex flex-wrap gap-4 text-xs text-white/40">
                  {w.scheduledAt && <span className="flex items-center gap-1"><Calendar size={12} />{new Date(w.scheduledAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>}
                  {w.durationMinutes && <span className="flex items-center gap-1"><Clock size={12} />{w.durationMinutes} menit</span>}
                </div>
              </div>
              <div>
                {w.isUpcoming && w.registrationUrl ? (
                  <a href={w.registrationUrl} className="btn-primary text-sm py-2 px-4">Daftar <ExternalLink size={14} /></a>
                ) : w.recordingUrl ? (
                  <a href={w.recordingUrl} className="btn-outline text-sm py-2 px-4">Tonton <Video size={14} /></a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
