export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <section className="ruled border-b hairline">
      <div className="mx-auto max-w-4xl px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
        <p className="eyebrow text-forest mb-5">{eyebrow}</p>
        <h1 className="font-display text-[2.4rem] leading-[1.08] sm:text-5xl md:text-6xl font-semibold text-brown-deep tracking-tight">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink/75">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
