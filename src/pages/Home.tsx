import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, Truck, ShieldCheck, Clock, Instagram } from "lucide-react";
import { products } from "../utils/mockData";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/Button";

export function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller);

  const features = [
    {
      icon: <ShieldCheck size={32} className="text-accent mb-4" />,
      title: "Kualitas Premium",
      description: "Setiap pakaian dibuat dengan bahan terbaik dan jahitan presisi."
    },
    {
      icon: <Truck size={32} className="text-accent mb-4" />,
      title: "Pengiriman Seluruh Indonesia",
      description: "Kami mengirimkan pesanan Anda dengan aman ke seluruh pelosok negeri."
    },
    {
      icon: <Clock size={32} className="text-accent mb-4" />,
      title: "Layanan Pelanggan 24/7",
      description: "Tim kami siap membantu Anda kapan saja melalui WhatsApp."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=2000"
            alt="Fashion Muslim Elegan"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-start text-white">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1 border border-white/30 backdrop-blur-sm uppercase tracking-[0.3em] text-xs mb-6 rounded-full"
            >
              Koleksi Raya 2026
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
            >
              Keanggunan<br />dalam Kesederhanaan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-lg font-light"
            >
              Temukan koleksi busana muslim eksklusif yang dirancang untuk memancarkan aura anggun dan percaya diri Anda.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop">
                <Button size="lg" className="bg-white text-dark hover:bg-white/90 border-none px-8">
                  Belanja Sekarang
                </Button>
              </Link>
              <Link to="/shop?category=Abaya">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark px-8">
                  Lihat Abaya
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/10 border-b border-dark/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center p-6"
              >
                {feature.icon}
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Koleksi Unggulan</h2>
            <p className="text-dark/60">Kurasi pakaian terbaik kami, dibuat dengan bahan premium dan desain abadi untuk wanita muslimah modern.</p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center space-x-2 text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors pb-2 border-b border-transparent hover:border-accent">
            <span>Lihat Semua</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop">
            <Button variant="outline" className="w-full">Lihat Semua Produk</Button>
          </Link>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Jelajahi Kategori</h2>
            <p className="text-white/60">Temukan gaya yang sesuai dengan kepribadian Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Abaya Eksklusif", path: "Abaya", image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&q=80&w=800" },
              { name: "Gaun Anggun", path: "Dress", image: "https://images.unsplash.com/photo-1515347619152-14123c126611?auto=format&fit=crop&q=80&w=800" },
              { name: "Hijab Premium", path: "Hijab", image: "https://images.unsplash.com/photo-1620012253295-c15cb3e65e9e?auto=format&fit=crop&q=80&w=800" }
            ].map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link to={`/shop?category=${category.path}`} className="group relative aspect-[4/5] overflow-hidden block rounded-sm">
                  <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
                    <h3 className="font-serif text-2xl text-white tracking-wide mb-3">{category.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-white/80 border-b border-white/50 pb-1 group-hover:border-white transition-colors">Belanja Sekarang</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brand */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=1000" alt="Tentang Ayana" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-secondary/30 -z-10 hidden md:block rounded-sm" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/30 -z-10 hidden md:block" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <span className="text-accent uppercase tracking-widest text-sm font-medium">Cerita Kami</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Menciptakan Keanggunan untuk Muslimah Modern</h2>
            <div className="space-y-4 text-dark/70 leading-relaxed text-lg">
              <p>
                Di Ayana, kami percaya bahwa kesopanan dan keanggunan berjalan beriringan. Setiap potong dalam koleksi kami dirancang dengan cermat dan dibuat dengan teliti menggunakan bahan premium.
              </p>
              <p>
                Dari pemilihan kain hingga jahitan terakhir, kami memastikan setiap detail sempurna. Pakaian kami dibuat untuk memberdayakan Anda mengekspresikan identitas Anda dengan anggun dan percaya diri di setiap kesempatan.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-6">
              <div className="text-center">
                <span className="block font-serif text-3xl text-dark">50k+</span>
                <span className="text-xs text-dark/60 uppercase tracking-wider">Pelanggan</span>
              </div>
              <div className="w-px h-12 bg-dark/10"></div>
              <div className="text-center">
                <span className="block font-serif text-3xl text-dark">100%</span>
                <span className="text-xs text-dark/60 uppercase tracking-wider">Original</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Seller Horizontal Scroll */}
      <section className="py-24 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-2">Produk Terlaris</h2>
            <p className="text-dark/60">Karya kami yang paling banyak dicari.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {/* Navigation buttons could go here */}
          </div>
        </div>
        <div className="flex overflow-x-auto pb-12 hide-scrollbar px-4 md:px-8 space-x-6 snap-x">
          {bestSellers.map((product, idx) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] md:min-w-[320px] snap-start"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Mockup */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Instagram size={32} className="mx-auto mb-4 text-dark" />
          <h2 className="font-serif text-3xl mb-2">@ayana.fashion</h2>
          <p className="text-dark/60">Ikuti kami di Instagram untuk inspirasi gaya harian.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1550614000-4b95d415dc14?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1583391733958-d15ce17145e5?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1434389678232-04ce6acaedbd?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=600"
          ].map((img, idx) => (
            <a key={idx} href="#" className="group relative aspect-square overflow-hidden block">
              <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/30"></div>
          <div className="absolute bottom-12 -left-12 w-64 h-64 rounded-full border border-white/30"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Butuh Bantuan Memilih Pakaian?</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg font-light">
            Tim styling eksklusif kami siap membantu Anda melalui WhatsApp. Dapatkan rekomendasi yang dipersonalisasi, saran ukuran, dan padu padan gaya.
          </p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/20 flex items-center gap-3 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" /></svg>
              Chat dengan Stylist Kami
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
