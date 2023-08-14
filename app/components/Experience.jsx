// import React,  { useEffect, useRef,useState } from 'react';
// import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";
// import { FadeUp } from '../service/scrollAnimation';
// import { useCollapse } from 'react-collapsed'


// function Section(props) {
//     const config = {
//         defaultExpanded: props.defaultExpanded || false,
//         collapsedHeight: props.collapsedHeight || 0
//     };
//     const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
// return (
//     <div className="collapsible">
//         <div className="md:mt-20 mt-10" {...getToggleProps()}>
//         <div className={`flex justify-between  p-5 w-full text-start bg-[#F5EDE4] text-[#785A00] ${isExpanded?'rounded-t-lg rounded-b-none ':'rounded-lg'}`}>
//                 {props.title}
//                 <div className='place-self-center'>
//                     {
//                         isExpanded==true ?
//                         <IoIosArrowDown />:
//                         <IoIosArrowForward />

//                     }
//                 </div>
//             </div>
//         </div>
//         <div {...getCollapseProps()}>
//             <div className="">
//                 {props.children}
//             </div>
//         </div>
//     </div>
//     );
// }

// const Experience = (props) => {

//     const [isExpanded, setExpanded] = useState(false)
//     const { getCollapseProps, getToggleProps } =  useCollapse({ isExpanded, duration:1000 })






//     const exp = [{
//         area: "Software",
//         experiences: [
//             {role: "Software Engineer", company: "Yau Lee Holding Limited", period: "2019-present",
//             duty:["Developed automation solutions for the construction industry using C#, MySQL, .NET, and Tekla Open API, demonstrating strong technical proficiency and problem-solving skills", "Conducted rigorous code testing using test use cases to ensure software reliability and functionality which contributed to enhance user experience and product quality","Collaborated effectively with cross-functional teams, ensuring timely delivery of projects while continuously seeking process improvements for increased efficiency"]},
//             {role: "Full Stack Developer", company: "Self Projects", period: "2022-present",
//             duty:["Developed a full-stack web application using the MERN stack", "Designed and implemented API endpoints and database schemas","Integrated user-facing elements with server-side logic to create a seamless user experience"]},
//             {role: "MSc of Computer Science", company: "The University of Hong Kong", period: "2018-2020",
//             duty:["Distinction with GPA 3.67", "Master Thesis: Recommendation System for elderly and helper for NGO in Hong Kong","Course studied: Data Mining, Cloud Computing, Computational Intelligence and Machine Learning, Smart phone apps development, Cluster and Cloud Computing, Deep Learning"]},
//         ]},
//         {
//             area: "Civil",
//             experiences: [
//                 {role: "Professional Civil Engineer", company: "WSP Asia Limited", period: "2021- 2022",
//                 duty:["Managed a 0.3 billion HKD project and a team of 20, ensuring on-time delivery while coordinating with various stakeholders and resolving unforeseen issues", "Applied technical expertise for quality control, maintaining adherence to industry regulations and standards"]},
//                 {role: "Assistant Civil Engineer", company: "Aecom Asia Limited", period: "2014 - 2018",
//                 duty:["Engaged in the entire project lifecycle of large-scale projects (over 10B HKD), acquiring a comprehensive understanding of complex system design, planning, and execution", "Collaborated with diverse teams to ensure seamless integration and efficient problem-solving, emphasizing communication skills and teamwork"]},
//                 {role: "BEng of Civil Engineering", company: "The University of Hong Kong", period: "2011-2014",
//                 duty:["Second Class Honours (Division One) with cGPA 3.47"]},
//             ]},
//     ]

   
    
//     // md:min-h-screen
//     return(<>
//     {/*  md:mt-20 mt-10  mb-20 md:mb-0 mx-5 */}

//         <div className="min-h-screen mt-20 md:mt-0  mx-10 md:mx-20 md:p-24  content-normal"> 
//          <div className="md:mt-20 mt-10 grid slider-content-up">
//             <FadeUp><h1 className=' section-topic-text mb-5 md:mb-0'>Experience</h1></FadeUp>
//             {exp.map((item) => <>
//                 <FadeUp>
//                 <Section title={`${item.area}`} defaultExpanded={...item.area=="Software"?true:false}>
//                 <div className=" p-10 bg-[#FFF8F2]">
//                 <div className=' inline-grid grid-cols-2'>
//                                 <p className='hidden md:visible md:col-span-2 text-start -translate-x-3 py-4  text-2xl'>Work</p>
//                                 {item.experiences.map((_exp)=> <>
//                                     <div className='col-span-2 md:col-span-1'>
//                                     <p className='text-xl text-start md:text-2xl'>{_exp.role}</p>
//                                     <p className='text-md text-start md:text-xl'>{_exp.company}</p>
//                                     <p className='text-xs text-start text-[#785A00] md:text-base'>{_exp.period}</p>
//                                 </div>
//                                 <ul class="a text-justify pl-4 col-span-2 text-[12px] md:text-lg  mt-3 md:mt-0 md:col-span-1  md:text-base mb-0 md:mb-5 ">
//                                     {_exp.duty.map((_duty)=>  <li>{_duty}</li>)}

//                                 </ul>
//                                 </>)}
//                             </div>
//                 </div>
//             </Section>
//             </FadeUp>
//             </>)}
//          </div>
            
          
//             </div>
         
//     </>)
// }

// export default Experience;