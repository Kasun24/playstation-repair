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
        GameHub LK
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold tracking-tight">
        {title}
      </h1>
      <p className="mt-3 max-w-xl text-muted">{blurb}</p>
    </header>
  );
}
