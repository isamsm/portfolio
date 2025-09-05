const About = () => {
    return (
        <section className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col gap-6 lg:gap-8 lg:p-0 px-3'>
                <h1 className='lg:text-6xl text-4xl text-copper font-philosopher lg:pl-4'> Sobre </h1>
                <div className='lg:max-w-[618px] w-full py-4 lg:py-6 px-4 flex flex-col justify-center relative text-lg lg:text-xl text-black_coffe font-raleway bg-dark_beige rounded-3xl'>
                    <div className='w-[267px] h-14 absolute left-0 lg:-top-6 -top-5 bg-dark_beige rounded-3xl -z-10'>
                    </div>
                    <p className='overflow-y-auto h-[360px] lg:h-[400px] pr-1'>
                        Me chamo Isabelly Maria Marques de Souza e sou uma Desenvolvedora Front-End já no ramo da tecnologia a dois anos, tenho uma paixão pela programação desde a infância que surpreendentemente, acabou se tornando minha carreira.
                        <br/>
                        <br/>
                        Sempre estou em busca de aprimorar meus conhecimentos, minhas habilidades e desvendar cada vez mais esse mundo da computação.
                        <br/>
                        <br/>
                        Sou formada em Análise e Desenvolvimento de Sistemas pelo Centro Universitário do Sul de Minas(2023) aonde aprendi sobre cada ramo que poderia seguir e me apaixonei pelos códigos, pela ideia de criar algo do zero que poderia chegar a outras pessoas em qualquer parte do planeta.
                        <br/>
                        <br/>
                        Estou me desenvolvendo profissionalmente, durante minha faculdade fiz um estágio como desenvolvedora na Softeo Technologies que durou um ano e um mês na onde me aprofundei muito e conheci o React, minha principal stack.
                        <br/>
                        <br/>
                        Sou uma pessoa proativa, tenho conhecimento avançado em inglês, sei trabalhar em equipe, tenho uma boa comunicação além de ser também autodidata.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About