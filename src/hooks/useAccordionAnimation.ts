import {
  type CSSProperties,
  type RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type AccordionAnimationReturn = {
  contentRef: RefObject<HTMLDivElement>;
  panelStyles: CSSProperties;
  contentStyles: CSSProperties;
  iconStyles: CSSProperties;
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useAccordionAnimation(isOpen: boolean): AccordionAnimationReturn {
  const contentRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setMeasuredHeight(el.scrollHeight);
    measure();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;

    observer?.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setMeasuredHeight(isOpen ? el.scrollHeight : 0);
  }, [isOpen]);

  const panelStyles = useMemo(() => {
    const openEase = "cubic-bezier(0.16, 1, 0.3, 1)";
    const closeEase = "cubic-bezier(0.4, 0, 0.2, 1)";

    return {
      maxHeight: isOpen ? measuredHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0)" : "translateY(-6px)",
      transition: `max-height ${isOpen ? 380 : 240}ms ${
        isOpen ? openEase : closeEase
      }, opacity ${isOpen ? 260 : 180}ms ${
        isOpen ? "ease-out" : "ease-in"
      }, transform ${isOpen ? 260 : 180}ms ${
        isOpen ? "ease-out" : "ease-in"
      }`,
      willChange: "max-height, opacity, transform",
    };
  }, [isOpen, measuredHeight]);

  const contentStyles = useMemo(() => {
    const openEase = "ease-out";
    const closeEase = "ease-in";
    const delay = isOpen ? 40 : 0;

    return {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0)" : "translateY(6px)",
      transition: `opacity ${isOpen ? 220 : 160}ms ${
        isOpen ? openEase : closeEase
      } ${delay}ms, transform ${isOpen ? 220 : 160}ms ${
        isOpen ? openEase : closeEase
      } ${delay}ms`,
      willChange: "opacity, transform",
    };
  }, [isOpen]);

  const iconStyles = useMemo(
    () => ({
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: `transform ${isOpen ? 240 : 180}ms ${
        isOpen ? "ease-out" : "ease-in"
      }`,
    }),
    [isOpen]
  );

  return { contentRef, panelStyles, contentStyles, iconStyles };
}

