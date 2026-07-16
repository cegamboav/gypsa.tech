import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
  id?: string;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  const Component = Tag;

  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
