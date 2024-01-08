export default function About() {
  return (
    <div data-aos="zoom-in" className="text-secundary flex flex-col md:w-9/12 lg:w-9/12 gap-5">
      <div>
        <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl pb-1 md:pb-3 lg:pb-3"> Quem sou eu? </h1>
        <h2 className="text-md font"> Me chamo Isabelly Maria Marques de Souza e trabalho como desenvolvedora front-end a mais de um ano, tendo me graduado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário do Sul de minas em julho de 2023. Trabalhei em um estágio como desenvolvedora para a empresa Softeo Technologies por um ano e um mês aonde tinha a responsabilidade de desenvolver funcionalidades para sistemas web tendo tido participação em quatro projetos, um deles envolvendo integração com o servidor. Tenho conhecimento e prática em Javascript, React, Next, CSS, Bootstap, Tailwind e um pouco de PHP. </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg md:text-3xl lg:text-3xl"> Competências </h3>
          <div className="flex gap-2 md:gap-5 lg:gap-5 text-2xl md:text-4xl lg:text-4xl pb-1 md:pb-3 lg:pb-3"> 
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-nextjs-line"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
            <i class="devicon-tailwindcss-plain colored"></i>
          </div>
      </div>
    </div>
  )
}