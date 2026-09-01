import { stack } from "../data/stack";

function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y border-line/60 bg-panel/30 py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee">
        {[...stack, ...stack].map(({ name, Icon }, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 pr-12 font-mono text-sm text-muted"
          >
            <Icon className="size-4 text-frost/80" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Marquee;
