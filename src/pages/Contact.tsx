import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../components/Button";

export function Contact() {
  return (
    <div className="pt-24 pb-24 container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Hubungi Kami</h1>
        <p className="text-dark/60 max-w-2xl mx-auto">
          Kami senang mendengar dari Anda. Baik Anda memiliki pertanyaan tentang produk kami, ukuran, atau pesanan, tim kami siap menjawab semua pertanyaan Anda.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 space-y-12">
          <div>
            <h2 className="font-serif text-2xl mb-6">Tetap Terhubung</h2>
            <p className="text-dark/70 mb-8 leading-relaxed">
              Isi formulir dan tim kami akan menghubungi Anda kembali dalam waktu 24 jam. Untuk pertanyaan mendesak mengenai pesanan yang ada, silakan hubungi kami melalui WhatsApp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-accent mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Kunjungi Studio Kami</h3>
                  <p className="text-dark/70 text-sm">Jl. Kemang Raya No. 12<br />Jakarta Selatan, Indonesia 12730<br />(Dengan janji temu saja)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-accent mt-1" />
                <div>
                  <h3 className="font-medium mb-1">WhatsApp</h3>
                  <p className="text-dark/70 text-sm">+62 812 3456 7890<br />Senin-Jumat, 09.00 - 17.00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-accent mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-dark/70 text-sm">halo@ayana.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="space-y-6 bg-secondary/10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Nama Depan</label>
                <input
                  type="text"
                  className="w-full border border-dark/20 bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Nama Belakang</label>
                <input
                  type="text"
                  className="w-full border border-dark/20 bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Alamat Email</label>
              <input
                type="email"
                className="w-full border border-dark/20 bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Subjek</label>
              <input
                type="text"
                className="w-full border border-dark/20 bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Pesan</label>
              <textarea
                rows={5}
                className="w-full border border-dark/20 bg-transparent px-4 py-3 focus:outline-none focus:border-dark transition-colors"
              ></textarea>
            </div>
            <Button className="w-full py-4">Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
