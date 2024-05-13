import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Menu from '../components/Menu'

export default function Page() {
  return (
    <div className="font-main">
      <Menu />
      <div className="flex flex-col gradient-background">
        <section id="home">
          <div className="h-screen px-5 md:px-12 lg:px-12 flex items-center">
            <Home />
          </div>
        </section>
        <section id="about" className="bg-black">
          <div className="h-full md:h-screen lg:h-screen py-12 md:py-0 lg:py-0 px-5 md:px-12 lg:px-12 flex md:justify-center lg:justify-center items-center">
            <About />
          </div>
        </section>
        <section id="projects">
          <div className="h-full py-12 px-5 md:px-12 lg:px-12 flex justify-center items-center">
            <Projects />
          </div>
        </section>
        <section id="contact">
          <div className="h-screen px-5 md:px-12 lg:px-12 flex md:justify-end lg:justify-end items-center">
            <Contact />
          </div>
        </section>
        <footer className='flex justify-center'>
          <p className='text-primary'> © Isa Marques, 2024 </p>
        </footer>
      </div>
    </div>
  )
}
