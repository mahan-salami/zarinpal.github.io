import React from 'react'
import devax from '../assets/logo/Img_Devdocs-removebg-preview.png'
const Dev = () => {
  return (
          <div  className='bg-black w-[95%] h-290 sm:w-[91%] md:w-[80%] lg:w-[100%] xl:w-[90%] mb-20
                grid grid-cols-1 px-4 lg:h-200 ml-auto mr-auto rounded-xl shadow-2xl' 
                dir='rtl'>
            <div className="bg-[#19191A] w-[95%] sm:w-[91%] md:w-[80%] lg:w-[100%] xl:w-[90%] mb-20 ml-auto mr-auto rounded-xl shadow-2xl px-16 py-16 mt-15" dir="rtl">
              
              {/* بخش اصلی (عکس سمت راست + متن سمت چپ) */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* عکس سمت راست */}
                <div className="flex justify-center items-center order-1 md:order-2">
                  <img src={devax} alt="پرداخت" className="w-[350px] md:w-[420px] object-contain" />
                </div>
        
                {/* متن سمت چپ */}
                <div className="flex flex-col items-start text-right max-w-xl space-y-4 order-2 md:order-1" dir='rtl'>
                  <p className="text-gray-300">اپلیکیشن موبایل</p>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                   راهنمای کامل و جامع سرویس‌ها و API های زرین‌پال
                  </h1>
                  <p className="text-gray-300 leading-8">
                    اپلیکیشن کاربردی زرین‌پال من، علاوه بر تمام ویژگی‌های وب‌سایت زرین‌پال، برای تجربه کاربری بهتر در گوشی‌های هوشمند بومی‌سازی شده است.
                  </p>
        
                  {/* دکمه‌ها */}
                  <div className="flex items-center gap-4 mt-6">
                    <button className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
                     مستندات فنی 
                    </button>
    
                  </div>
                </div>
              </div>
        
              {/* بخش امکانات پایین */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center" dir='rtl'>
                <div className="flex  bg-[#535353] rounded-lg text-center justify-center items-center space-y-2">
                  <span className="">✔</span>
                  <p className="text-white">مدیریت تراکنش‌ها</p>
                </div>
                <div className="flex  bg-[#535353] h-20 rounded-lg text-center justify-center items-center space-y-2">
                  <span className="">✔</span>
                  <p className="text-white">مدیریت تسویه‌‌حساب‌‌ها</p>
                </div>
                <div className="flex bg-[#535353] rounded-lg text-center justify-center items-center space-y-2">
                  <span className="">✔</span>
                  <p className="text-white">مدیریت محصولات</p>
                </div>
                <div className="flex  bg-[#535353] rounded-lg text-center justify-center items-center space-y-2">
                  <span className="">✔</span>
                  <p className="text-white">ارتباط سریع با پشتیبانی</p>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Dev