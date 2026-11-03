import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { JournalCard } from "@/components/site/JournalCard";
import { Button } from "@/components/ui/button";
import { getPost, journal } from "@/content/journal";
import { formatDate } from "@/lib/format";
import { img } from "@/lib/images";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found — Maison DEDA" }] };
    const desc = post.excerpt.slice(0, 158);
    return {
      meta: [
        { title: `${post.title} — DEDA Journal` },
        { name: "description", content: desc },
        { property: "og:title", content: post.title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
      ],
    };
  },
  component: Article,
  notFoundComponent: () => (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 pt-32 text-center">
      <h1 className="display text-5xl">Article not found</h1>
      <Button variant="line" size="lg" asChild>
        <Link to="/heritage">Back to the journal</Link>
      </Button>
    </div>
  ),
});

function Article() {
  const { post } = Route.useLoaderData();
  const more = journal.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <header className="mx-auto max-w-4xl px-5 pt-40 text-center md:pt-52">
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <Link to="/heritage" className="eyebrow link-underline">
            {post.category}
          </Link>
          <span className="h-px w-6 bg-border" />
          <time className="eyebrow" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        <h1 className="display mt-8 animate-fade-up text-5xl leading-[1.05] md:text-7xl">{post.title}</h1>
      </header>

      {post.cover && (
        <div className="mx-auto mt-16 max-w-6xl px-5 md:px-10">
          <img src={img(post.cover)} alt={post.title} className="max-h-[85vh] w-full bg-secondary object-cover" />
        </div>
      )}

      <div className="prose-deda mx-auto mt-16 max-w-2xl px-5">
        {post.blocks.map((b, i) => {
          if (b.type === "heading")
            return (
              <h2 key={i} className="display mt-16 mb-6 text-3xl leading-snug text-foreground md:text-4xl">
                {b.text}
              </h2>
            );
          if (b.type === "image")
            return (
              <figure key={i} className="-mx-5 my-14 md:-mx-24">
                <img src={img(b.image)} alt="" loading="lazy" className="w-full bg-secondary object-cover" />
              </figure>
            );
          return <p key={i}>{b.text}</p>;
        })}
      </div>

      <section className="mx-auto mt-32 max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between border-t border-border pt-10">
          <h2 className="display text-4xl md:text-5xl">Continue reading</h2>
          <Link to="/heritage" className="eyebrow link-underline">
            All articles
          </Link>
        </div>
        <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-8">
          {more.map((p) => (
            <JournalCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
