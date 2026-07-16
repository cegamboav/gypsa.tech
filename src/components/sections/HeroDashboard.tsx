import {
  Activity,
  BarChart3,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";

const metrics = [
  { label: "Procesos activos", value: "24", trend: "+12%" },
  { label: "Tareas automatizadas", value: "186", trend: "+28%" },
  { label: "Tiempo ahorrado", value: "42h", trend: "semana" },
];

const tasks = [
  { name: "Seguimiento de pedidos", status: "Completado" },
  { name: "Reporte operativo", status: "En curso" },
  { name: "Integración de datos", status: "Programado" },
];

export function HeroDashboard() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      aria-hidden
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-600/20 via-brand-500/5 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-[0_24px_60px_-12px_rgba(12,31,61,0.18)] backdrop-blur-sm ring-1 ring-navy-900/5">
        <div className="flex items-center justify-between border-b border-border/80 bg-gradient-to-r from-navy-950 to-navy-900 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <p className="text-xs font-medium text-slate-300">
            Panel operativo — GYPSA
          </p>
          <Layers className="h-4 w-4 text-brand-400" strokeWidth={1.75} />
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border/70 bg-surface-muted/80 p-2.5 sm:p-3"
              >
                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  {metric.label}
                </p>
                <p className="mt-1 text-base font-semibold text-navy-900 sm:text-lg">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[10px] text-brand-600 sm:text-xs">
                  {metric.trend}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border/70 bg-white p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-navy-900">
                Flujo de operaciones
              </p>
              <BarChart3
                className="h-4 w-4 text-brand-600"
                strokeWidth={1.75}
              />
            </div>
            <div className="flex h-20 items-end gap-1.5 sm:h-24">
              {[40, 65, 48, 78, 58, 88, 72].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-navy-800 to-brand-500 opacity-90"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.name}
                className="flex items-center justify-between rounded-lg border border-border/60 bg-surface-muted/50 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-brand-600"
                    strokeWidth={2}
                  />
                  <span className="text-xs text-slate-700">{task.name}</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  {task.status}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 rounded-lg bg-navy-950/5 px-3 py-2">
            <Activity
              className="h-4 w-4 shrink-0 text-brand-600"
              strokeWidth={1.75}
            />
            <p className="text-xs text-slate-600">
              Visibilidad centralizada de procesos y seguimiento en tiempo real.
            </p>
            <Clock
              className="ml-auto h-3.5 w-3.5 text-slate-400"
              strokeWidth={1.75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
