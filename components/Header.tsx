import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                {/* Social Link */}
                <SocialIcon
                    url='https://www.linkedin.com/in/christopher-ferreira-6627a54b/'
                    fgColor='#fff222'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/Chris99Dev'
                    fgColor='#fff222'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.agence87.fr'
                    fgColor='#fff222'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-gray-400 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network="email"
                    fgColor='#fff222'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </motion.div>
        </header>
    )
}

export default Header