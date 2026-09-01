import { ArrowUpRight } from "lucide-react";
import { EMAIL } from "../data/site";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center">
        <p className="font-mono text-sm text-frost">{"// contact"}</p>
        <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Let's build something{" "}
          <span className="font-serif text-[1.1em] italic text-green shimmer shimmer-color-gold">
            together
          </span>
          .
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="group mt-10 inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 font-mono text-sm text-muted transition-colors hover:border-frost/60 hover:text-ink"
        >
          {EMAIL}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Joshua Tighe · React, Vite & Tailwind
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
