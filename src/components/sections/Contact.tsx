import { useState, type FormEvent } from "react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { contactLinks } from "../../data/content";
import {
  ContactRequestError,
  submitContact,
} from "../../services/contactService";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  LinkedIn: Linkedin,
  "Contacto por correo": Mail,
  WhatsApp: MessageCircle,
} as const;

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-slate-800 transition-all placeholder:text-slate-400 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/15";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [successMessage, setSuccessMessage] = useState(
    "Hemos recibido su solicitud. Nos pondremos en contacto pronto.",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Por favor complete los campos obligatorios.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const result = await submitContact({
        name,
        email,
        company: company || undefined,
        phone: phone || undefined,
        message,
      });

      form.reset();
      setSuccessMessage(result.message);
      setStatus("success");
    } catch (error) {
      const friendlyMessage =
        error instanceof ContactRequestError
          ? error.message
          : "No pudimos enviar tu mensaje. Verifique su conexión e inténtelo de nuevo.";

      setErrorMessage(friendlyMessage);
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

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
          {status === "success" ? (
            <div
              className="rounded-xl bg-gradient-to-br from-brand-500/5 to-navy-700/5 px-5 py-10 text-center"
              role="status"
            >
              <p className="font-semibold text-navy-900">
                Gracias por su mensaje.
              </p>
              <p className="mt-2 text-sm text-slate-600">{successMessage}</p>
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    autoComplete="email"
                    className={inputClass}
                    placeholder="correo@empresa.com"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
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
                    disabled={isSubmitting}
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="Nombre de su empresa"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    disabled={isSubmitting}
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+52 55 1234 5678"
                  />
                </div>
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
                  disabled={isSubmitting}
                  rows={5}
                  className={`${inputClass} resize-y`}
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              {errorMessage && (
                <p className="text-sm text-red-600" role="alert">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
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
                    <span className="min-w-0">
                      <span className="block">{link.label}</span>
                      {"detail" in link && (
                        <span className="mt-0.5 block text-xs font-normal text-slate-500">
                          {link.detail}
                        </span>
                      )}
                    </span>
                    {link.placeholder && (
                      <span className="ml-auto text-xs text-slate-400">
                        Próximamente
                      </span>
                    )}
                  </a>
                  {"description" in link && (
                    <p className="mt-2 px-4 text-xs leading-relaxed text-slate-500">
                      {link.description}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
