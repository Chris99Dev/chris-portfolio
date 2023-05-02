import React from 'react'
import { motion } from 'framer-motion'
import chrisFun from '../imgs/ChrisFun3.jpg'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={chrisFun.src}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover object-top rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-5 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Un peu de <span className='underline decoration-[#fff222]/50'>data</span> sur moi
                </h4>
                <p className='text-base'>
                    Fort de 12 ans d'expérience dans la
                    maintenance informatique et
                    réseaux, j'ai pu accompagner de
                    nombreuses entreprises dans leur
                    transition numérique et le
                    déploiement d'outils innovants.
                    Animé par un fort esprit d'équipe et
                    un sens développé de la satisfaction
                    client, je souhaite intégrer une
                    entreprise humaine et dynamique.
                </p>
            </div>
        </motion.div>
    )
}

export default About