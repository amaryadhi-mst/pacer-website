import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { MessageSquare, CheckCircle, AlertCircle, Clock, Search } from "lucide-react";
import { toast } from "sonner";

export default function ComplaintsPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    complaintType: "general" as "general" | "certification" | "training" | "technical" | "staff" | "other",
    subject: "",
    description: "",
    preferredContact: "email" as "email" | "phone",
  });
  const [submitted, setSubmitted] = useState<{ complaintId: string } | null>(null);
  const [trackId, setTrackId] = useState("");
  const [trackResult, setTrackResult] = useState<any>(undefined);

  const submitMutation = trpc.complaints.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted({ complaintId: data.complaintId });
      toast.success("Pengaduan berhasil disampaikan!");
    },
    onError: (err) => toast.error("Gagal mengirim: " + err.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.subject || !form.description) {
      toast.error("Mohon lengkapi semua field wajib.");
      return;
    }
    submitMutation.mutate({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone || undefined,
      organization: form.organization || undefined,
      complaintType: form.complaintType,
      subject: form.subject,
      description: form.description,
      preferredContact: form.preferredContact,
    });
  };

  const handleTrack = async () => {
    if (!trackId) { toast.error("Masukkan ID pengaduan."); return; }
    toast.info("Fitur lacak pengaduan akan segera tersedia. Silahkan hubungi info@pacer.co.id untuk status pengaduan Anda.");
  };

  const statusLabels: Record<string, string> = {
    submitted: "Diterima", under_review: "Sedang Ditinjau",
    in_progress: "Dalam Proses", resolved: "Selesai", closed: "Ditutup",
  };

  if (submitted) {
    return (
      <div className="silver-bg min-h-screen flex items-center justify-center">
        <div className="container max-w-lg">
          <div className="silver-card p-10 text-center">
            <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Pengaduan Berhasil Dikirim</h2>
            <p className="text-white/50 mb-6">Pengaduan Anda telah kami terima dan akan ditindaklanjuti dalam 5 hari kerja.</p>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 mb-6">
              <p className="text-white/50 text-sm mb-1">ID Pengaduan Anda:</p>
              <p className="text-yellow-400 text-2xl font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>{submitted!.complaintId}</p>
            </div>
            <p className="text-white/40 text-sm mb-6">Simpan ID ini untuk melacak status pengaduan Anda.</p>
            <button onClick={() => setSubmitted(null)} className="btn-outline">Kembali</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><MessageSquare size={12} />Complaints</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Pengaduan (Complaints)</h1>
          <p className="text-white/50 max-w-3xl leading-relaxed">PACER berkomitmen menangani setiap pengaduan dengan serius, objektif, dan transparan. Formulir ini dapat diakses tanpa login.</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Panel */}
          <div className="space-y-6">
            <div className="silver-card p-6">
              <div className="gold-badge mb-4">Prosedur</div>
              <div className="space-y-0">
                {["Isi formulir dengan lengkap dan jelas", "Sertakan informasi pendukung yang relevan", "Simpan ID pengaduan yang diberikan", "Ditinjau dalam 5 hari kerja", "Dihubungi via email yang didaftarkan", "Penyelesaian maksimal 30 hari kerja"].map((step, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="text-white/50 text-sm pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="silver-card p-6">
              <div className="gold-badge mb-4">Lacak Pengaduan</div>
              <p className="text-white/50 text-sm mb-4">Masukkan ID pengaduan untuk melihat status terkini.</p>
              <div className="space-y-3">
                <input type="text" className="form-input" placeholder="PAC-COMP-YYYY-MM-XXXXX" value={trackId} onChange={(e) => setTrackId(e.target.value.toUpperCase())} />
                <button onClick={handleTrack} className="btn-outline w-full justify-center text-sm"><Search size={14} />Lacak Status</button>
              </div>
              {trackResult !== undefined && trackResult !== null && (
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white/40 text-xs mb-2">Status:</p>
                  <span className={`status-badge status-${trackResult.status}`}>{statusLabels[trackResult.status] || trackResult.status}</span>
                  {trackResult.adminNotes && <p className="text-white/50 text-xs mt-2">{trackResult.adminNotes}</p>}
                </div>
              )}
              {trackResult === null && <p className="text-red-400 text-xs mt-3">ID tidak ditemukan.</p>}
            </div>
            <div className="silver-card p-6">
              <AlertCircle size={20} className="text-yellow-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Informasi Penting</h3>
              <p className="text-white/50 text-sm leading-relaxed">Pengaduan yang bersifat palsu dapat dikenakan sanksi. Pastikan informasi yang disampaikan benar dan dapat dipertanggungjawabkan.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="silver-card p-8">
              <div className="gold-badge mb-6">Formulir Pengaduan</div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nama Lengkap <span className="text-red-400">*</span></label>
                    <input type="text" className="form-input" placeholder="Nama Anda" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Email <span className="text-red-400">*</span></label>
                    <input type="email" className="form-input" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">No. Telepon</label>
                    <input type="tel" className="form-input" placeholder="08xxxxxxxxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Organisasi/Perusahaan</label>
                    <input type="text" className="form-input" placeholder="Nama organisasi (opsional)" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Jenis Pengaduan <span className="text-red-400">*</span></label>
                    <select className="form-input" value={form.complaintType} onChange={(e) => setForm({ ...form, complaintType: e.target.value as any })}>
                      <option value="general">Umum</option>
                      <option value="certification">Sertifikasi</option>
                      <option value="training">Pelatihan</option>
                      <option value="technical">Teknis</option>
                      <option value="staff">Staf/Personel</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Preferensi Kontak</label>
                    <select className="form-input" value={form.preferredContact} onChange={(e) => setForm({ ...form, preferredContact: e.target.value as any })}>
                      <option value="email">Email</option>
                      <option value="phone">Telepon</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Subjek Pengaduan <span className="text-red-400">*</span></label>
                  <input type="text" className="form-input" placeholder="Ringkasan pengaduan Anda" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Uraian Pengaduan <span className="text-red-400">*</span></label>
                  <textarea rows={6} className="form-input resize-none" placeholder="Jelaskan pengaduan Anda secara rinci, termasuk kronologi kejadian, pihak yang terlibat, dan dampak yang ditimbulkan..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <AlertCircle size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <p className="text-white/50 text-xs leading-relaxed">Dengan mengirimkan formulir ini, Anda menyatakan bahwa informasi yang disampaikan adalah benar dan dapat dipertanggungjawabkan. Data Anda akan dijaga kerahasiaannya sesuai kebijakan privasi PACER.</p>
                </div>
                <button type="submit" disabled={submitMutation.isPending} className="btn-primary w-full justify-center">
                  {submitMutation.isPending ? <span className="flex items-center gap-2"><Clock size={16} className="animate-spin" />Mengirim...</span> : "Kirim Pengaduan"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
