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

  const labelStyle = { display: "block", color: "#374151", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" };

  if (submitted) {
    return (
      <div style={{ background: "#F8FAFF", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="container" style={{ maxWidth: "480px" }}>
          <div className="silver-card" style={{ padding: "3rem", textAlign: "center" }}>
            <CheckCircle size={48} style={{ color: "#10B981", margin: "0 auto 1rem" }} />
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#0F2557", marginBottom: "0.75rem" }}>Pengaduan Berhasil Dikirim</h2>
            <p style={{ color: "#64748B", marginBottom: "1.5rem", lineHeight: 1.6 }}>Pengaduan Anda telah kami terima dan akan ditindaklanjuti dalam 5 hari kerja.</p>
            <div style={{ background: "#FFFBEB", border: "1px solid rgba(245,158,11,0.30)", borderRadius: "0.75rem", padding: "1rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "#64748B", fontSize: "0.82rem", marginBottom: "0.35rem" }}>ID Pengaduan Anda:</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#92400E" }}>{submitted!.complaintId}</p>
            </div>
            <p style={{ color: "#94A3B8", fontSize: "0.82rem", marginBottom: "1.5rem" }}>Simpan ID ini untuk melacak status pengaduan Anda.</p>
            <button onClick={() => setSubmitted(null)} className="btn-outline-navy">Kembali</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#F8FAFF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.3rem 0.85rem", borderRadius: "99px",
            background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.40)",
            color: "#FDE68A", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: "1.25rem",
          }}>
            <MessageSquare size={12} /> Complaints
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Pengaduan (Complaints)
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "680px", lineHeight: 1.7 }}>
            PACER berkomitmen menangani setiap pengaduan dengan serius, objektif, dan transparan. Formulir ini dapat diakses tanpa login.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem" }}>

          {/* Info Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="silver-card" style={{ padding: "1.5rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
                color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1.25rem",
              }}>
                Prosedur
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {["Isi formulir dengan lengkap dan jelas", "Sertakan informasi pendukung yang relevan", "Simpan ID pengaduan yang diberikan", "Ditinjau dalam 5 hari kerja", "Dihubungi via email yang didaftarkan", "Penyelesaian maksimal 30 hari kerja"].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.875rem", paddingBottom: i < 5 ? "1rem" : "0", position: "relative" }}>
                    {i < 5 && <div style={{ position: "absolute", left: "0.75rem", top: "1.5rem", bottom: 0, width: "2px", background: "rgba(37,99,235,0.15)" }} />}
                    <div style={{
                      width: "1.5rem", height: "1.5rem", borderRadius: "50%",
                      background: "#EFF6FF", border: "2px solid rgba(37,99,235,0.30)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#1E40AF", fontSize: "0.65rem", fontWeight: 800, flexShrink: 0, zIndex: 1,
                    }}>{i + 1}</div>
                    <p style={{ color: "#475569", fontSize: "0.82rem", paddingTop: "0.1rem", lineHeight: 1.5 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="silver-card" style={{ padding: "1.5rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.20)",
                color: "#1E40AF", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>
                Lacak Pengaduan
              </div>
              <p style={{ color: "#64748B", fontSize: "0.82rem", marginBottom: "1rem", lineHeight: 1.5 }}>Masukkan ID pengaduan untuk melihat status terkini.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <input type="text" className="form-input" placeholder="PAC-COMP-YYYY-MM-XXXXX" value={trackId} onChange={(e) => setTrackId(e.target.value.toUpperCase())} />
                <button onClick={handleTrack} className="btn-outline-navy" style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem" }}>
                  <Search size={14} /> Lacak Status
                </button>
              </div>
              {trackResult === null && <p style={{ color: "#EF4444", fontSize: "0.78rem", marginTop: "0.75rem" }}>ID tidak ditemukan.</p>}
            </div>

            <div className="silver-card" style={{ padding: "1.5rem" }}>
              <AlertCircle size={20} style={{ color: "#F59E0B", marginBottom: "0.75rem" }} />
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", marginBottom: "0.5rem" }}>Informasi Penting</h3>
              <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.6 }}>Pengaduan yang bersifat palsu dapat dikenakan sanksi. Pastikan informasi yang disampaikan benar dan dapat dipertanggungjawabkan.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="silver-card" style={{ padding: "2rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.3rem 0.85rem", borderRadius: "99px",
                background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.30)",
                color: "#92400E", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1.5rem",
              }}>
                Formulir Pengaduan
              </div>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Nama Lengkap <span style={{ color: "#EF4444" }}>*</span></label>
                    <input type="text" className="form-input" placeholder="Nama Anda" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: "#EF4444" }}>*</span></label>
                    <input type="email" className="form-input" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>No. Telepon</label>
                    <input type="tel" className="form-input" placeholder="08xxxxxxxxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Organisasi/Perusahaan</label>
                    <input type="text" className="form-input" placeholder="Nama organisasi (opsional)" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Jenis Pengaduan <span style={{ color: "#EF4444" }}>*</span></label>
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
                    <label style={labelStyle}>Preferensi Kontak</label>
                    <select className="form-input" value={form.preferredContact} onChange={(e) => setForm({ ...form, preferredContact: e.target.value as any })}>
                      <option value="email">Email</option>
                      <option value="phone">Telepon</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Subjek Pengaduan <span style={{ color: "#EF4444" }}>*</span></label>
                  <input type="text" className="form-input" placeholder="Ringkasan pengaduan Anda" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                </div>
                <div>
                  <label style={labelStyle}>Uraian Pengaduan <span style={{ color: "#EF4444" }}>*</span></label>
                  <textarea rows={6} className="form-input" style={{ resize: "none" }} placeholder="Jelaskan pengaduan Anda secara rinci, termasuk kronologi kejadian, pihak yang terlibat, dan dampak yang ditimbulkan..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem", background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.15)", borderRadius: "0.75rem" }}>
                  <AlertCircle size={16} style={{ color: "#2563EB", marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ color: "#475569", fontSize: "0.78rem", lineHeight: 1.6 }}>Dengan mengirimkan formulir ini, Anda menyatakan bahwa informasi yang disampaikan adalah benar dan dapat dipertanggungjawabkan. Data Anda akan dijaga kerahasiaannya sesuai kebijakan privasi PACER.</p>
                </div>
                <button type="submit" disabled={submitMutation.isPending} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {submitMutation.isPending ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Clock size={16} style={{ animation: "spin 1s linear infinite" }} />Mengirim...
                    </span>
                  ) : "Kirim Pengaduan"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
