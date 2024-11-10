import { title } from 'process'
import React from 'react'
import Card from './Card'
import Heading from './Heading'

const data = [
    {
        id:0,
        title:"Todo List",
        desc:"A HTML,CSS and Javascript based app for managing and organizing your Tasks",
        img:"/sddefault.jpg",
        tags:["HTML","CSS","Javascript"]
    },

    {
        id:1,
        title:"Calculator",
        desc:"A HTML,CSS and Javascript based app doing your calculation",
        img:"/images.png",
        tags:["HTML","CSS","Javascript"]
    },

    {
        id:0,
        title:"Interactive Resume Builder",
        desc:"A HTML,CSS and Javascript and NextJS based resume builder",
        img:"/Capture.PNG",
        tags:["NextJS","HTML","CSS","Javascript"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
              
        
            
            />))}
        </div>
      
    </div>
  )
}

export default Projects
