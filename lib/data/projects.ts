import { publicImagePath } from "@/lib/utils/media-path";
import {
  promotionalVideos,
  type ProjectVideo,
} from "@/lib/data/promotional-videos";

export type { ProjectVideo };

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
  coverImage?: string;
  images?: string[];
  videos?: ProjectVideo[];
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

const buyersImages = [
  "screencapture-homebuyer-platinumkeyhomes-2026-07-04-11_50_56.png",
  "Screenshot 2026-07-04 111958.png",
  "Screenshot 2026-07-04 112055.png",
  "Screenshot 2026-07-04 112103.png",
  "Screenshot 2026-07-04 112119.png",
  "Screenshot 2026-07-04 112127.png",
  "Screenshot 2026-07-04 112142.png",
  "Screenshot 2026-07-04 112153.png",
  "Screenshot 2026-07-04 112203.png",
  "Screenshot 2026-07-04 112211.png",
  "Screenshot 2026-07-04 112229.png",
  "Screenshot 2026-07-04 112259.png",
  "Screenshot 2026-07-04 112310.png",
  "Screenshot 2026-07-04 112317.png",
];

const investorsImages = [
  "screencapture-investor-platinumkeyhomes-2026-07-04-11_52_29.png",
  "Screenshot 2026-07-04 112437.png",
  "Screenshot 2026-07-04 112448.png",
  "Screenshot 2026-07-04 112456.png",
  "Screenshot 2026-07-04 112509.png",
  "Screenshot 2026-07-04 112526.png",
  "Screenshot 2026-07-04 112532.png",
  "Screenshot 2026-07-04 112538.png",
  "Screenshot 2026-07-04 112553.png",
  "Screenshot 2026-07-04 112607.png",
  "Screenshot 2026-07-04 112616.png",
  "Screenshot 2026-07-04 112621.png",
  "Screenshot 2026-07-04 112631.png",
  "Screenshot 2026-07-04 112638.png",
  "Screenshot 2026-07-04 112649.png",
  "Screenshot 2026-07-04 112655.png",
  "Screenshot 2026-07-04 112712.png",
  "Screenshot 2026-07-04 112727.png",
  "Screenshot 2026-07-04 112738.png",
  "Screenshot 2026-07-04 112744.png",
  "Screenshot 2026-07-04 112749.png",
];

const mmlImages = [
  "cover.png",
  "screencapture-moneymoves-live-2026-07-04-12_00_14.png",
  "Screenshot 2026-07-04 115510.png",
  "Screenshot 2026-07-04 115521.png",
  "Screenshot 2026-07-04 115530.png",
  "Screenshot 2026-07-04 115540.png",
  "Screenshot 2026-07-04 115600.png",
  "Screenshot 2026-07-04 115610.png",
  "Screenshot 2026-07-04 115619.png",
  "Screenshot 2026-07-04 115653.png",
  "Screenshot 2026-07-04 115707.png",
  "Screenshot 2026-07-04 115717.png",
  "Screenshot 2026-07-04 115730.png",
  "Screenshot 2026-07-04 115805.png",
  "Screenshot 2026-07-04 115817.png",
  "Screenshot 2026-07-04 115923.png",
  "Screenshot 2026-07-04 115942.png",
];

const chatbotImages = [
  "Screenshot 2026-07-04 125633.png",
  "Screenshot 2026-07-04 125645.png",
  "Screenshot 2026-07-04 125828.png",
  "Screenshot 2026-07-04 125837.png",
  "Screenshot 2026-07-04 130021.png",
  "Screenshot 2026-07-04 130033.png",
];

const salesPipeImages = [
  "Screenshot 2026-07-04 130812.png",
  "Screenshot 2026-07-04 130856.png",
  "Screenshot 2026-07-04 130944.png",
  "Screenshot 2026-07-04 132311.png",
  "Screenshot 2026-07-04 132320.png",
  "Screenshot 2026-07-04 132609.png",
  "Screenshot 2026-07-04 132626.png",
  "Screenshot 2026-07-04 132645.png",
  "Screenshot 2026-07-04 132656.png",
];

const smmImages = [
  "screencapture-rewc-nikkibalogun-2026-07-04-13_06_19.png",
  "Screenshot 2026-07-04 130216.png",
  "Screenshot 2026-07-04 130413.png",
  "Screenshot 2026-07-04 130442.png",
  "Screenshot 2026-07-04 130511.png",
];

function mapImages(folder: string, filenames: string[]): string[] {
  return filenames.map((file) => publicImagePath(folder, file));
}

