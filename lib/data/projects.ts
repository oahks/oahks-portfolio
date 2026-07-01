export type ProjectCategory =
  | "automation"
  | "crm"
  | "funnels"
  | "voice-ai"
  | "social"
  | "video";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  mediaCount: string;
  result: string;
  tools: string[];
  imageGradient: string;
  caseStudy: {
    challenge: string;
    solution: string;
    tools: string[];
    results: string[];
  };
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "automation", label: "Automation" },
    { id: "crm", label: "CRM Setup" },
    { id: "funnels", label: "Funnels" },
    { id: "voice-ai", label: "Voice AI" },
    { id: "social", label: "Social" },
    { id: "video", label: "Video" },
  ];

export const projects: Project[] = [
  {
    id: "lead-gen-funnel",
    title: "Lead Generation Funnel System",
    category: "funnels",
    industry: "Real Estate & Coaching",
    mediaCount: "6 shots",
    result: "→ 3x lead capture rate · automated nurture",
    tools: ["GHL", "Zapier", "Stripe"],
    imageGradient: "from-blue-600/40 to-indigo-900/60",
    caseStudy: {
      challenge:
        "Client was losing leads due to manual follow-up and no structured nurture process after opt-in.",
      solution:
        "Built a multi-step funnel with lead magnet, automated email/SMS sequences, and pipeline routing in GoHighLevel.",
      tools: ["GoHighLevel", "Zapier", "Stripe", "Mailgun"],
      results: [
        "3x increase in lead capture rate",
        "Automated 14-day nurture sequence",
        "Zero manual follow-up required",
      ],
    },
  },
  {
    id: "ghl-crm-automation",
    title: "GoHighLevel CRM Automation",
    category: "crm",
    industry: "Health & Wellness",
    mediaCount: "8 shots",
    result: "→ 24/7 booking · zero missed follow-ups",
    tools: ["GHL", "Twilio", "Calendars"],
    imageGradient: "from-emerald-600/40 to-teal-900/60",
    caseStudy: {
      challenge:
        "Healthcare clinic struggled with missed appointments and inconsistent lead qualification.",
      solution:
        "Configured GHL pipelines, automated appointment booking, SMS reminders, and lead scoring workflows.",
      tools: ["GoHighLevel", "Twilio", "Google Calendar"],
      results: [
        "40% reduction in no-shows",
        "24/7 automated appointment booking",
        "Lead qualification on autopilot",
      ],
    },
  },
  {
    id: "email-marketing",
    title: "Email Marketing Automation",
    category: "automation",
    industry: "E-commerce",
    mediaCount: "5 shots",
    result: "→ 40% open rate · retention sequences live",
    tools: ["GHL", "Zapier", "GPT-4o"],
    imageGradient: "from-violet-600/40 to-purple-900/60",
    caseStudy: {
      challenge:
        "E-commerce brand had no post-purchase engagement, leading to low repeat purchase rates.",
      solution:
        "Created welcome sequences, abandoned cart emails, and customer retention campaigns with personalized triggers.",
      tools: ["GoHighLevel", "Zapier", "Shopify"],
      results: [
        "40% average email open rate",
        "25% increase in repeat purchases",
        "Fully automated retention system",
      ],
    },
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Automation",
    category: "voice-ai",
    industry: "Insurance",
    mediaCount: "4 videos",
    result: "→ 24/7 engagement · qualified leads on autopilot",
    tools: ["ManyChat", "GHL", "GPT-4o"],
    imageGradient: "from-cyan-600/40 to-blue-900/60",
    caseStudy: {
      challenge:
        "Insurance agency couldn't respond to inquiries outside business hours, losing hot leads nightly.",
      solution:
        "Deployed ManyChat AI chatbot integrated with GHL for lead capture, qualification, and appointment booking.",
      tools: ["ManyChat", "GoHighLevel", "OpenAI GPT-4o"],
      results: [
        "24/7 automated customer engagement",
        "65% response rate on inquiries",
        "Qualified leads routed to sales team instantly",
      ],
    },
  },
  {
    id: "social-media-growth",
    title: "Social Media Growth Management",
    category: "social",
    industry: "Fitness & Coaching",
    mediaCount: "12 shots",
    result: "→ Multi-platform growth · 2x engagement",
    tools: ["GHL", "Canva", "Meta"],
    imageGradient: "from-orange-600/40 to-red-900/60",
    caseStudy: {
      challenge:
        "Fitness coach had inconsistent posting and low engagement across Instagram and Facebook.",
      solution:
        "Built content calendar, scheduled posts, engagement workflows, and lead capture from social DMs via GHL.",
      tools: ["GoHighLevel", "Meta Business Suite", "Canva"],
      results: [
        "2x increase in social engagement",
        "Consistent daily posting across 3 platforms",
        "Leads captured directly from social DMs",
      ],
    },
  },
  {
    id: "sales-automation",
    title: "Sales Pipeline Automation",
    category: "automation",
    industry: "Credit Repair",
    mediaCount: "7 shots",
    result: "→ 50% faster deal closure · automated follow-ups",
    tools: ["GHL", "Zapier", "Twilio"],
    imageGradient: "from-amber-600/40 to-yellow-900/60",
    caseStudy: {
      challenge:
        "Credit repair agency had leads going cold due to slow manual follow-up and no pipeline visibility.",
      solution:
        "Automated the entire sales pipeline with stage-based triggers, SMS/email follow-ups, and team notifications.",
      tools: ["GoHighLevel", "Zapier", "Twilio"],
      results: [
        "50% faster average deal closure",
        "Automated follow-up at every pipeline stage",
        "Full visibility into sales metrics",
      ],
    },
  },
  {
    id: "voice-ai-receptionist",
    title: "AI Voice Receptionist System",
    category: "voice-ai",
    industry: "Healthcare / Hospital",
    mediaCount: "3 videos",
    result: "→ Live & Running · 24/7 patient handling",
    tools: ["GHL", "Twilio", "GPT-4o"],
    imageGradient: "from-rose-600/40 to-pink-900/60",
    caseStudy: {
      challenge:
        "Hospital front desk was overwhelmed with calls, leading to long wait times and missed appointments.",
      solution:
        "Built AI voice receptionist that handles inquiries, books appointments, and routes urgent calls to staff.",
      tools: ["GoHighLevel", "Twilio Voice", "OpenAI"],
      results: [
        "24/7 automated call handling",
        "60% reduction in front desk call volume",
        "Improved patient satisfaction scores",
      ],
    },
  },
  {
    id: "promo-video-editing",
    title: "Promotional Video Content",
    category: "video",
    industry: "Entertainment",
    mediaCount: "6 videos",
    result: "→ Scroll-stopping reels · 3x video views",
    tools: ["Premiere Pro", "CapCut", "Canva"],
    imageGradient: "from-fuchsia-600/40 to-violet-900/60",
    caseStudy: {
      challenge:
        "Entertainment brand needed high-quality short-form video content to drive ticket sales and engagement.",
      solution:
        "Produced promotional reels, event highlight videos, and social media content with brand-consistent editing.",
      tools: ["Adobe Premiere Pro", "CapCut", "Canva"],
      results: [
        "3x increase in video views",
        "Higher engagement on Instagram Reels",
        "Consistent brand visual identity",
      ],
    },
  },
];
