import { problems } from "../../data/content";
import { IconBox } from "../ui/IconBox";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Problems() {
  return (
    <Section id="problemas" tone="white" ariaLabelledBy="problems-heading">
      <SectionHeading
        id="problems-heading"
        title="Problemas que ayudamos a resolver"
        subtitle="Identificamos fricciones operativas comunes en PyMEs y las abordamos con soluciones claras, medibles y sostenibles."
      />

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {problems.map(({ title, description, icon }) => (
          <li
            key={title}
            className="group rounded-2xl border border-border-subtle bg-surface p-6 shadow-[0_2px_12px_-2px_rgba(10,22,40,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/15 hover:shadow-[0_8px_24px_-6px_rgba(10,22,40,0.08)]"
          >
            <IconBox icon={icon} variant="soft" size="sm" />
            <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
