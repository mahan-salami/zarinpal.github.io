import React from "react";
import az from "../assets/banner/app-landing-motamed-wondering.webp";
import one from "../assets/banner/bazzar-touchpoint.png";
import two from "../assets/banner/googleplay-touchpoint.png";
import three from "../assets/banner/web-touchpoint.png";
import { ChevronLeft } from "lucide-react";

const Dastresi = () => {
  return (
    <section>
      <div className="bg-[#22273B] rounded-[40px] flex items-center justify-between px-8 lg:w-315 lg:h-20 lg:ml-35 mb-10 sm:w-185 sm:ml-5 h-70 w-82 ml-4 flex-col lg:flex-row sm:flex-row"  dir="rtl">

        {/* سمت راست */}
        <div className="flex items-center gap-4">
          <img
            src={az}
            alt=""
            className="w-20 lg:w-24"
          />

          <h2 className="text-white  text-lg leading-8">
            دسترسی به بیمه
            <br />
            با اپلیکیشن ازکی
          </h2>
        </div>

        {/* وسط */}
        <div className=" md:flex items-center gap-4 ">

          <img
            src={three}
            alt=""
            className="h-10 cursor-pointer hover:scale-105 duration-300 sm:w-30 sm:h-auto"
          />

          <img
            src={two}
            alt=""
            className="h-10 cursor-pointer hover:scale-105 duration-300 sm:w-30 sm:h-auto"
          />

          <img
            src={one}
            alt=""
            className="h-10 cursor-pointer hover:scale-105 duration-300 sm:w-30 sm:h-auto"
          />

        </div>

        {/* سمت چپ */}
        <button className=" md:flex items-center gap-2 text-white  hover:text-blue-400 duration-300 mb-2">
         
          بیشتر
           <ChevronLeft size={22} className="hidden lg:block" />
        </button>

      </div>
    </section>
  );
};

export default Dastresi;