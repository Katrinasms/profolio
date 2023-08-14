import React,  { useEffect, useRef,useState } from 'react';
import Image from 'next/image'
import photo from '../../public/contactus.png'
import { FadeUp } from '../service/scrollAnimation';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm("service_8tgkfsy", "template_2y5ja1r", form.current, "bS4yHoTStqn52dS9H")
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
          emailjs.sendForm("service_8tgkfsy", "template_l0guzjq", form.current, "bS4yHoTStqn52dS9H")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return <>
        
        <div className="p-10 md:min-h-screen mx-5 md:mx-20 md:p-24  content-normal mb-10">
        <FadeUp><h1 className='mt-30 section-topic-text mb-5 md:mb-0'>Contact Me</h1></FadeUp>
            {/* <h1 className='text-4xl text-start md:text-6xl font-medium md:mt-10 md:-translate-x-10 -translate-x-3'>Contact Katrina</h1> */}
            <div className='md:mt-10 inline-grid md:grid-cols-2 justify-items-stretch content-center items-center place-items-center'>
            <Image
                src={photo}
                alt="Picture of Katrina"
                width={500} 
                height={500} 
                className='sm:mt-10 sm:p-10 rounded-3xl mx-auto md:ml-1'
                />
                 {/* mx-auto sm:mx-auto */}
                 <FadeUp>
            <div>
                
                <h1 className=' hidden md:text-start md:text-5xl'>Curious about me?</h1>
                <p className='text-justify text-base md:text-xl mt-10'>I am welcome to any opportunities, friend, work or voluntary corporation! Always interested in connecting different people around the world!</p>
                <div className='mt-10 rounded-lg border-2	border-[#6B5D3F] bg-[#6B5D3F]'>
                <form ref={form} onSubmit={sendEmail}>
                <div className='mt-2 md:mt-10 px-4 md:px-6 inline-grid  md:grid-cols-2  justify-items-center w-full md:gap-2'>
                    <div className='text-white text-xl w-full col-span-2 md:col-span-1 mb-5 md:mb-0'>
                        <h1 className="text-[14px] md:text-base">Email</h1>
                        <input className=' w-full md:p-1 bg-[#F5EDE4] rounded-lg' type="email" name="user_email" ></input>
                    </div>
                    
                    <div className='text-white text-xl w-full col-span-2 md:col-span-1'>
                        <h1 className="text-[14px] md:text-base">Your Name</h1>
                        <input className=' w-full md:p-1 bg-[#F5EDE4] rounded-lg'type="text" name="user_name" ></input>
                    </div>
                    <div className='mt-5 md:mt-10 text-white text-xl col-span-2 w-full'>
                        <h1 className="text-[14px] md:text-base">What you want to tell</h1>
                        <input className='w-full h-24 md:h-48 bg-[#F5EDE4] rounded-lg' type="text" name="message"></input>
                    </div>
                    
                </div>
                <div className='m-5 md:m-10 flex justify-center'>
                <div className='m-1 h-full place-content-center  bg-[#F2BF48] rounded-lg overflow-hidden flex-col justify-center items-center gap-8 inline-flex' type="submit">
                        <button className='px-[16px] py-[8px] md:px-[24px] md:py-[10px] justify-center items-center gap-8 inline-flex text-white text-[14px]/[24px] md:text-[18px]/[28px] break-words font-[500]'>Send Me!</button>
                </div>
                </div>
                </form>
                </div>
                

            </div>
            </FadeUp>
            </div>
            
        </div>
       
    </>
}

export default ContactUs;