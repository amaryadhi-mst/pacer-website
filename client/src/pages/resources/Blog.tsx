import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { FileText, Calendar, ArrowRight } from "lucide-react";
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
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><FileText size={12} />Blog & Artikel</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Blog & Artikel</h1>
          <p className="text-white/50 max-w-2xl">Wawasan, tips, dan update terkini seputar sertifikasi profesi, sistem manajemen ISO, dan pengembangan karir.</p>
        </div>
      </div>
      <div className="container py-16">
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">{[1,2,3].map(i => <div key={i} className="silver-card p-6 h-48 animate-pulse" />)}</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {displayPosts.map((post: any) => (
              <Link key={post.id} href={`/resources/blog/${post.slug}`}>
                <a className="silver-card p-6 block">
                  <div className="gold-badge mb-3 text-xs">{categoryLabels[post.category] || post.category}</div>
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">{post.title}</h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.publishedAt).toLocaleDateString("id-ID")}</span>
                    <span className="flex items-center gap-1 text-yellow-400">Baca <ArrowRight size={12} /></span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
