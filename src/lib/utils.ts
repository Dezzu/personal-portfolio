import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleClick = (
  event: React.MouseEvent<HTMLAnchorElement> | null,
  href: string,
) => {
  if (event) {
    event.preventDefault();
  }

  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
