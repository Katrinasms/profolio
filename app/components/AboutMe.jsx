import React,{ useEffect, useRef,useState }  from 'react';
import { FadeUp } from '../service/scrollAnimation';
import photo from '../../public/katrina_photo.png'

import site_img from '../../public/me_site.png'
import hk_img from '../../public/hk_flag.png'
import chile from '../../public/newcastle_me.jpg'
import Image from 'next/image'
import computer_img from '../../public/me_comp.png'
import SkillButtons from './Button/SkillButtons';
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";
import { useCollapse } from 'react-collapsed'



import { FaBeer } from 'react-icons/fa';
// min-h-screen
//md:min-h-screen content-normal md:p-24
const AboutMe = () => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = 
    useCollapse({ isExpanded })

    const skill = ['Javascript','Typescript','React','Angular','C#','HTML','CSS','AWS','MongoDB','mySQL','Firebase','Express.js']
    return(<> 
    <div className="mt-10 md:mt-0 md:min-h-screen mx-5 md:mx-10 md:p-24  content-normal">  
      <h1 className='section-topic-text  mb-10 md:mb-0'>About Me</h1>
         <div className="mx-5 grid grid-cols-6 gap-2 text-center md:mx-20 ">
        <div className=' md:min-h-0	 col-start-2 col-span-4 md:col-start-auto md:col-span-2  place-self-center slider-content-right'>
            <div className='md:my-40 '>
          
            {/* text-4xl text-center md:text-start md:text-6xl font-medium md:mt-10 md:-translate-x-10 text-xl md:mb-10  */}
            <FadeUp>
                <Image
                src={photo}
                alt="Picture of Katrina"
                width={300} 
                height={300} 
                className='mx-auto sm:mx-auto rounded-3xl m-3 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)] border'
                // sm:mt-10 sm:p-10  sm:p-0
                />
                <div className="inline-grid grid-cols-3  my-10 place-content-center">
                    <div className='flex flex-col  items-center	group'>
                        <Image
                        src={computer_img}
                        alt="software developer"
                        width={100} 
                        height={100} 
                    
                        />
                    <h1 className='related highlight-text text-wrap group-hover:scale-100'>Software Developer</h1>

                    </div>

                    <div className='flex flex-col items-center group '>
                    <Image
                    
                    src={site_img}
                    alt="Civil Engineer"
                    width={100} 
                    height={100} 
                    />
                    <h1 className='related highlight-text group-hover:scale-100'>Civil Engineer</h1>
                    </div>
                    <div className='flex flex-col place-self-center items-center group'>
                        <Image
                        className=''
                        src={hk_img}
                        alt="Hong Kong"
                        width={60} 
                        height={60} 
                        />
                        <h1 className='related highlight-text text-wrap group-hover:scale-100'>From Hong Kong</h1>

                    </div>
                    
                </div>
            </FadeUp>
            </div>
        </div>
        <div className='md:col-span-1'></div>
        <div className='slider-content-right col-span-6 md:col-span-3 md:mt-20 place-self-center -translate-y-6 transform-gpu mx-5'>
            
            <FadeUp>
            <div className='text-2xl mb-10 md:my-10 md:text-4xl'>Skill</div>
            </FadeUp>
            <FadeUp>
               <span className="flex flex-wrap justify-center">
                
                <SkillButtons text='Python'/>
                {skill.map((item) => ( <SkillButtons text={item} key={item}/>))}
                </span>
            </FadeUp>
            <FadeUp>
                <div className='text-2xl my-10 md:text-4xl'>Background</div>
                <p className='text-sm mt-10 text-justify md:text-left md:text-lg'>
                    I am a software Developer! Love Coding! I love design and code web and mobile app.
                    I am passionate in problem solving in engineering way.

                    Love learning and connecting with people.
                </p>
                <p className='text-sm mt-10 text-justify md:text-left md:text-lg'>
                Being a graduate and professional as a Civil Engineer, it enriched my experience in problem solving and communication with different parties. <br/>
                {/* After finding my true passion in technology, I took a computer science master and continuous pursue IT career starting with working in developing innovation solution apply in construction industry,<br /> */}

                </p>
                {/* <p className='text-2xl sm:text-4xl'>Software Developer</p> */}
            </FadeUp>
            
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
    {/* <div className="">
            <button
                {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
                className={`${isExpanded?'rounded-t-lg rounded-b-none ':'rounded-lg'} p-5 w-full text-start bg-[#F5EDE4] text-[#785A00]  justify-between `}
            >
                <div className="flex justify-between">
                {isExpanded ? 'Collapse' : 'Collapse'}
                <div className='place-self-center'>
                                {
                                    isExpanded==true ?
                                    <IoIosArrowDown />:
                                    <IoIosArrowForward />

                                }
                </div>
                </div>
                
            </button>
            <section {...getCollapseProps()} className="">
                <div className="p-10 bg-[#FFF8F2]">
                <h1 className=" ">Hi</h1>
                <ul class="a text-justify pl-4 col-span-2 text-[12px]   mt-3 md:mt-0   md:col-span-1 md:text-lg mb-0 md:mb-5 ">
                                    <li>Developed a full-stack web application using the MERN stack</li>
                                    <li>Designed and implemented API endpoints and database schemas</li>
                                    <li>Integrated user-facing elements with server-side logic to create a seamless user experience</li>
                </ul>
                </div>
            </section>
        </div> */}
    </div> 
    {/* </div> */}
    </>)
}

export default AboutMe;