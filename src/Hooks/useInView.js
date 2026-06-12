import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal hook built on IntersectionObserver.
 * Returns a ref to attach to the element and a boolean that flips
 * to true once the element enters the viewport (and stays true).
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser doesn't support IntersectionObserver, just show it.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};
