"use client"

import { TypeAnimation } from 'react-type-animation';

import Image from 'next/image'
import cursor from "../../public/cursor.gif"

import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

export default function Home() {
  return (
    <>
        <div className="flex flex-col gap-3">
          <div className='uppercase font-bold text-lg md:text-5xl lg:text-5xl text-primary'>
            <h1> Isabelly Marques </h1>
            <TypeAnimation
              sequence={[
                'Desenvolvedora front-end ',
                1000, 
                'Analista de sistemas',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="flex flex-row"
            />
            <div className='flex pt-5 gap-3'>
              <a href="https://github.com/isamsm" target="_blank"> 
                <LuGithub 
                  className="text-3xl hover:scale-125"
                /> 
              </a>
              <a href="https://www.linkedin.com/in/isamsm/" target="_blank"> 
                <LuLinkedin 
                  className="text-3xl hover:scale-125"
                /> 
              </a>
            </div>
          </div>
        </div>
    </>
  )
}