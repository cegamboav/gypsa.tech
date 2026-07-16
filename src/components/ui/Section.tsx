import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionTone = "default" | "white" | "muted" | "elevated" | "dark";

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  divider?: boolean;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-surface",
  white: "bg-white",
  muted: "bg-section-muted",
  elevated: "bg-surface-elevated",
  dark: "bg-section-dark text-white",
};

export function Section({
  id,
  tone = "default",
  children,
  className = "",
  ariaLabelledBy,
  divider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${toneClasses[tone]} ${divider ? "section-divider" : ""} ${className}`}
      {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {})}
    >
      <Container>{children}</Container>
    </section>
  );
}
