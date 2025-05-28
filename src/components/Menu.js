'use client'

import { useEffect, useState } from 'react'

export default function Menu() {
  const [activeButton, setActiveButton] = useState('home')

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId)
    document.getElementById(buttonId).scrollIntoView({ behavior: 'smooth' })
  }

  const [bg, setBg] = useState(false)

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY !== undefined && window.scrollY >= 90) {
        setBg(true)
      } else {
        setBg(false)
      }
    }

    const changeActiveBtn = () => {
      let sections = document.querySelectorAll('section')
      sections.forEach((s) => {
        let top = window.scrollY
        let offSet = s.offsetTop
        let height = s.offsetHeight
        let id = s.getAttribute('id')

        if (top >= offSet && top < offSet + height) {
          setActiveButton(id)
        }
      })
    }

    window.addEventListener('scroll', changeBg)
    window.addEventListener('scroll', changeActiveBtn)

    return () => {
      window.removeEventListener('scroll', changeBg);
      window.addEventListener('scroll', changeActiveBtn)
    };
  })

  return (
    <header
      className={bg ? 'bg-black text-secundary header-props transition flex justify-center items-center' : 'bg-transparent text-primary header-props flex justify-center items-center'}
    >
      <nav id='nav_buttons' className="flex justify-around cursor-pointer max-w-[1280px] w-full">
        <a
          title='Navegar para a home'
          className={activeButton === 'home' ? 'active' : ''}
          onClick={() => handleButtonClick('home')}
        >
          {' '}
          Inicio{' '}
        </a>
        <a
          title='Navegar para o sobre'
          className={activeButton === 'about' ? 'active' : ''}
          onClick={() => handleButtonClick('about')}
        >
          {' '}
          Sobre{' '}
        </a>
        <a
          title='Navegar para os projetos'
          className={activeButton === 'projects' ? 'active' : ''}
          onClick={() => handleButtonClick('projects')}
        >
          {' '}
          Projetos{' '}
        </a>
        <a
          title='Navegar para o contato'
          className={activeButton === 'contact' ? 'active' : ''}
          onClick={() => handleButtonClick('contact')}
        >
          {' '}
          Contato{' '}
        </a>
      </nav>
    </header>
  )
}
