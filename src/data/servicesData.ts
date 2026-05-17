import { Building2, Home, Ruler, HardHat, PaintBucket, Wrench } from "lucide-react";

export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceWorkflowStep = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type RelatedProject = {
  title: string;
  category: string;
  image: string;
};

export type ServiceData = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  features: ServiceFeature[];
  workflow: ServiceWorkflowStep[];
  faq: ServiceFAQ[];
  relatedProjects: RelatedProject[];
};

export const servicesData: Record<string, ServiceData> = {
  "desain-arsitektur": {
    id: "desain-arsitektur",
    slug: "desain-arsitektur",
    title: "Desain Arsitektur",
    shortDescription: "Perencanaan dan perancangan desain arsitektur yang inovatif, fungsional, dan estetis untuk berbagai tipe bangunan.",
    fullDescription: "Kami menyediakan layanan desain arsitektur premium yang berfokus pada penciptaan ruang yang tidak hanya indah dipandang, tetapi juga sangat fungsional dan berkelanjutan. Tim arsitek kami akan bekerja sama dengan Anda untuk mewujudkan visi Anda menjadi kenyataan yang presisi, mulai dari sketsa awal hingga render 3D fotorealistik yang memukau.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Desain Kustom 3D", description: "Visualisasi detail fasad dan tata ruang dengan kualitas fotorealistik." },
      { title: "Fungsionalitas Optimal", description: "Perencanaan ruang yang efisien sesuai dengan kebutuhan aktivitas Anda." },
      { title: "Sustainable Design", description: "Penerapan konsep arsitektur hijau untuk efisiensi energi." },
      { title: "Kepatuhan Regulasi", description: "Desain yang sesuai dengan standar dan regulasi tata kota setempat." }
    ],
    workflow: [
      { title: "Konsultasi", description: "Diskusi awal untuk memahami kebutuhan, visi, dan anggaran Anda." },
      { title: "Survey", description: "Analisis kondisi lahan dan lingkungan sekitar secara komprehensif." },
      { title: "Perencanaan", description: "Pembuatan sketsa, denah, dan pemodelan 3D arsitektur." },
      { title: "Pengerjaan", description: "Pengembangan detail engineering design (DED) dan spesifikasi material." },
      { title: "Quality Control", description: "Review desain bersama klien untuk memastikan semua kebutuhan terpenuhi." },
      { title: "Serah Terima", description: "Penyerahan dokumen cetak biru (blueprint) final yang siap dieksekusi." }
    ],
    faq: [
      { question: "Berapa lama proses pembuatan desain arsitektur?", answer: "Waktu yang dibutuhkan bervariasi tergantung kompleksitas bangunan. Umumnya berkisar antara 4 hingga 8 minggu." },
      { question: "Apakah bisa revisi desain?", answer: "Ya, kami menyediakan beberapa tahap revisi untuk memastikan desain akhir benar-benar sesuai dengan keinginan Anda." }
    ],
    relatedProjects: [
      { title: "Modern Glass Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Urban Office Hub", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Minimalist Townhouse", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "konstruksi-sipil": {
    id: "konstruksi-sipil",
    slug: "konstruksi-sipil",
    title: "Konstruksi Sipil",
    shortDescription: "Pembangunan struktur berskala besar mulai dari perumahan komersial, gedung perkantoran, hingga fasilitas industri.",
    fullDescription: "Layanan Konstruksi Sipil kami menawarkan eksekusi proyek dari tahap fondasi hingga penyelesaian struktur utama. Dengan mengutamakan keselamatan (K3), presisi, dan kekuatan material, kami memastikan setiap bangunan yang kami dirikan memiliki integritas struktural yang tahan lama dan memenuhi standar industri konstruksi tertinggi.",
    heroImage: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Material Berkualitas", description: "Penggunaan bahan bangunan dengan standar mutu tersertifikasi." },
      { title: "Manajemen K3", description: "Penerapan standar Keselamatan dan Kesehatan Kerja yang sangat ketat." },
      { title: "Struktur Kokoh", description: "Pembangunan fondasi dan struktur beton bertulang yang teruji." },
      { title: "Efisiensi Waktu", description: "Manajemen logistik dan tenaga kerja untuk ketepatan waktu proyek." }
    ],
    workflow: [
      { title: "Konsultasi", description: "Pembahasan spesifikasi teknis dan timeline pembangunan." },
      { title: "Survey", description: "Pengukuran lahan, tes sondir, dan persiapan site plan." },
      { title: "Perencanaan", description: "Penyusunan jadwal kerja, RAB, dan mobilisasi alat berat." },
      { title: "Pengerjaan", description: "Pelaksanaan pekerjaan sipil dari fondasi hingga struktur atas." },
      { title: "Quality Control", description: "Inspeksi berkala pada setiap tahapan pengecoran dan konstruksi." },
      { title: "Serah Terima", description: "Penyerahan struktur bangunan yang telah lulus uji kelayakan." }
    ],
    faq: [
      { question: "Apakah menyediakan jaminan/garansi konstruksi?", answer: "Ya, kami memberikan retensi dan garansi struktural sesuai dengan kontrak kerja." },
      { question: "Bagaimana sistem pembayaran yang diterapkan?", answer: "Sistem pembayaran dapat dilakukan berdasarkan term/progres (progress payment) yang disepakati bersama." }
    ],
    relatedProjects: [
      { title: "Industrial Warehouse", category: "Industrial", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
      { title: "Skyline Corporate Tower", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
      { title: "Boutique Hotel", category: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "renovasi-bangunan": {
    id: "renovasi-bangunan",
    slug: "renovasi-bangunan",
    title: "Renovasi Bangunan",
    shortDescription: "Peremajaan, perluasan, dan perbaikan struktural untuk mengembalikan atau meningkatkan nilai properti Anda.",
    fullDescription: "Kami menghidupkan kembali bangunan lama Anda dengan sentuhan modern. Layanan renovasi kami mencakup perbaikan minor, facelift fasad, hingga perombakan total tata ruang. Kami merencanakan proses renovasi dengan meminimalisir gangguan, sehingga properti Anda dapat bertransformasi menjadi lebih elegan dan memiliki nilai investasi yang lebih tinggi.",
    heroImage: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Transformasi Fasad", description: "Modernisasi tampilan depan bangunan agar terlihat kekinian." },
      { title: "Optimalisasi Ruang", description: "Mengubah tata letak untuk memperluas area yang bisa dimanfaatkan." },
      { title: "Upgrade Material", description: "Penggantian sistem utilitas dan material pelapis usang." },
      { title: "Peningkatan Nilai", description: "Menjadikan properti lebih berharga untuk investasi atau penjualan." }
    ],
    workflow: [
      { title: "Konsultasi", description: "Penilaian bagian bangunan mana yang akan dipertahankan atau diubah." },
      { title: "Survey", description: "Pengecekan struktur lama (kekuatan beton, sistem pipa, kelistrikan)." },
      { title: "Perencanaan", description: "Pembuatan desain baru dan perhitungan anggaran renovasi." },
      { title: "Pengerjaan", description: "Proses pembongkaran aman dan instalasi material baru." },
      { title: "Quality Control", description: "Memastikan sambungan struktur lama dan baru menyatu sempurna." },
      { title: "Serah Terima", description: "Pembersihan menyeluruh dan penyerahan bangunan yang telah diperbarui." }
    ],
    faq: [
      { question: "Apakah renovasi mengharuskan kami pindah sementara?", answer: "Tergantung skala renovasi. Untuk perombakan mayor, kami menyarankan Anda pindah sementara demi kenyamanan dan keamanan." },
      { question: "Bisa renovasi parsial seperti hanya dapur/kamar mandi?", answer: "Tentu bisa. Kami melayani renovasi skala kecil hingga besar." }
    ],
    relatedProjects: [
      { title: "Classic to Modern Home", category: "Residential", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800" },
      { title: "Cafe Facelift", category: "Commercial", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "manajemen-proyek": {
    id: "manajemen-proyek",
    slug: "manajemen-proyek",
    title: "Manajemen Proyek",
    shortDescription: "Pengawasan, penjadwalan, dan kontrol anggaran untuk memastikan proyek konstruksi berjalan sempurna.",
    fullDescription: "Menyerahkan proyek konstruksi Anda kepada tim manajemen kami berarti Anda mendapatkan ketenangan pikiran. Kami akan mengkoordinasikan semua pihak yang terlibat (arsitek, kontraktor, pemasok), mengontrol alur kas (cash flow) proyek, memantau jadwal harian, dan memastikan setiap detail dibangun sesuai dengan spesifikasi yang telah disetujui tanpa pembengkakan biaya.",
    heroImage: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Kontrol Anggaran", description: "Monitoring ketat terhadap pengeluaran agar sesuai RAB." },
      { title: "Penjadwalan Presisi", description: "Pembuatan timeline detail menggunakan metode manajemen terkini." },
      { title: "Koordinasi Pihak", description: "Menjadi jembatan komunikasi antara pemilik, vendor, dan pekerja." },
      { title: "Mitigasi Risiko", description: "Identifikasi dan penyelesaian masalah teknis di lapangan dengan cepat." }
    ],
    workflow: [
      { title: "Konsultasi", description: "Penetapan tujuan utama proyek (waktu, biaya, kualitas)." },
      { title: "Survey", description: "Peninjauan kesiapan lahan, regulasi, dan ketersediaan vendor lokal." },
      { title: "Perencanaan", description: "Pembuatan Master Schedule, Procurement Plan, dan sistem pelaporan." },
      { title: "Pengerjaan", description: "Eksekusi koordinasi harian dan pengawasan lapangan penuh." },
      { title: "Quality Control", description: "Audit material masuk dan tes kualitas hasil pekerjaan secara independen." },
      { title: "Serah Terima", description: "Penyerahan laporan akhir, as-built drawing, dan manual pemeliharaan." }
    ],
    faq: [
      { question: "Mengapa saya butuh manajemen proyek jika sudah ada kontraktor?", answer: "Manajemen proyek bertindak sebagai wakil Anda (Owner Representative) yang independen untuk memastikan kontraktor bekerja sesuai spesifikasi dan tidak ada biaya tersembunyi." },
      { question: "Bagaimana cara saya memantau progres?", answer: "Kami memberikan laporan harian/mingguan lengkap dengan dokumentasi foto dan kurva S." }
    ],
    relatedProjects: [
      { title: "Mega Mall Complex", category: "Commercial", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { title: "Luxury Apartment Tower", category: "Residential", image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9cb2?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "desain-interior": {
    id: "desain-interior",
    slug: "desain-interior",
    title: "Desain Interior",
    shortDescription: "Pembuatan konsep tata ruang dalam yang mewah, ergonomis, dan mencerminkan personalitas pengguna.",
    fullDescription: "Interior yang baik bukan sekadar dekorasi, melainkan penciptaan atmosfer yang meningkatkan kualitas hidup atau produktivitas kerja. Tim desain interior kami ahli dalam memadukan warna eksklusif, pencahayaan dramatis, dan pemilihan furnitur custom untuk menghasilkan ruang yang mewah (luxury), elegan, dan berkarakter, namun tetap mempertahankan kenyamanan maksimal.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Konsep Eksklusif", description: "Desain yang dirancang khusus tidak pasaran (bespoke design)." },
      { title: "Custom Furniture", description: "Pembuatan kabinet, lemari, dan furnitur pas di ruangan." },
      { title: "Lighting Design", description: "Penataan cahaya cerdas untuk menciptakan mood elegan." },
      { title: "Pemilihan Material", description: "Penggunaan material premium: marmer, kayu solid, fabric eksklusif." }
    ],
    workflow: [
      { title: "Konsultasi", description: "Menggali preferensi gaya (modern, klasik, industrial) dan habit Anda." },
      { title: "Survey", description: "Pengukuran dimensi ruang secara akurat dan analisis titik utilitas." },
      { title: "Perencanaan", description: "Pembuatan moodboard, layout plan, dan render 3D interior." },
      { title: "Pengerjaan", description: "Produksi custom furniture di workshop dan instalasi di lokasi." },
      { title: "Quality Control", description: "Pengecekan finishing material, fungsi engsel, dan sistem kelistrikan." },
      { title: "Serah Terima", description: "Styling ruangan final (penataan aksesori) dan serah terima kunci." }
    ],
    faq: [
      { question: "Apakah desain interior sudah termasuk pengerjaannya (build)?", answer: "Ya, kami menyediakan layanan Design & Build agar hasil produksi 100% sama dengan desain 3D." },
      { question: "Apakah bisa menyesuaikan dengan budget tertentu?", answer: "Tentu. Kami akan menyesuaikan pemilihan material dengan budget yang Anda miliki tanpa mengorbankan estetika." }
    ],
    relatedProjects: [
      { title: "Penthouse Suite", category: "Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" },
      { title: "Executive Lounge", category: "Commercial", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "maintenance": {
    id: "maintenance",
    slug: "maintenance",
    title: "Maintenance",
    shortDescription: "Layanan pemeliharaan berkala untuk menjaga keawetan dan performa utilitas bangunan Anda.",
    fullDescription: "Kami memahami bahwa bangunan adalah aset investasi jangka panjang. Layanan Maintenance kami hadir untuk merawat dan mencegah kerusakan struktural maupun utilitas. Dengan tim teknisi yang responsif dan profesional, kami melayani perbaikan kebocoran, pemeliharaan sistem kelistrikan (MEP), pengecatan ulang, hingga perawatan fasad gedung untuk menjaga properti Anda tetap dalam kondisi prima.",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920",
    features: [
      { title: "Perawatan Berkala", description: "Jadwal inspeksi rutin untuk mendeteksi potensi kerusakan." },
      { title: "Respon Cepat", description: "Tim teknisi siaga untuk menangani kerusakan darurat (emergency repair)." },
      { title: "Ahli MEP", description: "Penanganan sistem Mekanikal, Elektrikal, dan Plumbing oleh tenaga ahli." },
      { title: "Pengecatan & Fasad", description: "Peremajaan warna dan pembersihan fasad kaca/ACP." }
    ],
    workflow: [
      { title: "Konsultasi", description: "Keluhan kerusakan atau permintaan paket pemeliharaan berkala." },
      { title: "Survey", description: "Inspeksi mendalam untuk mencari akar penyebab kerusakan (root cause)." },
      { title: "Perencanaan", description: "Pemberian estimasi biaya (RAB perbaikan) dan metode kerja." },
      { title: "Pengerjaan", description: "Eksekusi perbaikan dengan gangguan seminimal mungkin terhadap aktivitas." },
      { title: "Quality Control", description: "Pengujian ulang (misalnya tes kebocoran) pasca perbaikan." },
      { title: "Serah Terima", description: "Pemberian garansi perbaikan dan rekomendasi perawatan mandiri." }
    ],
    faq: [
      { question: "Apakah ada paket langganan maintenance tahunan untuk kantor?", answer: "Ya, kami menyediakan kontrak pemeliharaan tahunan khusus untuk bangunan komersial." },
      { question: "Berapa lama garansi perbaikan bocor?", answer: "Kami memberikan garansi perbaikan spesifik (contoh: waterproofing) berkisar 6-12 bulan." }
    ],
    relatedProjects: [
      { title: "Office MEP Upgrade", category: "Commercial", image: "https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800" },
      { title: "Facade Restoration", category: "Commercial", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" }
    ]
  }
};
