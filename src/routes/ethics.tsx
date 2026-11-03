import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { img } from "@/lib/images";

export const Route = createFileRoute("/ethics")({
  head: () => ({
    meta: [
      { title: "Ethics — Fair Trade & Slow Fashion at Maison DEDA" },
      {
        name: "description",
        content:
          "Fair pay and dignified work for artisans, slow fashion with natural fabrics, and preserving Tunisian heritage: the ethics of Maison DEDA.",
      },
      { property: "og:title", content: "Ethics — Maison DEDA" },
      {
        property: "og:description",
        content: "Luxury must coexist with integrity. True beauty begins with fairness.",
      },
    ],
  }),
  component: Ethics,
});

const PILLARS = [
  {
    title: "Ethical Work and Fair Trade",
    text: "Our artisans are the heart of every creation. Their decades of expertise and devotion shape the Maison's identity. DEDA is committed to full transparency, ensuring fair pay, dignified working conditions, and public recognition for every artisan behind our pieces. We believe that luxury must coexist with integrity. True beauty begins with fairness.",
    image: "journal-ethics-of-deda-1",
  },
  {
    title: "Slow Fashion and Environmental Respect",
    text: "Falling under the philosophy of slow fashion, DEDA's creative process values quality, craftsmanship, and time over mass production. Each piece is a masterpiece born from patience and intention. We use high percentages of natural fabrics, reflecting our respect for the environment and our commitment to sustainability.",
    image: "journal-ethics-of-deda-2",
  },
  {
    title: "Cultural Impact",
    text: "By reimagining traditional techniques through a contemporary lens, DEDA seeks to preserve an ancestral heritage on the verge of extinction. Every creation is not only a garment, it is a story, a tribute, and a living archive of Tunisia's artistic soul.",
    image: "journal-costumes-traditionnels-cover",
  },
];

function Ethics() {
  return (
    <>
      <PageIntro eyebrow="Our values" title="Ethics">
        <p>
          At Maison DEDA, we honor Tunisia's ancestral savoir faire, preserving techniques passed down through
          generations while elevating them to meet the highest standards of international couture.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-5 md:grid-cols-3 md:gap-8 md:px-10">
        {PILLARS.map((p, i) => (
          <div key={p.title}>
            <div className="img-zoom aspect-[4/5] bg-secondary">
              <img src={img(p.image)} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <p className="eyebrow mt-8 text-muted-foreground">0{i + 1}</p>
            <h2 className="display mt-3 text-3xl leading-tight md:text-4xl">{p.title}</h2>
            <p className="prose-deda mt-5">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-32 max-w-4xl px-5 text-center">
        <p className="display text-3xl leading-snug md:text-5xl">
          Our mission is to introduce the richness of Tunisian cultural heritage to the world.
        </p>
        <Link to="/journal/$slug" params={{ slug: "ethics-of-deda" }} className="eyebrow link-underline mt-10 inline-block">
          Read: Local sourcing, environmental respect and community support
        </Link>
      </section>
    </>
  );
}
