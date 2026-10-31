import Image from "next/image";

const zones = [
  "Projection floor",
  "West wall",
  "East wall",
  "Decision zone, lower",
  "Decision zone, loft",
  "Vendor showroom",
];

export function StudioZones() {
  return (
    <section
      id="how-the-space-works"
      className="scroll-mt-28 bg-[#0a0a0a] px-site py-24 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-label text-off-white/60">The Studio</p>
          <h2 className="text-h2 font-secondary text-off-white">How the space works</h2>
          <p className="max-w-prose text-body font-primary text-off-white/70">
            A 3,500± sq ft projection floor, two 50&apos; × 13&apos; projection walls, and a
            decision lounge on two levels, in an industrial warehouse building in downtown
            Coeur d&apos;Alene.
          </p>
        </div>

        <div className="relative mx-auto aspect-[1920/1004] w-full max-w-6xl overflow-hidden">
          <Image
            src="/assets/diagrams/studio-zones-labeled.webp"
            alt="Axonometric drawing of the studio with its six zones labeled: the projection floor, the west and east projection walls, the lower and loft decision zones, and the vendor showroom"
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-contain"
          />
        </div>

        <ul className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-6">
          {zones.map((zone) => (
            <li key={zone} className="text-label text-off-white/60">
              {zone}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
