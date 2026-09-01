import { socialLinks } from "../data/site";

function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
          aria-label={label}
          className="rounded-md p-2 text-muted transition-colors hover:text-ink"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
