import { CheckCircle2 } from "lucide-react";
import { Logo } from "../brand/Logo";
import { Section } from "../ui/Section";

const highlights = [
  "Mejora operativa con enfoque práctico y medible",
  "Eficiencia empresarial sin sobredimensionar la tecnología",
  "Soluciones adaptadas a necesidades reales del negocio",
];

export function About() {
  return (
    <Section id="nosotros" tone="elevated" ariaLabelledBy="about-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div>
          <Logo variant="compact" className="mb-6" />
          <h2
            id="about-heading"
            className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl"
          >
            Sobre GYPSA
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            GYPSA es una consultora tecnológica enfocada en automatización,
            organización operativa e integración de soluciones empresariales
            para pequeñas y medianas empresas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Trabajamos como socio de operaciones: entendemos sus procesos,
            proponemos mejoras concretas e implementamos tecnología que aporta
            orden, visibilidad y eficiencia al día a día.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-white p-8 shadow-[0_4px_24px_-4px_rgba(10,22,40,0.08)] sm:p-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Nuestro enfoque
          </h3>
          <ul className="mt-6 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
