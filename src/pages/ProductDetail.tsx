import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, ShoppingBag, Star, Share2 } from "lucide-react";
import { products, Review } from "../utils/mockData";
import { formatPrice } from "../utils/helpers";
import { useCartStore } from "../store/useCartStore";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "details">("description");

  // Reviews State
  const [reviews, setReviews] = useState<Review[]>(product?.reviews || []);
  const [newReview, setNewReview] = useState({ author: "", rating: 5, comment: "" });

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Produk tidak ditemukan</h1>
        <p className="text-dark/60 mb-8">Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Button onClick={() => navigate("/shop")}>Kembali ke Belanja</Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Silakan pilih ukuran dan warna terlebih dahulu.");
      return;
    }
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    navigate("/cart");
  };

  const handleBuyNowWA = () => {
    if (!selectedSize || !selectedColor) {
      alert("Silakan pilih ukuran dan warna terlebih dahulu.");
      return;
    }
    const item = {
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price,
      image: product.images[0]
    };
    navigate("/checkout", { state: { directItem: item } });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) {
      alert("Mohon isi nama dan ulasan Anda.");
      return;
    }
    const review: Review = {
      id: Math.random().toString(36).substr(2, 9),
      author: newReview.author,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setNewReview({ author: "", rating: 5, comment: "" });
  };

  return (
    <div className="pt-24 pb-24 container mx-auto px-4 md:px-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-dark/50 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-dark transition-colors">Beranda</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-dark transition-colors">Belanja</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-dark transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-dark truncate">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible md:w-24 shrink-0 hide-scrollbar">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-[3/4] w-20 md:w-full shrink-0 overflow-hidden rounded-sm ${
                  selectedImage === idx ? "ring-1 ring-dark" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative aspect-[3/4] w-full bg-secondary/10 overflow-hidden group rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="font-serif text-3xl md:text-4xl">{product.name}</h1>
              <button className="p-2 text-dark/50 hover:text-dark transition-colors" title="Bagikan">
                <Share2 size={20} />
              </button>
            </div>
            <p className="text-2xl text-dark/80 mb-4">{formatPrice(product.price)}</p>
            
            {/* Quick Rating */}
            {reviews.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < Math.round(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length) ? "currentColor" : "none"} size={14} />
                  ))}
                </div>
                <span className="text-dark/60">({reviews.length} Ulasan)</span>
              </div>
            )}
          </div>

          <p className="text-dark/70 leading-relaxed mb-8">{product.description}</p>

          <div className="space-y-8 mb-10">
            {/* Color Selection */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium uppercase tracking-wider">Warna</span>
                <span className="text-sm text-dark/60">{selectedColor || "Pilih warna"}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2.5 text-sm border transition-all rounded-sm ${
                      selectedColor === color
                        ? "border-dark bg-dark text-white shadow-md"
                        : "border-dark/20 hover:border-dark text-dark/80"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium uppercase tracking-wider">Ukuran</span>
                <button className="text-sm text-dark/60 underline underline-offset-4 hover:text-dark">Panduan Ukuran</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-sm border transition-all rounded-sm ${
                      selectedSize === size
                        ? "border-dark bg-dark text-white shadow-md"
                        : "border-dark/20 hover:border-dark text-dark/80"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-sm font-medium uppercase tracking-wider block mb-3">Jumlah</span>
              <div className="flex items-center border border-dark/20 w-32 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-dark hover:bg-secondary/20 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <div className="flex-1 text-center text-sm font-medium">{quantity}</div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-dark hover:bg-secondary/20 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button onClick={handleAddToCart} className="flex-1 py-4 flex items-center justify-center gap-2 rounded-sm">
              <ShoppingBag size={18} />
              Tambah ke Keranjang
            </Button>
            <Button onClick={handleBuyNowWA} variant="outline" className="flex-1 py-4 border-dark text-dark rounded-sm hover:bg-dark hover:text-white transition-colors">
              Beli via WhatsApp
            </Button>
          </div>

          {/* Accordion / Tabs for info */}
          <div className="border-t border-dark/10 pt-8">
            <div className="flex gap-8 mb-6 border-b border-dark/10 pb-4">
              <button
                onClick={() => setActiveTab("description")}
                className={`text-sm uppercase tracking-wider font-medium transition-colors relative ${
                  activeTab === "description" ? "text-dark" : "text-dark/40 hover:text-dark/70"
                }`}
              >
                Deskripsi
                {activeTab === "description" && (
                  <span className="absolute -bottom-[17px] left-0 w-full h-0.5 bg-dark"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`text-sm uppercase tracking-wider font-medium transition-colors relative ${
                  activeTab === "details" ? "text-dark" : "text-dark/40 hover:text-dark/70"
                }`}
              >
                Detail & Perawatan
                {activeTab === "details" && (
                  <span className="absolute -bottom-[17px] left-0 w-full h-0.5 bg-dark"></span>
                )}
              </button>
            </div>
            <div className="text-dark/70 text-sm leading-relaxed min-h-[120px]">
              {activeTab === "description" ? (
                <p>{product.longDescription}</p>
              ) : (
                <ul className="list-disc pl-4 space-y-2">
                  <li>Bahan: <span className="font-medium text-dark">{product.material}</span></li>
                  <li>Cuci dengan tangan air dingin atau dry clean</li>
                  <li>Jangan gunakan pemutih</li>
                  <li>Setrika dengan suhu rendah</li>
                  <li>Model memiliki tinggi 170cm dan memakai ukuran S</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-24 border-t border-dark/10 pt-16 max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl mb-12 text-center">Ulasan Pelanggan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Reviews List */}
          <div className="md:col-span-7 space-y-8">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b border-dark/10 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-lg">{review.author}</span>
                    <span className="text-xs text-dark/50">{review.date}</span>
                  </div>
                  <div className="flex space-x-1 mb-4 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < review.rating ? "currentColor" : "none"} size={16} />
                    ))}
                  </div>
                  <p className="text-dark/80 leading-relaxed">{review.comment}</p>
                </div>
              ))
            ) : (
              <div className="bg-secondary/5 p-8 text-center rounded-sm border border-dark/5">
                <p className="text-dark/50">Belum ada ulasan untuk produk ini. Jadilah yang pertama!</p>
              </div>
            )}
          </div>

          {/* Add Review Form */}
          <div className="md:col-span-5">
            <div className="bg-secondary/10 p-8 rounded-sm">
              <h3 className="font-serif text-xl mb-6">Tulis Ulasan</h3>
              <form onSubmit={handleSubmitReview} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-2">Nama Anda</label>
                  <input
                    type="text"
                    value={newReview.author}
                    onChange={(e) => setNewReview({...newReview, author: e.target.value})}
                    className="w-full border border-dark/20 bg-white/50 px-4 py-3 focus:outline-none focus:border-dark text-sm rounded-sm transition-colors"
                    required
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-2">Penilaian</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`transition-colors ${star <= newReview.rating ? "text-accent" : "text-dark/20 hover:text-accent/50"}`}
                      >
                        <Star fill={star <= newReview.rating ? "currentColor" : "none"} size={24} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-2">Ulasan</label>
                  <textarea
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full border border-dark/20 bg-white/50 px-4 py-3 focus:outline-none focus:border-dark text-sm rounded-sm transition-colors"
                    required
                    placeholder="Bagaimana pendapat Anda tentang produk ini?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full py-3 rounded-sm">Kirim Ulasan</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24 border-t border-dark/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl mb-4">Mungkin Anda Juga Suka</h2>
            <p className="text-dark/60">Koleksi pilihan yang senada dengan gaya Anda.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
