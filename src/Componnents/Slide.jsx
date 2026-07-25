import React, { useRef } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import Image1 from '../assets/banner/1 (1).png';
import Image2 from '../assets/banner/1 (2).png';
import Image3 from '../assets/banner/1 (3).png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
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
    <div className='container lg:w-145 lg:h-195 lg:ml-20 sm:w-145 mx-auto px-4 sm:px-6 sm:mt-15 lg:px-8 mb-37 lg:mb-0 '>
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
  );
};

export default Slide;
