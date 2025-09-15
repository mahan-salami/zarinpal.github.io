import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "چگونه در زرین پال ثبت نام کنم ؟",  answer:
      "۱. به صفحه‌ی زرین‌پال من بروید. ۲. نام، نام خانوادگی و شماره‌ی همراه خود را وارد نمایید. ۳. کد پیامک شده را در بخش مربوطه وارد کنید. ۴. پس از ورود به پنل مدیریتی خود در زرین‌پال، نسبت به تکمیل اطلاعات اقدام نمایید.",
  }, 
  { question: "چگونه درگاه پرداخت بسازم ؟ ", answer:
      "۱. پس از ورود به حساب کاربری خود در زرین‌پال، روی آیکونِ پیشخوان کلیک کنید. ۲. سپس گزینه‌ی درخواست درگاه پرداخت را انتخاب نمایید. ۳. در پنجره‌ی «افزودن درگاه پرداخت»، آدرس وب‌سایت خود را وارد کنید. ۴. عنوان وب‌سایت، شماره تماس پشتیبانی و دسته‌بندی حوزه‌ی فعالیت خود را مشخص کنید. ۵. حساب بانکی موردنظرتان را جهت تسویه‌حساب وارد کنید.", },
  { question: "تسویه حساب چه زمانی انجام میشود ؟ ", answer: "پس از کسر کارمزد هنگام هر تراکنش، مبلغ پرداختی حداکثر یک روز پس از انجام تراکنش و تا ساعت ۱۱ صبح، به حساب شخص واریز شده و تسویه‌حساب انجام می‌شود. لازم به توضیح است که تسویه‌حساب در روزهای تعطیل رسمی، انجام نمی‌شود." },
  { question: "چگونه با پشتیبانی زرین پال تماس بگیرم؟",  answer:
      "به دو روش «ارسال تیکت» و «تماس تلفنی» می‌توانید با کارشناسان امور مشتریان زرین‌پال در ارتباط باشید. از منوی سمت راست پیشخوان خود، روی گزینه‌ی تیکت‌ها کلیک کنید. در صورتی‌که پاسخ سوال خود را در «گزینه‌های دیگر» پیدا نکردید، با انتخاب گزینه‌ی تیکت جدید، پرسش خود را مطرح کنید. حداکثر زمان پاسخ‌گویی به تیکت‌ها، ۱۲ ساعت است، چنان‌چه در این بازه پیامی دریافت نکردید، با کارشناسان امور مشتریان زرین‌پال، با شماره تلفن ۰۲۱۴۵۶۲۸۰۰۰ تماس بگیرید.", },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="w-3/4 mx-auto p-4" dir="rtl">
      <h2 className="text-2xl font-bold text-right mb-6">سؤالات متداول</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-3 border border-gray-200 rounded-lg bg-white shadow-sm"
        >
          <button
            className="flex items-center justify-between w-full px-4 py-3 text-right"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
                
              </motion.div>
            )}
            
          </AnimatePresence>
          
        </div>
        
      ))}

    </div>

    </>
  );
}