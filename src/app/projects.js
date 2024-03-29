import Image from "next/image";
import boleria from "../../public/projects/boleria.png"
import escolha from "../../public/projects/escolha.png"
import gameflix from "../../public/projects/gameflix.png"

import { LuPlusCircle, LuCode, LuLink2 } from "react-icons/lu";

export default function Projects() {
  return (
    <div data-aos="zoom-in" className="text-primary flex flex-col gap-5">
      <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl"> Meus projetos </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 font-semibold text-lg">
        <div>
          <Image 
            src={boleria}
            className="rounded-md grayscale-0 hover:grayscale hover-rotate"
            alt="Imagem da página inicial do meu projeto de boleria"
          />
          <h3 className="pt-2"> CODE&BAKE </h3>
          <div className="flex gap-2">
            <a className="hover:scale-125" href="https://github.com/isamsm/CODE-BAKE" target="_blank"> <LuCode /> </a>
            <a className="hover:scale-125" href="https://code-bake.vercel.app" target="_blank"> <LuLink2 /> </a>
          </div>
        </div>
        <div>
          <Image 
            src={escolha}
            className="rounded-md grayscale-0 hover:grayscale hover-rotate"
            alt="Imagem da página inicial do meu projeto de escolha"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md"> Escolha </h3>
          <div className="flex gap-2">
            <a className="hover:scale-125" href="https://github.com/isamsm/escolha" target="_blank"> <LuCode /> </a>
            <a className="hover:scale-125" href="https://escolha.vercel.app" target="_blank"> <LuLink2 /> </a>
          </div>
        </div>
        <div>
          <Image 
            src={gameflix}
            className="rounded-md grayscale-0 hover:grayscale hover-rotate"
            alt="Imagem da página inicial do meu projeto do gameflix"
          />
          <h3 className="pt-2 font-semibold md:text-md lg:text-md"> Gameflix </h3>
          <div className="flex gap-2">
            <a className="hover:scale-125" href="https://github.com/isamsm/gameflix" target="_blank"> <LuCode /> </a>
            <a className="hover:scale-125" href="https://gameflix-ashen.vercel.app" target="_blank"> <LuLink2 /> </a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 font-semibold text-lg">
        <div className="flex items-center justify-start">
          <a className="hover:scale-125" href="https://github.com/isamsm?tab=repositories" target="_blank"> <h3 className="flex gap-2 font-semibold text-lg md:text-2xl lg:text-2xl"> <LuPlusCircle className="mt-1" /> Veja mais </h3> </a>
        </div>
      </div>
    </div>
  )
}