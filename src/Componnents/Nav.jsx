import React, { useState } from 'react'
import Logo from '../assets/logo/zarinpal-logo.svg'
import { Menu, X } from 'lucide-react' // آیکون‌های همبرگری و ضربدر

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="h-16 w-full shadow-sm bg-white flex items-center justify-between px-4 sticky top-0 z-30" dir="rtl">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="لوگو" className="w-28 h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2 delay-150 transition"><a href="#">درگاه پرداخت اینترنتی</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2 delay-150 transition"><a href="#">توسعه دهندگان</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2 delay-150 transition"><a href="#">پیگیری تراکنش</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2 delay-150 transition"><a href="#">تعرفه ها</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2 delay-150 transition"><a href="#">تماس با ما</a></li>
          </ul>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 rounded-lg py-2 px-4 text-white cursor-pointer hover:bg-blue-800 transition delay-150">
            ورود یا ثبت نام
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-3 p-4 text-center">
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2"><a href="#">درگاه پرداخت اینترنتی</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2"><a href="#">توسعه دهندگان</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2"><a href="#">پیگیری تراکنش</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2"><a href="#">تعرفه ها</a></li>
            <li className="rounded-lg hover:bg-gray-100 px-4 py-2"><a href="#">تماس با ما</a></li>
            <li>
              <button className="w-full bg-blue-600 rounded-lg py-2 px-4 text-white cursor-pointer hover:bg-blue-800 transition delay-150">
                ورود یا ثبت نام
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Nav
