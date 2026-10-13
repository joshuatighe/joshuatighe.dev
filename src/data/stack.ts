import {
  SiApollographql,
  SiCapacitor,
  SiDocker,
  SiGit,
  SiGraphql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  type IconType,
} from "@icons-pack/react-simple-icons";
import { Cloud, type LucideIcon } from "lucide-react";

// AWS is absent from Simple Icons (trademark takedown), so it gets a generic cloud.
export const stack: { name: string; Icon: IconType | LucideIcon }[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Apollo", Icon: SiApollographql },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Capacitor", Icon: SiCapacitor },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: Cloud },
  { name: "Vite", Icon: SiVite },
  { name: "Git", Icon: SiGit },
];
