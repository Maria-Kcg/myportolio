import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a ref.
 * Adds the class `visible` when the element enters the viewport.
 * @param {number} threshold - 0 to 1
 */
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};

export default useScrollReveal;
