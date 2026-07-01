import { Search, Lightbulb, Wrench, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "A focused call to map your current process, find bottlenecks, and agree on what a win looks like. No commitment.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "I turn insights into a clear blueprint built around your tools and logic, then walk you through it before anything gets built.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "I build, test against real data and edge cases, and refine until the system runs reliably without babysitting.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "You get full documentation, a live walkthrough, and ongoing support so the system keeps performing and scaling.",
    icon: TrendingUp,
  },
];
