const About = () => {
    return (
        <section className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col gap-6 lg:gap-8 lg:p-0 px-3'>
                <h1 className='lg:text-6xl text-4xl text-copper font-philosopher lg:pl-4'> Sobre </h1>
                <div className='lg:max-w-[618px] w-full py-4 lg:py-6 px-4 flex flex-col justify-center relative text-lg lg:text-xl text-black_coffe font-raleway bg-dark_beige rounded-3xl'>
                    <div className='w-[267px] h-14 absolute left-0 lg:-top-6 -top-5 bg-dark_beige rounded-3xl -z-10'>
                    </div>
                    <p className='overflow-y-scroll h-[360px] lg:h-[400px] pr-1'>
                       Me chamo Isabelly Maria Marques de Souza e sou uma Desenvolvedora Front-End já no ramo da tecnologia a três anos, tenho uma paixão por computadores desde a infância, o que acabou vindo a se tornar minha carreira, algo que eu não esperava por muitos anos até que conheci os cursos ofertados na área.
                       <br /><br />
                       Sou formada em Análise e Desenvolvimento de Sistemas pelo Centro Universitário do Sul de Minas(2023) aonde aprendi um pouco sobre cada ramo que poderia seguir e me apaixonei pelos códigos, pela ideia de criar algo do zero que poderia resolver meus problemas e os de outros.
                       <br /><br /> 
                       Sou uma pessoa proativa, tenho conhecimento avançado em inglês com um diploma intermediário, sei trabalhar em equipe e sou autodidata. Sempre estou em busca de aprimorar meus conhecimentos, minhas habilidades e desvendar cada vez mais esse mundo da programação.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About