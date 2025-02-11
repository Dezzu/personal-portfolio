import React from "react";

export function DotBackground() {
  return (
    <div className="dark:bg-dot-white/[0.1] bg-dot-black/[0.2] dark:bg-black-100 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}
