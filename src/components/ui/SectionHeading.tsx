type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = dark ? "text-white" : "text-navy-900";
  const subtitleColor = dark ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`mb-12 max-w-2xl sm:mb-14 ${alignClass}`}>
      <div
        className={`mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden
      />
      <h2
        id={id}
        className={`text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-relaxed sm:text-lg ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
