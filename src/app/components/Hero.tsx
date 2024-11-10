import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-reepeat bg-[url(/main.jpg)] bg-cover'
    style={{backgroundSize: "50%"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center' >
            <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Website</p>
            <p data-aos="zoom-in-up">Developer</p> 
            </div>
             </div>
      </div>
    </div>
  )
}

export default Hero
