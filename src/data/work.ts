export interface WorkItem {
  kind: "work" | "internship" | "program";
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
    title: "Software Engineer Intern",
    org: "Volexity",
    period: "summer 2026",
    description:
      "Built and shipped a new production dashboard for an internal processing pipeline on GraphQL/Apollo, after prototyping it through 3 rounds of user acceptance testing. Restyled 30+ components in the shared React component library, added a new component family, and drove its React major-version upgrade and oxlint/oxfmt migration. Also performed memory forensics on VMs, cloud instances, and laptops.",
    tags: ["react", "typescript", "graphql", "apollo", "memory forensics"],
    href: "https://www.volexity.com",
    glow: "var(--color-frost)",
  },
  {
    kind: "internship",
    title: "Software Engineer Intern",
    org: "Little Journey",
    period: "summer 2025",
    description:
      "Built an interactive game for a live healthcare app that helps reduce children's anxiety before hospital procedures. Wrote the PRD with engineering, UX, and design, implemented the Figma designs, and supported hospital testing that got 100% positive feedback from children and clinical staff.",
    tags: ["react", "typescript", "tailwind", "capacitor"],
    href: "https://littlejourney.health",
    glow: "var(--color-green)",
  },
  {
    kind: "program",
    title: "Participant",
    org: "IDEA Center",
    period: "fall 2025",
    description:
      "One of 15 students selected from 70 applicants to build production-standard software in an agile team. Shipped features every two weeks with mentorship from ClickUp's CTO and YC alumni engineers, leading sprints and pitching deliverables in competitive sprint presentations.",
    tags: ["agile", "full stack"],
    href: "https://ideacenter.nd.edu",
    glow: "var(--color-gold)",
  },
  {
    kind: "program",
    title: "Visa Fintech Foundations",
    org: "Notre Dame Career Center",
    period: "fall 2025",
    description:
      "One of 30 Notre Dame juniors selected for Visa's Fintech Foundations lecture program: Visa-led workshops, case studies, and mentorship on payments innovation and product strategy.",
    tags: ["fintech", "payments"],
    href: "https://careercenter.nd.edu",
    glow: "var(--color-frost)",
  },
  {
    kind: "work",
    title: "Student Manager",
    org: "Notre Dame Global",
    period: "2023 — present",
    description:
      "Lead Notre Dame Global's student worker team, handling schedules and delegation, and support the Global Office's logistics and communications projects. Represent the university to visiting international dignitaries with campus tours and official events. Started as a student assistant in 2023.",
    tags: ["leadership", "operations"],
    href: "https://global.nd.edu",
    glow: "var(--color-green)",
  },
];
