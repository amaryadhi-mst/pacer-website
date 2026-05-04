import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { CreditCard, Lock, CheckCircle, ArrowRight, Shield, Award, BookOpen } from "lucide-react";
import { toast } from "sonner";

const CATEGORY_LABELS: Record<string, string> = {
  certification: "Sertifikasi Profesi",
  appeal: "Pengajuan Banding",
  training: "Pelatihan Profesional",
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  certification: <Award size={20} />,
  appeal: <Shield size={20} />,
  training: <BookOpen size={20} />,
};

function formatIDR(amount: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount);
}

export default function PaymentPage() {
  const { isAuthenticated, loading } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<"certification" | "appeal" | "training">("certification");
  const [selectedKey, setSelectedKey] = useState<string>("");

  const { data: products, isLoading: productsLoading } = trpc.payments.getProductList.useQuery({ category: selectedCategory });

  const checkoutMutation = trpc.payments.createCheckout.useMutation({
    onSuccess: (data) => {
      if (data.checkoutUrl) {
        toast.info("Mengalihkan ke halaman pembayaran Stripe...");
        window.open(data.checkoutUrl, "_blank");
      }
    },
    onError: (err) => toast.error("Gagal membuat sesi pembayaran: " + err.message),
  });

  const handleCheckout = () => {
    if (!selectedKey) {
      toast.error("Pilih produk terlebih dahulu.");
      return;
    }
    checkoutMutation.mutate({
      productCategory: selectedCategory,
      productKey: selectedKey,
      origin: window.location.origin,
    });
  };

  const selectedProduct = products?.find((p) => p.key === selectedKey);

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
            <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Login Diperlukan</h2>
            <p className="text-white/50 mb-6">Silahkan login untuk melanjutkan proses pembayaran.</p>
            <a href={getLoginUrl()} className="btn-primary inline-flex">Login / Daftar</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="silver-bg min-h-screen">
      <div className="page-header silver-bg">
        <div className="container">
          <div className="gold-badge mb-4"><CreditCard size={12} />Pembayaran</div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Pembayaran Layanan</h1>
          <p className="text-white/50 max-w-2xl">Pilih layanan yang ingin Anda bayarkan. Pembayaran diproses secara aman melalui Stripe.</p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Product Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Tabs */}
            <div>
              <div className="gold-badge mb-4">Kategori Layanan</div>
              <div className="grid grid-cols-3 gap-3">
                {(["certification", "appeal", "training"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setSelectedKey(""); }}
                    className={`silver-card p-4 text-center transition-all ${selectedCategory === cat ? "border-yellow-400/50 bg-yellow-400/5" : "hover:border-white/20"}`}
                  >
                    <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center ${selectedCategory === cat ? "bg-yellow-400/20 text-yellow-400" : "bg-white/5 text-white/40"}`}>
                      {CATEGORY_ICONS[cat]}
                    </div>
                    <p className={`text-xs font-semibold ${selectedCategory === cat ? "text-yellow-400" : "text-[#64748B]"}`}>{CATEGORY_LABELS[cat]}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Product List */}
            <div>
              <div className="gold-badge mb-4">Pilih Produk</div>
              {productsLoading ? (
                <div className="text-white/40 text-sm">Memuat produk...</div>
              ) : (
                <div className="space-y-3">
                  {products?.map((product) => (
                    <button
                      key={product.key}
                      onClick={() => setSelectedKey(product.key)}
                      className={`w-full silver-card p-4 text-left transition-all ${selectedKey === product.key ? "border-yellow-400/50 bg-yellow-400/5" : "hover:border-white/20"}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold text-sm mb-1 ${selectedKey === product.key ? "text-yellow-400" : "text-[#0F2557]"}`}>{product.name}</h3>
                          <p className="text-white/40 text-xs leading-relaxed">{product.description}</p>
                        </div>
                        <div className="ml-4 text-right shrink-0">
                          <p className="text-yellow-400 font-black text-sm">{formatIDR(product.amount)}</p>
                          <p className="text-white/30 text-xs">{product.currency.toUpperCase()}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-4">
            <div className="silver-card p-6">
              <div className="gold-badge mb-4">Ringkasan Pesanan</div>
              {selectedProduct ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-white/40 text-xs mb-1">Produk</p>
                    <p className="text-white font-semibold text-sm">{selectedProduct.name}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-1">Kategori</p>
                    <p className="text-white/70 text-sm">{CATEGORY_LABELS[selectedProduct.category]}</p>
                  </div>
                  <div className="gold-line-full" />
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-sm">Total</p>
                    <p className="text-yellow-400 font-black text-xl">{formatIDR(selectedProduct.amount)}</p>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={checkoutMutation.isPending}
                    className="btn-primary w-full justify-center"
                  >
                    {checkoutMutation.isPending ? "Memproses..." : (
                      <><CreditCard size={16} />Bayar Sekarang<ArrowRight size={14} /></>
                    )}
                  </button>
                  <p className="text-white/30 text-xs text-center">Pembayaran aman via Stripe. Gunakan kartu 4242 4242 4242 4242 untuk testing.</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard size={32} className="text-white/20 mx-auto mb-3" />
                  <p className="text-white/40 text-sm">Pilih produk untuk melihat ringkasan pesanan</p>
                </div>
              )}
            </div>

            {/* Security Info */}
            <div className="silver-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <Lock size={16} className="text-yellow-400" />
                <p className="text-white font-semibold text-sm">Pembayaran Aman</p>
              </div>
              <ul className="space-y-2 text-white/40 text-xs">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-green-400 shrink-0" />Diproses oleh Stripe (PCI DSS Level 1)</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-green-400 shrink-0" />Data kartu tidak disimpan di server kami</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-green-400 shrink-0" />Enkripsi SSL 256-bit</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-green-400 shrink-0" />Konfirmasi email otomatis</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="silver-card p-4">
              <p className="text-white/40 text-xs">Pertanyaan tentang pembayaran? Hubungi kami di <a href="mailto:info@pacer.co.id" className="text-yellow-400 hover:underline">info@pacer.co.id</a> atau <span className="text-yellow-400">0251-8340450</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
