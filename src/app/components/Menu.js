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

    const changeActiveBtn = () => {
      if (window.scrollY != undefined && window.scrollY <680) {
        setActiveButton("home")
      } else if (window.scrollY != undefined && window.scrollY >=680 && window.scrollY <1360) {
        setActiveButton("about")
      } else if (window.scrollY != undefined && window.scrollY >=1360 && window.scrollY <2040) {
        setActiveButton("projects")
      } else if (window.scrollY != undefined && window.scrollY >=2040) {
        setActiveButton("contact")
      }
    }

    window.addEventListener("scroll", changeBg)
    window.addEventListener("scroll", changeActiveBtn)
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

