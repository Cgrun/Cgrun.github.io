import { BookOpen, FileDown, Github, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileLink = {
  label: string;
  href?: string;
  icon: LucideIcon;
  external?: boolean;
};

export const primaryLinks: ProfileLink[] = [
  {
    label: "CV",
    href: "/cv.pdf",
    icon: FileDown,
  },
  {
    label: "GitHub",
    href: "https://github.com/Cgrun",
    icon: Github,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:changrun.jia@unswalumni.com",
    icon: Mail,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=AbC1234XYZ",
    icon: BookOpen,
    external: true,
  },
];

export const contactLinks: ProfileLink[] = [
  {
    label: "Email",
    href: "mailto:changrun.jia@unswalumni.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Cgrun",
    icon: Github,
    external: true,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=AbC1234XYZ",
    icon: BookOpen,
    external: true,
  },
];
