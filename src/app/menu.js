"use client"

import { useState } from "react";

export default function Menu() {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    document.getElementById(buttonId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed w-full pt-2">
      <ul className={activeButton === "about" ? "text-secundary ul-style" : "text-primary ul-style"}>
        <li className={activeButton === "home" ? "underline" : "hover:underline"}>
          <a onClick={() => handleButtonClick("home")}> Inicio </a>
        </li>
        <li className={activeButton === "about" ? "underline" : "hover:underline"}>
          <a onClick={() => handleButtonClick("about")}> Sobre </a>
        </li>
        <li className={activeButton === "projects" ? "underline" : "hover:underline"}>
          <a onClick={() => handleButtonClick("projects")}> Projetos </a>
        </li>
        <li className={activeButton === "contact" ? "underline" : "hover:underline"}>
          <a onClick={() => handleButtonClick("contact")}> Contato </a>
        </li>
      </ul>
    </div>
  );
}

