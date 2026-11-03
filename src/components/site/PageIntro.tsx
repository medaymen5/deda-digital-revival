import type { ReactNode } from "react";

/** Editorial page opening: eyebrow, large Didot title and optional lead paragraph. */
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pt-40 pb-16 md:px-10 md:pt-52 md:pb-24">
      <p className="eyebrow animate-fade-up text-muted-foreground">{eyebrow}</p>
      <h1 className="display mt-6 animate-fade-up text-6xl [animation-delay:120ms] md:text-[7.5rem]">
        {title}
      </h1>
      {children && (
        <div className="prose-deda mt-10 max-w-2xl animate-fade-up text-lg [animation-delay:240ms] md:text-xl">
          {children}
        </div>
      )}
    </section>
  );
}
