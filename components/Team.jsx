import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import a from '../assets/Esther-Howard.webp';
import aa from '../assets/Tania-King.webp';
import aaa from '../assets/Josh-Hart.webp';
import aaaa from '../assets/Andrew-Feels.png';
import aaaaa from '../assets/Annette-Black.webp';
import aaaaaa from '../assets/Guy-Hawkins.webp';
import www from '../assets/Guy20Hawkins.webp';
import wwwww from '../assets/Annette20Black.webp';
import wwwwww from '../assets/Esther20Howard.webp';
import z from '../assets/wave-pattern-new.webp';

const Team = () => {
  return (
    <div className='lg:py-[12rem] py-[4rem] lg:px-[4rem] px-[1rem] bg-[#141414] text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center lg:pb-24 pb-12'>
                <div>
                    <img src={z} alt="" />
                </div>
                <h2 className='lg:text-[62px] text-[42px] font-xx'>Our <span className='text-[#a065d5]'>Team</span></h2>
            </div>
            {/* lg */}
            <div className='hidden lg:flex'>
               <Swiper slidesPerView={3} spaceBetween={40} pagination={true} modules={[Autoplay]} loop={true} grabCursor={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
               }}>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={a} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={www} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
            </Swiper>
            </div>
            {/* md */}
            <div className='hidden md:flex lg:hidden'>
               <Swiper slidesPerView={2} spaceBetween={40} pagination={true} modules={[Autoplay]} loop={true} grabCursor={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
               }}>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={a} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={www} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
            </Swiper>
            </div>
            {/* sm */}
            <div className='md:hidden flex'>
               <Swiper slidesPerView={1} spaceBetween={40} pagination={true} modules={[Autoplay]} loop={true} grabCursor={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
               }}>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={a} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={www} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
                   <SwiperSlide className='group'>
                    <div className='relative overflow-hidden'>
                        <img src={aaaaaa} alt="" />
                        <div className='absolute h-full w-full flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <img src={wwwwww} alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-12'>
                    <div className='flex flex-col'>
                            <h3 className='text-[32px] font-xx hover:text-[#a065d5]'>Bowen Higgins</h3>
                            <span className='text-[#c5c5c5] font-xx py-4'>Artist</span>
                        </div>
                        <div className='space-x-6 font-xx'>
                            <a href="">Fb</a>
                            <a href="">Tw</a>
                            <a href="">Bh</a>
                            <a href="">In</a>
                        </div>
                    </div>
                   </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Team