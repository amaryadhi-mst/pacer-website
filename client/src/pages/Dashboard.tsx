import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { User, Award, Scale, MessageSquare, Download, ChevronRight, Clock, CheckCircle, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Dashboard() {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const { data: myAppeals } = trpc.appeals.getMyAppeals.useQuery(undefined, { enabled: isAuthenticated });
  const { data: myApplications } = trpc.certifications.myApplications.useQuery(undefined, { enabled: isAuthenticated });

  const handleLogout = async () => {
    await logout();
    navigate("/");
    toast.success("Berhasil logout");
  };

  if (loading) {
    return (
      <div className="silver-bg min-h-screen flex items-center justify-center">
        <div className="silver-card p-8 text-white/50">Memuat dashboard...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="silver-bg min-h-screen flex items-center justify-center">
        <div className="container max-w-lg">
          <div className="silver-card p-10 text-center">
            <User size={48} className="text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Akses Dashboard
            </h2>
            <p className="text-white/50 mb-6">Login untuk mengakses dashboard, riwayat sertifikasi, dan layanan PACER lainnya.</p>
            <a href={getLoginUrl()} className="btn-primary inline-flex">Login / Daftar</a>
          </div>
        </div>
      </div>
    );
  }

  const statusLabels: Record<string, string> = {
    draft: "Draft", submitted: "Diajukan", under_review: "Ditinjau",
    approved: "Disetujui", rejected: "Ditolak", completed: "Selesai",
    pending: "Menunggu", paid: "Lunas",
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <User size={16} /> },
    { id: "certifications", label: "Sertifikasi", icon: <Award size={16} /> },
    { id: "appeals", label: "Banding", icon: <Scale size={16} /> },
    { id: "profile", label: "Profil", icon: <Settings size={16} /> },
  ];

  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="gold-badge mb-2">Dashboard</div>
              <h1 className="text-3xl font-black text-[#0F2557]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Selamat datang, {user?.name || "Pengguna"}
              </h1>
              <p className="text-white/40 text-sm mt-1">{user?.email}</p>
            </div>
            <button onClick={handleLogout} className="btn-outline text-sm flex items-center gap-2">
              <LogOut size={14} />Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-yellow-400 text-[#0d1b2a]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.icon}{tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Aplikasi Sertifikasi", value: myApplications?.length ?? 0, icon: <Award size={20} />, color: "text-blue-400" },
                { label: "Banding Diajukan", value: myAppeals?.length ?? 0, icon: <Scale size={20} />, color: "text-yellow-400" },
                { label: "Sertifikat Aktif", value: myApplications?.filter((a: any) => a.status === "completed").length ?? 0, icon: <CheckCircle size={20} />, color: "text-green-400" },
                { label: "Menunggu Tindakan", value: myApplications?.filter((a: any) => a.status === "draft").length ?? 0, icon: <Clock size={20} />, color: "text-orange-400" },
              ].map((stat) => (
                <div key={stat.label} className="silver-card p-5">
                  <div className={`${stat.color} mb-3`}>{stat.icon}</div>
                  <div className="text-3xl font-black text-[#0F2557] mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="silver-card p-6">
                <div className="gold-badge mb-4">Aplikasi Terbaru</div>
                {myApplications && myApplications.length > 0 ? (
                  <div className="space-y-3">
                    {myApplications.slice(0, 3).map((app: any) => (
                      <div key={app.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-semibold">{app.certificationScheme}</p>
                          <p className="text-white/40 text-xs">{app.auditorLevel}</p>
                        </div>
                        <span className={`status-badge status-${app.status}`}>{statusLabels[app.status] || app.status}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award size={32} className="text-white/20 mx-auto mb-3" />
                    <p className="text-white/40 text-sm">Belum ada aplikasi sertifikasi</p>
                    <a href="/services" className="text-yellow-400 text-sm hover:underline mt-2 inline-block">Daftar Sertifikasi →</a>
                  </div>
                )}
              </div>
              <div className="silver-card p-6">
                <div className="gold-badge mb-4">Akses Cepat</div>
                <div className="space-y-2">
                  {[
                    { label: "Daftar Sertifikasi Baru", href: "/services", icon: <Award size={16} /> },
                    { label: "Ajukan Banding", href: "/appeals", icon: <Scale size={16} /> },
                    { label: "Sampaikan Pengaduan", href: "/complaints", icon: <MessageSquare size={16} /> },
                    { label: "Download Dokumen", href: "/resources/downloads", icon: <Download size={16} /> },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group">
                      <div className="flex items-center gap-3 text-white/60 group-hover:text-white">{item.icon}{item.label}</div>
                      <ChevronRight size={14} className="text-white/20 group-hover:text-yellow-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="gold-badge">Aplikasi Sertifikasi Saya</div>
              <a href="/services" className="btn-primary text-sm">+ Daftar Baru</a>
            </div>
            {myApplications && myApplications.length > 0 ? (
              <div className="space-y-3">
                {myApplications.map((app: any) => (
                  <div key={app.id} className="silver-card p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold">{app.certificationScheme}</h3>
                      <p className="text-white/40 text-sm">{app.auditorLevel} · {new Date(app.createdAt).toLocaleDateString("id-ID")}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`status-badge status-${app.status}`}>{statusLabels[app.status] || app.status}</span>
                      <span className={`text-xs ${app.paymentStatus === "paid" ? "text-green-400" : "text-orange-400"}`}>
                        Bayar: {statusLabels[app.paymentStatus] || app.paymentStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="silver-card p-12 text-center">
                <Award size={48} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/40 mb-4">Belum ada aplikasi sertifikasi</p>
                <a href="/services" className="btn-primary inline-flex">Lihat Program Sertifikasi</a>
              </div>
            )}
          </div>
        )}

        {activeTab === "appeals" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="gold-badge">Riwayat Banding</div>
              <a href="/appeals" className="btn-primary text-sm">+ Ajukan Banding</a>
            </div>
            {myAppeals && myAppeals.length > 0 ? (
              <div className="space-y-3">
                {myAppeals.map((appeal: any) => (
                  <div key={appeal.id} className="silver-card p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-400 font-mono text-sm">{appeal.appealId}</span>
                      <span className={`status-badge status-${appeal.status}`}>{statusLabels[appeal.status] || appeal.status}</span>
                    </div>
                    <p className="text-white font-semibold">{appeal.appealType}</p>
                    <p className="text-white/50 text-sm mt-1 line-clamp-2">{appeal.reason}</p>
                    {appeal.decision && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg">
                        <p className="text-white/40 text-xs mb-1">Keputusan:</p>
                        <p className="text-white/70 text-sm">{appeal.decision}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="silver-card p-12 text-center">
                <Scale size={48} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/40 mb-4">Belum ada banding yang diajukan</p>
                <a href="/appeals" className="btn-primary inline-flex">Ajukan Banding</a>
              </div>
            )}
          </div>
        )}

        {activeTab === "profile" && (
          <div className="max-w-xl">
            <div className="silver-card p-8">
              <div className="gold-badge mb-6">Informasi Profil</div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">{user?.name || "—"}</p>
                    <p className="text-white/40 text-sm">{user?.email || "—"}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-white/40 text-xs mb-1">Role</p>
                    <p className="text-white text-sm font-semibold capitalize">{user?.role || "user"}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-white/40 text-xs mb-1">Login Method</p>
                    <p className="text-white text-sm font-semibold capitalize">{user?.loginMethod || "—"}</p>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-white/40 text-xs mb-1">Bergabung Sejak</p>
                  <p className="text-white text-sm">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" }) : "—"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
