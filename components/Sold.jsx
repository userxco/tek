import React from 'react';
import x from '../assets/star.svg';

const Sold = () => {
  return (
    <div className='lg:py-[10rem] py-[4rem] 2xl:px-[12rem] px-[1rem] bg-[#141414] text-white'>
        <div className='cpntainer mx-auto'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-y-16 md:gap-y-0'>
                {/*  */}
                <div className='flex justify-center items-center gap-x-4'>
                    <div>
                        <img src={x} alt="" className='w-[80px]'/>
                    </div>
                    <div>
                       <span className='font-xx text-[51px]'>125+</span>
                       <h5 className='font-xx text-[#a065d5] pt-2'>NFTs Sold</h5> 
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-center items-center gap-x-4'>
                    <div>
                        <img src={x} alt="" className='w-[80px]'/>
                    </div>
                    <div>
                       <span className='font-xx text-[51px]'>61+</span>
                       <h5 className='font-xx text-[#a065d5] pt-2'>NFTs Sold</h5> 
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-center items-center gap-x-4'>
                    <div>
                        <img src={x} alt="" className='w-[80px]'/>
                    </div>
                    <div>
                       <span className='font-xx text-[51px]'>153+</span>
                       <h5 className='font-xx text-[#a065d5] pt-2'>NFTs Sold</h5> 
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-center items-center gap-x-4'>
                    <div>
                        <img src={x} alt="" className='w-[80px]'/>
                    </div>
                    <div>
                       <span className='font-xx text-[51px]'>15+</span>
                       <h5 className='font-xx text-[#a065d5] pt-2'>NFTs Sold</h5> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sold