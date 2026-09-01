import SocialLinks from "./SocialLinks";

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-line/60 bg-surface/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a href="#" className="font-display text-sm font-bold text-ink transition-colors">
          jt<span className="text-shimmer">.</span>
        </a>
        <SocialLinks />
      </nav>
    </header>
  );
}

export default Nav;
