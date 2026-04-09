import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCartStore } from "../store/useCartStore";
import { generateWhatsAppLink, formatPrice } from "../utils/helpers";
import { Button } from "../components/Button";

interface CheckoutForm {
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
}

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const cartTotal = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);

  // Check if we have a direct buy item from state
  const directItem = location.state?.directItem;
  
  const itemsToCheckout = directItem ? [directItem] : cartItems;
  const totalToCheckout = directItem ? directItem.price * directItem.quantity : cartTotal;

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (itemsToCheckout.length === 0) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-3xl mb-4">Tidak ada item untuk dibayar</h1>
        <Button onClick={() => navigate("/shop")}>Kembali ke Belanja</Button>
      </div>
    );
  }

  const onSubmit = (data: CheckoutForm) => {
    setIsSubmitting(true);
    
    const fullAddress = `${data.address}, ${data.city}, ${data.postalCode}`;
    
    const waLink = generateWhatsAppLink(
      "6281234567890", // Replace with actual admin WA number
      itemsToCheckout,
      totalToCheckout,
      {
        name: data.name,
        address: fullAddress,
        notes: data.notes,
      }
    );

    // If it was a cart checkout, clear the cart
    if (!directItem) {
      clearCart();
    }

    // Open WA in new tab
    window.open(waLink, "_blank");
    
    // Redirect to home or success page
    navigate("/");
  };

  return (
    <div className="pt-24 pb-24 container mx-auto px-4 md:px-8">
      <h1 className="font-serif text-3xl md:text-4xl mb-12 text-center">Pembayaran (Checkout)</h1>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <div className="w-full lg:w-3/5">
          <h2 className="font-serif text-2xl mb-6">Informasi Pengiriman</h2>
          <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Nama Lengkap *</label>
                <input
                  {...register("name", { required: "Nama wajib diisi" })}
                  className={`w-full border ${errors.name ? "border-red-500" : "border-dark/20"} bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors`}
                  placeholder="Siti Aminah"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Nomor Telepon *</label>
                <input
                  {...register("phone", { required: "Nomor telepon wajib diisi" })}
                  className={`w-full border ${errors.phone ? "border-red-500" : "border-dark/20"} bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors`}
                  placeholder="+62 812..."
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Alamat Lengkap *</label>
              <textarea
                {...register("address", { required: "Alamat wajib diisi" })}
                rows={3}
                className={`w-full border ${errors.address ? "border-red-500" : "border-dark/20"} bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors`}
                placeholder="Nama jalan, gedung, nomor rumah..."
              />
              {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Kota *</label>
                <input
                  {...register("city", { required: "Kota wajib diisi" })}
                  className={`w-full border ${errors.city ? "border-red-500" : "border-dark/20"} bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors`}
                  placeholder="Jakarta"
                />
                {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Kode Pos *</label>
                <input
                  {...register("postalCode", { required: "Kode pos wajib diisi" })}
                  className={`w-full border ${errors.postalCode ? "border-red-500" : "border-dark/20"} bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors`}
                  placeholder="12345"
                />
                {errors.postalCode && <span className="text-red-500 text-xs mt-1">{errors.postalCode.message}</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Catatan Pesanan (Opsional)</label>
              <textarea
                {...register("notes")}
                rows={2}
                className="w-full border border-dark/20 bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors"
                placeholder="Instruksi khusus untuk pengiriman..."
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5">
          <div className="bg-secondary/10 p-8 sticky top-24">
            <h2 className="font-serif text-2xl mb-6">Ringkasan Pesanan</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {itemsToCheckout.map((item, idx) => (
                <div key={idx} className="flex gap-4 text-sm">
                  <div className="w-16 aspect-[3/4] bg-secondary/20 shrink-0">
                    {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-dark/60 text-xs mt-1">Ukuran: {item.size} | Warna: {item.color}</p>
                    <p className="text-dark/60 text-xs mt-1">Jml: {item.quantity}</p>
                  </div>
                  <div className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-dark/10 pt-4 space-y-4 mb-8">
              <div className="flex justify-between text-dark/70">
                <span>Subtotal</span>
                <span>{formatPrice(totalToCheckout)}</span>
              </div>
              <div className="flex justify-between text-dark/70">
                <span>Pengiriman</span>
                <span>Dihitung via WhatsApp</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2">
                <span>Total</span>
                <span>{formatPrice(totalToCheckout)}</span>
              </div>
            </div>

            <Button
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white"
            >
              {isSubmitting ? "Memproses..." : "Pesan via WhatsApp"}
            </Button>
            <p className="text-center text-xs text-dark/50 mt-4">
              Anda akan diarahkan ke WhatsApp untuk menyelesaikan pembelian Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
