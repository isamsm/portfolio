"use client"

import { useState } from "react";

export default function Menu() {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    document.getElementById(buttonId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full pt-2">
      <nav className={activeButton === "about" ? "text-secundary nav-style" : "text-primary nav-style"}>
          <a className={activeButton === "home" ? "active" : ""} onClick={() => handleButtonClick("home")}> Inicio </a>
          <a className={activeButton === "about" ? "active" : ""} onClick={() => handleButtonClick("about")}> Sobre </a>
          <a className={activeButton === "projects" ? "active" : ""} onClick={() => handleButtonClick("projects")}> Projetos </a>
          <a className={activeButton === "contact" ? "active" : ""} onClick={() => handleButtonClick("contact")}> Contato </a>
      </nav>
    </header>
  );
}

