import Image from 'next/image'
import boleria from '../assets/projects/boleria.webp'
import escolha from '../assets/projects/escolha.webp'
import gameflix from '../assets/projects/gameflix.webp'
import auth from '../assets/projects/auth.webp'
import todo from '../assets/projects/todo.webp'
import mentoria from '../assets/projects/mentoria.webp'
import amigo_literario from '../assets/projects/amigo_literario.webp'

import { LuCode, LuLink2 } from 'react-icons/lu'

export default function Projects() {
  const projects = [
    {
      "title": "CODE&BAKE",
      "image": boleria,
      "repo": "https://github.com/isamsm/CODE-BAKE",
      "deploy": "https://code-bake.vercel.app",
      "alt": "Imagem da página inicial do meu projeto de boleria"
    },
    {
      "title": "ESCOLHA",
      "image": escolha,
      "repo": "https://github.com/isamsm/ESCOLHA",
      "deploy": "https://escolha.vercel.app",
      "alt": "Imagem da página inicial do meu projeto de escolha"
    },
    {
      "title": "GAMEFLIX",
      "image": gameflix,
      "repo": "https://github.com/isamsm/GAMEFLIX",
      "deploy": "https://gameflix-ashen.vercel.app",
      "alt": "Imagem da página inicial do meu projeto de gameflix"
    },
    {
      "title": "AUTH",
      "image": auth,
      "repo": "https://github.com/isamsm/authentification",
      "deploy": "https://isamsm.github.io/authentification/",
      "alt": "Imagem da página inicial do meu projeto de autenticação"
    },
    {
      "title": "TODO",
      "image": todo,
      "repo": "https://github.com/isamsm/to-do-list",
      "deploy": "https://isamsm.github.io/to-do-list/",
      "alt": "Imagem da página inicial do meu projeto de todo"
    },
    {
      "title": "MENTORIA",
      "image": mentoria,
      "repo": "https://github.com/isamsm/mentoria",
      "deploy": "https://mentoria-zeta.vercel.app",
      "alt": "Imagem da página inicial do meu projeto de mentoria"
    },
    {
      "title": "AMIGO LITERÁRIO",
      "image": amigo_literario,
      "repo": "https://github.com/isamsm/amigo_literario",
      "deploy": "https://amigo-literario-theta.vercel.app",
      "alt": "Imagem da página inicial do meu projeto amigo literário"
    },
  ]

  return (
    <section data-aos="zoom-in" className="text-primary flex flex-col gap-5 lg:h-screen h-full justify-center">
      <h2 className="uppercase font-bold text-xl lg:text-4xl">
        {' '}
        Meus projetos{' '}
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 font-semibold text-xl">
        {projects.map((project) => {
          return (
           <div className="projects-card">
            <Image
              src={project.image}
              className="projects-img"
              alt={project.alt}
            />
            <div className="projects-info">
              <h3 className="pt-2"> {project.title} </h3>
              <div className="flex gap-2">
                <a
                  title="Link repositório projeto CODE&BAKE"
                  className="transition transform hover:scale-125"
                  href={project.repo}
                  target="_blank"
                >
                  {' '}
                  <LuCode />{' '}
                </a>
                <a
                  title="Link projeto hospedado CODE&BAKE"
                  className="transition transform hover:scale-125"
                  href={project.deploy}
                  target="_blank"
                >
                  {' '}
                  <LuLink2 />{' '}
                </a>
              </div>
            </div>
          </div>
        )
        })}
      </div>
    </section>
  )
}
