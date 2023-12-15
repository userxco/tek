import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import aaaaaaaaaa from '../assets/6.webp';
import x from '../assets/wave-pattern-new.webp';
import xx from '../assets/fish.webp';


const Art = () => {
  return (
    <div className='lg:py-[12rem] py-[4rem] lg:px-[4rem] px-[1rem] bg-black/95 text-white'>
        <div className='container mx-auto'>
            <div>
                {/* one */}
                <div className='md:flex justify-between items-center'>
                    {/* text */}
                    <div className='pb-12 lg:pb-0'>
                        <div>
                            <img src={x} alt="" />
                        </div>
                        <h2 className='lg:text-[52px] text-[42px] font-xx'>Check Out <br /><span className='text-[#a065d5]'>Our Ghost Art Collections</span></h2>
                        <p className='text-[#c5c5c5] font-cc py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Dictumst <br />maecenas blandit at faucibus augue gravida.
                        </p>
                        <div>
                           <button className='border-white border-2 px-6 py-3.5 gap-x-2 
                                rounded-md bg-[#a065d5] flex 
                                justify-between items-center font-xx 
                                tracking-[3px] text-[12px] hover:animate-bounce 
                                duration-200'>CONNECT <img src={xx} alt="" />
                           </button>
                        </div>
                    </div>
                    {/* img */}
                    <div>
                        <img src={aaaaaaaaaa} alt="" className='lg:w-[85%] rounded-md'/>
                    </div>
                </div>
                {/* slide */}
                <div className='pt-24 hidden lg:flex'>
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={true} modules={[Autoplay]} loop={true} grabCursor={true} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-x bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-a bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aaaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] 2xl:w-[450px] xl:w-[380px] w-[320px] bg-aaaaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                  </Swiper>
                </div>
                {/* md */}
                <div className='pt-24 hidden md:flex lg:hidden'>
                    <Swiper slidesPerView={2} spaceBetween={30} pagination={true} modules={[Autoplay]} loop={true} grabCursor={true} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-x bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-a bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aaaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[380px] bg-aaaaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                  </Swiper>
                </div>
                {/* sm */}
                <div className='pt-12 flex items-center justify-center md:hidden'>
                    <Swiper slidesPerView={1} spaceBetween={30} pagination={true} modules={[Autoplay]} loop={true} grabCursor={true} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-x bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-a bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aaaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[550px] w-[450px] bg-aaaaaaaa bg-center bg-repeat bg-cover rounded-md'/>
                        </SwiperSlide>
                  </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art