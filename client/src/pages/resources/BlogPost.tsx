import { useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
export default function BlogPost() {
  const [, params] = useRoute("/resources/blog/:slug");
  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery({ slug: params?.slug ?? "" }, { enabled: !!params?.slug });
  return (
    <div className="silver-bg min-h-screen">
      <div className="container py-16 max-w-3xl">
        <Link href="/resources/blog" className="flex items-center gap-2 text-white/50 hover:text-white mb-8 text-sm"><ArrowLeft size={16} />Kembali ke Blog</Link>
        {isLoading ? <div className="silver-card p-8 h-96 animate-pulse" /> : post ? (
          <article className="silver-card p-8">
            <div className="gold-badge mb-4">{post.category}</div>
            <h1 className="text-4xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>{post.title}</h1>
            <p className="text-white/30 text-sm mb-8">Oleh {post.authorName} · {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("id-ID") : ""}</p>
            <div className="prose prose-invert max-w-none text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        ) : (
          <div className="silver-card p-8 text-center text-white/50">Artikel tidak ditemukan.</div>
        )}
      </div>
    </div>
  );
}
