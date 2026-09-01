import { GITHUB_URL } from "./site";

export interface WorkItem {
  kind: "work" | "internship";
  title: string;
  org?: string;
  period?: string;
  description: string;
  tags: string[];
  href: string;
  glow: string;
}

export const workItems: WorkItem[] = [
  {
    kind: "internship",
    title: "Lorem Ipsum",
    org: "Dolor Sit Amet",
    period: "summer 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["lorem", "ipsum"],
    href: GITHUB_URL,
    glow: "var(--color-frost)",
  },
  {
    kind: "work",
    title: "Dolor Sit",
    org: "Consectetur Elit",
    period: "20XX — present",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["dolor", "amet"],
    href: GITHUB_URL,
    glow: "var(--color-gold)",
  },
];
