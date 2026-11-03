import { Link } from "@tanstack/react-router";

import type { Product } from "@/content/products";
import { img } from "@/lib/images";
import { formatPrice, unitPrice } from "@/lib/pricing";
import { useStore } from "@/lib/store";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { currency } = useStore();
  const [first, second] = product.images;
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={img(first)}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
        {second && (
          <img
            src={img(second)}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[1.05rem]">{product.name}</h3>
        <p className="font-serif text-[1.05rem] text-muted-foreground">
          {formatPrice(unitPrice(product, currency), currency)}
        </p>
      </div>
      <p className="eyebrow mt-2 text-muted-foreground">{product.material}</p>
    </Link>
  );
}
