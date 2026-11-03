import { createFileRoute, Link } from "@tanstack/react-router";

import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { JournalCard } from "@/components/site/JournalCard";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { journal } from "@/content/journal";
import { products } from "@/content/products";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison DEDA — Handmade Tunisian Couture & Heritage" },
      {
        name: "description",
        content:
          "A living archive of emotions, heritage and rebirth. Discover couture pieces handmade by master artisans in DEDA's Tunisian atelier.",
      },
      { property: "og:title", content: "Maison DEDA — Handmade Tunisian Couture" },
      {
        property: "og:description",
        content: "Contemporary couture handmade by master artisans in DEDA's Tunisian atelier.",
      },
    ],
  }),
  component: Home,
});

const PILLARS = [
  {
    to: "/artisans" as const,
    eyebrow: "The hands",
    title: "Artisans",
    text: "Women and men whose hands hold decades of experience and memory.",
    image: "journal-nabila-hamhoum-cover",
  },
  {
    to: "/process" as const,
    eyebrow: "The making",
    title: "Process",
    text: "From a spark of inspiration to patronage, essayage and finishing by hand.",
    image: "process-3",
  },
  {
    to: "/ethics" as const,
    eyebrow: "The values",
    title: "Ethics",
    text: "Fair pay, slow fashion, natural fabrics — luxury that coexists with integrity.",
    image: "journal-ethics-of-deda-2",
  },
];

function Home() {
  const latest = products.slice(0, 4);
  const posts = journal.slice(0, 3);

  return (
    <>
      <HeroSlideshow />

      {/* Manifesto */}
      <section className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-28 md:grid-cols-12 md:gap-10 md:px-10 md:py-40">
        <div className="md:col-span-5 md:col-start-2">
          <p className="eyebrow text-muted-foreground">Maison</p>
          <h2 className="logo-mark mt-6 text-6xl md:text-8xl">DEDA</h2>
          <p className="display mt-10 text-3xl leading-snug md:text-[2.4rem]">
            Born from a journey of inner alchemy, Maison DEDA is a living archive of emotions, heritage, and
            rebirth.
          </p>
          <p className="prose-deda mt-8 max-w-md">
            Each piece carries the vibration of a woman's transformation: from wounds into wisdom, from silence
            into expression, from roots into light.
          </p>
          <Button variant="line" size="lg" className="mt-10" asChild>
            <Link to="/story">Read our story</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-5 md:col-start-8">
          <div className="img-zoom mt-16 bg-secondary">
            <img
              src={img("home-deda-2026")}
              alt="DEDA 2026 — flowing sheer gown on a draped plinth"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="img-zoom bg-secondary">
            <img
              src={img("home-deda-silhouette")}
              alt="DEDA silhouette in shadow"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Latest items */}
      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between gap-6 border-t border-border pt-10">
          <div>
            <p className="eyebrow text-muted-foreground">The collection</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">Latest items</h2>
          </div>
          <Link to="/shop" className="eyebrow link-underline hidden md:inline-block">
            View all products
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-4 md:gap-x-6">
          {latest.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-14 flex justify-center md:hidden">
          <Button variant="line" size="lg" asChild>
            <Link to="/shop">View all products</Link>
          </Button>
        </div>
      </section>

      {/* Editorial split */}
      <section className="mt-32 grid bg-ink text-paper md:mt-44 md:grid-cols-2">
        <div className="img-zoom relative min-h-[70vh]">
          <img
            src={img("story-portrait")}
            alt="An artisan at her sewing machine in the DEDA atelier"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-20 md:px-20 lg:px-28">
          <p className="eyebrow text-paper/60">The atelier</p>
          <h2 className="display mt-6 text-4xl leading-tight md:text-6xl">
            Where fabric becomes poetry, and craft becomes healing.
          </h2>
          <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-paper/75">
            We collaborate with master artisans to preserve and reimagine the delicate art of embroidery, weaving,
            and couture. Each garment is handmade in our Tunisian atelier.
          </p>
          <div className="mt-10">
            <Button variant="veil-outline" size="lg" asChild>
              <Link to="/artisans">Meet the artisans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-3 md:gap-6">
          {PILLARS.map((p) => (
            <Link key={p.to} to={p.to} className="group block">
              <div className="img-zoom aspect-[4/5] bg-secondary">
                <img src={img(p.image)} alt={p.title} loading="lazy" className="h-full w-full object-cover grayscale-[30%]" />
              </div>
              <p className="eyebrow mt-6 text-muted-foreground">{p.eyebrow}</p>
              <h3 className="display mt-3 text-4xl">{p.title}</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">{p.text}</p>
              <span className="eyebrow link-underline mt-5 inline-block">Discover</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Heritage journal */}
      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">The journal</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">Heritage</h2>
            </div>
            <Link to="/heritage" className="eyebrow link-underline">
              Explore the journal
            </Link>
          </div>
          <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
            {posts.map((post) => (
              <JournalCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
