import { Link } from "wouter";
import { ArrowRight, CheckCircle, FileText, Clock, DollarSign, Award, Users, BookOpen, AlertCircle } from "lucide-react";

export interface CertScheme {
  code: string;
  title: string;
  standard: string;
  description: string;
  levels: {
    name: string;
    code: string;
    requirements: string[];
    examFormat: string;
    validity: string;
    fee: string;
    colorClass: string;
  }[];
  eligibility: string[];
  process: string[];
  benefits: string[];
  faq?: { q: string; a: string }[];
}

export default function CertificationPage({ scheme }: { scheme: CertScheme }) {
  return (
    <div className="silver-bg min-h-screen">
      {/* Header */}
      <div className="page-header silver-bg">
        <div className="container">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-yellow-400">{scheme.code}</span>
          </div>
          <div className="gold-badge mb-4">
            <Award size={12} />
            Sertifikasi Profesi — KAN Accredited
          </div>
          <h1 className="text-5xl font-black text-[#0F2557] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {scheme.code}
          </h1>
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4">{scheme.title}</h2>
          <p className="text-white/50 max-w-3xl leading-relaxed">{scheme.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dashboard" className="btn-primary">
                Daftar Sekarang
                <ArrowRight size={16} />
              </Link>
            <Link href="/resources/downloads" className="btn-outline">
                <FileText size={16} />
                Download Skema
              </Link>
          </div>
        </div>
      </div>

      <div className="container py-16 space-y-16">
        {/* Certification Levels */}
        <section>
          <div className="gold-badge mb-6">Tingkat Sertifikasi</div>
          <h2 className="text-3xl font-black text-[#0F2557] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Skema & Tingkatan Sertifikasi
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {scheme.levels.map((level) => (
              <div key={level.code} className="silver-card p-6">
                <div className={`level-badge ${level.colorClass} mb-4`}>{level.code}</div>
                <h3 className="text-white font-bold text-lg mb-4">{level.name}</h3>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Clock size={14} className="text-yellow-400/70 shrink-0" />
                    <span>Masa berlaku: <span className="text-[#475569]">{level.validity}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <DollarSign size={14} className="text-yellow-400/70 shrink-0" />
                    <span>Biaya: <span className="text-[#475569]">{level.fee}</span></span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-white/50">
                    <BookOpen size={14} className="text-yellow-400/70 shrink-0 mt-0.5" />
                    <span>Ujian: <span className="text-[#475569]">{level.examFormat}</span></span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">Persyaratan</p>
                  <ul className="space-y-2">
                    {level.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                        <CheckCircle size={13} className="text-yellow-400/70 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility & Process */}
        <div className="grid lg:grid-cols-2 gap-10">
          <section>
            <div className="gold-badge mb-4">Persyaratan Umum</div>
            <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Persyaratan Pendaftaran
            </h2>
            <div className="space-y-3">
              {scheme.eligibility.map((item, i) => (
                <div key={i} className="flex items-start gap-3 silver-card p-4">
                  <div className="w-6 h-6 rounded-full bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center text-yellow-400 text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="gold-badge mb-4">Proses Sertifikasi</div>
            <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Tahapan Sertifikasi
            </h2>
            <div className="space-y-0">
              {scheme.process.map((step, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <p className="text-white/60 text-sm leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Benefits */}
        <section>
          <div className="gold-badge mb-4">Manfaat</div>
          <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Manfaat Sertifikasi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheme.benefits.map((benefit, i) => (
              <div key={i} className="silver-card p-4 flex items-start gap-3">
                <CheckCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {scheme.faq && scheme.faq.length > 0 && (
          <section>
            <div className="gold-badge mb-4">FAQ</div>
            <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Pertanyaan Umum
            </h2>
            <div className="space-y-3">
              {scheme.faq.map((item, i) => (
                <details key={i} className="silver-card group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-semibold">
                    <span className="flex items-center gap-2">
                      <AlertCircle size={16} className="text-yellow-400/70 shrink-0" />
                      {item.q}
                    </span>
                    <ArrowRight size={16} className="text-white/30 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="silver-card p-10 text-center">
          <h2 className="text-3xl font-black text-[#0F2557] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Siap Mendaftar Sertifikasi <span className="text-yellow-400">{scheme.code}</span>?
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis atau langsung daftarkan diri Anda melalui portal online PACER.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary">
                Daftar Sekarang
                <ArrowRight size={16} />
              </Link>
            <Link href="/about/contact" className="btn-outline">
                Konsultasi Gratis
              </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
