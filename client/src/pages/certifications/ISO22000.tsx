import CertificationPage, { CertScheme } from "@/components/CertificationPage";
const scheme: CertScheme = {
  code: "ISO 22000",
  title: "Auditor Sistem Manajemen Keamanan Pangan",
  standard: "ISO 22000:2018",
  description: "Sertifikasi Auditor Sistem Manajemen Keamanan Pangan (SMKP) berdasarkan ISO 22000:2018 yang terakreditasi KAN. Program ini memastikan kompetensi auditor dalam mengevaluasi sistem manajemen keamanan pangan di sepanjang rantai pasok.",
  levels: [
    { name: "Auditor Provisional SMKP", code: "AP-SMKP", colorClass: "level-1", requirements: ["Pendidikan minimal D3/S1 pangan/terkait", "Pelatihan interpretasi ISO 22000 (min. 16 jam)", "Pelatihan teknik audit (min. 16 jam)", "Pemahaman HACCP dan regulasi pangan"], examFormat: "Ujian tulis + wawancara kompetensi", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor SMKP", code: "A-SMKP", colorClass: "level-2", requirements: ["Sertifikat AP-SMKP atau setara", "Pengalaman audit SMKP min. 3 hari audit penuh", "Pengetahuan regulasi pangan Indonesia dan Codex", "Pengalaman di industri pangan min. 2 tahun"], examFormat: "Ujian tulis + demonstrasi audit + portofolio", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor Utama SMKP", code: "AU-SMKP", colorClass: "level-3", requirements: ["Sertifikat A-SMKP yang masih berlaku", "Memimpin audit SMKP min. 5 hari audit penuh", "Min. 3 audit lengkap sebagai ketua tim", "Pengalaman manajemen keamanan pangan min. 5 tahun"], examFormat: "Ujian tulis + studi kasus + wawancara panel", validity: "3 tahun", fee: "Hubungi kami" },
  ],
  eligibility: ["WNI atau WNA berdomisili di Indonesia", "Pendidikan minimal D3 pangan/pertanian/terkait", "Tidak sedang dalam sanksi profesi", "Bersedia menandatangani kode etik auditor", "Melengkapi dokumen pendaftaran"],
  process: ["Pendaftaran online dan pengisian formulir", "Verifikasi dokumen (3-5 hari kerja)", "Pembayaran dan konfirmasi jadwal", "Pelaksanaan asesmen", "Evaluasi Komite Teknis", "Penerbitan sertifikat", "Pemeliharaan dan resertifikasi"],
  benefits: ["Diakui KAN dan internasional", "Relevan untuk industri pangan, F&B, agribisnis", "Peluang karir di perusahaan multinasional pangan", "Akses jaringan profesional keamanan pangan Indonesia", "Program CPD dengan update regulasi pangan", "Sertifikat digital terverifikasi"],
};
export default function ISO22000() { return <CertificationPage scheme={scheme} />; }
