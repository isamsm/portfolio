"use client"

import { useState } from "react";

import { TbCoffee } from "react-icons/tb";

export default function Menu() {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    document.getElementById(buttonId).scrollIntoView({ behavior: "smooth" });
  };

  const [bg, setBg] = useState(false)
  const changeBg = () => {
    if (window.scrollY >= 90) {
      setBg(true)
    } else {
      setBg(false)
    }
  }

  window.addEventListener("scroll", changeBg)

  return (
    <header className={bg ? "bg-black text-white header-props" : "bg-transparent text-primary header-props"}>
      <nav className="navbar-props">
        <TbCoffee className="text-2xl"/>
        <div className="flex gap-5">
            <a className={activeButton === "home" ? "active" : ""} onClick={() => handleButtonClick("home")}> Inicio </a>
            <a className={activeButton === "about" ? "active" : ""} onClick={() => handleButtonClick("about")}> Sobre </a> 
            <a className={activeButton === "projects" ? "active" : ""} onClick={() => handleButtonClick("about")}> Projetos </a> 
            <a className={activeButton === "contact" ? "active" : ""} onClick={() => handleButtonClick("about")}> Contato </a> 
        </div>

      </nav>
  </header>
  );
}

