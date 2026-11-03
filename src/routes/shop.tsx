import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageIntro } from "@/components/site/PageIntro";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/content/products";
import { unitPrice } from "@/lib/pricing";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Maison DEDA" },
      {
        name: "description",
        content:
          "Shop DEDA's handmade pieces: linen blazers, silk tops, satin vests and dresses with Tunisian hand embroidery. Ships from Kelibia, Tunisia.",
      },
      { property: "og:title", content: "Shop the collection — Maison DEDA" },
      {
        property: "og:description",
        content: "Handmade couture in linen, silk and cotton satin, finished by Tunisian artisans.",
      },
    ],
  }),
  component: Shop,
});

const SORTS = [
  { id: "new", label: "Newest" },
  { id: "asc", label: "Price ↑" },
  { id: "desc", label: "Price ↓" },
] as const;

function Shop() {
  const { currency } = useStore();
  const [sort, setSort] = useState<(typeof SORTS)[number]["id"]>("new");

  const list = useMemo(() => {
    if (sort === "new") return products;
    const sorted = [...products].sort((a, b) => unitPrice(a, currency) - unitPrice(b, currency));
    return sort === "asc" ? sorted : sorted.reverse();
  }, [sort, currency]);

  return (
    <>
      <PageIntro eyebrow="The collection" title="Shop">
        <p>
          Each piece is handmade in our Tunisian atelier, in limited quantities, from linen, silk and cotton satin.
        </p>
      </PageIntro>

      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-center justify-between border-y border-border py-5">
          <p className="eyebrow text-muted-foreground">{products.length} pieces</p>
          <div className="flex gap-6" role="group" aria-label="Sort products">
            {SORTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSort(s.id)}
                aria-pressed={sort === s.id}
                className={cn(
                  "eyebrow cursor-pointer transition-opacity",
                  sort === s.id ? "opacity-100" : "opacity-45 hover:opacity-80",
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-16 md:grid-cols-3 md:gap-x-6 lg:gap-y-24">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      </section>
    </>
  );
}
