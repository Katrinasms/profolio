'use client';

import { useRef,useEffect,useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher'
import logo from '../public/logo.png'
import Image from 'next/image'
import Hero from './components/hero';
import AboutMe from './components/AboutMe';
// import Experience from './components/Experience';
import Project from './components/Project';
import { useDispatch } from 'react-redux';
import Header from './components/header'
import ContactUs from './components/ContactUs';
import NewTrial from './components/newTrial';
import {RxCross2} from "react-icons/rx";
import { FadeUp } from './service/scrollAnimation';


export default function Home() {
  const ref = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [effect, setEffect] = useState(false);


  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
    {/* <div className="z-20 top-0 bottom-0 left-0 right-0 bg-white">
        hi    
      </div> */}
      <div className=' z-30 fixed top-0  w-screen h-50 '>
      
      <div
      // url('/bg1.png')
          style={{
              background: " url('/bg1.png')",
              backgroundSize: 'cover',
              position: "fixed",
              zIndex: !effect ? 1:100,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              opacity: 1,
              transition: "all .3s",
              opacity: !effect ? "0" : "0.98",
              visibility: !effect ? "hidden" : "visible",
          }}
          className="grid place-content-center content-center"
          >
            <div className="">
            {/* <FadeUp> */}
            <div className="mb-5">
            <NavText text={<i onClick={()=> {scrollDown(ref); setEffect(false) }}>About</i>}/>
            </div>
            <div className="mb-5">
            <NavText text={<i onClick={()=> {scrollDown(projectRef); setEffect(false)}}>Project</i>}/>
            </div>
            <div className="mb-5">
            <NavText text={<i onClick={()=> {scrollDown(expRef); setEffect(false)}}>Experience</i>}/>
            </div>
            <NavText text={<i onClick={()=> {scrollDown(contactRef); setEffect(false)}}>Contact</i>}/>
            {/* </FadeUp> */}
            </div>
             {/* opacity: !effect ? "0" : "1", */}
             {/* visibility: !effect ? "hidden" : "visible", */}
              <button className="absolute right-0 top-0 m-10  text-black rounded-lg" onClick={() => {
                          setEffect(false);
              }} ><RxCross2/></button>
              {/* rgba(0,0,0,1) */}
              
            
             </div>
      
        {/* bg-slate-600 text-white dark:bg-white */}
        <div className='hidden lg:grid grid-cols-6  lg:grid-cols-12 gap-4 m-10 text-lg'>
        <div className='col-span-2 lg:col-span-7 '></div>
        <NavText text={<i onClick={()=> {scrollDown(ref); }}>About</i> }/>
        <NavText text={<i onClick={()=> {scrollDown(projectRef);}}>Project</i>}/>
        <NavText text={<i onClick={()=> {scrollDown(expRef); }}>Experience</i>}/>
        <NavText text={<i onClick={()=> {scrollDown(contactRef);}}>Contact</i>}/>
        </div>
        <div className=" lg:hidden mt-3 mr-3 flex mx-auto justify-end">
              <button onClick={() => {
                        setEffect(true);
                      }} className="px-2 z-60">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              </button>
        </div>
      </div>
        
    
      <Hero />
      <div ref={ref} id="about">
        <AboutMe />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      {/* <div ref={expRef}> 
        <Experience />
      </div> */}
      <div ref={contactRef}> 
        <ContactUs />
      </div>
      {/* <NewTrial /> */}
      
    </>
  )
}

const NavText = ({text, tip = text}) => (
  <div className='nav-icon group '>
      {text}
      {/* <span className='tooltip-text group-hover:scale-100'>{tip}</span> */}
  </div>
);
