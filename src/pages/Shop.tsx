import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import { products } from "../utils/mockData";
import { ProductCard } from "../components/ProductCard";
import { motion, AnimatePresence } from "motion/react";

function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-secondary/30 aspect-[3/4] w-full mb-4 rounded-sm"></div>
      <div className="h-5 bg-secondary/30 w-3/4 mb-2 rounded-sm"></div>
      <div className="h-4 bg-secondary/30 w-1/2 rounded-sm"></div>
    </div>
  );
}

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ["Semua", "Abaya", "Dress", "Hijab", "Outer", "Set"];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [categoryFilter, sortBy, searchQuery]);

  let filteredProducts = products;
  
  if (categoryFilter && categoryFilter !== "Semua") {
    filteredProducts = filteredProducts.filter((p) => p.category === categoryFilter);
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  const handleCategoryChange = (category: string) => {
    if (category === "Semua") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
    setIsMobileFilterOpen(false);
  };

  const clearFilters = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
    setSearchQuery("");
    setSortBy("newest");
  };

  const hasActiveFilters = categoryFilter || searchQuery || sortBy !== "newest";

  return (
    <div className="pt-24 pb-24 container mx-auto px-4 md:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Koleksi Belanja</h1>
        <p className="text-dark/60 max-w-2xl mx-auto">
          Temukan pakaian muslimah premium kami. Dirancang dengan bahan berkualitas tinggi untuk kenyamanan dan keanggunan Anda.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:hidden flex justify-between items-center border-b border-dark/10 pb-4">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
          >
            <Filter size={18} />
            Filter & Urutkan
          </button>
          <span className="text-sm text-dark/60">{sortedProducts.length} Produk</span>
        </div>

        <div className="hidden lg:block w-64 shrink-0 space-y-10 sticky top-32">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Cari</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Nama produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-dark/20 bg-transparent py-2 pl-8 pr-4 text-sm focus:outline-none focus:border-dark transition-colors"
              />
              <Search className="absolute left-0 top-2.5 text-dark/40" size={16} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Kategori</h3>
            <ul className="space-y-3">
              {categories.map((category) => {
                const isActive = categoryFilter === category || (!categoryFilter && category === "Semua");
                return (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`text-sm transition-colors flex items-center gap-2 ${
                        isActive ? "text-dark font-medium" : "text-dark/60 hover:text-dark"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-accent" : "bg-transparent"}`}></span>
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Urutkan</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm focus:outline-none focus:border-dark cursor-pointer"
            >
              <option value="newest">Terbaru</option>
              <option value="price-low">Harga: Rendah ke Tinggi</option>
              <option value="price-high">Harga: Tinggi ke Rendah</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button 
              onClick={clearFilters}
              className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
            >
              <X size={14} /> Hapus Filter
            </button>
          )}
        </div>

        <AnimatePresence>
          {isMobileFilterOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFilterOpen(false)}
                className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              />
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-primary z-50 p-6 overflow-y-auto lg:hidden shadow-2xl"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-serif text-2xl">Filter</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 -mr-2">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Cari</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Nama produk..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-b border-dark/20 bg-transparent py-2 pl-8 pr-4 text-sm focus:outline-none focus:border-dark transition-colors"
                      />
                      <Search className="absolute left-0 top-2.5 text-dark/40" size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Kategori</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => {
                        const isActive = categoryFilter === category || (!categoryFilter && category === "Semua");
                        return (
                          <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 text-sm border transition-colors ${
                              isActive 
                                ? "border-dark bg-dark text-white" 
                                : "border-dark/20 text-dark hover:border-dark"
                            }`}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Urutkan</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full border-b border-dark/20 bg-transparent py-2 text-sm focus:outline-none focus:border-dark cursor-pointer"
                    >
                      <option value="newest">Terbaru</option>
                      <option value="price-low">Harga: Rendah ke Tinggi</option>
                      <option value="price-high">Harga: Tinggi ke Rendah</option>
                    </select>
                  </div>
                  
                  {hasActiveFilters && (
                    <button 
                      onClick={clearFilters}
                      className="w-full py-3 border border-red-500 text-red-500 hover:bg-red-50 transition-colors text-sm font-medium uppercase tracking-wider"
                    >
                      Hapus Semua Filter
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="flex-1 w-full">
          <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-dark/10">
            <span className="text-sm text-dark/60">Menampilkan {sortedProducts.length} produk</span>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-secondary/5 border border-dark/10 rounded-sm">
              <p className="text-dark/60 text-lg mb-4">Tidak ada produk yang sesuai dengan filter Anda.</p>
              <button 
                onClick={clearFilters}
                className="text-accent hover:text-dark underline underline-offset-4 transition-colors"
              >
                Hapus filter pencarian
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
