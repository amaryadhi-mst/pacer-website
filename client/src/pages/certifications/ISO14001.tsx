import CertificationPage, { CertScheme } from "@/components/CertificationPage";
const scheme: CertScheme = {
  code: "ISO 14001",
  title: "Auditor Sistem Manajemen Lingkungan",
  standard: "ISO 14001:2015",
  description: "Sertifikasi Auditor Sistem Manajemen Lingkungan (SML) berdasarkan ISO 14001:2015 yang terakreditasi KAN. Program ini memastikan kompetensi auditor dalam mengevaluasi efektivitas sistem manajemen lingkungan organisasi.",
  levels: [
    { name: "Auditor Provisional SML", code: "AP-SML", colorClass: "level-1", requirements: ["Pendidikan minimal D3/S1", "Pelatihan interpretasi ISO 14001 (min. 16 jam)", "Pelatihan teknik audit (min. 16 jam)", "Memahami persyaratan regulasi lingkungan"], examFormat: "Ujian tulis + wawancara kompetensi", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor SML", code: "A-SML", colorClass: "level-2", requirements: ["Sertifikat Auditor Provisional SML", "Pengalaman audit min. 3 hari audit penuh", "Pengetahuan regulasi lingkungan hidup Indonesia", "Pengalaman di bidang lingkungan min. 2 tahun"], examFormat: "Ujian tulis + demonstrasi audit + portofolio", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor Utama SML", code: "AU-SML", colorClass: "level-3", requirements: ["Sertifikat Auditor SML yang masih berlaku", "Memimpin audit min. 5 hari audit penuh", "Min. 3 audit lengkap sebagai ketua tim", "Pengalaman manajemen lingkungan min. 5 tahun"], examFormat: "Ujian tulis + studi kasus + wawancara panel", validity: "3 tahun", fee: "Hubungi kami" },
  ],
  eligibility: ["Warga Negara Indonesia atau asing berdomisili di Indonesia", "Pendidikan minimal D3 untuk Provisional, S1 untuk Auditor/Auditor Utama", "Tidak sedang dalam sanksi profesi", "Bersedia menandatangani kode etik auditor PACER", "Melengkapi dokumen pendaftaran yang dipersyaratkan"],
  process: ["Pendaftaran online dan pengisian formulir aplikasi", "Verifikasi dokumen oleh tim PACER (3-5 hari kerja)", "Pembayaran biaya dan konfirmasi jadwal asesmen", "Pelaksanaan asesmen: ujian tulis dan wawancara", "Evaluasi oleh Komite Teknis PACER", "Penerbitan sertifikat atau notifikasi remedial", "Pemeliharaan: laporan tahunan dan resertifikasi 3 tahun"],
  benefits: ["Diakui KAN dan internasional melalui MRA", "Meningkatkan kredibilitas sebagai auditor lingkungan", "Peluang karir di bidang lingkungan hidup dan sustainability", "Akses jaringan profesional auditor lingkungan Indonesia", "Program CPD untuk pembaruan pengetahuan", "Sertifikat digital dengan QR Code verifikasi"],
  faq: [{ q: "Apakah diperlukan latar belakang teknik lingkungan?", a: "Tidak wajib, namun pemahaman tentang regulasi lingkungan hidup Indonesia dan aspek teknis lingkungan akan sangat membantu dalam proses asesmen." }],
};
export default function ISO14001() { return <CertificationPage scheme={scheme} />; }
