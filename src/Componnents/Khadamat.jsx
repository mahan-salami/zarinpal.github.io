import React from 'react'
import { useState } from "react";
import bime from '../assets/icon/azki.jpeg.png'
import kala from '../assets/icon/azkisarmayeh.jpeg.png'
import sarmaye from '../assets/icon/azkivam.jpeg.png'
import motor from '../assets/icon/motorcycle-on.svg'
import badane from '../assets/icon/body-on.svg'
import Sales from '../assets/icon/third-on.svg'
import mosaferat from '../assets/icon/travel-on.svg'
import mobile from '../assets/icon/mobile-on.svg'
import omr from '../assets/icon/life-on.svg'
import takmili from '../assets/icon/health-on.svg'
import khane from '../assets/icon/house-on.svg'


const Khadamat = () => {
   const [showModal, setShowModal] = useState(false);
  return (
    <section className='container lg:-mt-2 2xl:justify-center  2xl:items-center 2xl:w-full xl:w-full xl:justify-center xl:items-center '>





        {/**/}
<div className='
  w-85      /* عرض کامل در همه اندازه‌ها */
  mx-auto      /* وسط‌چین کردن */
  h-480      /* ارتفاع پیش‌فرض */
  sm:h-450     /* ارتفاع در اندازه‌های کوچک */
  lg:h-165     /* ارتفاع در اندازه‌های بزرگ */
  sm:w-[650px] /* عرض در اندازه‌های کوچک */
  md:w-[650px] /* عرض در اندازه‌های متوسط */
  lg:w-311     /* عرض در اندازه‌های بزرگ (این را باید تنظیم کنید) */
  lg:ml-29     /* حاشیه چپ در اندازه‌های بزرگ */
  mb-20        /* حاشیه پایین */
  shadow-2xl
  rounded-2xl
  lg:-mt-140
  2xl:max-w
  -mt-20
  sm:mt-40
  lg:rounded-tr-none
  bg-white
  flex
  justify-center items-center
  flex-col
  sm:ml-20
'>
          <div className='flex lg:ml-214 justify-center items-center lg:-mt-50  sm:-mt-20    '>
            {/*3 ta icon bala khadanati*/}
            <div className='flex lg:w-117 lg:-mt-10   sm:w-117  w-85 h-30 lg:mr-20 -mt-25 rounded-t-2xl bg-white mb-20 sm:-mb-10 lg:mb-0 justify-center items-center  lg:gap-8 gap-4 '  dir='rtl'>
               <div className='flex flex-col justify-center items-center '>
                <img src={bime} className='lg:w-10 w-7 -mt-4 cursor-pointer' alt="" />
                <h1 className='cursor-pointer'>بیمه</h1>
                <p className='text-gray-400 text-sm cursor-pointer text-center'>مقایسه و خرید آنلاین</p>
                </div> 
                <span className='w-[1.5px] h-15 bg-gray-200'></span>
                <div className='flex flex-col justify-center items-center'>
                <img src={kala} className='lg:w-10 w-7 -mt-4 cursor-pointer ' alt="" />
                <h1 className='cursor-pointer' >کالا و خدمات</h1>
                <p className='text-gray-400 text-sm cursor-pointer text-center'>اقساطی بدون ضامن</p>
                </div> 
                <span className='w-[1.5px] h-15 bg-gray-200'></span>
                <div className='flex flex-col justify-center items-center'>
                <img src={sarmaye} className='lg:w-10 w-7 -mt-4 cursor-pointer' alt="" />
                <h1 className='cursor-pointer text-center'>سرمایه گذاری </h1>
                <p className='text-gray-400 text-sm cursor-pointer text-center '>آسان و سریع</p>
                </div> 

            </div>
        </div>
  {/* کانتینر فلکس، موبایل: ستون / دسکتاپ: ردیف */}
  <div className="flex flex-col lg:flex-row w-full mt-16 lg:items-center lg:justify-between justify-center items-center" dir="rtl">
    
    {/* متن‌ها */}
    <div className="flex flex-col  ">
      <h1 className='text-2xl lg:mr-10 lg:-mt-15 -mt-50 sm:mt-15 '>
        ازکی؛ مقایسه و خرید آنلاین بیمه
      </h1>
      <p className='text-gray-400 lg:mr-10 '>
        بیمه‌ مورد نظرت رو انتخاب کن!
      </p>
    </div>

    {/* اینپوت: موبایل زیر متن، دسکتاپ در انتهای سطر */}
    <div className="lg:ml-10 lg:-mt-20 sm:mt-5 -mt-30">
      <input type="text" className="rounded-2xl border border-gray-400  outline-none px-5 py-2 w-80 " placeholder="جستجو"     onClick={() => setShowModal(true)}
      />
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-[90%] h-[85vh] rounded-2xl p-8 relative overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 left-5 text-3xl text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-right text-2xl font-bold mb-10">
              همه بیمه‌ها
            </h2>

            {/* Search */}
            <div className="flex justify-center mb-14">
              <input
                type="text"
                placeholder="جستجو بیمه در ازکی..."
                className="w-[450px] rounded-full border border-blue-300 px-6 py-3 text-right outline-none"
              />
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 gap-y-14 text-right">

                     {/* درمان تکمیلی */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه درمان تکمیلی
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>درمان تکمیلی انفرادی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>درمان تکمیلی خانوادگی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150' >تکمیلی شرکتی</li>
    </ul>
  </div>

  {/* خانه */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه خانه
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>بسته جامع مسکونی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>آتش‌سوزی مسکونی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>زلزله مسکونی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>آسانسور</li>
    </ul>
  </div>

  {/* وسایل نقلیه */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه وسایل نقلیه
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>شخص ثالث</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>بدنه</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150' >موتورسیکلت</li>
    </ul>
  </div>

  {/* مسافرتی */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه مسافرتی
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>مسافرت‌های خارجی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>مسافرت‌های داخلی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>مسافرت زائرین</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>مسافرت ورودی به ایران</li>
    </ul>
  </div>

  {/* کارفرما */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه کارفرما
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>کارفرما در قبال کارکنان (ساختمانی)</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>کارفرما در قبال کارکنان (غیر ساختمانی)</li>
    </ul>
  </div>

  {/* کسب و کار */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه کسب و کار
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>آتش‌سوزی اداری و تجاری</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>آتش‌سوزی صنعتی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>آسانسور</li>
    </ul>
  </div>

  {/* حوادث */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه حوادث
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>حوادث انفرادی</li>
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>حوادث گروهی</li>
    </ul>
  </div>

  {/* تجهیزات الکترونیکی */}
  <div>
    <h3 className="text-blue-600 font-bold text-xl mb-4">
      بیمه تجهیزات الکترونیکی
    </h3>

    <ul className="space-y-3 text-gray-700">
      <li className='cursor-pointer hover:text-blue-400 transition duration-150'>موبایل</li>
    </ul>
  </div>


            </div>

          </div>
        </div>
      )}
    </div>
    
  </div>

      <div className='flex flex-col lg:flex-row lg:justify-start mt-6 w-full lg:px-10 px-5'> {/* تغییر: flex-col برای موبایل، flex-row برای دسکتاپ، w-full و px-4 برای padding */}

        {/* Div اول */}
        <div className='flex flex-col justify-center items-center mx-auto w-full lg:w-1/6 h-40 shadow-xl border border-blue-100 rounded-2xl bg-white mb-4 lg:mb-0  cursor-pointer'>
          {/* محتوای div اول */}
          <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-26  -mt-2'>خرید اقساطی</span>
          <img src={motor} className='w-18' alt="" />
          <h1 className="p-4 text-center  text-2xl -mt-2">بیمه موتور</h1>
          <p className='text-gray-400 -mt-4' dir='rtl'>نک سیلندر دو سیلندر و ...</p>
        </div>

        {/* Div دوم */}
        <div className='border border-blue-100 cursor-pointer flex flex-col justify-center items-center  lg:justify-start lg:items-end mx-auto w-full lg:w-2/5 h-40 shadow-xl rounded-2xl bg-white mb-4 lg:mb-0 lg:ml-5'>
          {/* محتوای div دوم */}
           <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-94  -mt-2'>خرید اقساطی</span>
          <div className='flex flex-row mr-5' dir='rtl'>
          <img src={badane} className='w-18 mb-7' alt="" />
          <div className='flex flex-col'>
          <h1 className="p-4 text-center text-2xl ml-5">بیمه بدنه خودرو</h1>
          <p className='text-gray-400 -mt-4 mr-4'>سواری و وانت</p>


       
           
          </div>

          </div>
          <div className='flex justify-center itens-center lg:mr-7 -mt-15'>
           <span className='bg-blue-200 p-2 lg:w-[420px] max-w  text-blue-800 mt-10 rounded-lg text-sm text-center'>بازدید توسط مشتری در سراسر ایران</span>
           </div>
        </div>

        {/* Div سوم */}
        <div className='border border-blue-100 cursor-pointer flex flex-col justify-center items-center  lg:justify-start lg:items-end mx-auto w-full lg:w-2/5 h-40 shadow-xl rounded-2xl bg-white mb-4 lg:mb-0 lg:ml-5'>
           <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-94  -mt-2'>خرید اقساطی</span>
          <div className='flex flex-row mr-5' dir='rtl'>
          <img src={Sales} className='w-18 mb-7' alt="" />
          <div className='flex flex-col'>
          <h1 className="p-4 text-center text-2xl ml-5">بیمه شخص ثالث خودرو</h1>
          <p className='text-gray-400 -mt-4 mr-4'>سواری وانت و کامیون </p>


       
           
          </div>

          </div>
          <div className='flex justify-center itens-center lg:mr-7 -mt-15'>
           <span className='bg-blue-200 p-2 lg:w-[420px] max-w  text-blue-800 mt-10 rounded-lg text-sm text-center'>اگه تا ساعت ۲۱ سفارش بدی، بیمه‌نامه امروز صادر میشه!</span>
           </div>
        </div>

      </div>




















            <div className='flex flex-col lg:flex-row lg:justify-start mt-6 w-full px-5'> {/* تغییر: flex-col برای موبایل، flex-row برای دسکتاپ، w-full و px-4 برای padding */}

        {/* Div اول */}
        <div className='flex flex-col justify-center items-center mx-auto w-full lg:w-1/6 h-40 shadow-xl border border-blue-200 rounded-2xl bg-white mb-4 lg:mb-0  cursor-pointer'>
          {/* محتوای div اول */}
          <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-28  -mt-2'>خرید اقساطی</span>
          <img src={mosaferat } className='w-18' alt="" />
          <h1 className="p-4 text-center  text-2xl -mt-2">بیمه مسافرتی</h1>
          <p className='text-gray-400 -mt-4' dir='rtl'>داخلی خارجی زائرین و ... </p>
        </div>

        {/* Div دوم */}
         <div className='flex flex-col justify-center items-center mx-auto w-full lg:w-1/6 h-40 shadow-xl border border-blue-200 rounded-2xl bg-white mb-4 lg:mb-0  cursor-pointer'>
          {/* محتوای div اول */}
          <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-28  -mt-2'>خرید اقساطی</span>
          <img src={mobile} className='w-18' alt="" />
          <h1 className="p-4 text-center  text-2xl -mt-2">بیمه موبایل</h1>
          <p className='text-gray-400 -mt-4' dir='rtl'>سرقت آسیب دیدگی و ... </p>
        </div>


        {/* Div سوم */}
        <div className='flex flex-col justify-center items-center mx-auto w-full lg:w-1/6 h-40 shadow-xl border border-blue-200 rounded-2xl bg-white mb-4 lg:mb-0  cursor-pointer'>
          {/* محتوای div اول */}
          <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-28  -mt-2'>خرید اقساطی</span>
          <img src={omr} className='w-18' alt="" />
          <h1 className="p-4 text-center  text-2xl -mt-2">بیمه عمر</h1>
          <p className='text-gray-400 -mt-4' dir='rtl'>عمر و سرمایه گذاری و ... </p>
        </div>


                <div className='flex flex-col justify-center items-center mx-auto w-full lg:w-1/6 h-40 shadow-xl border border-blue-200 rounded-2xl bg-white mb-4 lg:mb-0  cursor-pointer'>
          {/* محتوای div اول */}
          <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-28  -mt-2'>خرید اقساطی</span>
          <img src={takmili} className='w-18' alt="" />
          <h1 className="p-4 text-center  text-2xl -mt-2">بیمه تکمیلی</h1>
          <p className='text-gray-400 -mt-4' dir='rtl'>انفرادی خانوادگی و شرکتی</p>
        </div>



                <div className='flex flex-col justify-center items-center mx-auto w-full lg:w-1/6 h-40 shadow-xl border border-blue-200 rounded-2xl bg-white mb-4 lg:mb-0  cursor-pointer'>
          {/* محتوای div اول */}
          <span className='bg-blue-500 text-white w-22 text-center rounded-3xl justify-end items-end lg:mr-28  -mt-2'>خرید اقساطی</span>
          <img src={khane} className='w-18' alt="" />
          <h1 className="p-4 text-center  text-2xl -mt-2">بیمه خانه</h1>
          <p className='text-gray-400 -mt-4' dir='rtl'>آتش سوزی زلزله و آسانسور</p>
        </div>

      </div>


      <div className='flex justify-center items-center mt-15 sm:mt-2 lg:mt-15 lg:-mb-20'>
        <button className='hover:bg-blue-700 transition duration-500 cursorr-pointer bg-blue-500 p-4 rounded-2xl text-white'>مشاهده همه بیمه ها</button>
      </div>
</div>
    
    </section>
  )
}

export default Khadamat