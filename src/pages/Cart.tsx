import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { formatPrice } from "../utils/helpers";
import { Button } from "../components/Button";

export function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl md:text-4xl mb-6">Keranjang Anda Kosong</h1>
        <p className="text-dark/60 mb-8">Sepertinya Anda belum menambahkan apa pun ke keranjang Anda.</p>
        <Link to="/shop">
          <Button>Lanjut Belanja</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 container mx-auto px-4 md:px-8 min-h-[80vh]">
      <h1 className="font-serif text-3xl md:text-4xl mb-12">Keranjang Belanja</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-dark/10 pb-4 mb-6 text-sm font-medium uppercase tracking-wider text-dark/60">
            <div className="col-span-6">Produk</div>
            <div className="col-span-2 text-center">Jumlah</div>
            <div className="col-span-3 text-right">Total</div>
            <div className="col-span-1"></div>
          </div>

          <div className="space-y-8 md:space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center border-b border-dark/10 pb-6 md:border-none md:pb-0">
                {/* Product Info with Thumbnail */}
                <div className="col-span-6 flex gap-4 w-full">
                  <Link to={`/product/${item.productId}`} className="w-24 aspect-[3/4] shrink-0 bg-secondary/10 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <Link to={`/product/${item.productId}`} className="font-serif text-lg hover:text-accent transition-colors">
                      {item.name}
                    </Link>
                    <p className="text-sm text-dark/60 mt-1">{formatPrice(item.price)}</p>
                    <div className="text-xs text-dark/50 mt-2 space-y-1">
                      <p>Ukuran: {item.size}</p>
                      <p>Warna: {item.color}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Mobile & Desktop */}
                <div className="col-span-2 flex items-center justify-between md:justify-center w-full mt-4 md:mt-0">
                  <span className="md:hidden text-sm text-dark/60">Jumlah:</span>
                  <div className="flex items-center border border-dark/20 w-24">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-dark hover:bg-secondary/20 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <div className="flex-1 text-center text-sm">{item.quantity}</div>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-dark hover:bg-secondary/20 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Total Mobile & Desktop */}
                <div className="col-span-3 flex items-center justify-between md:justify-end w-full mt-2 md:mt-0">
                  <span className="md:hidden text-sm text-dark/60">Total:</span>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>

                {/* Remove */}
                <div className="col-span-1 flex justify-end w-full md:w-auto mt-4 md:mt-0">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-dark/40 hover:text-red-500 transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="md:hidden">Hapus</span>
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-secondary/10 p-8">
            <h2 className="font-serif text-2xl mb-6">Ringkasan Pesanan</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-dark/70">
                <span>Subtotal</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
              <div className="flex justify-between text-dark/70">
                <span>Pengiriman</span>
                <span>Dihitung via WhatsApp</span>
              </div>
              <div className="border-t border-dark/10 pt-4 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
            </div>
            <Button
              onClick={() => navigate("/checkout")}
              className="w-full py-4 flex items-center justify-center gap-2"
            >
              Lanjut ke Pembayaran
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
