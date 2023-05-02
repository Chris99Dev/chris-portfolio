import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Christopher Portfolio</title>
      </Head>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* EXPERIENCES */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* SKILLS */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* CONTACT ME */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

    </div>
  )
}
