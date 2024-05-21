import Image from 'next/image'
import boleria from '../../public/projects/boleria.png'
import escolha from '../../public/projects/escolha.png'
import gameflix from '../../public/projects/gameflix.png'
import auth from '../../public/projects/auth.png'
import todo from '../../public/projects/todo.png'
import mentoria from '../../public/projects/mentoria.png'

import { LuPlusCircle, LuCode, LuLink2 } from 'react-icons/lu'

export default function Projects() {
  return (
    <div data-aos="zoom-in" className="text-primary flex flex-col gap-5">
      <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl">
        {' '}
        Meus projetos{' '}
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 font-semibold text-lg">
        <div>
          <Image
            src={boleria}
            className="rounded-md"
            alt="Imagem da página inicial do meu projeto de boleria"
          />
          <h3 className="pt-2"> CODE&BAKE </h3>
          <div className="flex gap-2">
            <a
              className="transition transform hover:scale-125"
              href="https://github.com/isamsm/CODE-BAKE"
              target="_blank"
            >
              {' '}
              <LuCode />{' '}
            </a>
            <a
              className="transition transform hover:scale-125"
              href="https://code-bake.vercel.app"
              target="_blank"
            >
              {' '}
              <LuLink2 />{' '}
            </a>
          </div>
        </div>
        <div>
          <Image
            src={escolha}
            className="rounded-md"
            alt="Imagem da página inicial do meu projeto de escolha"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md">
            {' '}
            Escolha{' '}
          </h3>
          <div className="flex gap-2">
            <a
              className="transition transform hover:scale-125"
              href="https://github.com/isamsm/escolha"
              target="_blank"
            >
              {' '}
              <LuCode />{' '}
            </a>
            <a
              className="transition transform hover:scale-125"
              href="https://escolha.vercel.app"
              target="_blank"
            >
              {' '}
              <LuLink2 />{' '}
            </a>
          </div>
        </div>
        <div>
          <Image
            src={gameflix}
            className="rounded-md"
            alt="Imagem da página inicial do meu projeto do gameflix"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md">
            {' '}
            Gameflix{' '}
          </h3>
          <div className="flex gap-2">
            <a
              className="transition transform hover:scale-125"
              href="https://github.com/isamsm/gameflix"
              target="_blank"
            >
              {' '}
              <LuCode />{' '}
            </a>
            <a
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
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 font-semibold text-lg">
      <div>
          <Image
            src={auth}
            className="rounded-md"
            alt="Imagem da página inicial do meu projeto de login/cadastro"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md">
            {' '}
            Authentification{' '}
          </h3>
          <div className="flex gap-2">
            <a
              className="transition transform hover:scale-125"
              href="https://github.com/isamsm/authentification"
              target="_blank"
            >
              {' '}
              <LuCode />{' '}
            </a>
            <a
              className="transition transform hover:scale-125"
              href="https://isamsm.github.io/authentification/"
              target="_blank"
            >
              {' '}
              <LuLink2 />{' '}
            </a>
          </div>
        </div>
        <div>
          <Image
            src={todo}
            className="rounded-md"
            alt="Imagem da página inicial do meu projeto de to-do-list"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md">
            {' '}
            To-Do-List{' '}
          </h3>
          <div className="flex gap-2">
            <a
              className="transition transform hover:scale-125"
              href="https://github.com/isamsm/to-do-list"
              target="_blank"
            >
              {' '}
              <LuCode />{' '}
            </a>
            <a
              className="transition transform hover:scale-125"
              href="https://isamsm.github.io/to-do-list/"
              target="_blank"
            >
              {' '}
              <LuLink2 />{' '}
            </a>
          </div>
        </div>
        <div>
          <Image
            src={mentoria}
            className="rounded-md"
            alt="Imagem da página inicial do meu projeto de mentoria"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md">
            {' '}
            Mentoria{' '}
          </h3>
          <div className="flex gap-2">
            <a
              className="transition transform hover:scale-125"
              href="https://github.com/isamsm/mentoria"
              target="_blank"
            >
              {' '}
              <LuCode />{' '}
            </a>
            <a
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
      <div className="flex md:items-center lg:items-center">
          <a
            className="transition transform hover:scale-125"
            href="https://github.com/isamsm?tab=repositories"
            target="_blank"
          >
            {' '}
            <h3 className="flex pt-12 md:pt-0 lg:pt-0 gap-2 font-semibold text-lg md:text-2xl lg:text-2xl">
              {' '}
              <LuPlusCircle className="mt-1" /> Veja mais{' '}
            </h3>{' '}
          </a>
        </div>
    </div>
  )
}
