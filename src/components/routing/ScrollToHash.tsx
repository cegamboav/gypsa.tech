import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.replace("#", ""));

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (scrollToTarget()) return;

    const frame = window.requestAnimationFrame(() => {
      scrollToTarget();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
