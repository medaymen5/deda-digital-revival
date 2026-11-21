import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { ProductCard } from "@/components/site/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/content/products";
import { SITE } from "@/content/site";
import { img } from "@/lib/images";
import { formatPrice, unitPrice } from "@/lib/pricing";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Piece not found — Maison DEDA" }] };
    const desc = `${p.name} — ${p.material}. ${p.description[0]}`.slice(0, 158);
    return {
      meta: [
        { title: `${p.name} — Maison DEDA` },
        { name: "description", content: desc },
        { property: "og:title", content: `${p.name} — Maison DEDA` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "product:price:amount", content: String(p.priceEUR) },
        { property: "product:price:currency", content: "EUR" },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 pt-32 text-center">
      <h1 className="display text-5xl">This piece is no longer available</h1>
      <Button variant="line" size="lg" asChild>
        <Link to="/shop">Back to the shop</Link>
      </Button>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { currency, add } = useStore();
  const oneSize = product.sizes.length === 1;
  const [size, setSize] = useState<string | null>(oneSize ? (product.sizes[0] ?? null) : null);
  const [active, setActive] = useState(0);
  const [showSizeHint, setShowSizeHint] = useState(false);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const onAdd = () => {
    if (!size) {
      setShowSizeHint(true);
      return;
    }
    add({ slug: product.slug, size, qty: 1 });
  };

  return (
    <>
      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pt-28 md:grid-cols-12 md:px-10 md:pt-40">
        {/* Gallery */}
        <div className="md:col-span-7">
          <div className="hidden grid-cols-2 gap-3 md:grid">
            {product.images.map((key, i) => (
              <img
                key={key}
                src={img(key)}
                alt={`${product.name} — view ${i + 1}`}
                loading={i < 2 ? "eager" : "lazy"}
                className={cn("w-full bg-secondary object-cover", i === 0 ? "col-span-2 aspect-[4/5]" : "aspect-[3/4]")}
              />
            ))}
          </div>
          <div className="md:hidden">
            <img
              src={img(product.images[active])}
              alt={`${product.name} — view ${active + 1}`}
              className="aspect-[3/4] w-full bg-secondary object-cover"
            />
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {product.images.map((key, i) => (
                <button
                  key={key}
                  onClick={() => setActive(i)}
                  aria-label={`Show view ${i + 1}`}
                  className={cn("w-16 shrink-0 cursor-pointer border", i === active ? "border-ink" : "border-transparent")}
                >
                  <img src={img(key)} alt="" className="aspect-[3/4] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-4 md:col-start-9">
          <div className="md:sticky md:top-36">
            <nav className="eyebrow text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/shop" className="link-underline">
                Shop
              </Link>{" "}
              / <span className="text-foreground">{product.name}</span>
            </nav>
            <h1 className="display mt-8 text-5xl leading-[1.05] md:text-6xl">{product.name}</h1>
            <p className="mt-6 font-serif text-2xl">{formatPrice(unitPrice(product, currency), currency)}</p>
            <p className="eyebrow mt-3 text-muted-foreground">
              {product.material} · {product.inStock ? "In stock" : "Made to order"}
            </p>

            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <p className="eyebrow">Size</p>
                {showSizeHint && !size && <p className="eyebrow text-destructive">Please choose a size</p>}
              </div>
              <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label="Size">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    role="radio"
                    aria-checked={size === s}
                    onClick={() => setSize(s)}
                    className={cn(
                      "eyebrow h-11 min-w-14 cursor-pointer border px-4 transition-colors",
                      size === s ? "border-ink bg-ink text-paper" : "border-border hover:border-ink",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <Button variant="ink" size="xl" className="mt-8 w-full" onClick={onAdd}>
              Add to bag
            </Button>

            <div className="prose-deda mt-12">
              {product.description.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            <Accordion type="single" collapsible className="mt-10 border-t border-border">
              <AccordionItem value="made">
                <AccordionTrigger className="eyebrow hover:no-underline">Made by hand</AccordionTrigger>
                <AccordionContent className="font-serif text-base leading-relaxed text-muted-foreground">
                  Handmade in our Tunisian atelier by master artisans, in limited quantities, following the
                  philosophy of slow fashion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="eyebrow hover:no-underline">Shipping</AccordionTrigger>
                <AccordionContent className="font-serif text-base leading-relaxed text-muted-foreground">
                  Product will ship from {SITE.shipsFrom}.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-[1600px] px-5 md:px-10">
        <div className="border-t border-border pt-10">
          <h2 className="display text-4xl md:text-5xl">You may also be interested in</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-4 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
