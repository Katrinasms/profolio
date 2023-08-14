'use client'
import React from 'react';
import { FaBeer } from 'react-icons/fa';


const Header = () => {
  return (
    
    <div className=' z-30 fixed top-0 r w-screen h-50 '>
      {/* bg-slate-600 text-white dark:bg-white */}
      {/* <ul> */}
      <ul className='grid grid-cols-6  xs:grid-cols-12 gap-4 m-10 text-lg'>
        <div className='col-span-2 md:col-span-4 '></div>
        <NavText text={<a href="">About</a>}/>
        <NavText text={<i>Project</i>}/>
        <NavText text={<i>Experience</i>}/>
        <NavText text={<i>Contact</i>}/>
      </ul>
      {/* </ul> */}
    </div>
  );
};

const NavText = ({text, tip = text}) => (
    <div className='nav-icon group '>
        {text}
        {/* <span className='tooltip-text group-hover:scale-100'>{tip}</span> */}
    </div>
);

// dark:text-red-500



export default Header;