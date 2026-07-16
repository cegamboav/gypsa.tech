import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../brand/Logo";
import { navLinks } from "../../data/content";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

function homeHref(hash: string) {
  return `/${hash}`;
}

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle/90 bg-white/95 shadow-[0_4px_24px_-4px_rgba(10,22,40,0.08)] backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <Container
        as="div"
        className="flex min-h-[5rem] items-center justify-between gap-4 py-2 sm:min-h-[5.5rem] sm:py-2.5"
      >
        <Link
          to={isHome ? "#inicio" : "/#inicio"}
          className="-ml-0.5 shrink-0 transition-opacity hover:opacity-90"
          aria-label="GYPSA — Inicio"
        >
          <Logo variant="compact" />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : homeHref(link.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={isHome ? "#contacto" : "/#contacto"}
            variant="primary"
            className="!px-5 !py-2.5"
          >
            Agendar una conversación
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-xl p-2.5 text-navy-800 transition-colors hover:bg-surface-muted lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border-subtle bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <Container as="div" className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : homeHref(link.href)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-surface-muted"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href={isHome ? "#contacto" : "/#contacto"}
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Agendar una conversación
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
