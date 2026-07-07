import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ rx: 0, ry: 0, mx: 0, my: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx - 18) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.rx}px, ${pos.current.ry}px)`;
      }
      requestAnimationFrame(animate);
    };

    const onEnter = () => { if (ringRef.current) ringRef.current.style.opacity = "0"; };
    const onLeave = () => { if (ringRef.current) ringRef.current.style.opacity = "1"; };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    const rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default Cursor;
