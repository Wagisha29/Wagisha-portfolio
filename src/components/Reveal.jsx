import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const { ref, isVisible } = useScrollReveal();

  const hidden =
    direction === "left"
      ? "-translate-x-8 opacity-0"
      : direction === "right"
        ? "translate-x-8 opacity-0"
        : "translate-y-8 opacity-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
