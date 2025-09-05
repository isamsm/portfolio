import linkedin from '../assets/images/in.svg'
import github from '../assets/images/github-red.svg'

const Home = () => {
    return (
        <main className='flex flex-col justify-center h-full pl-3 lg:pl-[60px] lg:gap-0 gap-4'>
            <h1 className='text-black_coffe text-6xl lg:text-8xl font-paris lg:p-0 pl-2'> Isa Marques </h1>
            <h2 className='text-olive text-5xl lg:text-[64px] font-cormorant -mt-[30px] lg:-mt-[38px]'> Desenvolvedora Front-End </h2>

            <div className='flex gap-4 lg:gap-6'>
                <a className='hover:transform hover:scale-105 transition-all' href='https://www.linkedin.com/in/isamsm' target='_blank'> <img class="lg:w-full lg:h-auto w-8 h-8" src={linkedin} alt="Icone linkedin" /> </a>
                <a className='hover:transform hover:scale-105 transition-all' href='https://github.com/isamsm' target='_blank'> <img class="lg:w-full lg:h-auto w-8 h-8" src={github} alt="Icone github" /> </a>
            </div>
        </main>
    );
}

export default Home