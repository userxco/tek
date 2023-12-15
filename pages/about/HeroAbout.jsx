import React from 'react';
import x from '../../assets/wave-pattern-new.webp';
import { VscDebugBreakpointLog } from 'react-icons/vsc';

const HeroAbout = () => {
  return (
    <div className='lg:py-[12rem] py-[6rem] pt-[12rem] px-[1rem] md:px-0 bg-[#141414] text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <img src={x} alt="" />
          </div>
          <h2 className='text-[52px] font-xx py-2'>About <span className='text-[#a065d5]'>Us</span></h2>
          <div className='flex items-center justify-center text-[#c5c5c5] space-x-2'>
            <a href="/" className='hover:text-[#ffd36a]'>Home</a>
            <VscDebugBreakpointLog className='text-[#a065d5]'/>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout