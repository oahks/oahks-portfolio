import {
  Building2,
  Dumbbell,
  HeartPulse,
  Shield,
  CreditCard,
  ShoppingCart,
  Package,
  Clapperboard,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Real Estate", icon: Building2 },
  { name: "Coaching", icon: GraduationCap },
  { name: "Fitness", icon: Dumbbell },
  { name: "Health & Wellness", icon: HeartPulse },
  { name: "Insurance", icon: Shield },
  { name: "Credit Repair", icon: CreditCard },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Amazon FBA", icon: Package },
  { name: "Entertainment", icon: Clapperboard },
];
