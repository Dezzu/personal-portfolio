import React from "react";

export function GridBackground() {
  return (
    <div className="dark:bg-grid-white/[0.03] bg-grid-black/[0.2] dark:bg-black-100 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white">
      <div className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
