import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='container pt-8 '>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Portfolio</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink'><a href='#hero'>Home</a></li>
                <li className='menulink'><a href='#about'>About</a></li>
                <li className='menulink'><a href="#contact">Contact</a></li>
                <li className='menulink'><a href="#projects">Projects</a></li>
            </ul>
            <CiMenuBurger className='md:hidden' size={30} />
        </div>
      
    </div>
  )
}

export default Navbar
