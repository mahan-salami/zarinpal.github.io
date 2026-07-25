import React from "react";
import ersal from "../assets/icon/ارسال رایگان به سراسر کشور.svg";
import aghsat from "../assets/icon/امکان خرید اقساطی.svg";
import bimeha from "../assets/icon/امکان مقایسه بیمه ها.svg";
import bistoch from "../assets/icon/پشتیبانی 24 ساعته.svg";

const Mazaya = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        <div className="flex flex-col items-center text-center">
          <img
            src={ersal}
            alt="ارسال رایگان"
            className="w-16 h-16 object-contain"
          />
          <h1 className="mt-3 text-sm md:text-base font-medium">
            ارسال رایگان به سراسر کشور
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={bistoch}
            alt="پشتیبانی"
            className="w-16 h-16 object-contain"
          />
          <h1 className="mt-3 text-sm md:text-base font-medium">
            پشتیبانی ۲۴ ساعته
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={bimeha}
            alt="مقایسه بیمه‌ها"
            className="w-16 h-16 object-contain"
          />
          <h1 className="mt-3 text-sm md:text-base font-medium">
            امکان مقایسه بیمه‌ها
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={aghsat}
            alt="خرید اقساطی"
            className="w-16 h-16 object-contain"
          />
          <h1 className="mt-3 text-sm md:text-base font-medium">
            امکان خرید اقساطی
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Mazaya;