export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Marketing Automation",
    skills: [
      "GoHighLevel",
      "Workflow Automation",
      "CRM Management",
      "Email Marketing",
      "SMS Marketing",
    ],
  },
  {
    title: "Sales & Lead Generation",
    skills: [
      "Funnel Building",
      "Landing Pages",
      "Lead Nurturing",
      "Conversion Optimization",
    ],
  },
  {
    title: "Content & Marketing",
    skills: [
      "Social Media Management",
      "Content Strategy",
      "Video Editing",
    ],
  },
  {
    title: "Technology & Integrations",
    skills: ["Zapier", "Webhooks", "AI Chatbots", "ManyChat"],
  },
];