export const projects: Project[] = [
  {
    id: "homebuyer-funnel",
    title: "Homebuyer Lead Funnel",
    category: "funnels",
    industry: "Real Estate",
    mediaCount: "14 shots",
    result: "→ Full GHL funnel · lead capture & nurture live",
    tools: ["GHL", "Stripe", "Zapier"],
    coverImage: publicImagePath("buyers", buyersImages[0]),
    images: mapImages("buyers", buyersImages),
    caseStudy: {
      challenge:
        "Platinum Key Homes needed a dedicated homebuyer funnel to capture leads, deliver property resources, and automate follow-up without manual handoffs.",
      solution:
        "Built a complete GoHighLevel homebuyer funnel with landing pages, lead capture forms, automated email/SMS sequences, and pipeline routing for the sales team.",
      tools: ["GoHighLevel", "Stripe", "Zapier", "Mailgun"],
      results: [
        "End-to-end lead capture funnel deployed",
        "Automated nurture sequences for new homebuyer leads",
        "Sales team receives qualified leads in GHL pipeline",
      ],
    },
  },
  {
    id: "investor-funnel",
    title: "Investor Lead Funnel",
    category: "funnels",
    industry: "Real Estate",
    mediaCount: "21 shots",
    result: "→ Investor pipeline · automated follow-up system",
    tools: ["GHL", "Stripe", "Zapier"],
    coverImage: publicImagePath("investors", investorsImages[0]),
    images: mapImages("investors", investorsImages),
    caseStudy: {
      challenge:
        "The client needed a separate investor-facing funnel to attract property investors, capture contact details, and nurture prospects through a structured sales process.",
      solution:
        "Designed and built a full investor funnel in GoHighLevel with custom landing pages, lead magnets, automated workflows, and CRM pipeline stages tailored to investor leads.",
      tools: ["GoHighLevel", "Stripe", "Zapier"],
      results: [
        "Dedicated investor funnel live and capturing leads",
        "Multi-step automation for investor nurture",
        "Clear pipeline visibility for the sales team",
      ],
    },
  },
  {
    id: "money-moves-live",
    title: "Money Moves Live — Full GHL Build",
    category: "crm",
    industry: "Coaching & Events",
    mediaCount: "16 shots",
    result: "→ Complete CRM · funnels · automations deployed",
    tools: ["GHL", "Stripe", "Calendars"],
    coverImage: publicImagePath("mml", mmlImages[0]),
    images: mapImages("mml", mmlImages),
    caseStudy: {
      challenge:
        "Money Moves Live required a full GoHighLevel ecosystem — website, CRM, booking, and automations — to manage event registrations and client relationships at scale.",
      solution:
        "Architected and implemented a complete GHL build including CRM setup, pipelines, calendar booking, email/SMS automations, and event registration workflows.",
      tools: ["GoHighLevel", "Stripe", "Google Calendar"],
      results: [
        "Full GHL workspace configured and operational",
        "Automated registration and follow-up workflows",
        "Centralized CRM for all client and event data",
      ],
    },
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Automation",
    category: "voice-ai",
    industry: "Lead Generation",
    mediaCount: "6 shots",
    result: "→ 24/7 automated engagement · lead qualification",
    tools: ["GHL", "ManyChat", "GPT-4o"],
    coverImage: publicImagePath("chatbot", chatbotImages[0]),
    images: mapImages("chatbot", chatbotImages),
    caseStudy: {
      challenge:
        "Business needed round-the-clock lead engagement and qualification without relying on manual responses to every inbound message.",
      solution:
        "Built an AI-powered chatbot integrated with GoHighLevel to handle conversations, qualify leads, capture contact info, and trigger automated follow-up workflows.",
      tools: ["GoHighLevel", "ManyChat", "OpenAI GPT-4o"],
      results: [
        "24/7 automated customer engagement",
        "Leads qualified and routed into GHL pipeline",
        "Reduced manual response workload for the team",
      ],
    },
  },
  {
    id: "sales-pipe-auto",
    title: "Sales Pipeline Automation",
    category: "automation",
    industry: "Sales & CRM",
    mediaCount: "9 shots",
    result: "→ Stage-based automations · zero missed follow-ups",
    tools: ["GHL", "Zapier", "Twilio"],
    coverImage: publicImagePath("sales-pipe-auto", salesPipeImages[0]),
    images: mapImages("sales-pipe-auto", salesPipeImages),
    caseStudy: {
      challenge:
        "Sales team was losing deals due to inconsistent follow-up and manual pipeline updates across multiple deal stages.",
      solution:
        "Built automated GHL workflows triggered at each pipeline stage — sending emails, SMS reminders, internal notifications, and updating contact records automatically.",
      tools: ["GoHighLevel", "Zapier", "Twilio"],
      results: [
        "Automated follow-up at every pipeline stage",
        "Team notified instantly on stage changes",
        "Consistent sales process with no manual gaps",
      ],
    },
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    category: "social",
    industry: "Personal Brand",
    mediaCount: "5 shots",
    result: "→ Content strategy · scheduling · brand presence",
    tools: ["GHL", "Canva", "Meta"],
    coverImage: publicImagePath("smm", smmImages[0]),
    images: mapImages("smm", smmImages),
    caseStudy: {
      challenge:
        "Client needed a consistent social media presence with planned content, professional visuals, and a strategy to grow audience engagement.",
      solution:
        "Created content calendars, designed social assets, scheduled posts, and set up engagement workflows to maintain a strong brand presence across platforms.",
      tools: ["GoHighLevel", "Canva", "Meta Business Suite"],
      results: [
        "Consistent content schedule across platforms",
        "Professional branded social assets delivered",
        "Improved audience engagement and visibility",
      ],
    },
  },
  {
    id: "promotional-video",
    title: "Promotional Video Editing",
    category: "video",
    industry: "Marketing & Brand",
    mediaCount: `${Math.max(promotionalVideos.length, 0)} videos`,
    result: "→ Scroll-stopping promos · reels · brand content",
    tools: ["Premiere Pro", "CapCut", "Canva"],
    videos: promotionalVideos,
    caseStudy: {
      challenge:
        "Clients needed high-quality promotional and short-form video content to drive engagement, explain offers, and strengthen brand presence across social platforms.",
      solution:
        "Produced promotional videos, reels, and brand content with professional editing, motion graphics, and platform-optimized formats — hosted locally or via Google Drive for easy client review.",
      tools: ["Adobe Premiere Pro", "CapCut", "Canva", "After Effects"],
      results: [
        "Professional promo videos ready for ads and social",
        "Short-form reels optimized for Instagram & TikTok",
        "Consistent brand visuals across video content",
      ],
    },
  },
];
