import React from 'react';
import xx from '../assets/fish.webp';

const Hero = () => {
  return (
    <div className='bg-black/95 text-white lg:py-[20rem] py-[4rem] lg:px-[4rem] px-[1rem]'>
      <div className='container mx-auto'>
        <div>
          {/* */}
          <div>
            <h1 className='xl:text-[110px] text-[40px] pt-28 lg:pt-0 pb-2 lg:pb-0 font-xx'>Ealain
            <br /><span className='text-[#a065d5]'>Brilliant Creativity</span></h1>
            <span className='lg:text-[25px] font-xx uppercase'>new journey with
            <span className='text-[#a065d5]'>9,999</span> nfts</span>
            <p className='lg:text-[25px] pt-16 font-xx'>First NFT utility project for 
            Developers and <br />Designers basad on</p>
            <div className='pt-12 flex justify-start items-center gap-x-6'>
                <button className='border-white border-2 px-6 py-3.5 gap-x-2 
                  rounded-md bg-[#a065d5] flex 
                  justify-between items-center font-xx 
                  tracking-[3px] text-[12px] hover:scale-110 
                  duration-200'>CONNECT <img src={xx} alt="" />
                </button>
                <button className='border-[#a065d5] border-2 px-6 py-3.5 gap-x-2 
                  rounded-md bg-transparent flex 
                  justify-between items-center font-xx 
                  tracking-[3px] text-[12px] hover:animate-bounce 
                  duration-200'>CONNECT <img src={xx} alt="" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero