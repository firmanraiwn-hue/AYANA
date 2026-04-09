import { Link } from "react-router-dom";
import { Product } from "../utils/mockData";
import { formatPrice } from "../utils/helpers";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-4">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
            New
          </span>
        )}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <span className="bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Detail
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-lg text-dark">{product.name}</h3>
        <p className="text-dark/70">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
