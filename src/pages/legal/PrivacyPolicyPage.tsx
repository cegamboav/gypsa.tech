import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { PageMeta } from "../../components/seo/PageMeta";
import { Container } from "../../components/ui/Container";
import {
  privacyContent,
  type PrivacyLocale,
} from "../../data/privacyPolicy";

export function PrivacyPolicyPage() {
  const [locale, setLocale] = useState<PrivacyLocale>("es");
  const content = useMemo(() => privacyContent[locale], [locale]);

  return (
    <>
      <PageMeta
        title={content.documentTitle}
        description={content.metaDescription}
        canonicalPath="/legal/privacy-policy"
      />
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {locale === "es" ? "Saltar al contenido principal" : "Skip to main content"}
      </a>
      <Header />
      <main id="contenido-principal" className="bg-surface pt-24 sm:pt-28">
        <section className="border-b border-border-subtle bg-hero-gradient">
          <Container className="py-12 sm:py-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-wider text-brand-600">
                  Legal
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                  {content.heading}
                </h1>
                <p className="mt-4 text-sm text-slate-600">
                  {content.lastUpdatedLabel}:{" "}
                  <time dateTime="2026-07-16">{content.lastUpdatedValue}</time>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLocale(content.langToggleTarget)}
                  className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-brand-500/40 hover:bg-surface-muted"
                  aria-label={
                    locale === "es"
                      ? "Switch privacy policy to English"
                      : "Cambiar política de privacidad a español"
                  }
                >
                  {content.langToggleLabel}
                </button>
                <Link
                  to="/"
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-navy-800"
                >
                  {locale === "es" ? "Volver al inicio" : "Back to home"}
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <article className="section-padding">
          <Container className="max-w-3xl">
            <div className="space-y-6 text-base leading-relaxed text-slate-700">
              {content.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p>{content.scopeNote}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-border-subtle bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-navy-900">
                {content.currentAppsLabel}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                {content.currentApps.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12 space-y-10">
              {content.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2
                    id={`${section.id}-title`}
                    className="text-xl font-semibold tracking-tight text-navy-900"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc space-y-3 pl-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet.slice(0, 48)}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {(section.id === "contacto" || section.id === "contact") && (
                      <p>
                        <a
                          href={`mailto:${content.contactEmail}`}
                          className="font-medium text-brand-700 underline decoration-brand-500/40 underline-offset-4 transition-colors hover:text-brand-600"
                        >
                          {content.contactEmail}
                        </a>
                      </p>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
