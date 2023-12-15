import React from 'react';
import a from '../../assets/a.webp';
import aa from '../../assets/d.webp';
import aaa from '../../assets/l.webp';
import aaaa from '../../assets/b.webp';

const Digital = () => {
  return (
    <div className='lg:py-[12rem] py-[4rem] lg:px-[4rem] px-[1rem] bg-black/95 text-white'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-0'>
                {/* d */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <div>
                        <img src={aa} alt="" />
                    </div>
                    <h4 className='text-[32px] font-xx py-6'>Digital <span className='text-[#a065d5]'>Art</span></h4>
                    <p className='font-cc text-[#c5c5c5]'>Amet minim mollit non deserunt 
                        <br />ullamco est sit aliqua dolor do amet.
                    </p>
                </div>
                {/* b */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <div>
                        <img src={aaaa} alt="" />
                    </div>
                    <h4 className='text-[32px] font-xx py-6'>Digital <span className='text-[#a065d5]'>Art</span></h4>
                    <p className='font-cc text-[#c5c5c5]'>Amet minim mollit non deserunt 
                        <br />ullamco est sit aliqua dolor do amet.
                    </p>
                </div>
                {/* i */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <div>
                        <img src={aaa} alt="" />
                    </div>
                    <h4 className='text-[32px] font-xx py-6'>Digital <span className='text-[#a065d5]'>Art</span></h4>
                    <p className='font-cc text-[#c5c5c5]'>Amet minim mollit non deserunt 
                        <br />ullamco est sit aliqua dolor do amet.
                    </p>
                </div>
                {/* a */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <div>
                        <img src={a} alt="" />
                    </div>
                    <h4 className='text-[32px] font-xx py-6'>Digital <span className='text-[#a065d5]'>Art</span></h4>
                    <p className='font-cc text-[#c5c5c5]'>Amet minim mollit non deserunt 
                        <br />ullamco est sit aliqua dolor do amet.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digital