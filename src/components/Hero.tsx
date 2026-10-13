import { Sparkle } from "lucide-react";

function Hero() {
  return (
    <section className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 pt-14">
      <p className="animate-rise font-mono text-sm text-frost">
        {"// cs @ notre dame · dublin, ireland"}
      </p>
      <h1
        className="mt-6 animate-rise font-display text-6xl font-extrabold tracking-tight sm:text-8xl"
        style={{ animationDelay: "80ms" }}
      >
        Joshua Tighe<span className="text-green">.</span>
      </h1>
      <p
        className="mt-8 max-w-2xl animate-rise text-xl leading-relaxed text-muted sm:text-2xl"
        style={{ animationDelay: "160ms" }}
      >
        Software engineer building{" "}
        <span className="relative inline-block font-serif text-[1.15em] italic text-green shimmer shimmer-color-gold">
          <Sparkle
            aria-hidden="true"
            className="absolute -right-4 -top-3 size-3.5 rotate-12 animate-twinkle fill-current text-gold"
          />
          <Sparkle
            aria-hidden="true"
            className="absolute -top-4.5 right-0 size-2 -rotate-12 animate-twinkle fill-current text-frost"
            style={{ animationDelay: "-0.9s" }}
          />
          <Sparkle
            aria-hidden="true"
            className="absolute -right-6 -top-1 size-1.5 rotate-45 animate-twinkle fill-current text-green"
            style={{ animationDelay: "-1.8s" }}
          />
          delightful
        </span>{" "}
        things for the web — fast interfaces and the systems behind them.
      </p>
      <div className="mt-10 animate-rise" style={{ animationDelay: "240ms" }}>
        <a
          href="#work"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-line bg-panel/40 px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-frost/60 hover:text-ink"
        >
          <span className="text-green">❯</span>
          <span className="inline-flex w-[calc(11ch+0.55em)] items-center">
            <span className="animate-typing overflow-hidden whitespace-nowrap">see my work</span>
            <span
              aria-hidden="true"
              className="h-4 w-[0.55em] shrink-0 animate-blink bg-frost/80"
            />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
