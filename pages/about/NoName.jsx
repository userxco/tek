import React from 'react';
import x from '../../assets/wave-pattern-new.webp';

const NoName = () => {
  return (
    <div className='bg-aaaaaaa bg-cover bg-fixed bg-repeat h-[500px] bg-center text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center h-[500px] text-center'>
                <div>
                    <img src={x} alt="" />
                </div>
                <h2 className='lg:text-[72px] text-[42px] font-xx '>We Provide A <br /><span className='text-[#a065d5]'>Unique Collection</span></h2>
                <p className='text-[#c5c5c5] font-cc pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo 
                    faucibus turpis vel lobortis sit adipiscing <br />ac. Auctor 
                    vulputate eget pharetra ac.
                </p>
            </div>
        </div>
    </div>
  )
}

export default NoName