import React,  { useEffect, useRef,useState } from 'react';
import SkillButtons from './Button/SkillButtons';
import { FadeUp } from '../service/scrollAnimation';
import Image from 'next/image'
import logo from '../../public/01.png'
import logo2 from '../../public/02.png'
import chatchat from '../../public/03.png'
import quiz from '../../public/04.png'
import penguin_cover from '../../public/penguin_cover.png'


const Project = () => {
    const project = 
    [
        {name:'Easy Learn Driving',
            description:'This is a project coorporate with the Hong Kong local driving instructor to develop a matching app that allow driving learner to find their suitable instructor. This project used Figma for UX/UI design and ideation, and using React Native, Express Js and Mongodb to develop the app frontend and backend.',
            skills:['React','Figma','MongoDB'],
            role: "Full Stack Developer",
            
            image:logo,
            exist: false },
        {name:'Penguin Travel',
            description:'This is a website made using MERN stack, mongodb as the database, express js and node js as the server, allowing google login, ',
            skills:['React','Figma','MongoDB',' Node.js','Express.js'],
            role: "Full Stack Developer",
            image:logo2,
            detail_link: "https://www.penguintravelworld.com/",
            github_link: "https://github.com/Katrinasms/penguinTravel_frontend",
            exist: true 
        },
        {name:'ChatChat',
            description:'This is a React Native App allow user to meet anomyous user, it used react native and firebase to deal with the major problem ',
            skills:['React','Figma','MongoDB',' Node.js','Express.js'],
            role: "Full Stack Developer",
            image:chatchat,
            detail_link: "https://medium.com/p/502cf0b17b48",
            github_link: "https://github.com/Katrinasms/react-native-chat-app/tree/main",
            exist: true 
        },
        {name:'Animated Quiz App Template',
            description:'This is a React Native App allow user to meet anomyous user, it used react native and firebase to deal with the major problem ',
            skills:['Flutter','React Native'],
            role: "Frontend Developer",
            image:quiz,
            detail_link: "https://medium.com/p/761cfd06357f",
            github_link: "https://github.com/Katrinasms/React-quiz-app-template",
            exist: true },
            
        ]

    return (
    <>
    
    <div className="mt-10 md:mt-0 md:min-h-screen mx-5 md:mx-10 md:p-24  content-normal">
    <FadeUp><h1 className='section-topic-text mb-5 md:mb-0'>Project</h1> </FadeUp>
        {/* text-4xl text-start md:text-6xl font-medium md:mt-10 md:-translate-x-10 */}
        <div className="mx-5 md:mx-0 grid grid-cols-6 gap-2  md:py-10 slider-content-up justify-items-center" >
        {project.map((item) => (
            <div className='col-span-6 my-5 md:my-10' key={item.name}>
            <FadeUp>
                <div className='inline-grid md:grid-cols-2 justify-items-stretch'>
                    <div>
                        <h1 className='text-md md:text-2xl'>{item.role}</h1>
                        <div className='text-2xl md:text-4xl '>{item.name} <span className={`${item.detail_link?"hidden":"visible"} bg-gray-800 text-sm italic text-white`}>Coming Soon</span></div>
                        <span className="flex flex-wrap py-1 -translate-x-3">
                            {item.skills.map((skill) => (<SkillButtons text={skill} key={skill}/>))}
                            {/* <SkillButtons text='React'/><SkillButtons text='Figma'/><SkillButtons text='MongoDB'/> */}
                        </span>
                        <p className='py-2 mb-3 mt-4 text-[14px] text-justify md:mb-0 md:text-lg'>{item.description} </p>
                    </div>
                    <div className='justify-self-center inline-grid w-full px-4'>
                            <Image
                            src={item.image}
                            alt="Picture of Katrina"
                            width={500} 
                            height={500} 
                            className='place-self-center text-center rounded-xl border-amber-800 border	shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)]'
                            />
                        {/* <img src="https://via.placeholder.com/250" alt="Placeholder" className='place-self-center text-center' /> */}
                       {
                           item.detail_link?<span className="flex justify-center gap-x-3 mt-3">
                           <button disabled={!item.detail_link} onClick={() => item.detail_link && window.open(item.detail_link, "_blank")}
                           className={`${item.detail_link?"bg-[#FAF2E9]":"bg-[#FAF2E9]"} h-10 md:h-14 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[100px] overflow-hidden flex-col justify-center items-center gap-8 inline-flex`}>
                               <div className='md:px-[24px] px-[12px] md:py-[10px] py-[8px] justify-center items-center gap-8 inline-flex md:text-[18px]/[28px] text-[12px]/[14px] '>
                                   <div className='text-[#785A00] '>View Details</div>
                               </div>
                           </button>
                           
                           <button disabled={!item.github_link} onClick={() => item.github_link && window.open(item.github_link, "_blank")} className='bg-[#FAF2E9]  h-10 md:h-14 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[100px] overflow-hidden flex-col justify-center items-center gap-8 inline-flex'>
                               <div className='md:px-[24px] px-[12px] md:py-[10px] py-[8px] justify-center items-center gap-8 inline-flex md:text-[18px]/[28px] text-[12px]/[14px] '>
                                   <div className='text-[#785A00]'>Github</div>
                               </div>
                           </button>
                       </span>: <></>
                       }
                        
                    </div>
                    
                </div>
            </FadeUp>
            
            </div>
            ))}
        </div>
    </div>
    </>)
}

export default Project;