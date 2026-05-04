import CertificationPage, { CertScheme } from "@/components/CertificationPage";
const scheme: CertScheme = {
  code: "ISO 27001",
  title: "Auditor Sistem Manajemen Keamanan Informasi",
  standard: "ISO/IEC 27001:2022",
  description: "Sertifikasi Auditor Sistem Manajemen Keamanan Informasi (SMKI) berdasarkan ISO/IEC 27001:2022 yang terakreditasi KAN. Program ini memastikan kompetensi auditor dalam mengevaluasi sistem manajemen keamanan informasi organisasi.",
  levels: [
    { name: "Auditor Provisional SMKI", code: "AP-SMKI", colorClass: "level-4", requirements: ["Pendidikan minimal D3/S1 IT atau terkait", "Pelatihan interpretasi ISO 27001 (min. 16 jam)", "Pelatihan teknik audit (min. 16 jam)", "Pemahaman dasar keamanan informasi"], examFormat: "Ujian tulis + wawancara kompetensi", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor SMKI", code: "A-SMKI", colorClass: "level-2", requirements: ["Sertifikat AP-SMKI atau setara", "Pengalaman audit SMKI min. 3 hari audit penuh", "Pengetahuan regulasi keamanan informasi", "Pengalaman di bidang IT/keamanan informasi min. 2 tahun"], examFormat: "Ujian tulis + demonstrasi audit + portofolio", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor Utama SMKI", code: "AU-SMKI", colorClass: "level-3", requirements: ["Sertifikat A-SMKI yang masih berlaku", "Memimpin audit SMKI min. 5 hari audit penuh", "Min. 3 audit lengkap sebagai ketua tim", "Pengalaman manajemen keamanan informasi min. 5 tahun"], examFormat: "Ujian tulis + studi kasus + wawancara panel", validity: "3 tahun", fee: "Hubungi kami" },
  ],
  eligibility: ["WNI atau WNA berdomisili di Indonesia", "Pendidikan minimal D3 IT/terkait", "Tidak sedang dalam sanksi profesi", "Bersedia menandatangani kode etik auditor", "Melengkapi dokumen pendaftaran"],
  process: ["Pendaftaran online dan pengisian formulir", "Verifikasi dokumen (3-5 hari kerja)", "Pembayaran dan konfirmasi jadwal", "Pelaksanaan asesmen", "Evaluasi Komite Teknis", "Penerbitan sertifikat", "Pemeliharaan dan resertifikasi"],
  benefits: ["Diakui KAN dan internasional", "Relevan dengan era transformasi digital", "Peluang karir di perbankan, fintech, pemerintahan", "Akses jaringan profesional keamanan informasi", "Program CPD dengan update teknologi terkini", "Sertifikat digital terverifikasi"],
};
export default function ISO27001() { return <CertificationPage scheme={scheme} />; }
