"use client"

import { useEffect, useState } from "react";

import { TbCoffee } from "react-icons/tb";

export default function Menu() {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    document.getElementById(buttonId).scrollIntoView({ behavior: "smooth" });
  };

  const [bg, setBg] = useState(false)

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY != undefined && window.scrollY >= 90) {
        setBg(true)
      } else {
        setBg(false)
      }
    }

    window.addEventListener("scroll", changeBg)
  })

  return (
    <header className={bg ? "bg-black text-secundary header-props" : "bg-transparent text-primary header-props"}>
      <nav className="flex justify-around cursor-pointer">
        <a className={activeButton === "home" ? "active" : ""} onClick={() => handleButtonClick("home")}> Inicio </a>
        <a className={activeButton === "about" ? "active" : ""} onClick={() => handleButtonClick("about")}> Sobre </a>
        <a className={activeButton === "projects" ? "active" : ""} onClick={() => handleButtonClick("projects")}> Projetos </a>
        <a className={activeButton === "contact" ? "active" : ""} onClick={() => handleButtonClick("contact")}> Contato </a>
      </nav>
    </header>
  );
}

