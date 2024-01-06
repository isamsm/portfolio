import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Menu from "./menu";

export default function Page() {
  return (
    <>
      <div className="font-main">
        <div className="bg-transperent">
          <Menu />
        </div>
        <div className="flex flex-col">
          <div id="home" className="gradient-background">
            <div className="h-screen px-12 flex items-center">
              <Home />
            </div>
          </div>
          <div id="about" className="bg-black">
            <div className="h-screen px-12 flex justify-center items-center">
              <About />
            </div>
          </div>
          <div id="projects" className="gradient-background">
            <div className="h-screen px-12 flex items-center">
              <Projects />
            </div>
          </div>
          <div id="contact" className="gradient-background">
            <div className="h-screen px-12 flex justify-end items-center">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
