import React from 'react';
import logo from '../../public/logo.png'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    return (
      // 
    <div className="grid grid-cols-6 gap-2 min-h-screen  text-center  md:p-24 md:mx-20   content-normal">
      <div className='slider-content col-span-6 md:col-span-3 mt-20 place-self-center -translate-y-6 transform-gpu'>
        <p className='text-4xl sm:text-6xl'>Hi, Im Katrina.</p>
        
        <p className='text-2xl sm:text-4xl'>Software Developer</p>
        {/* <TypeAnimation
        sequence={[
          "Software Developer",
          1000,
          "Passionate Life",
          1000,
          "Traveller",
          1000,
        ]}
        speed={150}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      /> */}
      </div>
      <div className=' col-span-6 md:col-span-3 md:mt-10 place-self-center slider-content-right'>
        {/* dark */}
      <Image
          src={logo}
          alt="Picture of the author"
          width={500} 
          height={500} 
          className='p-10 mx-auto sm:mx-auto sm:p-0'
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          />
      </div>

      {/*  flex-col  flex */}
      {/* <ThemeSwitcher  />
        <p className="fixed left-0 top-0 flex w-full col-span-3 justify-center border-b  border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
            lg:static 
            lg:w-auto 
            lg:rounded-xl 
            lg:border lg:bg-gray-200 lg:p-4 
            lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        */}

        
     
    </div>
    )
}

export default Hero;