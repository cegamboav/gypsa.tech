export type PrivacyLocale = "es" | "en";

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PrivacyContent = {
  documentTitle: string;
  metaDescription: string;
  heading: string;
  lastUpdatedLabel: string;
  lastUpdatedValue: string;
  intro: string[];
  scopeNote: string;
  currentAppsLabel: string;
  currentApps: string[];
  sections: PrivacySection[];
  contactEmail: string;
  langToggleLabel: string;
  langToggleTarget: PrivacyLocale;
};

export const PRIVACY_CONTACT_EMAIL = "soporte@gypsa.tech";
export const PRIVACY_LAST_UPDATED = "2026-07-16";

const currentApps = ["TKD ITF Ring", "TKD ITF Judge"] as const;

export const privacyContent: Record<PrivacyLocale, PrivacyContent> = {
  es: {
    documentTitle: "Política de Privacidad | GYPSA",
    metaDescription:
      "Política de privacidad de las aplicaciones móviles de GYPSA, incluyendo TKD ITF Ring y TKD ITF Judge. Sin recopilación de datos personales ni publicidad.",
    heading: "Política de Privacidad",
    lastUpdatedLabel: "Última actualización",
    lastUpdatedValue: "16 de julio de 2026",
    intro: [
      "GYPSA (“nosotros”, “nuestro” o “la Compañía”) desarrolla y publica aplicaciones móviles. Esta Política de Privacidad describe cómo se trata la información en relación con nuestras aplicaciones, de forma compatible con los requisitos de Apple App Store y Google Play.",
      "Esta política aplica a todas las aplicaciones móviles desarrolladas por GYPSA. Actualmente incluye las aplicaciones listadas a continuación; futuras aplicaciones de GYPSA podrán quedar cubiertas por esta misma política sin cambiar la URL pública.",
    ],
    scopeNote:
      "Salvo que una aplicación publique una política específica diferente, esta Política de Privacidad es la referencia aplicable a las apps móviles de GYPSA.",
    currentAppsLabel: "Aplicaciones cubiertas actualmente",
    currentApps: [...currentApps],
    sections: [
      {
        id: "informacion-recopilada",
        title: "Información recopilada",
        paragraphs: [
          "Nuestras aplicaciones no recopilan datos personales. No se crean ni gestionan cuentas de usuario, no se utiliza publicidad, no se emplean servicios de analítica y no se utiliza Firebase ni plataformas equivalentes con fines de seguimiento.",
          "En particular, TKD ITF Ring y TKD ITF Judge no recopilan nombres, correos electrónicos, números telefónicos, identificadores de publicidad ni otros datos personales del usuario.",
        ],
      },
      {
        id: "comunicacion-red-local",
        title: "Comunicación por red local",
        paragraphs: [
          "La comunicación entre dispositivos ocurre únicamente dentro de la red Wi‑Fi local del usuario (por ejemplo, mediante WebSockets). No se envían datos a servidores externos con fines de seguimiento, publicidad o analítica.",
          "TKD ITF Judge se comunica únicamente con TKD ITF Ring a través de esa red local. El propósito de esta comunicación es el funcionamiento operativo de las aplicaciones durante su uso en el entorno local.",
        ],
      },
      {
        id: "permisos",
        title: "Permisos utilizados",
        paragraphs: [
          "Las aplicaciones solicitan únicamente los permisos necesarios para su funcionamiento local:",
        ],
        bullets: [
          "TKD ITF Ring: acceso a la red local; en iOS, ubicación “cuando la app está en uso” únicamente para obtener el nombre de la red Wi‑Fi (SSID). Este permiso no se utiliza para seguimiento geográfico ni para mapear la ubicación del usuario.",
          "TKD ITF Judge: acceso a la red local. No solicita ubicación.",
        ],
      },
      {
        id: "almacenamiento",
        title: "Almacenamiento de datos",
        paragraphs: [
          "Las aplicaciones únicamente almacenan la información necesaria para su funcionamiento local, como preferencias o configuración del usuario.",
          "Esa información permanece exclusivamente en el dispositivo del usuario y no se transmite a GYPSA ni a terceros con fines de perfilado, publicidad o analítica.",
        ],
      },
      {
        id: "seguridad",
        title: "Seguridad",
        paragraphs: [
          "Dado que la comunicación queda limitada a la red local del usuario y no se recopilan datos personales, el riesgo de exposición de información personal a través de servicios en la nube se reduce sustancialmente.",
          "No obstante, la seguridad de cualquier red local depende también de la configuración del entorno del usuario (por ejemplo, contraseñas de Wi‑Fi y dispositivos autorizados).",
        ],
      },
      {
        id: "terceros",
        title: "Compartición con terceros",
        paragraphs: [
          "No compartimos información con terceros. Las aplicaciones no integran redes publicitarias, SDK de analítica ni servicios de seguimiento de terceros.",
        ],
      },
      {
        id: "menores",
        title: "Privacidad de menores",
        paragraphs: [
          "Las aplicaciones no recopilan información personal de usuarios de ninguna edad, incluidos menores.",
          "Si usted considera que un menor ha proporcionado información personal a través de un canal distinto a las apps (por ejemplo, correo de soporte), contáctenos para que podamos atender su solicitud.",
        ],
      },
      {
        id: "contacto",
        title: "Contacto",
        paragraphs: [
          "Si tiene preguntas sobre esta Política de Privacidad o sobre las prácticas de privacidad de las aplicaciones de GYPSA, puede escribirnos a:",
        ],
      },
      {
        id: "cambios",
        title: "Cambios a esta política",
        paragraphs: [
          "Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras aplicaciones, prácticas o requisitos legales. La fecha de “Última actualización” al inicio de esta página indicará la revisión más reciente.",
          "Le recomendamos revisar esta página periódicamente. El uso continuado de las aplicaciones después de la publicación de cambios constituye la aceptación de la política actualizada, en la medida permitida por la ley aplicable.",
        ],
      },
    ],
    contactEmail: PRIVACY_CONTACT_EMAIL,
    langToggleLabel: "English",
    langToggleTarget: "en",
  },
  en: {
    documentTitle: "Privacy Policy | GYPSA",
    metaDescription:
      "Privacy Policy for GYPSA mobile applications, including TKD ITF Ring and TKD ITF Judge. No personal data collection, advertising, or analytics.",
    heading: "Privacy Policy",
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "July 16, 2026",
    intro: [
      "GYPSA (“we”, “us”, “our”, or the “Company”) develops and publishes mobile applications. This Privacy Policy describes how information is handled in connection with our apps, in a manner consistent with Apple App Store and Google Play expectations.",
      "This policy applies to all mobile applications developed by GYPSA. It currently covers the apps listed below; future GYPSA apps may be covered by this same policy without changing the public URL.",
    ],
    scopeNote:
      "Unless a specific app publishes a different policy, this Privacy Policy is the applicable reference for GYPSA mobile apps.",
    currentAppsLabel: "Apps currently covered",
    currentApps: [...currentApps],
    sections: [
      {
        id: "information-collected",
        title: "Information we collect",
        paragraphs: [
          "Our applications do not collect personal data. They do not create or manage user accounts, do not use advertising, do not use analytics services, and do not use Firebase or equivalent platforms for tracking purposes.",
          "In particular, TKD ITF Ring and TKD ITF Judge do not collect names, email addresses, phone numbers, advertising identifiers, or other personal data from users.",
        ],
      },
      {
        id: "local-network",
        title: "Local network communication",
        paragraphs: [
          "Device-to-device communication occurs only on the user’s local Wi‑Fi network (for example, via WebSockets). Data is not sent to external servers for tracking, advertising, or analytics purposes.",
          "TKD ITF Judge communicates only with TKD ITF Ring over that local network. The purpose of this communication is the operational functioning of the apps during local use.",
        ],
      },
      {
        id: "permissions",
        title: "Permissions used",
        paragraphs: [
          "The apps request only the permissions required for local operation:",
        ],
        bullets: [
          "TKD ITF Ring: Local Network access; on iOS, Location When In Use solely to obtain the Wi‑Fi network name (SSID). This permission is not used for geographic tracking or mapping the user’s location.",
          "TKD ITF Judge: Local Network access. Does not request location.",
        ],
      },
      {
        id: "data-storage",
        title: "Data storage",
        paragraphs: [
          "The apps store only the information necessary for local operation, such as user preferences or configuration.",
          "That information remains exclusively on the user’s device and is not transmitted to GYPSA or to third parties for profiling, advertising, or analytics.",
        ],
      },
      {
        id: "security",
        title: "Security",
        paragraphs: [
          "Because communication is limited to the user’s local network and personal data is not collected, the risk of personal information exposure through cloud services is substantially reduced.",
          "Nonetheless, the security of any local network also depends on the user’s environment (for example, Wi‑Fi passwords and authorized devices).",
        ],
      },
      {
        id: "third-parties",
        title: "Sharing with third parties",
        paragraphs: [
          "We do not share information with third parties. The apps do not integrate advertising networks, analytics SDKs, or third-party tracking services.",
        ],
      },
      {
        id: "children",
        title: "Children’s privacy",
        paragraphs: [
          "The apps do not collect personal information from users of any age, including children.",
          "If you believe a child has provided personal information through a channel other than the apps (for example, a support email), please contact us so we can address your request.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "If you have questions about this Privacy Policy or about the privacy practices of GYPSA applications, you may contact us at:",
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy to reflect changes in our apps, practices, or legal requirements. The “Last updated” date at the top of this page will indicate the most recent revision.",
          "We encourage you to review this page periodically. Continued use of the apps after changes are posted constitutes acceptance of the updated policy to the extent permitted by applicable law.",
        ],
      },
    ],
    contactEmail: PRIVACY_CONTACT_EMAIL,
    langToggleLabel: "Español",
    langToggleTarget: "es",
  },
};
