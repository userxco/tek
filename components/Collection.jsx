import React from 'react';
import a from '../assets/Ball.webp';
import aa from '../assets/Group-107.webp';
import aaa from '../assets/wave-pattern-new.webp';
import x from '../assets/fish.webp';

const Collection = () => {
  return (
    <div className='lg:py-[8rem] py-[4rem] 2xl:px-[20rem] px-[1rem] bg-[#141414] text-white'>
        <div className='container mx-auto'>
            <div className='md:flex justify-between items-center'>
                {/* one */}
                <div className='flex justify-center items-center'>
                    <img src={aa} alt="" className='lg:w-[430px]'/>
                </div>
                {/* two */}
                <div className='flex flex-col justify-between items-center text-center w-full'>
                    <div>
                        <img src={aaa} alt="" />
                    </div>
                    <h2 className='xl:text-[62px] text-[42px] font-xx'><span className='text-[#a065d5]'>We</span> Provide A Unique Collection</h2>
                    <p className='font-cc py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo 
                        faucibus turpis vel <br />lobortis sit adipiscing ac. 
                        Auctor vulputate eget pharetra.
                    </p>
                    <div>
                       <button className='border-[#a065d5] border-2 px-6 py-3.5 gap-x-2 
                            rounded-md bg-[#a065d5] flex 
                            justify-between items-center font-xx 
                            tracking-[3px] text-[12px] hover:animate-bounce 
                            duration-200'>CONNECT <img src={x} alt="" />
                       </button>
                    </div>
                </div>
                {/* three */}
                <div className='hidden md:flex'>
                    <img src={a} alt="" className='lg:w-[230px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection