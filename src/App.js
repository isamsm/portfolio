import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { useState } from 'react';

const App = () => {
  const [activeMenu, setActiveMenu] = useState("Home")

  return (
    <div className='h-screen flex flex-col max-w-[1280px] mx-auto'>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      {activeMenu === "Home" && <Home />}
      {activeMenu === "About" && <About />}
      {activeMenu === "Skills" && <Skills />}
      {activeMenu === "Projects" && <Projects />}
    </div>
  );
}

export default App;
