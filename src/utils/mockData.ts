export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  material: string;
  category: string;
  images: string[];
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  reviews?: Review[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Abaya Sutra Aisha",
    price: 850000,
    description: "Abaya sutra elegan dengan sulaman halus.",
    longDescription: "Abaya Sutra Aisha dibuat dari campuran sutra premium, menawarkan jatuhan kain yang mewah dan kilau yang halus. Menampilkan sulaman jahitan tangan yang halus di sepanjang manset dan ujung bawah, pakaian ini sempurna untuk acara khusus atau pakaian malam. Potongan yang longgar memastikan kenyamanan tanpa mengorbankan keanggunan.",
    material: "Campuran Sutra Premium",
    category: "Abaya",
    images: [
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Hitam", "Champagne", "Zaitun"],
    isNew: true,
    isBestSeller: true,
    reviews: [
      { id: "r1", author: "Siti A.", rating: 5, comment: "Sangat elegan dan bahannya jatuh dengan indah. Cocok untuk acara formal.", date: "2026-03-15" },
      { id: "r2", author: "Nadia M.", rating: 5, comment: "Jahitannya sangat rapi, worth the price!", date: "2026-03-20" }
    ]
  },
  {
    id: "p2",
    name: "Gaun Lipit Zahra",
    price: 650000,
    description: "Gaun lipit yang mengalir untuk keanggunan sehari-hari.",
    longDescription: "Pakaian wajib yang serbaguna, Gaun Lipit Zahra menampilkan lipatan halus yang menciptakan gerakan indah saat Anda berjalan. Kain yang ringan menyerap keringat dan nyaman dipakai sepanjang hari. Dilengkapi dengan sabuk senada untuk merampingkan pinggang agar terlihat pas.",
    material: "Sifon Georgette",
    category: "Dress",
    images: [
      "https://images.unsplash.com/photo-1515347619152-14123c126611?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Merah Muda", "Biru Dongker", "Krem"],
    isBestSeller: true,
    reviews: [
      { id: "r3", author: "Nisa F.", rating: 4, comment: "Bagus banget buat dipakai ke kantor atau jalan-jalan.", date: "2026-04-01" }
    ]
  },
  {
    id: "p3",
    name: "Hijab Satin Lumina",
    price: 150000,
    description: "Hijab sutra satin premium dengan hasil akhir yang bercahaya.",
    longDescription: "Tingkatkan penampilan Anda dengan Hijab Satin Lumina. Terbuat dari sutra satin berkualitas tinggi, hijab ini menawarkan jatuhan yang indah dan hasil akhir yang bercahaya dan mengkilap. Sempurna untuk acara formal atau menambahkan sentuhan glamor pada pakaian sehari-hari Anda.",
    material: "Sutra Satin",
    category: "Hijab",
    images: [
      "https://images.unsplash.com/photo-1620012253295-c15cb3e65e9e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["All Size"],
    colors: ["Emas", "Perak", "Rose Gold", "Zamrud"],
  },
  {
    id: "p4",
    name: "Outer Bertekstur Nour",
    price: 450000,
    description: "Outer bertekstur chic untuk pelapisan yang mudah.",
    longDescription: "Outer Bertekstur Nour dirancang untuk pelapisan yang mudah. Kain berteksturnya yang unik menambah kedalaman pada pakaian apa pun, sementara desain bagian depan yang terbuka memudahkan penataan di atas gaun atau pakaian kasual. Wajib dimiliki untuk cuaca transisi.",
    material: "Campuran Katun Bertekstur",
    category: "Outer",
    images: [
      "https://images.unsplash.com/photo-1550614000-4b95d415dc14?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485230895905-ef08ba37e517?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["All Size"],
    colors: ["Krem", "Terakota", "Abu-abu Tua"],
    isNew: true,
  },
  {
    id: "p5",
    name: "Setelan Linen Safiya",
    price: 750000,
    description: "Setelan linen dua potong yang nyaman dan bergaya.",
    longDescription: "Rasakan kenyamanan luar biasa dengan Setelan Linen Safiya. Ansambel dua potong ini mencakup tunik berpotongan longgar dan celana panjang lebar yang serasi. Dibuat dari linen yang menyerap keringat, sangat cocok untuk hari yang hangat dan acara santai.",
    material: "100% Linen Murni",
    category: "Set",
    images: [
      "https://images.unsplash.com/photo-1434389678232-04ce6acaedbd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oatmeal", "Hijau Sage", "Putih"],
    isBestSeller: true,
  },
  {
    id: "p6",
    name: "Gaun Maxi Medina",
    price: 550000,
    description: "Gaun maxi klasik dengan detail yang halus.",
    longDescription: "Gaun Maxi Medina menawarkan siluet abadi dengan detail yang halus dan elegan. Menampilkan garis leher yang sopan dan lengan yang sedikit mengembang, gaun ini memberikan tampilan anggun yang cocok untuk berbagai kesempatan. Kain yang lembut memastikan kenyamanan sepanjang hari.",
    material: "Crepe Premium",
    category: "Dress",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583391733958-d15ce17145e5?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Merah Marun", "Hitam", "Taupe"],
  },
  {
    id: "p7",
    name: "Abaya Klasik Hitam",
    price: 950000,
    description: "Abaya hitam pekat dengan potongan A-line yang anggun.",
    longDescription: "Sebuah mahakarya kesederhanaan. Abaya Klasik Hitam ini menggunakan bahan jetblack premium yang sangat pekat dan jatuh dengan sempurna. Desain A-line memberikan siluet yang melangsingkan dan elegan untuk setiap bentuk tubuh.",
    material: "Premium Jetblack",
    category: "Abaya",
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Hitam"],
    isNew: true,
  },
  {
    id: "p8",
    name: "Tunik Asimetris Kaira",
    price: 350000,
    description: "Tunik modern dengan potongan asimetris yang unik.",
    longDescription: "Tampil beda dengan Tunik Asimetris Kaira. Potongan bawah yang tidak rata memberikan sentuhan modern pada gaya modest Anda. Padukan dengan celana kulot atau rok plisket untuk tampilan kasual yang chic.",
    material: "Katun Toyobo",
    category: "Outer",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515347619152-14123c126611?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Putih Tulang", "Biru Langit", "Mustard"],
  }
];
