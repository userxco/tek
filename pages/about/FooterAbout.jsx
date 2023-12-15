import React from 'react';
import a from '../../assets/Bird.webp';
import aa from '../../assets/Image-5.png';
import x from '../../assets/fish.webp';

const FooterAbout = () => {
  return (
    <div className='lg:py-[6rem] xl:pb-[rem] py-[4rem] lg:px-[4rem] px-[1rem] bg-black/95 text-white'>
        <div className='container mx-auto'>
            <div className='lg:flex justify-between items-center'>
                <div />
                {/* text */}
                <div className='lg:absolute lg:pt-[16rem] pb-12 lg:pb-44'>
                    <h2 className='xl:text-[115px] lg:text-[62px] text-[42px] font-xx'>Let’s Stay</h2>
                    <div className='flex justify-start items-center space-x-6'>
                        <span className='text-[#a065d5] xl:text-[115px] lg:text-[62px] text-[42px] font-xx'>In Touch</span>
                        <div className='hidden lg:flex'>
                           <img src={a} alt="" /> 
                        </div>
                    </div>
                    <div className='pt-4'>
                       <button className='border-[#a065d5] border-2 px-6 py-3.5 gap-x-2 
                            rounded-md bg-transparent flex 
                            justify-between items-center font-xx 
                            tracking-[3px] text-[12px] hover:animate-bounce 
                            duration-200'>CONNECT <img src={x} alt="" />
                       </button>
                    </div>
                </div>
                {/* img */}
                <div className='lg:w-[70%] flex flex-col justify-end items-end text-end'>
                    <div>
                        <img src={aa} alt="" className='rounded'/>
                    </div>
                    <h4 className='pt-16 font-xx text-[32px]'>Digital Art, Brand Identity, <br />Illustration Art, CGI Animation</h4>
                    <div className='flex flex-col pt-4'>
                       <span className='text-[#c5c5c5] pb-2'>contact@ealain.com</span>
                       <span className='text-[#c5c5c5]'>(239) 555-0108</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterAbout