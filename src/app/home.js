'use client'

import Image from 'next/image'
import photo from '../../public/me.jpg'

import { TypeAnimation } from 'react-type-animation'

import { LuGithub, LuLinkedin } from 'react-icons/lu'

export default function Home() {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col md:flex-row lg:flex-row gap-5"
    >
      <Image
        src={photo}
        alt="eu"
        className="rounded-full h-28 w-28 grayscale-0 hover:grayscale hover-rotate"
      />
      <div className="uppercase font-bold text-lg md:text-5xl lg:text-5xl text-primary">
        <h1> Isabelly Marques </h1>
        <TypeAnimation
          sequence={[
            'Desenvolvedora front-end',
            1000,
            'Analista de sistemas',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="flex flex-row"
        />
        <div className="flex pt-5 gap-3">
          <a href="https://github.com/isamsm" target="_blank">
            <LuGithub className="md:text-3xl lg:text-3xl hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/isamsm/" target="_blank">
            <LuLinkedin className="md:text-3xl lg:text-3xl hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  )
}
