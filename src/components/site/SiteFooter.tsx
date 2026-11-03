import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { NAV, SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="logo-mark text-5xl md:text-7xl">DEDA</p>
          <p className="mt-8 max-w-sm font-serif text-base leading-relaxed text-paper/70">
            A living archive of emotions, heritage, and rebirth — handmade in our Tunisian atelier.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/50">About the shop</p>
          <p className="mt-5 font-serif text-paper/85">
            Product will ship from <strong className="font-semibold text-paper">Kelibia</strong>,{" "}
            <strong className="font-semibold text-paper">Tunisia</strong>.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-paper/85 transition-colors hover:text-paper"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.25} />
            <span className="eyebrow">{SITE.instagramHandle}</span>
          </a>
        </div>

        <nav className="md:col-span-4" aria-label="Footer">
          <p className="eyebrow text-paper/50">Menu</p>
          <ul className="mt-5 grid grid-cols-2 gap-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline font-serif text-paper/85 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-2 px-5 py-6 text-paper/50 md:flex-row md:px-10">
          <p className="eyebrow">© {new Date().getFullYear()} Maison DEDA</p>
          <p className="eyebrow">Handmade in Tunisia</p>
        </div>
      </div>
    </footer>
  );
}
