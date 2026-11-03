import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { img } from "@/lib/images";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Maison DEDA" },
      {
        name: "description",
        content:
          "Born from a journey of inner alchemy, Maison DEDA is a living archive of emotions, heritage and rebirth, handmade in Tunisia.",
      },
      { property: "og:title", content: "Our Story — Maison DEDA" },
      {
        property: "og:description",
        content: "DEDA, the timeless woman: muse and memory, and the bridge between the past and the possible.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      <PageIntro eyebrow="Maison DEDA" title="Story">
        <p>
          Born from a journey of inner alchemy, <strong>Maison DEDA</strong> is a living archive of emotions,
          heritage, and rebirth. Each piece carries the vibration of a woman's transformation: from wounds into
          wisdom, from silence into expression, from roots into light.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-[1600px] gap-14 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <img
              src={img("story-portrait")}
              alt="An artisan at her sewing machine in the DEDA atelier"
              className="aspect-[2/3] w-full object-cover"
            />
            <p className="eyebrow mt-4 text-muted-foreground">The Tunisian atelier</p>
          </div>
        </div>

        <div className="prose-deda md:col-span-6 md:col-start-7 md:pt-10">
          <p className="display !text-[2rem] leading-snug text-foreground md:!text-[2.6rem]">
            At its heart lives <em>DEDA</em>, the timeless woman, both muse and memory.
          </p>
          <p className="mt-8">
            She is every artisan's mother, every daughter's dream, the guardian of a culture whispered through
            thread and fabric. Through her story, we tell the story of a country, one stitched with devotion,
            resilience, and unspoken beauty. DEDA becomes the bridge between the past and the possible, between
            tradition and transcendence.
          </p>
          <p>
            <strong>Maison DEDA</strong> stands at the sacred meeting point of ancestral craftsmanship and
            contemporary vision. We collaborate with master artisans, women and men whose hands hold decades of
            experience and memory, to preserve and reimagine the delicate art of embroidery, weaving, and couture.
            Each garment is handmade in our <strong>Tunisian atelier</strong>, carrying the pulse of our land and
            the precision of our heritage.
          </p>
          <p>
            More than fashion, our creations are acts of remembrance. They honor a collective legacy while
            reinterpreting it through the lens of modern consciousness, where beauty is not defined by
            perfection, but by <strong>presence</strong>.
          </p>
          <p>
            Every design is an offering to the <strong>feminine spirit</strong>: grounded, radiant, and free. It
            celebrates the movement of a body in harmony with its truth, the poise of a woman who remembers her
            worth, and the grace of a culture that refuses to fade.
          </p>
          <p>
            <strong>Maison DEDA</strong> is a dream made tangible, a place where fabric becomes poetry, where craft
            becomes healing, and where the sacred stories of our grandmothers are reborn in the language of
            couture.
          </p>

          <blockquote className="my-16 border-l border-ink pl-8">
            <p className="display !text-3xl leading-snug text-foreground md:!text-4xl">
              Because creation, for us, is not just about what we make. It is about what we remember, what we
              preserve, and what we dare to become.
            </p>
          </blockquote>

          <div className="flex flex-wrap gap-3">
            <Button variant="ink" size="lg" asChild>
              <Link to="/shop">Discover the collection</Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <Link to="/artisans">Meet the artisans</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
