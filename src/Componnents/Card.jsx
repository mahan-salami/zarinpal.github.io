import React from 'react'
import Zemanat from '../assets/icon/zemanat.png'
import poshti from '../assets/icon/poshti.png'
import masir from '../assets/icon/masir.png'
import ax from '../assets/icon/amniat.png'

const Card = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-10 lg:px-20 mt-20 text-center mb-20"
        dir="rtl"
      >
        {/* 1 */}
        <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-start p-4">
          <img src={Zemanat} alt="zemanat" className="max-h-20 mb-2" />
          <h1 className="text-xl font-semibold">ضمانت پرداخت</h1>
          <p className="text-gray-500 text-sm mt-2">
            درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-start p-4">
          <img src={masir} alt="masir" className="max-h-20 mb-2" />
          <h1 className="text-xl font-semibold">مسیردهی هوشمند</h1>
          <p className="text-gray-500 text-sm mt-2">
            امکان اتصال به ۶ درگاه پرداخت معتبر، باعث می‌شود کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش موفق هدایت شوند.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-start p-4">
          <img src={ax} alt="amniat" className="max-h-20 mb-2" />
          <h1 className="text-xl font-semibold">امنیت پرداخت</h1>
          <p className="text-gray-500 text-sm mt-2">
            درگاه امن زرین‌پال، امنیت اطلاعات بانکی افراد در هنگام پرداخت‌های اینترنتی را تضمین می‌کند.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-start p-4">
          <img src={poshti} alt="poshti" className="max-h-20 mb-2" />
          <h1 className="text-xl font-semibold">پشتیبانی ۲۴/۷</h1>
          <p className="text-gray-500 text-sm mt-2">
            تیم پشتیبانی زرین‌پال به صورت ۲۴ ساعته در ۷ روز هفته، آماده‌ی پاسخگویی و راهنمایی کاربران است.
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
