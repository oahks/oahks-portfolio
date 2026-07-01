export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    title: "GoHighLevel Setup & Optimization",
    description:
      "A complete GoHighLevel system that captures every lead, nurtures prospects, and books appointments — so nothing slips through the cracks.",
    deliverables: [
      "CRM setup & contact management",
      "Pipeline stages & deal tracking",
      "Calendar booking integration",
      "Automated nurture workflows",
    ],
    outcome:
      "A fully optimized GHL workspace that runs your sales process on autopilot.",
  },
  {
    title: "Sales Funnel Design",
    description:
      "High-converting funnels built with one job: turning visitors into booked calls and paying clients.",
    deliverables: [
      "Landing page design & build",
      "Lead magnet creation",
      "Multi-step conversion funnels",
      "A/B testing setup",
    ],
    outcome:
      "A funnel system that consistently generates and converts qualified leads.",
  },
  {
    title: "Email & SMS Marketing",
    description:
      "Automated email and SMS campaigns that nurture leads, drive engagement, and retain customers long-term.",
    deliverables: [
      "Campaign creation & copywriting",
      "Automated drip sequences",
      "Lead nurturing workflows",
      "Customer retention systems",
    ],
    outcome:
      "Higher open rates, more booked calls, and stronger customer loyalty.",
  },
  {
    title: "Workflow Automation",
    description:
      "The repetitive tasks eating your week — data entry, hand-offs, status updates — handled automatically every time.",
    deliverables: [
      "Business process mapping",
      "Follow-up system automation",
      "Third-party integrations",
      "Error handling & monitoring",
    ],
    outcome:
      "Hours saved every week with reliable, hands-free operations.",
  },
  {
    title: "Social Media Management",
    description:
      "Strategic social media systems that grow your audience, build brand authority, and drive inbound leads.",
    deliverables: [
      "Content planning & calendars",
      "Post scheduling & publishing",
      "Audience engagement strategy",
      "Growth analytics & reporting",
    ],
    outcome:
      "Consistent online presence that attracts and converts your ideal clients.",
  },
  {
    title: "Video Editing",
    description:
      "Professional short-form and promotional video content that captures attention and drives action on social platforms.",
    deliverables: [
      "Short-form social content",
      "Promotional video production",
      "Reels & story editing",
      "Brand-consistent visuals",
    ],
    outcome:
      "Scroll-stopping video content that boosts engagement and conversions.",
  },
];
