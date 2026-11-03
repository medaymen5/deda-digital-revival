import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "@/content/site";
import { CURRENCIES } from "@/lib/pricing";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setBagOpen, currency, setCurrency } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const transparent = overHero && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-700",
        transparent
          ? "bg-transparent text-paper"
          : "border-b border-border bg-background/92 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 pt-5 pb-3 md:px-10">
        <div className="flex items-center gap-4">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className="-ml-2 p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[86vw] flex-col bg-background px-8 pt-16">
              <SheetTitle className="logo-mark text-2xl">DEDA</SheetTitle>
              <nav className="mt-10 flex flex-col gap-6" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="display text-3xl"
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "italic" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="eyebrow">
                  Instagram {SITE.instagramHandle}
                </a>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden items-center gap-3 lg:flex" role="group" aria-label="Currency">
            {CURRENCIES.map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={cn(
                  "eyebrow cursor-pointer transition-opacity",
                  currency === c ? "opacity-100" : "opacity-45 hover:opacity-80",
                )}
                aria-pressed={currency === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <Link to="/" aria-label="DEDA — home" className="logo-mark text-[1.9rem] leading-none md:text-[2.6rem]">
          DEDA
        </Link>

        <div className="flex items-center justify-end gap-1">
          <button
            onClick={() => setBagOpen(true)}
            className="relative flex cursor-pointer items-center gap-2 p-2"
            aria-label={`Open bag, ${count} item${count === 1 ? "" : "s"}`}
          >
            <span className="eyebrow hidden md:inline">Bag</span>
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute -right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-current px-1 text-[0.6rem]">
                <span className={transparent ? "text-ink" : "text-paper"}>{count}</span>
              </span>
            )}
          </button>
        </div>
      </div>

      <nav
        aria-label="Main"
        className={cn(
          "hidden justify-center gap-10 overflow-hidden transition-all duration-700 lg:flex",
          scrolled && !overHero ? "max-h-0 pb-0 opacity-0" : "max-h-12 pb-4 opacity-100",
          overHero && scrolled && "max-h-0 pb-0 opacity-0",
        )}
      >
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="eyebrow link-underline"
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
