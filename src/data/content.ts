import type { LucideIcon } from "lucide-react";
import {
  Brain,
  ClipboardList,
  Cloud,
  FileSearch,
  GitBranch,
  Layers,
  MessageCircle,
  Repeat,
  Search,
  Settings2,
  Workflow,
} from "lucide-react";

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const problems = [
  {
    title: "Procesos manuales",
    description:
      "Tareas críticas dependen de hojas de cálculo y trabajo repetitivo que consume tiempo del equipo.",
    icon: ClipboardList,
  },
  {
    title: "Información desordenada",
    description:
      "Datos dispersos en distintos archivos y canales, dificultando decisiones oportunas.",
    icon: Layers,
  },
  {
    title: "Seguimiento deficiente",
    description:
      "Falta de visibilidad sobre el avance operativo, plazos y responsables de cada actividad.",
    icon: FileSearch,
  },
  {
    title: "Tareas repetitivas",
    description:
      "Horas dedicadas a actividades que podrían automatizarse con reglas claras y herramientas adecuadas.",
    icon: Repeat,
  },
  {
    title: "Falta de centralización",
    description:
      "Operaciones fragmentadas sin un sistema único que conecte áreas y procesos del negocio.",
    icon: GitBranch,
  },
  {
    title: "Dependencia excesiva de WhatsApp",
    description:
      "Comunicación informal que mezcla operación y mensajería, sin trazabilidad ni orden.",
    icon: MessageCircle,
  },
] as const;

export const services = [
  {
    title: "Diagnóstico y Optimización Operativa",
    description:
      "Análisis de procesos manuales y desorganizados para identificar oportunidades de mejora y automatización.",
    icon: Search,
  },
  {
    title: "Automatización de Procesos Empresariales",
    description:
      "Automatización de tareas repetitivas, seguimiento operativo y generación de reportes.",
    icon: Workflow,
  },
  {
    title: "Desarrollo de Soluciones Empresariales",
    description:
      "Desarrollo de herramientas y plataformas adaptadas a las necesidades operativas de cada empresa.",
    icon: Settings2,
  },
  {
    title: "Integración de Inteligencia Artificial",
    description:
      "Implementación de automatizaciones y asistentes inteligentes para mejorar productividad y seguimiento.",
    icon: Brain,
  },
  {
    title: "Infraestructura y Soporte Tecnológico",
    description:
      "Soporte especializado en Linux, cloud e infraestructura empresarial.",
    icon: Cloud,
  },
] as const;

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Analizamos procesos",
    description:
      "Revisamos cómo opera su negocio hoy: flujos, herramientas y puntos de fricción.",
    icon: Search,
  },
  {
    step: 2,
    title: "Detectamos oportunidades",
    description:
      "Priorizamos mejoras con impacto real en tiempo, orden y control operativo.",
    icon: FileSearch,
  },
  {
    step: 3,
    title: "Diseñamos soluciones",
    description:
      "Definimos herramientas, integraciones y automatizaciones acordes a su operación.",
    icon: Settings2,
  },
  {
    step: 4,
    title: "Implementamos mejoras",
    description:
      "Acompañamos la puesta en marcha con soporte y ajustes según resultados.",
    icon: Workflow,
  },
];

export const contactLinks = [
  { label: "LinkedIn", href: "#", placeholder: true },
  {
    label: "Contacto por correo",
    href: "mailto:contacto@gypsa.tech",
    placeholder: false,
    detail: "contacto@gypsa.tech",
    description: "También puedes escribirnos directamente por correo electrónico.",
  },
  { label: "WhatsApp", href: "#", placeholder: true },
] as const;
