import boleria from '../assets/images/projects/boleria.webp'
import escolha from '../assets/images/projects/escolha.webp'
import gameflix from '../assets/images/projects/gameflix.webp'
import auth from '../assets/images/projects/auth.webp'
import todo from '../assets/images/projects/todo.webp'
import mentoria from '../assets/images/projects/mentoria.webp'
import amigo_literario from '../assets/images/projects/amigo_literario.webp'
import memoria from '../assets/images/projects/memoria.webp'

import github from '../assets/images/github-beige.svg'
import quoting_open from '../assets/images/quote-open.svg'
import quoting_close from '../assets/images/quote-close.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react'

const Projects = () => {
    const [activeSlide, setActiveSlide] = useState(null)

    const project = [
        {
            id: 0,
            name: 'Code Bake',
            description: 'Projeto de uma boleria ficticia feita com React com funcionalidade de vitrine e carrinho.',
            image: boleria,
            github: 'https://github.com/isamsm/CODE-BAKE',
            link: 'https://code-bake.vercel.app'
        },
        {
            id: 1,
            name: 'Escolha',
            description: 'Mini projeto de escolha aleatória a partir de duas perguntas feito em Javascript.',
            image: escolha,
            github: 'https://github.com/isamsm/escolha',
            link: 'https://escolha.vercel.app'
        },
        {
            id: 2,
            name: 'Gameflix',
            description: 'Projeto de um "clone" da Netflix voltado a jogos feito com React, um dos primeiros projetos que fiz como desenvolvedora ainda na época da faculdade.',
            image: gameflix,
            github: 'https://github.com/isamsm/GAMEFLIX',
            link: 'https://gameflix-ashen.vercel.app'
        },
        {
            id: 3,
            name: 'Authentification',
            description: 'Projeto de uma tela de login/cadastro feita com Javascript, dados sendo armazenados via local storage.',
            image: auth,
            github: 'https://github.com/isamsm/authentification',
            link: 'https://isamsm.github.io/authentification/'
        },
        {
            id: 4,
            name: 'To-do-list',
            description: 'Projeto de to-do-list no estilo kanban feito em Javascript.',
            image: todo,
            github: 'https://github.com/isamsm/to-do-list',
            link: 'https://isamsm.github.io/to-do-list/'
        },
        {
            id: 5,
            name: 'Mentoria',
            description: 'Projeto de replicação de uma tela unicamente em HTML e CSS feito como teste para uma vaga.',
            image: mentoria,
            github: 'https://github.com/isamsm/mentoria',
            link: 'https://mentoria-zeta.vercel.app'
        },
        {
            id: 6,
            name: 'Amigo Literário',
            description: 'Projeto de uma landing page feita com React e Tailwind de uma iniciativa ficticia de troca de livros.',
            image: amigo_literario,
            github: 'https://github.com/isamsm/amigo_literario',
            link: 'https://amigo-literario-theta.vercel.app'
        },
        {
            id: 7,
            name: 'Jogo da Memória',
            description: 'Projeto de um jogo da memória feito com React e Typescript temático de um dos meus jogos favoritos.',
            image: memoria,
            github: 'https://github.com/isamsm/jogo-da-memoria',
            link: 'https://jogo-da-memoria-ashy-rho.vercel.app'
        },
    ]
    
    const handleActiveSlide = (index) => {
        if(index === null) {
            setActiveSlide(null)
        } else {
            setActiveSlide(index)
        }
    }

    return (
        <section className='flex flex-col justify-center h-full px-3 lg:pl-[60px] lg:gap-5 gap-6'>
            <h1 className='lg:text-6xl text-4xl text-copper font-philosopher'> Projetos </h1>
            <div className='lg:max-w-[800px] h-[280px] relative lg:block hidden'>
               <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2.5}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {project.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative inline-block max-w-[318px] pb-4" onClick={() => handleActiveSlide(index)} onMouseEnter={() => handleActiveSlide(index)} onMouseLeave={() => handleActiveSlide(null)}>
                                <img
                                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
                                    className="border-[3px] border-wine rounded-3xl w-full h-[202px] object-cover"
                                    src={item.image}
                                    alt="Imagem ${item.name}"
                                />

                                {activeSlide === index && (
                                    <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="relative mt-2 flex w-[252px] mx-auto py-1 bg-black_coffe rounded-3xl flex-row justify-center gap-4 items-center">
                                    <div
                                        className="h-5 w-10 bg-black_coffe absolute -top-4 left-16"
                                        style={{ clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)" }}
                                    />
                                    <a
                                        className="text-beige font-cormorant text-4xl"
                                        href={item.link}
                                        target="_blank"
                                    >
                                        {"</>"}
                                    </a>
                                    <a href={item.github} target="_blank">
                                        <img src={github} alt="Icone github" />
                                    </a>
                                    </div>
                                )}
                                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button class="custom-prev w-12 h-12 flex justify-center items-center bg-beige rounded-full absolute -left-[60px] top-1/2 -translate-y-1/2">
                    <p className='text-4xl text-olive font-philosopher'> {"<"} </p>
                </button>
                <button class="custom-next w-12 h-12 flex justify-center items-center bg-beige rounded-full absolute -right-[60px] top-1/2 -translate-y-1/2 cursor-custom">
                    <p className='text-4xl text-olive font-philosopher'> {">"} </p>
                </button>
            </div>

            <div className='block lg:hidden'>
                <div className='px-2 py-6 bg-dark_beige rounded-3xl relative flex justify-center'>
                    <div className='w-[267px] h-14 absolute left-0 lg:-top-6 -top-5 bg-dark_beige rounded-3xl -z-10'>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-6 h-[240px] overflow-y-auto pr-1'>
                        {project.map((item, index) => (
                            <div key={index} onClick={() => setActiveSlide(index)} >
                                <img className='border-[3px] border-wine rounded-3xl max-w-[169px] w-full h-[108px] object-cover' src={item.image} alt="" />
                                {activeSlide === index && (
                                    <div className="flex gap-4">
                                        <a href={item.github} target='_blank'></a>
                                        <a href={item.link} target='_blank'></a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:-ml-16 lg:max-w-[750px] w-fit lg:h-[70px] h-[125px] relative text-start'> 
                <span className="inline-block align-text-top relative -top-1 lg:-top-[10px] left-2">
                    <img src={quoting_open} alt="" className='lg:w-auto h-auto w-7 inline-block' />
                </span>
                <h2 className='inline lg:text-2xl text-lg lg:text-start text-center font-raleway text-black_coffe'> {activeSlide !== null ? project[activeSlide].description : 'No hover ou no clique da imagem do projeto são exibidas informações sobre ele.'} </h2> 
                <span className="inline-block align-text-bottom relative -bottom-1 right-2">
                    <img src={quoting_close} alt="" className="lg:w-auto h-auto w-7 inline-block " />
                </span>
            </div>
        </section>
    );
}

export default Projects