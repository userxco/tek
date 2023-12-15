import React, { useEffect, useState } from 'react';
import x from '../assets/Logo-1.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import xx from '../assets/fish.webp';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';

const Header = () => {
    const [header, setHeader] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        })
    })
  return (
    <header className={`${header ? 'bg-[#141414] py-6 shadow-lg' : 'bg-transparent py-8'} fixed px-4 z-50 w-full transition-all duration-300`}>
        <div className='lg:px-4 mx-auto'>
            <div className='md:flex justify-between items-center'>
                {/* logo */}
                <div>
                    <a href="/">
                        {header ? <img src={x} className='w-[160px]'/> : <img src={x} className='w-[160px]'/>}
                    </a>
                </div>
                {/* nav */}
                <nav className={`${header ? 'text-white' : 'text-white'} flex gap-x-3 lg:gap-x-8 tracking-[3px] pt-4 items-center text-[12px] md:text-[16px] font-xx`}>
                    <a href="/" className='flex justify-center items-center hover:text-purple-300'>Home<MdOutlineKeyboardArrowDown size={20}/></a>
                    <a href="about" className='flex justify-center items-center hover:text-purple-300'>About<MdOutlineKeyboardArrowDown size={20}/></a>
                    <a href="" className='flex justify-center items-center hover:text-purple-300'>Services<MdOutlineKeyboardArrowDown size={20}/></a>
                    <a href="" className='flex justify-center items-center hover:text-purple-300'>Team<MdOutlineKeyboardArrowDown size={20}/></a>
                    <a href="" className='flex justify-center items-center hover:text-purple-300'>Contact<MdOutlineKeyboardArrowDown size={20}/></a>
                    <a href=""><RiShoppingCart2Line size={55} className={`${header ? 'bg-black/10' : 'bg-white/10'} px-4 rounded-full hidden xl:flex`} /></a>
                    <a href=""><RxPerson size={55} className={`${header ? 'bg-black/10' : 'bg-white/10'} px-4 rounded-full hidden xl:flex`} /></a>
                    <div className='hidden lg:flex'>
                        <button className={`${header ? 'border-black' : 'border-white'} border-2 px-6 py-3.5 gap-x-2 
                        rounded-md bg-[#a065d5] flex 
                        justify-between items-center font-xx 
                        tracking-[3px] text-[12px] hover:scale-110 duration-200`}>CONNECT <img src={xx} alt="" /></button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header