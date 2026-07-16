import { ArrowRight } from "lucide-react";
import { Logo } from "../brand/Logo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { HeroDashboard } from "./HeroDashboard";

const focusAreas = [
  "Optimización de procesos",
  "Automatización operativa",
  "Infraestructura y soporte",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-gradient pt-[5.75rem] pb-16 sm:pt-32 sm:pb-20 lg:pt-[8.5rem] lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-navy-800/5 blur-3xl"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="relative z-10 text-center lg:text-left">
            <Logo
              variant="full"
              className="mx-auto mb-8 lg:mx-0 lg:mb-10"
            />

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 sm:text-sm">
              Consultoría tecnológica empresarial
            </p>

            <h1
              id="hero-heading"
              className="text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.65rem] xl:text-5xl"
            >
              Soluciones empresariales, automatización e infraestructura{" "}
              <span className="text-gradient-brand">tecnológica</span>.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Ayudamos a pequeñas y medianas empresas a organizar y automatizar
              procesos operativos mediante soluciones tecnológicas adaptadas.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-navy-700/80 lg:mx-0">
              Soluciones que optimizan, tecnología que transforma.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="#contacto" variant="primary" className="w-full sm:w-auto">
                Agendar una conversación
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href="#servicios"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Conocer servicios
              </Button>
            </div>

            <ul
              className="mx-auto mt-10 grid max-w-md gap-2.5 sm:grid-cols-3 lg:mx-0 lg:max-w-none"
              aria-label="Áreas de enfoque"
            >
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/80 bg-white/70 px-3 py-2.5 text-center text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 lg:pl-4">
            <HeroDashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}
