import React from 'react'
import Heroi from '../assets/logo/img-mainhero-removebg-preview.png'
import Star from '../assets/icon/star.png'
import { IoIosArrowBack } from "react-icons/io";

const Hero = () => {
  return (
    <section className="bg-blue-950 w-[400px] lg:w-[1450px] mt-10 mx-auto rounded-lg p-6 mb-25 ">
      {/* کانتینر: در موبایل ستونی، در دسکتاپ افقی */}
      <div className="flex flex-col md:flex-row items-start gap-6 px-10"> 
        {/* تصویر */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={Heroi}
            alt=""
            className="w-70 sm:w-48 md:w-64 lg:w-120 object-contain -z-10
                       drop-shadow-[0_0_20px_#00faff] drop-shadow-[0_0_40px_#00faff] drop-shadow-[0_0_60px_#00faff]"
          />
        </div>

        {/* متن */}
        <div dir="rtl" className="flex-1 min-w-0 mt-4 md:mt-0 lg:mt-20">
          <div className="flex items-center gap-2 bg-gray-400 w-fit px-3 py-1 rounded-xl text-sm sm:text-base mb-4 mx-auto md:mx-0">
            <img src={Star} alt="" className="w-4 h-4 sm:w-5 sm:h-5"/>
            <h1 className="whitespace-nowrap">زرین پال امروز بدون مرز است مطالعه بیشتر</h1>
            <IoIosArrowBack className="text-lg sm:text-xl"/>
          </div>

          <h1 className="text-right text-2xl sm:text-4xl md:text-5xl text-white font-bold">
            بیش از ۱۵ سال انتخاب مطمئن
          </h1>
          <h2 className="text-right text-2xl sm:text-4xl md:text-5xl text-white font-bold mt-1">
            کسب‌وکار‌های آنلاین
          </h2>
          <p className="text-right text-gray-400 font-bold mt-5 text-sm sm:text-base leading-relaxed">
            زرین‌پال، به عنوان اولین پرداخت‌یار کشور، با به‌کارگیری استانداردهای جدید در ارائه خدمات درگاه پرداخت اینترنتی،
            <br className="hidden sm:block" />
            سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه می‌کند.
          </p>
          <button className="bg-blue-600 rounded-lg py-2 px-4 text-white mt-4 cursor-pointer hover:bg-blue-800 transition delay-150">
            ورود یا ثبت نام
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
