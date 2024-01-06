import Image from "next/image"
import me from "../../public/me.jpg"

export default function About() {
  return (
    <>
        <div>
          <div className="text-secundary grid md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="flex md:justify-center md:items-center lg:justify-center lg:items-center">
              <Image 
                src={me} 
                className="rounded-md h-40 w-auto md:h-96 md:w-auto lg:h-96 lg:w-auto"
              />
            </div>
            <div>
              <h1 className="uppercase font-bold text-4xl pb-3"> Quem sou eu? </h1>
              <div className="flex gap-5">
                <h2 className="text-md font"> Me chamo Isabelly Maria Marques de Souza e trabalho como desenvolvedora front-end a mais de um ano, tendo me graduado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário do Sul de minas em julho de 2023. Trabalhei em um estágio como desenvolvedora para a empresa Softeo Technologies por um ano e um mês aonde tinha a responsabilidade de desenvolver funcionalidades para sistemas web tendo tido participação em quatro projetos, um deles envolvendo integração com o servidor. Tenho conhecimento e prática em Javascript, React, Next, CSS, Bootstap, Tailwind e um pouco de PHP. </h2>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl underline underline-offset-4 decoration-tailblue"> Competências </h3>
              <ul className="list-disc pl-4">
                <li> Inglês - Avançado </li>
                <li> HTML, Javascript e CSS </li>
                <li> ReactJs </li>
                <li> NextJs </li>
                <li> Bootstrap </li>
                <li> Tailwind </li>
                <li> PHP </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}