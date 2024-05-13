'use client'

import Image from 'next/image'
import avatar from '../../public/avatar.png'

import { TypeAnimation } from 'react-type-animation'

import { LuGithub, LuLinkedin } from 'react-icons/lu'

export default function Home() {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col md:flex-row lg:flex-row gap-5"
    >
      <Image
        src={avatar}
        alt="eu"
        className="avatar-float h-48 w-48 md:h-56 md:w-56 lg:h-72 lg:w-72"
      />
      <div className="flex flex-col justify-center uppercase font-bold text-lg md:text-5xl lg:text-5xl text-primary">
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
            <LuGithub className="md:text-3xl lg:text-3xl transition transform hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/isamsm/" target="_blank">
            <LuLinkedin className="md:text-3xl lg:text-3xl transition transform hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  )
}
