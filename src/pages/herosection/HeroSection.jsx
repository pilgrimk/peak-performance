import React from 'react'
import { data } from '../../constants'
import { Services } from '../../components'
import './Hero.css'

const HeroSection = () => {
  return (
    <div id='hero' className='w-full flex flex-col bg-slate-50'>
      <div className='bg-hero-bg bg-no-repeat bg-cover 
      bg-center w-full h-[350px] md:h-[650px]'>
        <div className="flex flex-col items-center justify-center 
        pt-64 md:pt-96">
          <h1 className="text-2xl md:text-5xl font-bold outlined-text">{data.heroSection.title}</h1>
          <p className="text-xl md:text-2xl outlined-text">{data.heroSection.subtitle}</p>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default HeroSection