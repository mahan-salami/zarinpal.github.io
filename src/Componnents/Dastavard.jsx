import React from 'react'
import Motamed from '../assets/banner/motamed.webp'
const Dastavard = () => {
  return (
  <section className='flex justify-center items-center mb-10 mt-30'>

    <div className='lg:w-300 lg:h-90 w-82 sm:w-180 bg-blue-950 rounded-lg' dir='rtl'>
        <div className='lg:justify-items-end'>
            <img  className='lg:w-110 lg:-mr-1 h-auto lg:-mt-20 sm:w-50 sm:mr-67 sm:-mt-9 md:ml-10 w-55 mr-10  -mt-10' src={Motamed} alt="" />
        </div>

        



    <div className='justify-items-start items-center text-center lg:-mt-70 lg:mr-100 '>
        <h2 className='text-gray-400'>«ازکی» چشم‌اندازی نوین در عرصه سنتی بیمه
         دستاوردهای ما در یک نگاه</h2>

         <h1 className='text-4xl text-white'>دستاوردهای ما در یک نگاه</h1>
    </div>




 <div className="flex justify-center items-center text-center lg:gap-x-10 lg:mr-103 lg:mt-20 gap-x-3 mb-5">

  <div>
    <h1 className="text-xl lg:text-6xl text-blue-400">۲۰+ نوع</h1>
    <h1 className="text-sm lg:text-xl text-white">خدمات بیمه</h1>
  </div>

  {/* خط جداکننده */}
  <div className="w-1 h-20 bg-gray-400 rounded-lg"></div>

  <div>
    <h1 className="text-xl lg:text-6xl text-blue-400">۹ سال</h1>
    <h1 className="text-sm lg:text-xl text-white">سابقه در عرصه بیمه</h1>
  </div>

  {/* خط جداکننده */}
  <div className="w-1 h-20 bg-gray-400 rounded-lg"></div>

  <div>
    <h1 className="text-xl lg:text-6xl text-blue-400">۴۰۰+ شهر</h1>
    <h1 className="text-sm lg:text-xl text-white">تحت پوشش ازکی</h1>
  </div>

</div>



    </div>






    </section>
  )
}

export default Dastavard