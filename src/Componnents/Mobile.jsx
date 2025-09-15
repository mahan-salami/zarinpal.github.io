import React from 'react'
import Appim from '../assets/logo/Img_AppOS-removebg-preview.png'
const Mobile = () => {
  return (
      <div  className='bg-white w-[95%] h-290 sm:w-[91%] md:w-[80%] lg:w-[100%] xl:w-[90%] mb-20
            grid grid-cols-1 px-4 lg:h-200 ml-auto mr-auto rounded-xl shadow-2xl' 
            dir='rtl'>
        <div className="bg-gray-100 w-[95%] sm:w-[91%] md:w-[80%] lg:w-[100%] xl:w-[90%] mb-20 ml-auto mr-auto rounded-xl shadow-2xl px-6 py-16 mt-15" dir="ltr">
          
          {/* بخش اصلی (عکس سمت راست + متن سمت چپ) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* عکس سمت راست */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <img src={Appim} alt="پرداخت" className="w-[350px] md:w-[420px] object-contain" />
            </div>
    
            {/* متن سمت چپ */}
            <div className="flex flex-col items-start text-right max-w-xl space-y-4 order-2 md:order-1" dir='rtl'>
              <p className="text-gray-500">اپلیکیشن موبایل</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
               زرین‌پال من؛ مدیریت درگاه پرداخت
              </h1>
              <p className="text-gray-600 leading-8">
                اپلیکیشن کاربردی زرین‌پال من، علاوه بر تمام ویژگی‌های وب‌سایت زرین‌پال، برای تجربه کاربری بهتر در گوشی‌های هوشمند بومی‌سازی شده است.
              </p>
    
              {/* دکمه‌ها */}
              <div className="flex items-center gap-4 mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
                 دانلود اپلیکیشن 
                </button>

              </div>
            </div>
          </div>
    
          {/* بخش امکانات پایین */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center" dir='rtl'>
            <div className="flex items-center space-y-2">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-800">مدیریت تراکنش‌ها</p>
            </div>
            <div className="flex items-center space-y-2">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-800">مدیریت تسویه‌‌حساب‌‌ها</p>
            </div>
            <div className="flex  items-center space-y-2">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-800">مدیریت محصولات</p>
            </div>
            <div className="flex  items-center space-y-2">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-800">ارتباط سریع با پشتیبانی</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mobile