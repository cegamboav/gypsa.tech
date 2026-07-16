import type { LucideIcon } from "lucide-react";

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md";
  variant?: "soft" | "solid" | "on-dark";
};

const sizes = {
  sm: { box: "p-2.5", icon: "h-4 w-4" },
  md: { box: "p-3", icon: "h-5 w-5" },
};

const variants = {
  soft: "bg-gradient-to-br from-brand-500/10 to-navy-700/10 text-brand-600 ring-1 ring-brand-500/15",
  solid:
    "bg-gradient-to-br from-navy-800 to-brand-600 text-white shadow-sm shadow-brand-600/20",
  "on-dark":
    "bg-white/10 text-brand-300 ring-1 ring-white/10",
};

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "soft",
}: IconBoxProps) {
  const s = sizes[size];
  return (
    <div
      className={`inline-flex shrink-0 rounded-xl ${s.box} ${variants[variant]}`}
    >
      <Icon className={s.icon} strokeWidth={1.75} aria-hidden />
    </div>
  );
}
