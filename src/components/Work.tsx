import { ArrowUpRight } from "lucide-react";
import { useRef, type CSSProperties, type MouseEvent } from "react";
import { workItems, type WorkItem } from "../data/work";
import useReveal from "../hooks/useReveal";

function WorkCard({ item }: { item: WorkItem }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      style={{ "--glow": item.glow } as CSSProperties}
      className="group relative block overflow-hidden rounded-2xl border border-line bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--glow)/40"
    >
      {/* spotlight that follows the cursor inside the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--glow) 12%, transparent), transparent 65%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-(--glow)">{item.kind}</span>
          {item.period && <span className="text-muted">{item.period}</span>}
        </div>
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold">
            {item.title}
            {item.org && <span className="font-medium text-muted"> · {item.org}</span>}
          </h3>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-(--glow)" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Work() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="work" className="mx-auto max-w-4xl scroll-mt-14 px-6 py-28">
      <p className="font-mono text-sm text-frost">{"// experience"}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Where I've been building
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {workItems.map((item, i) => (
          <div
            key={item.title}
            className={`transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <WorkCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
