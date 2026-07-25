import React from 'react'
import question from '../assets/icon/questions2.svg'
import company from '../assets/banner/background.webp'
import bimehaa from '../assets/icon/امکان مقایسه بیمه ها.svg'
const Chera = () => {
  return (
    <div>
        <div className='justify-center items-center text-center '>
            <h1 className='lg:text-5xl'>چرا از «ازکی» بخرم؟</h1>
            <h2 className='text-gray-400 mt-2 text-2xl mb-3'>چون ما در ازکی بهت کمک می‌کنیم، مناسب‌ترین بیمه رو انتخاب کنی.</h2>
        </div>
       

       <div className='hidden lg:block justify-start'>
        <img src={question} alt="" />
       </div>


       <div className='hidden lg:block justify-items-end lg:ml-280 lg:-mt-60'>
        <img src={company} alt="" />
       </div>



<div
  className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-6 px-8 lg:px-74 lg:mr-50 lg:-mt-97 lg:mb-50"
  dir="rtl"
>
  {/* آیتم اول */}
  <div className="flex items-start gap-5">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center flex-shrink-0">
      <img
        src={bimehaa}
        alt="بیمه"
        className="w-9 h-9 object-contain"
      />
    </div>

    <div>
      <h1 className="text-lg  mb-2">
        مقایسه قیمت و خدمات بیمه‌ها
      </h1>
      <p className="text-gray-500 leading-7 w-64">
        با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، بیمه‌‌‌ت رو زیرکانه انتخاب کن.
      </p>
    </div>
  </div>

  {/* آیتم دوم */}
  <div className="flex items-start gap-5">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center flex-shrink-0">
      <img
        src={bimehaa}
        alt="بیمه"
        className="w-9 h-9 object-contain"
      />
    </div>

    <div>
      <h1 className="text-lg  mb-2">
        مقایسه قیمت و خدمات بیمه‌ها
      </h1>
      <p className="text-gray-500 leading-7 w-64">
        با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، بیمه‌‌‌ت رو زیرکانه انتخاب کن.
      </p>
    </div>
  </div>

  {/* آیتم سوم */}
  <div className="flex items-start gap-5">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center flex-shrink-0">
      <img
        src={bimehaa}
        alt="بیمه"
        className="w-9 h-9 object-contain"
      />
    </div>

    <div>
      <h1 className="text-lg  mb-2">
        مقایسه قیمت و خدمات بیمه‌ها
      </h1>
      <p className="text-gray-500 leading-7 w-64">
        با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، بیمه‌‌‌ت رو زیرکانه انتخاب کن.
      </p>
    </div>
  </div>

  {/* آیتم چهارم */}
  <div className="flex items-start gap-5">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center flex-shrink-0">
      <img
        src={bimehaa}
        alt="بیمه"
        className="w-9 h-9 object-contain"
      />
    </div>

    <div>
      <h1 className="text-lg  mb-2">
        مقایسه قیمت و خدمات بیمه‌ها
      </h1>
      <p className="text-gray-500 leading-7 w-64">
        با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، بیمه‌‌‌ت رو زیرکانه انتخاب کن.
      </p>
    </div>



    
    </div>







  <div className="flex items-start gap-5">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center flex-shrink-0">
      <img
        src={bimehaa}
        alt="بیمه"
        className="w-9 h-9 object-contain"
      />
    </div>

    <div>
      <h1 className="text-lg  mb-2">
        مقایسه قیمت و خدمات بیمه‌ها
      </h1>
      <p className="text-gray-500 leading-7 w-64">
        با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، بیمه‌‌‌ت رو زیرکانه انتخاب کن.
      </p>
    </div>



    
    </div>




      </div>


        
    </div>
  )
}

export default Chera