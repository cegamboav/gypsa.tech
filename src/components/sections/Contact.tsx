import { useState, type FormEvent } from "react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { contactLinks } from "../../data/content";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  LinkedIn: Linkedin,
  "correo@gypsa.tech": Mail,
  WhatsApp: MessageCircle,
} as const;

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-slate-800 transition-all placeholder:text-slate-400 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/15";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section
      id="contacto"
      tone="default"
      divider
      ariaLabelledBy="contact-heading"
      className="bg-gradient-to-b from-surface to-surface-muted"
    >
      <SectionHeading
        id="contact-heading"
        title="Conversemos"
        subtitle="Cuéntenos sobre su operación. Le responderemos para coordinar una conversación inicial."
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_4px_24px_-4px_rgba(10,22,40,0.08)] sm:p-8 lg:col-span-3"
          noValidate
        >
          {submitted ? (
            <div
              className="rounded-xl bg-gradient-to-br from-brand-500/5 to-navy-700/5 px-5 py-10 text-center"
              role="status"
            >
              <p className="font-semibold text-navy-900">
                Gracias por su mensaje.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Hemos recibido su solicitud. Nos pondremos en contacto pronto.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="correo@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Nombre de su empresa"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} resize-y`}
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Enviar mensaje
              </Button>
            </div>
          )}
        </form>

        <aside className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Otros canales
          </h3>
          <ul className="mt-6 space-y-3">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Mail;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-3 rounded-xl border border-border-subtle bg-white px-4 py-3.5 text-sm font-medium shadow-sm transition-all hover:border-brand-500/25 hover:shadow-md ${
                      link.placeholder ? "text-slate-500" : "text-navy-800"
                    }`}
                    {...(link.placeholder
                      ? {
                          "aria-disabled": true,
                          onClick: (e) => e.preventDefault(),
                        }
                      : {})}
                  >
                    <span className="inline-flex rounded-lg bg-brand-500/10 p-2 text-brand-600">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                    </span>
                    <span>{link.label}</span>
                    {link.placeholder && (
                      <span className="ml-auto text-xs text-slate-400">
                        Próximamente
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
