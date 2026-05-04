import CertificationPage, { CertScheme } from "@/components/CertificationPage";

const scheme: CertScheme = {
  code: "ISO 9001",
  title: "Auditor Sistem Manajemen Mutu",
  standard: "ISO 9001:2015",
  description: "Sertifikasi Auditor Sistem Manajemen Mutu (SMM) berdasarkan ISO 9001:2015 yang terakreditasi KAN. Program ini dirancang untuk memastikan kompetensi auditor dalam melaksanakan audit sistem manajemen mutu secara efektif, objektif, dan profesional sesuai persyaratan ISO/IEC 17021-1.",
  levels: [
    {
      name: "Auditor Provisional SMM",
      code: "AP-SMM",
      colorClass: "level-1",
      requirements: [
        "Pendidikan minimal D3/S1 semua jurusan",
        "Memahami persyaratan ISO 9001:2015",
        "Mengikuti pelatihan interpretasi ISO 9001 (min. 16 jam)",
        "Mengikuti pelatihan teknik audit (min. 16 jam)",
      ],
      examFormat: "Ujian tulis (pilihan ganda & esai) + wawancara kompetensi",
      validity: "3 tahun",
      fee: "Hubungi kami",
    },
    {
      name: "Auditor SMM",
      code: "A-SMM",
      colorClass: "level-2",
      requirements: [
        "Memiliki sertifikat Auditor Provisional SMM atau setara",
        "Pengalaman audit minimal 3 hari audit penuh sebagai anggota tim",
        "Mengikuti pelatihan lanjutan teknik audit (min. 16 jam)",
        "Memiliki pengalaman kerja di bidang sistem manajemen mutu",
      ],
      examFormat: "Ujian tulis + demonstrasi audit + portofolio pengalaman",
      validity: "3 tahun",
      fee: "Hubungi kami",
    },
    {
      name: "Auditor Utama SMM",
      code: "AU-SMM",
      colorClass: "level-3",
      requirements: [
        "Memiliki sertifikat Auditor SMM yang masih berlaku",
        "Pengalaman memimpin audit minimal 5 hari audit penuh",
        "Minimal 3 audit lengkap sebagai ketua tim audit",
        "Pengalaman kerja di bidang manajemen mutu minimal 5 tahun",
      ],
      examFormat: "Ujian tulis + studi kasus kepemimpinan audit + wawancara panel",
      validity: "3 tahun",
      fee: "Hubungi kami",
    },
  ],
  eligibility: [
    "Warga Negara Indonesia atau asing yang berdomisili di Indonesia",
    "Pendidikan minimal D3 untuk tingkat Provisional, S1 untuk Auditor dan Auditor Utama",
    "Tidak sedang dalam sanksi atau hukuman yang berkaitan dengan profesi",
    "Bersedia menandatangani kode etik auditor PACER",
    "Melengkapi formulir pendaftaran dan dokumen pendukung yang dipersyaratkan",
  ],
  process: [
    "Pendaftaran online melalui portal PACER dan pengisian formulir aplikasi",
    "Verifikasi kelengkapan dokumen dan persyaratan oleh tim PACER (3-5 hari kerja)",
    "Pembayaran biaya sertifikasi dan konfirmasi jadwal asesmen",
    "Pelaksanaan asesmen: ujian tulis, demonstrasi, dan/atau wawancara kompetensi",
    "Evaluasi hasil asesmen oleh Komite Teknis PACER",
    "Penerbitan sertifikat (jika lulus) atau notifikasi remedial (jika belum lulus)",
    "Pemeliharaan sertifikat: laporan aktivitas tahunan dan resertifikasi setiap 3 tahun",
  ],
  benefits: [
    "Diakui secara nasional oleh KAN dan internasional melalui jaringan MRA",
    "Meningkatkan kredibilitas dan nilai jual profesional di pasar kerja",
    "Membuka peluang karir sebagai auditor independen atau konsultan",
    "Akses ke jaringan profesional auditor sistem manajemen mutu Indonesia",
    "Pembaruan pengetahuan melalui program CPD (Continuing Professional Development)",
    "Sertifikat digital dengan QR Code untuk verifikasi keaslian",
  ],
  faq: [
    {
      q: "Berapa lama proses sertifikasi dari pendaftaran hingga terbit sertifikat?",
      a: "Proses sertifikasi umumnya memakan waktu 4-8 minggu tergantung kelengkapan dokumen dan jadwal asesmen. Setelah semua dokumen lengkap dan pembayaran dikonfirmasi, jadwal asesmen akan ditetapkan dalam 2-3 minggu.",
    },
    {
      q: "Apakah sertifikat PACER diakui oleh perusahaan multinasional?",
      a: "Ya, sertifikat PACER diakui secara internasional karena PACER terakreditasi KAN yang merupakan anggota IAF (International Accreditation Forum) melalui skema MLA (Multilateral Recognition Arrangement).",
    },
    {
      q: "Apa yang terjadi jika saya tidak lulus ujian?",
      a: "Peserta yang belum lulus dapat mengajukan remedial assessment dalam jangka waktu 6 bulan setelah asesmen pertama dengan biaya yang lebih terjangkau. Peserta juga akan mendapatkan feedback detail mengenai area yang perlu ditingkatkan.",
    },
    {
      q: "Bagaimana cara mempertahankan sertifikat setelah 3 tahun?",
      a: "Pemegang sertifikat wajib menyampaikan laporan aktivitas audit tahunan (surveillance) dan mengikuti resertifikasi setiap 3 tahun. Program CPD (Continuing Professional Development) tersedia untuk membantu pemeliharaan kompetensi.",
    },
  ],
};

export default function ISO9001() {
  return <CertificationPage scheme={scheme} />;
}
