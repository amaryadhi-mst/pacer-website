import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { FileText, Calendar, ArrowRight } from "lucide-react";

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
  certification_insights: { color: "#1D4ED8", bg: "#EFF6FF", border: "rgba(37,99,235,0.20)" },
  career_tips: { color: "#065F46", bg: "#ECFDF5", border: "rgba(16,185,129,0.20)" },
  industry_updates: { color: "#92400E", bg: "#FFFBEB", border: "rgba(245,158,11,0.20)" },
  training_methodologies: { color: "#4C1D95", bg: "#F5F3FF", border: "rgba(139,92,246,0.20)" },
};

export default function Blog() {
  const { data: posts, isLoading } = trpc.blog.list.useQuery();
  const samplePosts = [
    { id: 1, title: "Memahami Persyaratan ISO 9001:2015 untuk Auditor Baru", excerpt: "Panduan lengkap memahami klausul-klausul kunci ISO 9001:2015 yang wajib dikuasai oleh setiap auditor sistem manajemen mutu.", category: "certification_insights", authorName: "Tim PACER", publishedAt: new Date("2025-03-15"), slug: "memahami-iso-9001-2015" },
    { id: 2, title: "5 Tips Sukses Menghadapi Ujian Sertifikasi Auditor", excerpt: "Strategi dan tips praktis untuk mempersiapkan diri menghadapi ujian sertifikasi auditor sistem manajemen dengan lebih percaya diri.", category: "career_tips", authorName: "Tim PACER", publishedAt: new Date("2025-02-20"), slug: "tips-ujian-sertifikasi" },
    { id: 3, title: "Tren Sistem Manajemen ISO di Indonesia 2025", excerpt: "Perkembangan terkini implementasi sistem manajemen ISO di berbagai sektor industri Indonesia dan implikasinya bagi para profesional.", category: "industry_updates", authorName: "Tim PACER", publishedAt: new Date("2025-01-10"), slug: "tren-iso-indonesia-2025" },
  ];
  const displayPosts = (posts && posts.length > 0) ? posts : samplePosts;
  const categoryLabels: Record<string, string> = { certification_insights: "Certification Insights", career_tips: "Career Tips", industry_updates: "Industry Updates", training_methodologies: "Training" };

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
            <FileText size={12} /> Blog & Artikel
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.03em" }}>
            Blog & Artikel
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "580px", lineHeight: 1.7 }}>
            Wawasan, tips, dan update terkini seputar sertifikasi profesi, sistem manajemen ISO, dan pengembangan karir.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        {isLoading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[1, 2, 3].map(i => (
              <div key={i} className="silver-card" style={{ padding: "1.5rem", height: "12rem", background: "#F1F5FF" }} />
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {displayPosts.map((post: any) => {
              const cat = categoryColors[post.category] || categoryColors.certification_insights;
              return (
                <Link key={post.id} href={`/resources/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div className="silver-card" style={{ padding: "1.5rem", cursor: "pointer", height: "100%" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center",
                      padding: "0.25rem 0.65rem", borderRadius: "99px",
                      background: cat.bg, border: `1px solid ${cat.border}`,
                      color: cat.color, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em",
                      textTransform: "uppercase", marginBottom: "0.875rem",
                    }}>
                      {categoryLabels[post.category] || post.category}
                    </div>
                    <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F2557", fontSize: "1rem", marginBottom: "0.75rem", lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: "#64748B", fontSize: "0.875rem", marginBottom: "1.25rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#94A3B8" }}>
                        <Calendar size={12} />{new Date(post.publishedAt).toLocaleDateString("id-ID")}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#F59E0B", fontWeight: 600 }}>
                        Baca <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
