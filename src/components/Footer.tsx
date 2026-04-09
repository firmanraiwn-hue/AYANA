import { Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-primary pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-serif text-3xl font-bold tracking-widest text-white">AYANA</h3>
            <p className="text-primary/70 text-sm leading-relaxed max-w-sm">
              Keanggunan dalam kesederhanaan. Kami menciptakan busana muslim premium untuk wanita modern, memadukan desain abadi dengan kualitas luar biasa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg mb-6 text-white">Belanja</h4>
            <ul className="space-y-3 text-sm text-primary/70">
              <li><Link to="/shop?category=Abaya" className="hover:text-accent transition-colors">Koleksi Abaya</Link></li>
              <li><Link to="/shop?category=Dress" className="hover:text-accent transition-colors">Gaun Elegan</Link></li>
              <li><Link to="/shop?category=Hijab" className="hover:text-accent transition-colors">Hijab Premium</Link></li>
              <li><Link to="/shop?category=Outer" className="hover:text-accent transition-colors">Outerwear</Link></li>
              <li><Link to="/shop?category=Set" className="hover:text-accent transition-colors">Setelan</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-serif text-lg mb-6 text-white">Bantuan</h4>
            <ul className="space-y-3 text-sm text-primary/70">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Hubungi Kami</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Cara Pemesanan</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Pengiriman & Retur</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Panduan Ukuran</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg mb-6 text-white">Berlangganan Newsletter</h4>
            <p className="text-primary/70 text-sm mb-4">
              Dapatkan informasi koleksi terbaru dan penawaran eksklusif langsung di kotak masuk Anda.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Alamat Email Anda" 
                className="bg-white/5 border border-white/20 px-4 py-3 w-full text-sm focus:outline-none focus:border-accent text-white transition-colors rounded-l-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white px-4 py-3 transition-colors rounded-r-sm flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="mt-8">
              <h5 className="text-xs uppercase tracking-widest text-primary/50 mb-3">Hubungi Langsung</h5>
              <ul className="space-y-2 text-sm text-primary/70">
                <li className="flex items-center space-x-3">
                  <Phone size={16} className="text-accent" />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={16} className="text-accent" />
                  <span>halo@ayana.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-primary/50">
          <p>&copy; {new Date().getFullYear()} Ayana Fashion. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
