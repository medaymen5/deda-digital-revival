import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { img } from "@/lib/images";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How a DEDA Piece Is Made" },
      {
        name: "description",
        content:
          "From inspiration and dialogue with artisans to patronage, essayage and hand finishing: the making of every Maison DEDA garment.",
      },
      { property: "og:title", content: "The DEDA Process — From Vision to Garment" },
      {
        property: "og:description",
        content: "Inspiration, dialogue with artisans, pattern & prototype, creation & finishing.",
      },
    ],
  }),
  component: Process,
});

const STEPS = [
  {
    title: "Inspiration & Design",
    text: "Our creative journey starts with inspiration drawn from art, architecture, nature, and everyday encounters. We translate these impressions into sketches and concepts, exploring forms, textures, and colors that evoke emotion. Each design is imagined to honor individuality and celebrate the harmony between modernity and tradition.",
    image: null,
  },
  {
    title: "Dialogue with Artisans",
    text: "Once the design takes form, we open a dialogue with our couturières and artisans. Together, we explore techniques, fabrics, and details — discussing what is possible, what is new, and what remains eternal. This exchange bridges creative vision and craftsmanship, ensuring that every creation is both daring and impeccably made.",
    image: "process-1",
  },
  {
    title: "Pattern & Prototype",
    text: "The next step is patronage — crafting the pattern that gives structure to imagination. Each piece is cut, assembled, and tested through the essayage (fitting) process, where adjustments are made by hand to achieve perfect proportion, comfort, and movement. This stage is where precision meets intuition.",
    image: "process-3",
  },
  {
    title: "Creation & Finishing",
    text: "When the final pattern is approved, our artisans bring the piece to life with patience and mastery. Every seam, stitch, and finish reflects hours of work and attention to detail — a celebration of savoir-faire and devotion to beauty.",
    image: "process-4",
  },
  {
    title: "Presentation & Sharing",
    text: "The finished pieces are then presented in our collections and made available through selected sales channels. Each garment carries with it not only the mark of DEDA's design language but also the story of the hands and hearts that created it.",
    image: "process-2",
  },
];

function Process() {
  return (
    <>
      <PageIntro eyebrow="The making" title="Process">
        <p>
          At DEDA, every piece begins with a vision — an emotion, a movement, a detail that inspires. From that
          spark, we shape designs that tell a story of femininity, strength, and timeless allure.
        </p>
      </PageIntro>

      <ol className="mx-auto max-w-[1600px] px-5 md:px-10">
        {STEPS.map((step, i) => (
          <li key={step.title} className="grid gap-8 border-t border-border py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-1">
              <span className="display text-5xl text-muted-foreground">0{i + 1}</span>
            </div>
            <div className="md:col-span-4">
              <h2 className="display text-4xl leading-tight md:text-5xl">{step.title}</h2>
              <p className="prose-deda mt-6">{step.text}</p>
            </div>
            {step.image ? (
              <div className="img-zoom bg-secondary md:col-span-6 md:col-start-7">
                <img src={img(step.image)} alt={step.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              </div>
            ) : (
              <div className="flex items-center md:col-span-6 md:col-start-7">
                <p className="display text-3xl italic leading-snug text-muted-foreground md:text-4xl">
                  The harmony between modernity and tradition.
                </p>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mx-auto flex max-w-[1600px] justify-center px-5 pt-10 md:px-10">
        <Button variant="ink" size="lg" asChild>
          <Link to="/shop">See the finished pieces</Link>
        </Button>
      </div>
    </>
  );
}
