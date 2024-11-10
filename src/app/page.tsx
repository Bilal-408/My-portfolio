"use client" ;

import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import About from "./components/About";

export default function Home() {
useEffect (()=>{
  AOS.init({
    easing:"ease-out-back",
    duration:1200,
    mirror:true,
    anchorPlacement:"bottom-bottom",
    offset:160,
  })
  AOS.refresh()
},[])
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
      <About />
    </main>
  );
}
