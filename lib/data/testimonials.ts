export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Adeyeye transformed our entire lead follow-up process in GoHighLevel. Leads get nurtured automatically now, and nothing slips through the cracks. Easily the best automation specialist we've worked with.",
    name: "Sarah Ava",
    role: "Real Estate Agency Owner",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Working with Emmanuel was effortless. He mapped our process, connected all our tools, and built workflows that save the team hours every single day. Clear, reliable, and genuinely great at what he does.",
    name: "David Chen",
    role: "E-commerce Founder",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Emmanuel rebuilt our sales funnel from scratch and the results speak for themselves — 3x more leads and a system that runs itself. If you need a GHL expert who delivers, hire him now.",
    name: "Coach Liana",
    role: "Wellness Coach",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "He edited my video to stop scrolling contents and I was able to gain more traction on my instagram page",
    name: "Michael Arthur",
    role: "Podcast Host",
    rating: 5,
  },
];
