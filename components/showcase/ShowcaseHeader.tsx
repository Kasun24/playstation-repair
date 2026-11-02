export default function ShowcaseHeader({
  title,
  blurb,
}: {
  title: string;
  blurb: string;
}) {
  return (
    <header>
      <p className="text-xs uppercase tracking-[0.22em] text-accent">
        PlayStation Repair Sri Lanka
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold tracking-tight">
        {title}
      </h1>
      <p className="mt-3 max-w-xl text-muted">{blurb}</p>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Stock changes often — tap <span className="text-accent">Ask on WhatsApp</span>{' '}
        on any item for availability and price.
      </p>
    </header>
  );
}
