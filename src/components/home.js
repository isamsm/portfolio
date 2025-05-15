'use client'

import Image from 'next/image'
import avatar from '../assets/avatar.webp'

import { TypeAnimation } from 'react-type-animation'

import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";

export default function Home() {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col lg:flex-row gap-5"
    >
      <Image
        src={avatar}
        alt="Um avatar inspirado em mim com uma animação para flutuar"
        className="avatar-float h-48 w-48 lg:h-72 lg:w-72"
      />
      <div className="flex flex-col justify-center uppercase font-bold text-xl lg:text-5xl text-primary">
        <h1> Isabelly Marques </h1>
        <TypeAnimation
          sequence={[
            'Desenvolvedora front-end',
            1000,
            '',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="flex flex-row"
        />
        <div className="flex pt-1 gap-1">
          <a href="https://github.com/isamsm" title='Link do meu github' target="_blank">
            <TiSocialGithubCircular className="text-4xl transition transform hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/isamsm/" title='Link do meu linkedin' target="_blank">
            <TiSocialLinkedinCircular className="text-4xl transition transform hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  )
}
