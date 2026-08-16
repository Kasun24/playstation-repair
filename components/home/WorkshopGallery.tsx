import FadeIn from '@/components/FadeIn';
import { asset } from '@/lib/data';

type Shot = {
  src: string;
  alt: string;
  caption: string;
};

const SHOTS: Shot[] = [
  {
    src: '/workshop/gallery-ps5-mainboard.jpg',
    alt: 'PlayStation 5 mainboard on the bench during a repair',
    caption: 'PS5 mainboard diagnosis',
  },
  {
    src: '/workshop/gallery-solder.jpg',
    alt: 'Soldering iron working on a controller PCB',
    caption: 'Board-level soldering',
  },
  {
    src: '/workshop/gallery-ds4-teardown.jpg',
    alt: 'DualShock 4 controller fully disassembled into shells, buttons, sticks and PCB',
    caption: 'DualShock 4 full teardown',
  },
  {
    src: '/workshop/gallery-ps5-dualsense.jpg',
    alt: 'Ice-blue PlayStation 5 DualSense controller opened for repair',
    caption: 'DualSense stick module swap',
  },
  {
    src: '/workshop/gallery-ps4-mainboard.jpg',
    alt: 'PlayStation 4 mainboard removed from the chassis',
    caption: 'PS4 mainboard service',
  },
  {
    src: '/workshop/gallery-pcb-macro.jpg',
    alt: 'Macro shot of a small component being probed on a PS mainboard',
    caption: 'Precision component-level work',
  },
];

export default function WorkshopGallery() {
  return (
    <section className="container-page py-14 sm:py-24 border-t border-border/60">
      <FadeIn onScroll>
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-accent">
          From the bench
        </p>
        <h2 className="mt-3 text-2xl sm:text-4xl font-display font-bold tracking-tight">
          Real work from the workshop.
        </h2>
        <p className="mt-3 text-muted max-w-2xl text-[15px] sm:text-base">
          Every repair goes across the same bench — controller boards,
          PS4 and PS5 mainboards, deep-clean jobs, and precision component
          work. A few recent shots.
        </p>
      </FadeIn>

      <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {SHOTS.map((shot, i) => (
          <FadeIn key={shot.src} onScroll delay={i * 0.04}>
            <figure className="group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/40">
              <div className="aspect-[4/3] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(shot.src)}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/70 to-transparent p-3 sm:p-4">
                <span className="text-xs sm:text-sm font-medium text-text/95">
                  {shot.caption}
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
