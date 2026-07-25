import React, { useState } from 'react';
import azki from '../assets/logo/logo.png';
import support from '../assets/icon/Screenshot 2026-04-20 at 19-11-35 خرید آنلاین بیمه مشاوره، مقایسه و استعلام azki.png';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ======== navbar اصلی ======== */}
      <nav
        className=" flex items-center justify-between px-24 py-3 sticky top-0 z-50 h-18 container mx-auto lg:w-full sm:w-full md:w-full  
                   bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.1)] max-width"
        dir="rtl"
      >
        {/* لوگو و لینک‌های دسکتاپ */}
        <div className="flex items-center">
          <img src={azki} className="w-20 h-10 ml-5 object-contain" alt="logo" />
          <ul className="hidden lg:flex items-center gap-6 py-4">
            <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer">
              <a href="#home">بیمه ها</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer">
              <a href="#rules">خسارت</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer">
              <a href="#about">اقساط و اعتبار</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer">
              <a href="#contact">شرکت های بیمه</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500 transition cursor-pointer">
              <a href="#contact">فروشنده شوید!</a>
            </li>
          </ul>
        </div>

        {/* آیکون منوی موبایل و دکمه‌های راست */}
        <div className="flex items-center">
          {/* آیکون منوی موبایل */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>

          {/* سرچ، پشتیبانی و ورود/ثبت نام */}
          <div className="hidden lg:flex items-center gap-6 ml-12">
            <div className="flex items-center cursor-pointer">
              <img src={support} className="w-6 h-6 ml-2" alt="Support icon" />
              <h2 className="text-blue-500 font-medium">پشتیبانی</h2>
            </div>
            <button className="border-2 border-blue-500 text-blue-500 px-5 py-2 rounded-xl font-medium hover:bg-blue-500 hover:text-white transition duration-300">
              ورود / ثبت نام
            </button>
          </div>
        </div>
      </nav>

      {/* ======== منوی بازشونده موبایل ======== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-4" dir="rtl">
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="block py-2 px-2 text-gray-700 hover:text-blue-500 rounded-md">بیمه ها</a></li>
            <li><a href="#blog" className="block py-2 px-2 text-gray-700 hover:text-blue-500 rounded-md">خسارت</a></li>
            <li><a href="#rules" className="block py-2 px-2 text-gray-700 hover:text-blue-500 rounded-md">اقساط و اعتبار</a></li>
            <li><a href="#about" className="block py-2 px-2 text-gray-700 hover:text-blue-500 rounded-md">شرکت های بیمه</a></li>
            <li><a href="#contact" className="block py-2 px-2 text-gray-700 hover:text-blue-500 rounded-md">فروشنده شوید</a></li>
          </ul>
          <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-200">
            <img src={support} className="w-6 h-6 ml-2" alt="Support icon" />
            <h2 className="text-blue-500 font-medium">پشتیبانی</h2>
          </div>
          <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition duration-300">
            ورود / ثبت نام
          </button>
        </div>
      )}
    </>
  );
};

export default Nav;
