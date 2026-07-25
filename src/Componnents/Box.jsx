import React from 'react'
import online from '../assets/icon/online-insurance.svg'
import wrong from '../assets/icon/wrong-info.svg'
import felesh1 from '../assets/icon/arrow.svg'

const Box = () => {
  return (
    <section  className='sm:ml-10'>
        <div className='container flex flex-col justify-center items-center mt-5 lg:mt-0  mb-20'>
            <div className='lg:w-195 sm:w-160 lg:h-70 w-80 border border-gray-300 rounded-2xl mt-5 ' dir='rtl'>
                <div className='flex flex-col lg:w-4/7 lg:px-2  lg:justify-center  lg:mt-15 lg:mr-75 mt-5  '>

                <h1 className='text-2xl sm:mr-3 sm:justify-center  lg:mt-0 mt-30'>چرا بیمه رو آنلاین بخرم؟</h1>
                <p className='text-gray-500 sm:mr-3'>«خدمات آنلاین» متنوع، سریع و امن هستن. برای خرید بهترین بیمه از «ازکی» می‌تونی در یک نگاه تمام شرکت‌های بیمه رو با هم مقایسه کنی و بعد از انتخاب گزینه مناسب، بدون درگیری با مراحل اداری صدور، بیمه‌نامه معتبر خودت‌ رو‌‌ در محل موردنظر دریافت کنی.</p>
                </div>

                <div className='lg:w-2/7 lg:-mr-90 lg:-mt-36'>
                    <img src={online} className=' lg:mr-110 lg:mt-2 sm:mr-62 sm:-mt-65 -mt-75 mr-20 mb-40' alt="" />
                </div>
            </div>
            {/*felesh*/}
            
             <img src={felesh1} className='hidden lg:block lg:ml-210 lg:-mt-50' alt="" />
             
               <div className='lg:w-195 sm:w-160 lg:h-70  w-80 border border-gray-300 rounded-2xl mt-5' dir='rtl'>
                <div className='flex flex-col lg:w-4/7 px-2 justify-center lg:mt-15 lg:mr-15 mt-5'>
                <h1 className='text-2xl sm:mr-3 lg:mt-0 mt-30 '>ممکنه تاریخ سررسید بیمه‌ام یادم بره؟</h1>
                <p className='text-gray-500 sm:mr-3'>طبیعیه که با وجود مشغله‌ی روزمره، زمان تمدید رو فراموش کنی! یکی از فواید خرید از ازکی، یادآوری زمان تمدید بیمه‌ست. اینطوری در صورت وقوع حادثه، هم از ضرر مالی پیشگیری می‌کنی و هم مجبور به پرداخت جریمه دیرکرد برای بیمه‌های اجباری نمیشی.</p>
                </div>

                <div className='lg:w-2/7 lg:mr-30 lg:-mt-36'>
                    <img src={online} className='lg:mr-105 lg:mt-2 sm:mr-62 sm:-mt-65 -mt-75 mr-20 mb-40' alt="" />
                </div>
            </div>



             <img src={felesh1} className='hidden lg:block  lg:mr-210 lg:-mt-50   transform scale-x-[-1]' alt="" />
                        <div className='lg:w-195 sm:w-160 lg:h-70 border  w-80 border-gray-300 rounded-2xl mt-5' dir='rtl'>
                <div className='flex flex-col lg:w-4/7 px-2 justify-center lg:mt-15 lg:mr-75 mt-5'>
                <h1 className='text-2xl sm:mr-3 lg:mt-0 mt-35'>اگه اطلاعاتم رو اشتباه وارد کنم چی میشه؟</h1>
                <p className='text-gray-500 sm:mr-3'>کارشناسان «ازکی» قبل از صدور بیمه‌نامه، اطلاعات موردنیاز رو در سامانه‌های رسمی استعلام می‌گیرند تا از صحت اون‌ها مطمئن بشن و اگر به اشتباه یا عدم تطابق اطلاعات بر بخورن، حتما باهات تماس می‌گیرن تا برای صدور بیمه‌نامه اصلاحات لازم رو انجام بدن. پس اصلاً نگران نباش!</p>
                </div>

                <div className='lg:w-2/7 lg:-mr-90 lg:mt-2'>
                    <img src={wrong} className='lg:mr-110 lg:-mt-45 sm:mr-55 sm:-mt-65 -mt-85 mr-14 mb-40' alt="" />
                </div>
            </div>


              <img src={felesh1} className='hidden lg:block lg:ml-210 lg:-mt-50' alt="" />
                        <div className='lg:w-195 sm:w-160 lg:h-70  w-80 border border-gray-300 rounded-2xl mt-5 lg:mb-10' dir='rtl'>
                <div className='flex flex-col lg:w-4/7 px-2 justify-center lg:mt-15 lg:mr-15 mt-5'>
                <h1 className='text-2xl sm:mr-3 lg:mt-0 mt-30'>چرا بیمه رو آنلاین بخرم؟</h1>
                <p className='text-gray-500 sm:mr-3'>«خدمات آنلاین» متنوع، سریع و امن هستن. برای خرید بهترین بیمه از «ازکی» می‌تونی در یک نگاه تمام شرکت‌های بیمه رو با هم مقایسه کنی و بعد از انتخاب گزینه مناسب، بدون درگیری با مراحل اداری صدور، بیمه‌نامه معتبر خودت‌ رو‌‌ در محل موردنظر دریافت کنی.</p>
                </div>

                <div className='lg:w-2/7 lg:mr-20 lg:-mt-36'>
                    <img src={online} className='lg:mr-115 lg:mt-2 sm:mr-62 sm:-mt-65 -mt-75 mr-20 mb-40' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Box