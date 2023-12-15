import React from 'react';
import x from '../assets/Vector-2.webp';
import xx from '../assets/wave-pattern-new.webp';

const Questions = () => {
  return (
    <div className='lg:py-[12rem] py-[4rem] xl:px-[4rem] px-[1rem] bg-black/95 text-white'>
        <div className='xl:container mx-auto'>
            <div className='lg:flex justify-center items-center'>
                {/* img */}
                <div className='pb-12 lg:pb-0 w-full'>
                    <div>
                        <img src={xx} alt="" />
                    </div>
                    <h2 className='xl:text-[62px] text-[42px] font-xx'>What <br /><span className='text-[#a065d5]'>Frequently Asked</span><br />Questions</h2>
                    <p className='text-[#c5c5c5] font-cc lg:py-12 py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Commodo 
                        at in aliquet dignissim arcu habitasse.
                    </p>
                    <div>
                        <img src={x} alt="" />
                    </div>
                </div>
                {/* text */}
                <div className='space-y-16'>
                    <div>
                       <div className='flex justify-between items-center gap-x-4 font-xx pb-12'>
                        <span className='text-[26px] text-[#a065d5]'>01</span>
                        <h4 className='text-[28px] cursor-pointer'>Advice I Should Have Listened 
                        To Starting Out As An Artist?
                        </h4>
                    </div>
                    <div className='h-[2px] w-full bg-[#ffd36a]'/> 
                    </div>
                    <div>
                        <div className='flex justify-between items-center gap-x-4 font-xx pb-12'>
                        <span className='text-[26px] text-[#a065d5]'>02</span>
                        <h4 className='text-[28px] cursor-pointer'>My Favorite Podcasts To Listen To While Making NFTs.
                        </h4>
                    </div>
                    <div className='h-[2px] w-full bg-[#ffd36a]'/>
                    </div>
                    <div>
                        <div className='flex justify-start items-center gap-x-4 font-xx pb-12'>
                        <span className='text-[26px] text-[#a065d5]'>03</span>
                        <h4 className='text-[28px] cursor-pointer'>How To Keep Fear From Ruining Your Art Business
                        </h4>
                    </div>
                    <div className='h-[2px] w-full bg-[#ffd36a]'/>
                    </div>
                    <div>
                        <div className='flex justify-start items-center gap-x-4 font-xx pb-12'>
                        <span className='text-[26px] text-[#a065d5]'>04</span>
                        <h4 className='text-[28px] cursor-pointer'>Six Ways Artists Can Create Passive Income
                        </h4>
                    </div>
                    <div className='h-[2px] w-full bg-[#ffd36a]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions