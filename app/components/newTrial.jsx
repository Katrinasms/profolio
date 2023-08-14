import plant from '../../public/plant.png'
import Image from 'next/image'
import computer_img from '../../public/me_comp.png'
import site_img from '../../public/me_site.png'
import hk_img from '../../public/hk_flag.png'
import React, { useState } from "react";

const NewTrial = () => {
    const [effect, setEffect] = useState(false);
    return(<>

        <div className="relative  md:min-h-screen  bg-cover content-normal bg-[url('/bg_big.png')] ">
        <div
        style={{
            background: " url('/bg1.png')",
            backgroundSize: 'cover',
            position: "fixed",
            zIndex: !effect ? 1:100,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: !effect ? "0" : "1",
            transition: "all .3s",
            visibility: !effect ? "hidden" : "visible",

        }}
        >
            <button className="absolute right-0 top-0 m-10 p-10 bg-black text-white rounded-lg" onClick={() => {
                        setEffect(false);
                      }} >cancel</button>
            {/* rgba(0,0,0,1) */}

    </div>
        <div className="relative mx-auto w-[1845px] h-[1100px] text-center md:p-24 bg-cover content-normal bg-[url('/bg-1.png')] image-blurred-edge">
            {/*  shadow-[0_0px_8px_8px_rgba(255,255,255,0.1)]  */}
            <div className={`${
            effect && "z-0"}
           transition ease-in-out delay-150 hover:-translate-y-10 cursor-pointer absolute duration-300 left-[450px] top-[210px] w-[400px] h-[700px] bg-[url('/bg1.png')] bg-cover  group z-0 shadow-md`}></div>
            <div className={`${
            effect && "animate-zoom z-50"
          } transition ease-in delay-150  cursor-pointer absolute duration-300 hover:-translate-y-10 left-[450px] top-[210px] w-[400px] h-[700px] bg-[url('/bg1.png')] bg-cover shadow group z-10`}
        //   
                    onClick={() => {
                        setEffect(true);
                      }}
                    //   onAnimationEnd={() => setEffect(false)}
                      >
                <span className='tooltip-text group-hover:scale-100'>CLICK ME</span>
                <span className='tooltip-text_arrow group-hover:scale-100'>↓</span>
                <div className="mt-5 text-gray-600 tracking-[.5em]">SOFTWARE DEVELOPER</div>
                <div className="mt-5 bg-[url('/me_bw.png')] h-[350px] w-[350px] bg-cover mx-auto"></div>
                <div className=" tracking-[.6em] mx-20 py-5 text-xl text-white bg-black -translate-y-8 pl-4 font-thin">KATRINA</div>
                <div className=" text-gray-600 tracking-[.1em] text-xs -translate-y-4	">ONE SMALL STEP EACH DAY</div>
                <div className="flex justify-center mt-2 gap-7">
                    <div className=" border-[1.2px] border-gray-600 w-[50px] h-[50px] place-items-center shadow">
                    <Image
                            src={computer_img}
                            alt="Picture of Katrina"
                            width={50} 
                            height={50} 
                            className='p-1'
                            
                            />
              
                    </div>
                    
                    <div className=" border-[1.2px] border-gray-700 w-[50px] h-[50px] place-items-center shadow">
                    <Image
                            src={site_img}
                            alt="Picture of Katrina"
                            width={50} 
                            height={50} 
                            className='p-1'
                            // sm:mt-10 sm:p-10  sm:p-0
                            />
                    </div>
                    <div className=" border-[1.2px] border-gray-700 w-[50px] h-[50px] place-items-center shadow">
                    <Image
                            src={hk_img}
                            alt="Picture of Katrina"
                            width={50} 
                            height={50} 
                            className='p-2'
                            // sm:mt-10 sm:p-10  sm:p-0
                            />
                    </div>
                </div>
                
            </div>
            <div className="absolute bg-cover left-[400px] top-[775px] h-[240px] w-[520px] bg-[url('/folder-1.png')] z-10"></div>
            <div className="transition ease-in-out delay-150 hover:-translate-y-10 cursor-pointer absolute duration-300 left-[970px] top-[320px] w-[415px] h-[600px] bg-[url('/bg1.png')] bg-cover shadow group z-10 shadow-md">
                <div className=" tracking-[.3em] w-[180px] ml-5 mt-5 py-4 text-xl text-white bg-black font-thin">KATRINA</div>
            </div>
            <div className="transition ease-in-out delay-150 hover:-translate-y-10 cursor-pointer absolute duration-300 left-[1030px] top-[215px] w-[415px] h-[800px] bg-[url('/bg1.png')] bg-cover shadow-md group ">
                <div className=" tracking-[.3em] w-[180px] ml-5 mt-5 py-4 text-xl text-white bg-black font-thin">KATRINA</div>
            </div>
            <div className="absolute bg-cover left-[930px] top-[755px] h-[270px] w-[530px] bg-[url('/folder-2.png')] z-20"></div>
            </div>
            

        {/* <Image
                src={plant}
                alt="Picture of Katrina"
                width={300} 
                height={300} 
                className='w-60 h-60 mx-auto sm:mx-auto rounded-3xl m-3  '
                /> */}
        </div>
    </>)

// 
}

export default NewTrial;