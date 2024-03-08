"use client"

import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Menu from "./components/Menu";
import { useState } from "react";

export default function Page() {
  return (
    <div className="font-main">
      <Menu />
      <div className="flex flex-col gradient-background">
        <div id="home">
          <div className="h-screen px-5 md:px-12 lg:px-12 flex items-center">
            <Home />
          </div>
        </div>
        <div id="about" className="bg-black">
          <div className="h-full md:h-screen lg:h-screen py-12 md:py-0 lg:py-0 px-5 md:px-12 lg:px-12 flex md:justify-center lg:justify-center items-center">
            <About />
          </div>
        </div>
        <div id="projects">
          <div className="h-full pt-12 px-5 md:px-12 lg:px-12 flex justify-center items-center">
            <Projects />
          </div>
        </div>
        <div id="contact">
          <div className="h-screen px-5 md:px-12 lg:px-12 flex md:justify-end lg:justify-end items-center">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}
