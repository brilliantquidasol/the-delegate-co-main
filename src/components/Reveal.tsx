import { ComponentPropsWithoutRef, ElementType, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  /**
   * Optional root margin for IntersectionObserver.
   * Defaults to 10% viewport padding to trigger a bit earlier.
   */
  rootMargin?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Lightweight in-view reveal wrapper using IntersectionObserver.
 * Adds `.reveal` base class and `.reveal--visible` once the element
 * has intersected the viewport. Unobserves after first reveal to avoid
 * repeated animations during the same session.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -10% 0px",
  ...rest
}: RevealProps<T>) {
  const Component = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If IntersectionObserver is not available (very old browsers), show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Component
      ref={ref as never}
      className={`reveal${isVisible ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}



