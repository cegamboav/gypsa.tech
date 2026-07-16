type LogoVariant = "full" | "compact";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  /** Accessible label; defaults to GYPSA */
  label?: string;
};

/**
 * Full logo: icon + wordmark + tagline (hero, footer).
 * Compact: icon + GYPSA wordmark only — crops tagline via object-position (navbar).
 * Same high-res source; no quality loss from resizing.
 */
export function Logo({
  variant = "compact",
  className = "",
  label = "GYPSA",
}: LogoProps) {
  if (variant === "compact") {
    return (
      <span
        className={`inline-flex shrink-0 overflow-hidden leading-none ${className}`}
      >
        <img
          src="/images/logo.png"
          alt={label}
          width={1200}
          height={1200}
          className="block h-14 w-[11.5rem] max-w-none object-cover object-[50%_19%] sm:h-[4.25rem] sm:w-[13.25rem] md:h-[4.75rem] md:w-[14.75rem] lg:h-20 lg:w-[15.75rem]"
          decoding="async"
          fetchPriority="high"
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex w-full max-w-none justify-center leading-none lg:justify-start ${className}`}
    >
      <span className="inline-block origin-top scale-[1.35] sm:scale-[1.42] lg:scale-[1.48]">
        <img
          src="/images/logo.png"
          alt={label}
          width={1200}
          height={1200}
          className="block h-auto w-[min(100%,20rem)] max-w-none sm:w-[24rem] md:w-[26rem] lg:w-[28rem]"
          loading="eager"
          decoding="async"
        />
      </span>
    </span>
  );
}
