import { Link } from "@tanstack/react-router";

import type { JournalPost } from "@/content/journal";
import { img } from "@/lib/images";
import { formatDate } from "@/lib/format";

export function JournalCard({ post, tall = false }: { post: JournalPost; tall?: boolean }) {
  return (
    <Link to="/journal/$slug" params={{ slug: post.slug }} className="group block">
      <div className={`img-zoom bg-secondary ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <img src={img(post.cover)} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="mt-6 flex items-center gap-4 text-muted-foreground">
        <span className="eyebrow">{post.category}</span>
        <span className="h-px w-6 bg-border" />
        <time className="eyebrow" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className="display mt-4 text-2xl leading-tight md:text-[1.7rem]">{post.title}</h3>
      <p className="mt-4 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <span className="eyebrow link-underline mt-5 inline-block">Read more</span>
    </Link>
  );
}
