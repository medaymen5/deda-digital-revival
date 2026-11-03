import type { Product } from "@/content/products";

export type Currency = "EUR" | "USD";
export const CURRENCIES: Currency[] = ["EUR", "USD"];

export type CartLine = { slug: string; size: string; qty: number };

export function unitPrice(product: Pick<Product, "priceEUR" | "priceUSD">, currency: Currency) {
  return currency === "EUR" ? product.priceEUR : product.priceUSD;
}

export function formatPrice(amount: number, currency: Currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function cartSubtotal(
  lines: CartLine[],
  currency: Currency,
  find: (slug: string) => Pick<Product, "priceEUR" | "priceUSD"> | undefined,
) {
  return lines.reduce((sum, line) => {
    const p = find(line.slug);
    return p ? sum + unitPrice(p, currency) * line.qty : sum;
  }, 0);
}

/** Adds a line or increases quantity when the same piece + size is already in the bag. */
export function addLine(lines: CartLine[], next: CartLine): CartLine[] {
  const i = lines.findIndex((l) => l.slug === next.slug && l.size === next.size);
  if (i === -1) return [...lines, next];
  return lines.map((l, idx) => (idx === i ? { ...l, qty: l.qty + next.qty } : l));
}
