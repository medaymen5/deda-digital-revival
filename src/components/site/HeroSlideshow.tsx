import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { img } from "@/lib/images";
import { cn } from "@/lib/utils";

const SLIDES = [
  { key: "hero-1", position: "50% 30%", caption: "The ivory set" },
  { key: "home-editorial", position: "50% 25%", caption: "Collection 2026" },
  { key: "hero-2", position: "50% 30%", caption: "The Signature Veste" },
  { key: "product-the-motif-shirt-4", position: "50% 35%", caption: "The Motif Shirt" },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-paper" aria-label="Featured looks">
      {SLIDES.map((s, i) => (
        <div
          key={s.key}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1800ms] ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={img(s.key)}
            alt={i === 0 ? "Maison DEDA — ivory corset top and pleated trousers" : ""}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={cn("h-full w-full object-cover", i === index && "animate-slow-zoom")}
            style={{ objectPosition: s.position }}
          />
        </div>
      ))}
      <div className="hero-veil absolute inset-0" />

      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1600px] flex-col gap-10 px-5 pb-12 md:flex-row md:items-end md:justify-between md:px-10 md:pb-16">
        <div className="max-w-xl">
          <p className="eyebrow animate-fade-up text-paper/80">Handmade in our Tunisian atelier</p>
          <h1 className="display mt-5 animate-fade-up text-5xl [animation-delay:150ms] md:text-7xl">
            From roots
            <br />
            <em>into light.</em>
          </h1>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:300ms]">
            <Button variant="veil" size="lg" asChild>
              <Link to="/shop">Shop now</Link>
            </Button>
            <Button variant="veil-outline" size="lg" asChild>
              <Link to="/story">Our story</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <span className="eyebrow text-paper/80">{SLIDES[index].caption}</span>
          <div className="flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className="group cursor-pointer py-3"
              >
                <span
                  className={cn(
                    "block h-px transition-all duration-700",
                    i === index ? "w-12 bg-paper" : "w-6 bg-paper/40 group-hover:bg-paper/70",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
