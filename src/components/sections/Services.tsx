import { services } from "../../data/content";
import { IconBox } from "../ui/IconBox";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <Section id="servicios" tone="muted" divider ariaLabelledBy="services-heading">
      <SectionHeading id="services-heading" title="Servicios" />

      <ul className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {services.map(({ title, description, icon }) => (
          <li
            key={title}
            className="group relative flex gap-5 overflow-hidden rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_2px_12px_-2px_rgba(10,22,40,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/20 hover:shadow-[0_12px_32px_-8px_rgba(37,99,181,0.12)] lg:p-7"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-500/[0.03] group-hover:to-transparent group-hover:opacity-100"
              aria-hidden
            />
            <IconBox icon={icon} variant="solid" />
            <div className="relative min-w-0">
              <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
