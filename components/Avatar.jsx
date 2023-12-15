import React from 'react';
import x from '../assets/D-1.webp';
import xx from '../assets/wave-pattern-new.webp';
import a from '../assets/fish.webp';
import aa from '../assets/star.svg';

const Avatar = () => {
  return (
    <div className='lg:py-[12rem] py-[6rem] lg:px-[4rem] px-[1rem] bg-black/95 text-white'>
        <div className='lg:container mx-auto'>
            <div className='md:flex justify-between items-center'>
                {/* one */}
                <div className='w-full'>
                    <div>
                        <img src={xx} alt="" />
                    </div>
                    <h3 className='font-xx text-[35px] pb-4'><span className='text-[#a065d5]'>Digital</span> Art</h3>
                    <p className='lg:w-[50%] pb-8 font-cc text-[#c5c5c5]'>Lorem ipsum dolor sit amet, consectetur 
                       adipiscing elit. In mi diam amet nunc sem. Lobortis fringilla.
                    </p>
                    <div>
                        <button className='border-[#a065d5] border-2 px-6 py-3.5 gap-x-2 
                            rounded-md bg-[#a065d5] flex 
                            justify-between items-center font-xx 
                            tracking-[3px] text-[12px] hover:animate-bounce 
                            duration-200'>CONNECT <img src={a} alt="" />
                       </button>
                    </div>
                </div>
                {/* two */}
                <div className='w-full py-16 lg:py-0'>
                    <img src={x} alt="" />
                </div>
                {/* three */}
                <div className='w-full space-y-12'>
                    <div className='flex justify-start items-center gap-x-4'>
                        <img src={aa} alt="" />
                        <h5 className='font-xx cursor-pointer hover:text-[#ffd36a] transition-all text-[18px]'>3D Computer Graphics.</h5>
                    </div>
                    <div className='flex justify-start items-center gap-x-4'>
                        <img src={aa} alt="" />
                        <h5 className='font-xx cursor-pointer hover:text-[#ffd36a] transition-all text-[18px]'>Pixel Art</h5>
                    </div>
                    <div className='flex justify-start items-center gap-x-4'>
                        <img src={aa} alt="" />
                        <h5 className='font-xx cursor-pointer hover:text-[#ffd36a] transition-all text-[18px]'>Digital Photography.</h5>
                    </div>
                    <div className='flex justify-start items-center gap-x-4'>
                        <img src={aa} alt="" />
                        <h5 className='font-xx cursor-pointer hover:text-[#ffd36a] transition-all text-[18px]'>Photo-Painting.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Avatar