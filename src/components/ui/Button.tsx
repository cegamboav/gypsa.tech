import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-navy-800 via-navy-700 to-brand-600 text-white shadow-md shadow-navy-900/15 hover:from-navy-700 hover:via-brand-700 hover:to-brand-500 hover:shadow-lg hover:shadow-brand-600/20 focus-visible:ring-brand-600",
  secondary:
    "border border-border bg-white text-navy-800 shadow-sm hover:border-brand-500/30 hover:bg-surface-muted hover:text-navy-900 focus-visible:ring-brand-600",
  ghost:
    "text-navy-700 hover:bg-navy-700/5 focus-visible:ring-brand-600",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
