"use client";
import { useEffect, useRef } from "react";
import { useMousePosition } from "../../../lib/mouse";

export const BackgroundBeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const lastRender = useRef<number>(performance.now());

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerSize.current.w = rect.width;
      containerSize.current.h = rect.height;
    }
  }, []);

  useEffect(() => {
    const onMouseMove = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const { w, h } = containerSize.current;
        const x = mousePosition.x - rect.left;
        const y = mousePosition.y - rect.top;
        const inside = x < w && x > 0 && y < h && y > 0;
        if (inside) {
          mouse.current.x = x;
          mouse.current.y = y;
          containerRef.current.style.setProperty("--mouse-x", `${x}px`);
          containerRef.current.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    const onResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        containerSize.current.w = rect.width;
        containerSize.current.h = rect.height;
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 bg-black opacity-50`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side_at_var(--mouse-x,_100px)_var(--mouse-y,_100px),_var(--color-secondary)_0%,_transparent_100%)] opacity-100 transition-opacity duration-300" />
    </div>
  );
};
