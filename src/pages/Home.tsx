import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, Truck, ShieldCheck, Instagram } from "lucide-react";
import { products } from "../utils/mockData";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/Button";

export function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=2000" 
            alt="Koleksi Fashion Muslim Premium" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-primary/80"
          >
            Koleksi Terbaru 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-lg"
          >
            Keanggunan dalam <br/><span className="italic text-accent">Kesederhanaan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl mb-10 text-primary/90 max-w-2xl mx-auto font-light"
          >
            Temukan koleksi busana muslimah premium yang dirancang untuk memancarkan kecantikan sejati Anda dengan sentuhan modern dan elegan.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto px-10 py-4 text-sm tracking-widest bg-white text-dark hover:bg-accent hover:text-white border-none">
                BELANJA SEKARANG
              </Button>
            </Link>
            <Link to="/shop?category=Abaya">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-4 text-sm tracking-widest border-white text-white hover:bg-white hover:text-dark">
                LIHAT ABAYA
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-secondary/30 border-b border-dark/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-dark/10">
            <div className="flex flex-col items-center p-6">
              <Star className="text-accent mb-4" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-2">Kualitas Premium</h3>
              <p className="text-dark/60 text-sm">Bahan pilihan terbaik yang nyaman dan tahan lama.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Truck className="text-accent mb-4" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-2">Pengiriman Cepat</h3>
              <p className="text-dark/60 text-sm">Layanan pengiriman aman ke seluruh Indonesia.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <ShieldCheck className="text-accent mb-4" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-2">Garansi 100%</h3>
              <p className="text-dark/60 text-sm">Jaminan kepuasan untuk setiap pembelian Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-medium mb-2 block">Pilihan Kami</span>
            <h2 className="font-serif text-4xl md:text-5xl">Koleksi Unggulan</h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">
            Lihat Semua <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories / Lookbook */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Link to="/shop?category=Abaya" className="relative h-[60vh] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1621094615822-794501250276?auto=format&fit=crop&q=80&w=800" 
              alt="Koleksi Abaya" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="font-serif text-3xl mb-3">Abaya</h3>
              <span className="text-sm tracking-widest uppercase border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Jelajahi</span>
            </div>
          </Link>
          <Link to="/shop?category=Dress" className="relative h-[60vh] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515347619362-6734f7117584?auto=format&fit=crop&q=80&w=800" 
              alt="Koleksi Dress" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="font-serif text-3xl mb-3">Dress</h3>
              <span className="text-sm tracking-widest uppercase border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Jelajahi</span>
            </div>
          </Link>
          <Link to="/shop?category=Hijab" className="relative h-[60vh] group overflow-hidden md:col-span-2 lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=800" 
              alt="Koleksi Hijab" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="font-serif text-3xl mb-3">Hijab</h3>
              <span className="text-sm tracking-widest uppercase border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Jelajahi</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/40 -skew-x-12 translate-x-20 -z-10"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 border border-accent/30 rounded-sm translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b95d466f168?auto=format&fit=crop&q=80&w=1000" 
                alt="Cerita Brand AYANA" 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-lg rounded-sm hidden md:block">
                <p className="font-serif text-4xl text-accent mb-1">10+</p>
                <p className="text-sm text-dark/60 uppercase tracking-widest">Tahun Pengalaman</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-accent uppercase tracking-widest text-sm font-medium mb-4 block">Tentang Kami</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Mendefinisikan Ulang <br/>Fashion Muslimah</h2>
              <p className="text-dark/70 mb-6 leading-relaxed text-lg">
                Berdiri sejak 2016, AYANA hadir dengan visi untuk memberdayakan wanita muslimah melalui busana yang tidak hanya menutup aurat, tetapi juga memancarkan keanggunan dan kepercayaan diri.
              </p>
              <p className="text-dark/70 mb-10 leading-relaxed">
                Setiap potongan pakaian kami dirancang dengan ketelitian tingkat tinggi, menggunakan material premium yang dipilih secara khusus untuk memastikan kenyamanan Anda sepanjang hari. Kami percaya bahwa kesederhanaan adalah bentuk tertinggi dari keanggunan.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-serif text-2xl mb-2">50k+</h4>
                  <p className="text-sm text-dark/60 uppercase tracking-wider">Pelanggan Puas</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2">100%</h4>
                  <p className="text-sm text-dark/60 uppercase tracking-wider">Desain Original</p>
                </div>
              </div>

              <Link to="/about">
                <Button variant="outline" className="border-dark text-dark hover:bg-dark hover:text-white">
                  Baca Cerita Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers (Horizontal Scroll) */}
      <section className="py-24 container mx-auto px-4 md:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium mb-2 block">Paling Dicari</span>
          <h2 className="font-serif text-4xl md:text-5xl">Produk Terlaris</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">
          {bestSellers.map((product) => (
            <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 border-t border-dark/10">
        <div className="container mx-auto px-4 md:px-8 text-center mb-10">
          <Instagram className="mx-auto text-accent mb-4" size={32} />
          <h2 className="font-serif text-3xl mb-2">Ikuti Gaya Kami</h2>
          <p className="text-dark/60">@ayana.fashion</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {[
            "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1621094615822-794501250276?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1515347619362-6734f7117584?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1550614000-4b95d466f168?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1604004215402-e0be233f39be?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=400"
          ].map((src, idx) => (
            <a key={idx} href="#" className="relative aspect-square group overflow-hidden block">
              <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Butuh Bantuan Memilih?</h2>
          <p className="text-white/70 mb-10 text-lg">
            Personal shopper kami siap membantu Anda menemukan gaya yang paling sesuai untuk setiap momen istimewa.
          </p>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-sm transition-colors font-medium tracking-wider uppercase text-sm"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
