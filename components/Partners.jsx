import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import x from '../assets/wave-pattern-new.webp';
import a from '../assets/Frame-43.webp';
import aa from '../assets/Frame-44.webp';
import aaa from '../assets/Frame-45.webp';
import aaaa from '../assets/Frame-47.webp';
import aaaaa from '../assets/Frame-48.webp';
import aaaaaa from '../assets/Frame-49.webp';


const Partners = () => {
  return (
    <div className='lg:py-[12rem] py-[4rem] px-[1rem] md:px-0 bg-[#141414] text-white'>
        <div className='mx-auto'>
            <div className='flex flex-col justify-center items-center pb-24'>
                <div className='pb-4 md:pb-0'>
                    <img src={x} alt="" />
                </div>
                <h2 className='lg:text-[62px] text-[32px] font-xx'>Our <span className='text-[#a065d5]'>Official Partners</span></h2>
            </div>
            <div className='hidden lg:flex'>
                <Swiper
             slidesPerView={4}
             spaceBetween={30}
             pagination={true}
             modules={[Autoplay]}
             loop={true}
             grabCursor={true}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
             }}
           >
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={a} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
        </Swiper>
            </div>
            {/* md */}
            <div className='hidden md:flex lg:hidden'>
                <Swiper
             slidesPerView={2}
             spaceBetween={30}
             pagination={true}
             modules={[Autoplay]}
             loop={true}
             grabCursor={true}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
             }}
           >
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={a} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
        </Swiper>
            </div>
            {/* sm */}
            <div className='flex md:hidden'>
                <Swiper
             slidesPerView={1}
             spaceBetween={30}
             pagination={true}
             modules={[Autoplay]}
             loop={true}
             grabCursor={true}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
             }}
           >
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={a} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='bg-white/5 rounded-md'>
                    <div className='pt-6'>
                        <span className='text-[#c5c5c5] font-cc pl-8'>Fashion</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={aaaaa} alt="" className='pt-12 pb-8'/>
                    </div>
                    <h4 className='text-[22px] pb-2 font-xx pl-8'>The Kids Dream</h4>
                    <div className='pb-6'>
                       <span className='text-[#c5c5c5] font-cc pl-8'>kidsdream</span> 
                    </div>
                </div>
             </SwiperSlide>
        </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Partners