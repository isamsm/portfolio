import Image from 'next/image'
import boleria from '../assets/projects/boleria.webp'
import escolha from '../assets/projects/escolha.webp'
import gameflix from '../assets/projects/gameflix.webp'
import auth from '../assets/projects/auth.webp'
import todo from '../assets/projects/todo.webp'
import mentoria from '../assets/projects/mentoria.webp'
import amigo_literario from '../assets/projects/amigo_literario.webp'

import { LuPlusCircle, LuCode, LuLink2 } from 'react-icons/lu'

export default function Projects() {
  return (
    <div data-aos="zoom-in" className="text-primary flex flex-col gap-5">
      <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl">
        {' '}
        Meus projetos{' '}
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 font-semibold text-xl">
        <div className="projects-card">
          <Image
            src={boleria}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto de boleria"
          />
          <div className="projects-info">
            <h5 className="pt-2"> CODE&BAKE </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto CODE&BAKE"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/CODE-BAKE"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado CODE&BAKE"
                className="transition transform hover:scale-125"
                href="https://code-bake.vercel.app"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <Image
            src={escolha}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto de escolha"
          />
          <div className="projects-info">
            <h5 className="pt-2 font-semibold md:text-md lg:text-md">
              {' '}
              Escolha{' '}
            </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto Escolha"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/escolha"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado Escolha"
                className="transition transform hover:scale-125"
                href="https://escolha.vercel.app"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <Image
            src={gameflix}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto do gameflix"
          />
          <div className="projects-info">
            <h5 className="pt-2 font-semibold md:text-md lg:text-md">
              {' '}
              Gameflix{' '}
            </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto Gameflix"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/gameflix"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado Gameflix"
                className="transition transform hover:scale-125"
                href="https://gameflix-ashen.vercel.app"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 font-semibold text-lg">
        <div className="projects-card">
          <Image
            src={auth}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto de Login/Cadastro"
          />
          <div className="projects-info">
            <h5 className="pt-2 font-semibold md:text-md lg:text-md">
              {' '}
              Authentification{' '}
            </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto Login/Cadastro"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/authentification"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado Login/Cadastro"
                className="transition transform hover:scale-125"
                href="https://isamsm.github.io/authentification/"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <Image
            src={todo}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto de To-Do-list"
          />
          <div className="projects-info">
            <h5 className="pt-2 font-semibold md:text-md lg:text-md">
              {' '}
              To-Do-List{' '}
            </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto To-Do-List"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/to-do-list"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado To-Do-List"
                className="transition transform hover:scale-125"
                href="https://isamsm.github.io/to-do-list/"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <Image
            src={mentoria}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto de mentoria"
          />
          <div className="projects-info">
            <h5 className="pt-2 font-semibold md:text-md lg:text-md">
              {' '}
              Mentoria{' '}
            </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto Mentoria"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/mentoria"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado Mentoria"
                className="transition transform hover:scale-125"
                href="https://mentoria-zeta.vercel.app"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 font-semibold text-lg">
        <div className="projects-card">
          <Image
            src={amigo_literario}
            className="projects-img"
            alt="Imagem da página inicial do meu projeto Amigo Literário"
          />
          <div className="projects-info">
            <h5 className="pt-2 font-semibold md:text-md lg:text-md">
              {' '}
              Amigo Literário{' '}
            </h5>
            <div className="flex gap-2">
              <a
                title="Link repositório projeto Amigo Literário"
                className="transition transform hover:scale-125"
                href="https://github.com/isamsm/amigo_literario"
                target="_blank"
              >
                {' '}
                <LuCode />{' '}
              </a>
              <a
                title="Link projeto hospedado Amigo Literário"
                className="transition transform hover:scale-125"
                href="https://amigo-literario-theta.vercel.app"
                target="_blank"
              >
                {' '}
                <LuLink2 />{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:items-center lg:items-center justify-center">
          <a
            title="Link outros projetos no Github"
            className="transition transform hover:scale-125"
            href="https://github.com/isamsm?tab=repositories"
            target="_blank"
          >
            {' '}
            <h5 className="flex pt-12 md:pt-0 lg:pt-0 gap-2 font-semibold text-lg md:text-2xl lg:text-2xl">
              {' '}
              <LuPlusCircle className="mt-1" /> Veja mais{' '}
            </h5>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}
