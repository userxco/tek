import React from 'react';
import a from '../../assets/1-1 (1).jpg';
import aa from '../../assets/2-3 (1).jpg';
import x from '../../assets/wave-pattern-new.webp';
import xx from '../../assets/fish.webp';

const OurBlogs = () => {
  return (
    <div className='lg:py-[12rem] py-[4rem] lg:px-[4rem] px-[1rem] bg-[#141414] text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center pb-12 gap-y-4'>
                <div>
                    <img src={x} alt="" />
                </div>
                <h2 className='text-[52px] font-xx'>Our <span className='text-[#a065d5]'>Blogs</span></h2>
            </div>
            <div className='lg:flex justify-between items-center lg:space-x-12 space-y-24 lg:space-y-0'>
                {/* one */}
                <div>
                    <div>
                        <img src={a} alt="" className='rounded-md hover:animate-pulse cursor-pointer'/>
                    </div>
                    <div>
                        <div className='py-4'>
                            <span className='text-[#a065d5] font-cc'>JULY 6, 2022</span>
                        </div>
                        <h4 className='text-[32px] font-xx hover:text-[#ffd36a] transition-all cursor-pointer'>How To Keep Fear From Ruining Your Art Business</h4>
                        <div className='pt-4 flex justify-start items-center space-x-4'>
                            <button className='font-cc'>READ MORE</button>
                            <div>
                                <img src={x} alt="" className='w-[100px] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* two */}
                <div>
                    <div>
                        <img src={aa} alt="" className='rounded-md hover:animate-pulse cursor-pointer'/>
                    </div>
                    <div>
                        <div className='py-4'>
                            <span className='text-[#a065d5] font-cc'>JULY 6, 2022</span>
                        </div>
                        <h4 className='text-[32px] font-xx hover:text-[#ffd36a] transition-all cursor-pointer'>How To Keep Fear From Ruining Your Art Business</h4>
                        <div className='pt-4 flex justify-start items-center space-x-4'>
                            <button className='font-cc'>READ MORE</button>
                            <div>
                                <img src={x} alt="" className='w-[100px] cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-12 flex justify-center items-center'>
                <button className='border-[#a065d5] border-2 px-6 py-3.5 gap-x-2 
                  rounded-md bg-transparent flex 
                  justify-between items-center font-xx 
                  tracking-[3px] text-[12px] hover:animate-bounce 
                  duration-200'>CONNECT <img src={xx} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default OurBlogs