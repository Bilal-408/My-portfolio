import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2 ' data-aos="zoom-in-up">
                    Drop me a line,or send me a message
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <CiMail size={30} /> xyz@gmail.com 
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <FaPhoneAlt size={30} /> 03*********
                    </div>
                </div>

            </div>
                

                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='h-[40px] bg-tranparent border border-accent' id='name'/>
                </div>

                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className='h-[40px] bg-tranparent border border-accent' id='email'/>
                </div>

<div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="msge\">Message</label>
                        
                        <textarea className='bg-tranparent border border-accent' id='msg' rows={8} ></textarea>
                     
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
