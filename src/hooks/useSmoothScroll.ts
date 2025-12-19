"use client";

import { useEffect } from "react";

const supportsSmoothScroll =
  typeof window !== "undefined" &&
  "scrollBehavior" in document.documentElement.style;

function getHeaderOffset() {
  if (typeof window === "undefined") return 0;
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return (header?.getBoundingClientRect().height ?? 0) + 8; // small breathing room
}

function scrollToHash(hash: string, replaceHistory = false) {
  if (!hash) return false;
  const id = decodeURIComponent(hash.replace("#", ""));
  const target = document.getElementById(id);
  if (!target) return false;

  const offset = getHeaderOffset();
  const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: targetTop,
    behavior: supportsSmoothScroll ? "smooth" : "auto",
  });

  if (replaceHistory) {
    history.replaceState(null, "", `#${id}`);
  }

  return true;
}

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const didScroll = scrollToHash(url.hash, true);
      if (didScroll) {
        event.preventDefault();
      }
    };

    const handleInitialHash = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash, false);
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    // Wait a tick so layout has measured header height
    requestAnimationFrame(() => setTimeout(handleInitialHash, 20));

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);
}


