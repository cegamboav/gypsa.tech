import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { Logo } from "../brand/Logo";
import { Container } from "../ui/Container";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Correo", href: "mailto:correo@gypsa.tech", icon: Mail },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-navy-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Logo variant="full" className="brightness-110" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Tecnología al servicio de operaciones más claras y eficientes.
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-brand-400/90">
              Soluciones que optimizan, tecnología que transforma.
            </p>
          </div>

          <nav aria-label="Redes sociales">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-left">
              Conectar
            </p>
            <ul className="flex justify-center gap-3 sm:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-colors hover:border-brand-500/40 hover:bg-white/10 hover:text-white"
                    aria-label={label}
                    onClick={
                      href === "#" ? (e) => e.preventDefault() : undefined
                    }
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {year} GYPSA. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
