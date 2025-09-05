const Skills = () => {
    return (
        <section className='flex flex-col justify-center h-full pl-3 lg:pl-[60px] lg:gap-5 gap-2'>
            <h1 className='lg:text-6xl text-4xl text-copper font-philosopher'> Skills </h1>
            <div className="flex flex-col lg:gap-4 gap-3">
                <h2 className='lg:text-5xl text-3xl text-olive font-philosopher'> principais: </h2>
                <div className="flex text-xl lg:text-2xl gap-5 lg:gap-x-6 gap-y-2 font-raleway text-black_coffe lg:max-w-[500px] max-w-[325px] flex-wrap items-start">
                    <p> react </p>
                    <p> javascript </p>
                    <p> tailwind </p>
                    <p> bootstrap </p>
                    <p> vtex io </p>
                    <p> wake commerce </p>
                </div>
                <h3 className='lg:text-5xl text-3xl text-wine font-philosopher'> secundárias: </h3>
                <div className="flex text-xl lg:text-2xl gap-5 lg:gap-6 font-raleway text-black_coffe">
                    <p> nextjs </p>
                    <p> typescript </p>
                </div>
                <h4 className='lg:text-5xl text-3xl text-olive font-philosopher'> idiomas: </h4>
                <p className="text-xl lg:text-2xl font-raleway text-black_coffe"> inglês </p>
            </div>
        </section>
    );
}

export default Skills