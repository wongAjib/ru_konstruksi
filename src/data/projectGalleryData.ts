export type ProjectCategory = "Semua" | "Gedung" | "Rumah" | "Interior" | "Renovasi" | "Industri";

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "Semua">;
  location: string;
  year: string;
  area: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const categories: ProjectCategory[] = [
  "Semua",
  "Gedung",
  "Rumah",
  "Interior",
  "Renovasi",
  "Industri",
];

export const categoryIcons: Record<Exclude<ProjectCategory, "Semua">, string> = {
  Gedung: "🏢",
  Rumah: "🏠",
  Interior: "🛋️",
  Renovasi: "🔨",
  Industri: "🏭",
};

export const projects: Project[] = [
  {
    id: "gedung-perkantoran-scbd",
    title: "Gedung Perkantoran SCBD",
    category: "Gedung",
    location: "SCBD, Jakarta Selatan",
    year: "2025",
    area: "4.500 m²",
    description:
      "Pembangunan gedung perkantoran modern 8 lantai dengan fasad kaca dan struktur baja, dilengkapi sistem manajemen gedung cerdas dan sertifikasi green building.",
    image: "/gallery/gedung-1.png",
    featured: true,
  },
  {
    id: "modern-minimalist-villa",
    title: "Modern Minimalist Villa",
    category: "Rumah",
    location: "Canggu, Bali",
    year: "2025",
    area: "350 m²",
    description:
      "Desain dan pembangunan villa mewah bergaya minimalis modern dengan kolam renang infinity, taman tropis, dan material premium berkualitas tinggi.",
    image: "/gallery/villa-1.png",
    featured: true,
  },
  {
    id: "luxury-apartment-interior",
    title: "Luxury Apartment Interior",
    category: "Interior",
    location: "Kemang, Jakarta Selatan",
    year: "2024",
    area: "180 m²",
    description:
      "Penataan interior apartemen mewah dengan konsep modern luxury, menggunakan material marble, lighting custom, dan furnitur premium.",
    image: "/gallery/interior-1.png",
    featured: true,
  },
  {
    id: "renovasi-rumah-heritage",
    title: "Renovasi Rumah Heritage",
    category: "Renovasi",
    location: "Menteng, Jakarta Pusat",
    year: "2024",
    area: "420 m²",
    description:
      "Renovasi total rumah heritage era kolonial menjadi hunian modern yang tetap mempertahankan elemen arsitektur klasik dengan sentuhan kontemporer.",
    image: "/gallery/renovasi-1.png",
  },
  {
    id: "gudang-logistik-modern",
    title: "Gudang Logistik Modern",
    category: "Industri",
    location: "Cikarang, Bekasi",
    year: "2024",
    area: "8.200 m²",
    description:
      "Pembangunan gudang logistik berstandar internasional dengan struktur baja ringan, sistem ventilasi otomatis, dan area loading dock ganda.",
    image: "/gallery/industri-1.png",
  },
  {
    id: "hotel-resort-ubud",
    title: "Boutique Hotel & Resort",
    category: "Gedung",
    location: "Ubud, Bali",
    year: "2025",
    area: "2.800 m²",
    description:
      "Pembangunan boutique hotel mewah dengan 24 kamar, restoran, spa, dan infinity pool yang menghadap lembah hijau Ubud.",
    image: "/gallery/gedung-2.png",
  },
  {
    id: "rumah-modern-bsd",
    title: "Rumah Modern BSD City",
    category: "Rumah",
    location: "BSD City, Tangerang",
    year: "2024",
    area: "280 m²",
    description:
      "Pembangunan rumah tinggal 2 lantai bergaya modern tropis dengan smart home system, panel surya, dan taman vertikal.",
    image: "/gallery/rumah-1.png",
  },
  {
    id: "townhouse-premium-kemang",
    title: "Townhouse Premium Kemang",
    category: "Rumah",
    location: "Kemang, Jakarta Selatan",
    year: "2023",
    area: "220 m²",
    description:
      "Pembangunan cluster townhouse premium 3 lantai dengan desain kontemporer, rooftop garden, dan sistem keamanan terintegrasi.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "office-interior-sudirman",
    title: "Office Interior Sudirman",
    category: "Interior",
    location: "Sudirman, Jakarta Pusat",
    year: "2024",
    area: "650 m²",
    description:
      "Desain dan fit-out interior kantor startup teknologi dengan konsep open space, meeting pods, dan area kolaborasi modern.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "renovasi-ruko-komersial",
    title: "Renovasi Ruko Komersial",
    category: "Renovasi",
    location: "PIK, Jakarta Utara",
    year: "2023",
    area: "320 m²",
    description:
      "Renovasi total ruko 3 lantai menjadi co-working space modern dengan cafe di lantai dasar, dilengkapi rooftop lounge.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pabrik-manufaktur",
    title: "Pabrik Manufaktur Karawang",
    category: "Industri",
    location: "Karawang, Jawa Barat",
    year: "2023",
    area: "12.000 m²",
    description:
      "Pembangunan pabrik manufaktur lengkap dengan area produksi, warehouse, kantor administratif, dan fasilitas karyawan.",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cafe-restaurant-interior",
    title: "Café & Restaurant Interior",
    category: "Interior",
    location: "Senopati, Jakarta Selatan",
    year: "2025",
    area: "240 m²",
    description:
      "Desain interior café dan restoran fine dining dengan konsep industrial-luxury, dapur terbuka, dan area outdoor dining.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
