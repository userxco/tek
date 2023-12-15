import React from 'react';
import { CgPlayButtonO } from 'react-icons/cg';

const Blank = () => {
  return (
    <div className='bg-xx bg-cover bg-fixed bg-center bg-repeat lg:h-[700px] h-[400px]'>
        <div className='lg:h-[700px] h-[400px] flex justify-center items-center'>
            <CgPlayButtonO size={160} className='text-[#a065d5] cursor-pointer'/>
        </div>
    </div>
  )
}

export default Blank