import { useEffect } from "react";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")";

function Background() {
  useEffect(() => {
    const move = (e: PointerEvent) => {
      const root = document.documentElement.style;
      root.setProperty("--cursor-x", `${e.clientX}px`);
      root.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
        {/* faint grid, fading out radially from the top */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)",
          }}
        />
        {/* drifting gradient blobs */}
        <div
          className="absolute left-[5%] top-[-12rem] size-[38rem] rounded-full blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-frost) 16%, transparent), transparent 65%)",
          }}
        />
        <div
          className="absolute right-[-8rem] top-[10%] size-[32rem] rounded-full blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-green) 11%, transparent), transparent 65%)",
            animationDuration: "34s",
            animationDelay: "-12s",
          }}
        />
        <div
          className="absolute bottom-[-10rem] left-[15%] size-[30rem] rounded-full blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 9%, transparent), transparent 65%)",
            animationDuration: "22s",
            animationDelay: "-6s",
          }}
        />
        {/* film grain */}
        <div
          className="absolute inset-0 opacity-[0.13] mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />
      </div>
      {/* cursor-following spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background:
            "radial-gradient(560px circle at var(--cursor-x, 50%) var(--cursor-y, 30%), color-mix(in oklab, var(--color-frost) 7%, transparent), transparent 70%)",
        }}
      />
    </>
  );
}

export default Background;
