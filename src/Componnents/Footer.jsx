import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Globe } from "lucide-react"; // اضافه شده
import Logo from "../assets/logo/zarinpal-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white mt-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* بخش لینک‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-sm">
          {/* ستون منابع */}
          <div>
            <h3 className="font-bold mb-4">منابع</h3>
            <ul className="space-y-2">
              <li><a href="#">درگاه پرداخت اینترنتی</a></li>
              <li><a href="#">تسویه مستقیم</a></li>
              <li><a href="#">پی‌پرو (Pay-Row)</a></li>
              <li><a href="#">توسعه‌دهندگان</a></li>
              <li><a href="#">اپلیکیشن موبایل</a></li>
              <li><a href="#">وبلاگ</a></li>
              <li><a href="#">دریافت شماره شبا</a></li>
              <li><a href="#">سوالات متداول</a></li>
              <li><a href="#">همکاری در فروش</a></li>
              <li><a href="#">کشف باگ زرین‌پال</a></li>
              <li><a href="#">تعرفه‌ها</a></li>
            </ul>
          </div>

          {/* ستون زرین‌پال */}
          <div>
            <h3 className="font-bold mb-4">زرین‌پال</h3>
            <ul className="space-y-2">
              <li><a href="#">تماس با ما</a></li>
              <li><a href="#">پیگیری تراکنش</a></li>
              <li><a href="#">درباره ما</a></li>
              <li><a href="#">حریم خصوصی</a></li>
              <li><a href="#">قوانین و مقررات</a></li>
            </ul>
          </div>

          {/* ستون خدمات بیشتر */}
          <div>
            <h3 className="font-bold mb-4">خدمات بیشتر</h3>
            <ul className="space-y-2">
              <li><a href="#">نئوزرین</a></li>
              <li><a href="#">زرین‌اکسپرس</a></li>
              <li><a href="#">زرین‌پلاس</a></li>
              <li><a href="#">زرین‌کارت</a></li>
              <li><a href="#">زرین‌دکس</a></li>
            </ul>
          </div>
        </div>

        <div
          className=" border-gray-300 px-6 sm:px-12 lg:px-20 py-6"
          dir="ltr"
        >
          {/* بخش بالا: قوانین و شبکه‌های اجتماعی */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-300 pb-4 mt-10">
            {/* قوانین */}


            {/* شبکه‌های اجتماعی */}
            <div className="flex gap-4 text-xl text-gray-700">
              <a href="#" className="hover:text-cyan-600"><FaGithub /></a>
              <a href="#" className="hover:text-cyan-600"><FaLinkedin /></a>
              <a href="#" className="hover:text-cyan-600"><FaTelegram /></a>
              <a href="#" className="hover:text-cyan-600"><FaInstagram /></a>
              <a href="#" className="hover:text-cyan-600"><FaXTwitter /></a>
            </div>
            <div className="flex items-center gap-2">
              <img src={Logo} alt="zarinpal" className="h-6" />
            </div>
          </div>

          {/* بخش پایین: لوگو + نماد + انتخاب زبان */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6">
            {/* لوگو */}



          </div>
        </div>

        {/* کپی‌رایت */}
        <p className="mt-4 md:mt-0 justify-center text-center">© ۱۴۰۴ - ۱۳۸۹ زرین‌پال</p>
      </div>
    </footer>
  );
}
