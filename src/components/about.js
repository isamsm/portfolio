export default function About() {
  return (
    <div
      data-aos="zoom-in"
      className="text-secundary flex flex-col md:w-8/12 lg:w-8/12 gap-5"
    >
      <div>
        <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl pb-1 md:pb-3 lg:pb-3">
          {' '}
          Quem sou eu?{' '}
        </h1>
        <h2 className="text-md font">
          {' '}
          Me chamo Isabelly Maria Marques de Souza e sou uma Desenvolvedora
          Front-End já no ramo da tecnologia a dois anos, tenho uma paixão pela
          programação desde a infância que surpreendentemente, acabou se
          tornando minha carreira.
          <br />
          <br />
          Sempre estou em busca de aprimorar meus conhecimentos, minhas
          habilidades e desvendar cada vez mais esse mundo da computação.
          <br />
          <br />
          Sou formada em Análise e Desenvolvimento de Sistemas pelo Centro
          Universitário do Sul de Minas(2023) aonde aprendi sobre cada ramo que
          poderia seguir e me apaixonei pelos códigos, pela ideia de criar algo
          do zero que poderia chegar a outras pessoas em qualquer parte do
          planeta.
          <br />
          <br />
          Estou me desenvolvendo profissionalmente, durante minha faculdade fiz
          um estágio como desenvolvedora na Softeo Technologies que durou um ano
          e um mês na onde me aprofundei muito e conheci o React, minha
          principal stack.
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg md:text-3xl lg:text-3xl">
          {' '}
          Competências{' '}
        </h3>
        <div className="flex gap-2 md:gap-5 lg:gap-5 text-2xl md:text-3xl lg:text-3xl pb-1 md:pb-3 lg:pb-3">
          <i class="pulse devicon-html5-plain colored"></i>
          <i class="pulse devicon-javascript-plain colored"></i>
          <i class="pulse devicon-react-original colored"></i>
          <i class="pulse devicon-nextjs-line"></i>
          <i class="pulse devicon-css3-plain colored"></i>
          <i class="pulse devicon-bootstrap-plain colored"></i>
          <i class="pulse devicon-tailwindcss-plain colored"></i>
        </div>
      </div>
    </div>
  )
}
