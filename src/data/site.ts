import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import LinkedInIcon from "../components/LinkedInIcon";

export const EMAIL = "jtighe3@nd.edu";
export const GITHUB_URL = "https://github.com/joshuatighe";
export const LINKEDIN_URL = "https://www.linkedin.com/in/joshuatighe";

export interface SocialLink {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL, Icon: SiGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
];
