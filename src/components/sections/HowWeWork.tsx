import { processSteps } from "../../data/content";
import { IconBox } from "../ui/IconBox";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function HowWeWork() {
  return (
    <Section
      id="proceso"
      tone="dark"
      divider
      ariaLabelledBy="process-heading"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden
      />

      <SectionHeading
        id="process-heading"
        title="Cómo trabajamos"
        subtitle="Un enfoque estructurado para transformar la operación sin complejidad innecesaria."
        dark
      />

      <ol className="relative grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {processSteps.map(({ step, title, description, icon }) => (
          <li
            key={step}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/30 hover:bg-white/[0.07]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-300"
                aria-hidden
              >
                {step}
              </span>
              <IconBox icon={icon} size="sm" variant="on-dark" />
            </div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
