import CertificationPage, { CertScheme } from "@/components/CertificationPage";
const scheme: CertScheme = {
  code: "ISO 45001",
  title: "Auditor Sistem Manajemen K3",
  standard: "ISO 45001:2018",
  description: "Sertifikasi Auditor Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) berdasarkan ISO 45001:2018 yang terakreditasi KAN. Program ini memastikan kompetensi auditor dalam mengevaluasi sistem manajemen K3 organisasi.",
  levels: [
    { name: "Auditor Provisional SMK3", code: "AP-K3", colorClass: "level-1", requirements: ["Pendidikan minimal D3/S1", "Pelatihan interpretasi ISO 45001 (min. 16 jam)", "Pelatihan teknik audit (min. 16 jam)", "Memahami regulasi K3 Indonesia (PP 50/2012, dll)"], examFormat: "Ujian tulis + wawancara kompetensi", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor SMK3", code: "A-K3", colorClass: "level-2", requirements: ["Sertifikat AP-K3 atau setara", "Pengalaman audit K3 min. 3 hari audit penuh", "Pengetahuan regulasi K3 Indonesia", "Pengalaman di bidang K3 min. 2 tahun"], examFormat: "Ujian tulis + demonstrasi audit + portofolio", validity: "3 tahun", fee: "Hubungi kami" },
    { name: "Auditor Utama SMK3", code: "AU-K3", colorClass: "level-3", requirements: ["Sertifikat A-K3 yang masih berlaku", "Memimpin audit K3 min. 5 hari audit penuh", "Min. 3 audit lengkap sebagai ketua tim", "Pengalaman manajemen K3 min. 5 tahun"], examFormat: "Ujian tulis + studi kasus + wawancara panel", validity: "3 tahun", fee: "Hubungi kami" },
  ],
  eligibility: ["WNI atau WNA berdomisili di Indonesia", "Pendidikan minimal D3/S1", "Tidak sedang dalam sanksi profesi", "Bersedia menandatangani kode etik auditor", "Melengkapi dokumen pendaftaran"],
  process: ["Pendaftaran online dan pengisian formulir", "Verifikasi dokumen (3-5 hari kerja)", "Pembayaran dan konfirmasi jadwal", "Pelaksanaan asesmen", "Evaluasi Komite Teknis", "Penerbitan sertifikat", "Pemeliharaan dan resertifikasi"],
  benefits: ["Diakui KAN dan internasional", "Meningkatkan kompetensi sebagai auditor K3", "Peluang karir di industri manufaktur, konstruksi, migas", "Akses jaringan profesional K3 Indonesia", "Program CPD berkelanjutan", "Sertifikat digital terverifikasi"],
};
export default function ISO45001() { return <CertificationPage scheme={scheme} />; }
