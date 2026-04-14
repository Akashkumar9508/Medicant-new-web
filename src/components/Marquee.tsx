const items = [
  "CARDIOLOGY",
  "NEUROLOGY",
  "ORTHOPEDICS",
  "PEDIATRICS",
  "ONCOLOGY",
  "DERMATOLOGY",
  "EMERGENCY CARE",
  "RADIOLOGY",
];

const Marquee = () => {
  return (
    <section id="marquee" className="overflow-hidden bg-card border-y border-border py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm md:text-base font-semibold tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-4"
          >
            <span className="text-primary">/</span> {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
