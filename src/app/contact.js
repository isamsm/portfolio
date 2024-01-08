import { LuMailPlus } from "react-icons/lu";
import { LuMessageSquarePlus } from "react-icons/lu";

export default function Contact() {
  return (
    <>
        <div data-aos="zoom-in" className="text-primary md:w-5/12 lg:w-5/12">
          <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl pb-3"> Contate-me </h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-md"> Estou sempre disposta a novos desafios e novas oportunidades, principalmente quando essas podem me trazer um crescimento pessoal e profissional. Entre em contato! </h2>
            <div className="text-2xl flex gap-3">
              <a className="hover:scale-125" target="_blank" href="mailto:isamarsques@gmail.com"> <LuMailPlus /> </a>
              <a className="hover:scale-125" target="_blank" href="https://wa.me/5535999348212"> <LuMessageSquarePlus /> </a>
            </div>
          </div>
        </div>
    </>
  )
}