export default function HomePage() {
  return (
    <main className="container-page py-20 sm:py-28">
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent">
        Coming next: home page
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight">
        Consoles. Games.
        <br />
        <span className="text-accent drop-shadow-[0_0_20px_rgba(57,255,20,0.35)]">
          Repairs.
        </span>{' '}
        All in one place.
      </h1>
      <p className="mt-6 max-w-xl text-muted text-base sm:text-lg">
        Design tokens, navbar, and footer are wired up. The full home page lands
        in step 4 — hero, category tiles, trust section, TikTok.
      </p>
    </main>
  );
}
