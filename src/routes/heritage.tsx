import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { JournalCard } from "@/components/site/JournalCard";
import { PageIntro } from "@/components/site/PageIntro";
import { journal, type JournalCategory } from "@/content/journal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage Journal — Maison DEDA" },
      {
        name: "description",
        content:
          "The DEDA journal: Tunisian heritage, traditional women's costumes, artisan portraits and the ethics behind every handmade piece.",
      },
      { property: "og:title", content: "Heritage Journal — Maison DEDA" },
      {
        property: "og:description",
        content: "Stories of Tunisian heritage, craft and the artisans behind Maison DEDA.",
      },
    ],
  }),
  component: Heritage,
});

const FILTERS: ("All" | JournalCategory)[] = ["All", "Heritage", "Artisans", "Ethics"];

function Heritage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? journal : journal.filter((p) => p.category === filter);
  const [featured, ...rest] = list;

  return (
    <>
      <PageIntro eyebrow="The journal" title="Heritage">
        <p>
          Our mission is to introduce the richness of Tunisian cultural heritage to the world, building bridges,
          initiating dialogue, and celebrating a culture whose depth and craftsmanship remain largely undiscovered.
        </p>
      </PageIntro>

      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex gap-8 border-y border-border py-5" role="group" aria-label="Filter articles">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "eyebrow cursor-pointer transition-opacity",
                filter === f ? "opacity-100" : "opacity-45 hover:opacity-80",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {featured && (
          <div className="mt-16">
            <JournalCard post={featured} />
          </div>
        )}
        {rest.length > 0 && (
          <div className="mt-24 grid gap-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {rest.map((post) => (
              <JournalCard key={post.slug} post={post} tall />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
