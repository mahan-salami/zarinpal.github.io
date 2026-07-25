import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import Image10 from '../assets/banner/application_middle_desktop_c0c83ef38e.webp';
import Image12 from '../assets/banner/forgiveness_middle_desktop_0174358471.webp';
import Image13 from '../assets/banner/seller_far_desktop_6b5adb300b.webp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
  { id: 1, img: Image10 },
  { id: 2, img: Image12 },
  { id: 3, img: Image13 },
];

const Slide = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <section>
    <div className='container lg:w-208 lg:h-195  sm:w-145 mx-auto px-4 sm:px-6 lg:px-8 lg:mt-7 mt-20 sm:-mt-10'>
      <div className='relative overflow-hidden rounded-3xl mt-10 '>

        {/* Next arrow */}
        <div 
          className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 cursor-pointer text-black text-xl"
          onClick={nextSlide}
        >
          <IoIosArrowBack className="rotate-180" /> 
        </div>

        {/* Prev arrow */}
        <div 
          className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer text-black text-xl"
          onClick={prevSlide}
        >
          <IoIosArrowBack /> 
        </div>

        <Slider ref={sliderRef} {...settings}>
          {HeroData.map(({ id, img }) => (
            <div key={id} className='flex h-[180px] justify-center items-center'>
              <img
                src={img}
                alt={`Slide ${id}`}
                className='h-[190px] object-fit'
              />
            </div>
          ))}
        </Slider>

      </div>
    </div>
    <div className='justify-center items-center text-center lg:-mt-100 mt-10'>
        <h1 className='text-5xl'>خرید آنلاین بیمه بدون نگرانی</h1>
    </div>
    </section>
  );
};

export default Slide;