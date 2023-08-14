import React from 'react';

const SkillButtons = ({text}) => {
    return (<>
    <div className='m-2 h-full bg-[#FAF2E9] shadow-[0_2px_6px_2px_rgba(0,0,0,0.15)] rounded-[100px] overflow-hidden flex-col justify-center items-center gap-8 inline-flex'>
        <span className='md:px-[24px] px-[12px] md:py-[10px] py-[8px] bg-[rgba(103,80,164,0.08)] justify-center items-center gap-8 inline-flex text-[#785A00] md:text-[18px]/[28px] text-[12px]/[14px]  break-words font-[500]'>{text}</span>
    </div>
    </>)
}

export default SkillButtons;