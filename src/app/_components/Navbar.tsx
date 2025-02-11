import React from "react";
import { FloatingNavbar } from "./ui/FloatingNavbar";

function Navbar() {
  return (
    <FloatingNavbar
      className="opacity-70"
      navItems={[
        {
          name: "Prova",
          link: "#prova",
        },
        {
          name: "Prova1",
          link: "#prova1",
        },
        {
          name: "Prova2",
          link: "#prova2",
        },
      ]}
    />
  );
}

export default Navbar;
