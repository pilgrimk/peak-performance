import React from 'react'
import { HeroSection, About, Gallery, Contact } from '../index'

const Home = () => {
  return (
    <div id='home'
      className='w-full'>
      <HeroSection />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home