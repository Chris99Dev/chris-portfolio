import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import ChrisPic from '../imgs/ChrisProfile.png'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Je suis Christopher Ferreira",
            "<Cafe, Code, Support />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover object-top'
                src={ChrisPic.src}
                alt="Photo de profil de Christopher Ferreira"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Technicien IT / Web Dev</h2>
                <h1>
                    <span className='text-3xl lg:text-6xl font-semibold'>{text}</span>
                    <Cursor cursorColor='#fff222' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero