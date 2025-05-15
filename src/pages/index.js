import Home from '../components/home'  
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Menu from '../components/Menu'

export default function Page() {
  return (
    <div className="font-main">
      <Menu />
      <div className="flex flex-col gradient-background justify-center items-center">
        <section className='max-w-[1280px] w-full' id="home">
          <div className="h-screen px-5 lg:px-12 flex items-center">
            <Home />
          </div>
        </section>
        <section id="about" className="bg-black w-full flex items-center justify-center">
          <div className="max-w-[1280px] py-12 px-5 lg:px-12 w-full flex justify-center items-center">
            <About />
          </div>
        </section>
        <section className='max-w-[1280px] w-full' id="projects">
          <div className="py-12 px-5 lg:px-12 flex justify-center items-center">
            <Projects />
          </div>
        </section>
        <section className='max-w-[1280px] w-full' id="contact">
          <div className="px-5 lg:px-12 flex justify-center lg:justify-end items-center">
            <Contact />
          </div>
        </section>
        <footer className='flex justify-center'>
          <p className='text-primary font-bold'> © Isa Marques, 2024 </p>
        </footer>
      </div>
    </div>
  )
}
