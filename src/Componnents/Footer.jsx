import React from "react";

import azki from "../assets/footer/azki-logo-simple.svg";
import bimeMarkazi from "../assets/footer/markazi.webp";
import enamad from "../assets/footer/enamad.png";
import kasbokar from "../assets/footer/work.webp";
import danesh from "../assets/footer/danesh-bonyan.webp";

import {
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-[#fdf7eb] to-[#eef8ff] py-16 px-10"
     
    >
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* لوگوها */}
          <div className="grid grid-cols-2 gap-8 justify-items-center py-24 lg:-mt-20 lg:ml-10">
            <img
              src={bimeMarkazi}
              alt=""
              className="w-28 object-contain"
            />

            <img
              src={enamad}
              alt=""
              className="w-24 object-contain"
            />

            <img
              src={kasbokar}
              alt=""
              className="w-44 object-contain"
            />

            <img
              src={danesh}
              alt=""
              className="w-18 object-contain"
            />
          </div>

          {/* خدمات مشتریان */}
          <div className="text-center lg:text-right">
            <h2 className="text-blue-700 font-bold text-xl mb-6">
              خدمات مشتریان
            </h2>

            <ul className="space-y-4 text-gray-800">
              <li className="hover:text-blue-700 transition  cursor-pointer">ازکی کلاب</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه اقساطی خودرو</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">خسارت آنلاین</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بخشودگی جرایم بیمه</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">استعلام بیمه شخص ثالث</li>
            </ul>
          </div>

          {/* بیمه ها */}
          <div className="text-center lg:text-right">
            <h2 className="text-blue-700 font-bold text-xl mb-6">
              بیمه‌ها
            </h2>

            <ul className="space-y-4 text-gray-800">
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه شخص ثالث</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه بدنه</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه موتورسیکلت</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه درمان تکمیلی</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه آتش سوزی</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه مسافرتی</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه عمر</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بیمه مسئولیت پزشکان</li>
            </ul>
          </div>

          {/* دسترسی سریع */}
          <div className="text-center lg:text-right">
            <h2 className="text-blue-700 font-bold text-xl mb-6">
              دسترسی سریع
            </h2>

            <ul className="space-y-4 text-gray-800">
              <li className="hover:text-blue-700 transition  cursor-pointer">پنل فروشندگان</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">شرایط و قوانین</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">سوالات متداول</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">همکاری با نماینده‌های بیمه</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">تماس با ما</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">درباره ما</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">بلاگ ازکی</li>
              <li className="hover:text-blue-700 transition  cursor-pointer">فرصت‌های شغلی</li>
            </ul>
          </div>

          {/* درباره ازکی */}
          <div className="text-center lg:text-right">

            <img
              src={azki}
              alt=""
              className="w-36 mb-6 mx-auto lg:mx-0 lg:ml-20"
            />

            <p className="text-gray-700 leading-9 text-[17px]">
              ازکی شرکت بیمه نیست؛ با ازکی آنلاین شرکت‌های بیمه را
              باهم مقایسه کنید و با خیال راحت بیمه بخرید.
              به کمک ازکی می‌توانید قبل از خرید درباره انواع
              مختلف بیمه، پوشش‌ها و قیمتشان اطلاعات دقیق و کامل
              کسب کنید.
            </p>

            <div className="flex items-start gap-3 mt-8">

              <p className="text-gray-700 leading-8">
                خیابان ولیعصر، بالاتر از پارک ساعی،
                بن‌بست یاس، پلاک ۱
              </p>
                            <FaMapMarkerAlt
                className="text-gray-500 mt-1"
              />
            </div>

            <div className="flex items-center gap-3 mt-5 lg:ml-34">
             
              <span className="text-gray-700">
                info@azki.com
              </span>
               <FaEnvelope className="text-gray-500" />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;