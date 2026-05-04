import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Scale, CheckCircle, AlertCircle, Clock, Lock } from "lucide-react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";

export default function AppealsPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const [form, setForm] = useState({
    certificationRef: "",
    appealType: "certification_decision" as "certification_decision" | "exam_result" | "assessment_process" | "suspension_revocation" | "other",
    reason: "",
    desiredOutcome: "",
  });
  const [submitted, setSubmitted] = useState<{ appealId: string } | null>(null);

  const submitMutation = trpc.appeals.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted({ appealId: data.appealId });
      toast.success("Banding berhasil diajukan!");
    },
    onError: (err) => toast.error("Gagal mengajukan banding: " + err.message),
  });

  const { data: myAppeals } = trpc.appeals.getMyAppeals.useQuery(undefined, { enabled: isAuthenticated });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.reason || form.reason.length < 200) {
      toast.error("Alasan banding minimal 200 karakter.");
      return;
    }
    submitMutation.mutate({
      certificationRef: form.certificationRef || undefined,
      appealType: form.appealType,
      reason: form.reason,
      desiredOutcome: form.desiredOutcome || undefined,
    });
  };

  if (loading) {
    return (
      <div className="silver-bg min-h-screen flex items-center justify-center">
        <div className="silver-card p-8 text-white/50">Memuat...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="silver-bg min-h-screen flex items-center justify-center">
        <div className="container max-w-lg">
          <div className="silver-card p-10 text-center">
            <Lock size={48} className="text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Login Diperlukan
            </h2>
            <p className="text-white/50 mb-6">
              Formulir banding hanya dapat diakses oleh pengguna yang telah login dan memiliki riwayat sertifikasi PACER.
            </p>
            <a href={getLoginUrl()} className="btn-primary inline-flex">Login / Daftar</a>
          </div>
        </div>
      </div>
    );
  }

  const statusLabels: Record<string, string> = {
    submitted: "Diajukan", under_review: "Ditinjau", hearing_scheduled: "Jadwal Sidang",
    decided: "Diputuskan", closed: "Ditutup",
  };

  if (submitted) {
    return (
      <div className="silver-bg min-h-screen flex items-center justify-center">
        <div className="container max-w-lg">
          <div className="silver-card p-10 text-center">
            <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Banding Berhasil Diajukan
            </h2>
            <p className="text-white/50 mb-6">
              Banding Anda telah diterima dan akan ditinjau oleh Komite Banding PACER dalam 10 hari kerja.
            </p>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 mb-6">
              <p className="text-white/50 text-sm mb-1">ID Banding Anda:</p>
              <p className="text-yellow-400 text-2xl font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {submitted.appealId}
              </p>
            </div>
            <button onClick={() => setSubmitted(null)} className="btn-outline">Lihat Riwayat Banding</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><Scale size={12} />Appeals</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Banding (Appeals)</h1>
          <p className="text-white/50 max-w-3xl leading-relaxed">
            Ajukan banding terhadap keputusan sertifikasi, hasil ujian, atau proses asesmen yang Anda anggap tidak adil atau tidak sesuai prosedur.
          </p>
          {user && (
            <div className="mt-4 flex items-center gap-2 text-sm text-white/40">
              <CheckCircle size={14} className="text-green-400" />
              Login sebagai: <span className="text-[#475569]">{user.name || user.email}</span>
            </div>
          )}
        </div>
      </div>

      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Panel */}
          <div className="space-y-6">
            <div className="silver-card p-6">
              <div className="gold-badge mb-4">Prosedur Banding</div>
              <div className="space-y-0">
                {[
                  "Pastikan Anda telah menerima keputusan resmi dari PACER",
                  "Ajukan banding dalam 30 hari setelah keputusan diterima",
                  "Isi formulir dengan alasan banding yang jelas dan detail (min. 200 karakter)",
                  "Komite Banding akan meninjau dalam 10 hari kerja",
                  "Sidang banding dapat dijadwalkan jika diperlukan",
                  "Keputusan banding bersifat final",
                ].map((step, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="text-white/50 text-sm pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="silver-card p-6">
              <AlertCircle size={20} className="text-yellow-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Biaya Banding</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Pengajuan banding dikenakan biaya administrasi yang akan dikembalikan jika banding dikabulkan. Hubungi kami untuk informasi biaya terkini.
              </p>
            </div>

            {myAppeals && myAppeals.length > 0 && (
              <div className="silver-card p-6">
                <div className="gold-badge mb-4">Riwayat Banding</div>
                <div className="space-y-3">
                  {myAppeals.map((a: any) => (
                    <div key={a.id} className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-yellow-400 text-xs font-mono">{a.appealId}</span>
                        <span className={`status-badge status-${a.status}`}>{statusLabels[a.status] || a.status}</span>
                      </div>
                      <p className="text-white/40 text-xs">{a.appealType}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="silver-card p-8">
              <div className="gold-badge mb-6">Formulir Banding</div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Referensi Sertifikasi</label>
                    <input type="text" className="form-input" placeholder="Nomor sertifikat / aplikasi" value={form.certificationRef} onChange={(e) => setForm({ ...form, certificationRef: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Jenis Banding <span className="text-red-400">*</span></label>
                    <select className="form-input" value={form.appealType} onChange={(e) => setForm({ ...form, appealType: e.target.value as any })}>
                      <option value="certification_decision">Keputusan Sertifikasi</option>
                      <option value="exam_result">Hasil Ujian</option>
                      <option value="assessment_process">Proses Asesmen</option>
                      <option value="suspension_revocation">Suspensi/Pencabutan</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Alasan Banding <span className="text-red-400">*</span>
                    <span className="text-white/30 ml-1">(min. 200 karakter)</span>
                  </label>
                  <textarea
                    rows={8}
                    className="form-input resize-none"
                    placeholder="Jelaskan alasan banding Anda secara detail dan komprehensif, termasuk dasar hukum atau prosedur yang dilanggar, bukti yang mendukung, dan argumen mengapa keputusan tersebut perlu ditinjau ulang..."
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    required
                  />
                  <p className="text-white/30 text-xs mt-1">{form.reason.length}/200 karakter minimum</p>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Hasil yang Diharapkan</label>
                  <textarea
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Apa hasil yang Anda harapkan dari proses banding ini?"
                    value={form.desiredOutcome}
                    onChange={(e) => setForm({ ...form, desiredOutcome: e.target.value })}
                  />
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <AlertCircle size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <p className="text-white/50 text-xs leading-relaxed">
                    Dengan mengajukan banding, Anda menyatakan bahwa informasi yang disampaikan adalah benar. Banding yang tidak berdasar dapat mempengaruhi status sertifikasi Anda.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={submitMutation.isPending || form.reason.length < 200}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitMutation.isPending
                    ? <span className="flex items-center gap-2"><Clock size={16} className="animate-spin" />Mengirim...</span>
                    : "Ajukan Banding"
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
