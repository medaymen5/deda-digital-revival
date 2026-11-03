import { Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { getProduct } from "@/content/products";
import { SITE } from "@/content/site";
import { img } from "@/lib/images";
import { formatPrice, unitPrice } from "@/lib/pricing";
import { useStore } from "@/lib/store";

export function BagSheet() {
  const { bagOpen, setBagOpen, lines, setQty, remove, subtotal, currency, count } = useStore();

  const requestOrder = async () => {
    const summary = [
      "Hello DEDA, I would like to order:",
      ...lines.map((l) => {
        const p = getProduct(l.slug);
        return `• ${p?.name ?? l.slug} — size ${l.size} × ${l.qty}`;
      }),
      `Subtotal: ${formatPrice(subtotal, currency)}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(summary);
      toast.success("Order summary copied", {
        description: "Paste it in your Instagram message to DEDA.",
      });
    } catch {
      toast("Send us your order on Instagram", { description: summary });
    }
    window.open(SITE.instagram, "_blank", "noopener");
  };

  return (
    <Sheet open={bagOpen} onOpenChange={setBagOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 bg-background p-0 sm:max-w-md">
        <div className="border-b border-border px-8 pt-8 pb-6">
          <SheetTitle className="eyebrow font-normal">Your bag ({count})</SheetTitle>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <p className="display text-3xl">Your bag is empty</p>
            <p className="max-w-xs text-muted-foreground">
              Each piece is handmade in limited quantities in our Tunisian atelier.
            </p>
            <Button variant="line" size="lg" asChild onClick={() => setBagOpen(false)}>
              <Link to="/shop">Discover the collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-8">
              {lines.map((line) => {
                const p = getProduct(line.slug);
                if (!p) return null;
                return (
                  <li key={`${line.slug}-${line.size}`} className="flex gap-5 py-6">
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      onClick={() => setBagOpen(false)}
                      className="block w-24 shrink-0 bg-secondary"
                    >
                      <img src={img(p.images[0])} alt={p.name} className="aspect-[3/4] w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-3">
                        <p className="font-serif text-base">{p.name}</p>
                        <p className="font-serif text-base">{formatPrice(unitPrice(p, currency) * line.qty, currency)}</p>
                      </div>
                      <p className="eyebrow mt-2 text-muted-foreground">Size {line.size}</p>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center border border-border">
                          <button
                            className="cursor-pointer p-2"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(line.slug, line.size, line.qty - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{line.qty}</span>
                          <button
                            className="cursor-pointer p-2"
                            aria-label="Increase quantity"
                            onClick={() => setQty(line.slug, line.size, line.qty + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          className="eyebrow cursor-pointer text-muted-foreground hover:text-foreground"
                          onClick={() => remove(line.slug, line.size)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-border px-8 py-8">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">Subtotal</span>
                <span className="display text-2xl">{formatPrice(subtotal, currency)}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Ships from {SITE.shipsFrom}. Shipping is confirmed with your order.
              </p>
              <Button variant="ink" size="xl" className="mt-6 w-full" onClick={requestOrder}>
                Request this order
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
