import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { getPost } from "@/content/journal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/artisans")({
  head: () => ({
    meta: [
      { title: "Artisans — Maison DEDA" },
      {
        name: "description",
        content:
          "Meet the Tunisian artisans behind DEDA: embroiderer Fatma Hergli, couturière Nabila Hamhoum, and our partnership with École Élégance in Kélibia.",
      },
      { property: "og:title", content: "The Artisans of Maison DEDA" },
      {
        property: "og:description",
        content: "The hands, memories and decades of savoir-faire behind every DEDA piece.",
      },
    ],
  }),
  component: Artisans,
});

const PORTRAITS = [
  {
    slug: "fatma-hergli",
    name: "Fatma Hergli",
    role: "Embroidery Artisan",
    quote: "With time, my hands learned to be patient and precise.",
  },
  {
    slug: "nabila-hamhoum",
    name: "Nabila Hamhoum",
    role: "Sewing and Couture Artisan",
    quote: "Sewing is more than a job, it is something that gives dignity, confidence, and independence.",
  },
];

function Artisans() {
  const ecole = getPost("reclaiming-craft-ecole-elegance");

  return (
    <>
      <PageIntro eyebrow="The hands behind DEDA" title="Artisans">
        <p>
          Our artisans are the heart of every creation. Their decades of expertise and devotion shape the Maison's
          identity.
        </p>
      </PageIntro>

      <section className="mx-auto max-w-[1600px] space-y-28 px-5 md:space-y-40 md:px-10">
        {PORTRAITS.map((a, i) => {
          const post = getPost(a.slug);
          if (!post) return null;
          return (
            <div key={a.slug} className="grid items-center gap-10 md:grid-cols-12">
              <div className={`md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}>
                <div className="img-zoom bg-secondary">
                  <img src={img(post.cover)} alt={`${a.name}, ${a.role}`} loading="lazy" className="aspect-square w-full object-cover" />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
                <p className="eyebrow text-muted-foreground">{a.role}</p>
                <h2 className="display mt-4 text-5xl md:text-6xl">{a.name}</h2>
                <p className="display mt-10 text-2xl italic leading-snug md:text-3xl">“{a.quote}”</p>
                <div className="prose-deda mt-8">
                  {post.blocks
                    .filter((b) => b.type === "paragraph")
                    .slice(0, 2)
                    .map((b, k) => (
                      <p key={k}>{"text" in b ? b.text : ""}</p>
                    ))}
                </div>
                <Link to="/journal/$slug" params={{ slug: a.slug }} className="eyebrow link-underline mt-8 inline-block">
                  Read her story
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {ecole && (
        <section className="mt-32 bg-ink text-paper md:mt-44">
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
            <div className="md:col-span-5">
              <p className="eyebrow text-paper/60">Partnership · Kélibia</p>
              <h2 className="display mt-6 text-4xl leading-tight md:text-6xl">École Élégance</h2>
              <p className="mt-8 font-serif text-lg leading-relaxed text-paper/75">
                A shared mission to revive the artisan spirit. DEDA is sponsoring the training of a young woman at
                École Élégance to specialize in embroidery, completing her apprenticeship within DEDA.
              </p>
              <p className="display mt-10 text-2xl italic text-paper/90">
                “We share one common concern: the withdrawal of artisanship in the face of industrialization.”
              </p>
              <p className="eyebrow mt-4 text-paper/60">Madame Afifa Bouafif, founder</p>
              <Button variant="veil-outline" size="lg" className="mt-10" asChild>
                <Link to="/journal/$slug" params={{ slug: ecole.slug }}>
                  Read the article
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-6 md:col-start-7">
              <img src={img("journal-ecole-elegance-3")} alt="Fitting on a dress form at École Élégance" loading="lazy" className="aspect-[2/3] w-full object-cover" />
              <img src={img("journal-ecole-elegance-4")} alt="A student at work in the École Élégance atelier" loading="lazy" className="mt-16 aspect-[2/3] w-full object-cover" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
