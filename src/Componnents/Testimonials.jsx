import amir from "../assets/logo/amir-piroudin.jpg"
import manuel from "../assets/logo/amir-piroudin.jpg"
import saeid from "../assets/logo/saeed-abdollahiha.jpg"
import tavakol from "../assets/logo/amir-tavakoli-haghighi.jpg"
import khani from "../assets/logo/mohammad-khani.jpg"
import haji from "../assets/logo/ali-haji-mohammadi.jpg"
const testimonials = [
  {
    name: "امیر پیرو دین",
    role: "هم‌بنیان‌گذار اپ استور اناردونی",
    text: "گزارش‌گیری عالی، امکان پیگیری تراکنش‌ها، تسویه حساب سریع و تفکیک درآمدها کار را بسیار آسان کرده است.",
    img: amir ,
  },
  {
    name: "مانوئل اوهانجانیانس",
    role: "مدیرعامل و هم‌بنیان‌گذار ایسمینار",
    text: "تسویه حساب منظم، پشتیبانی اختصاصی و بروزرسانی به موقع از ویژگی‌های کار با زرین‌پال است.",
    img:  manuel ,
  },
  {
    name: "سعید عبدالهی‌ها",
    role: "هم‌بنیان‌گذار آمیزرا و بافناوا",
    text: "سهولت فرایند پرداخت در زرین‌پال این امکان را می‌دهد تا کاربر با کمترین کلیک و حس خوب، خرید خود را نهایی کند.",
    img: saeid ,
  },

    {
    name: "امیر توکلی حقیقی",
    role: "تیم کوییز آوکینگز",
    text: "پشتیبانی قوی، امنیت و حس شهرت زرین‌پال، یکی از دلایل همکاری با زرین‌پال است و کاربران با اطمینان کامل از امنیت درگاه و بدون چون و چرا و خیالی آسوده خرید خود را به راحتی انجام می‌دهند",
    img: tavakol ,
  },
  {
    name: "محمدرضا خانی",
    role: "مدیرعامل و هم‌بنیانگذار جابینجا",
    text: "از همان ابتدای شروع به کار جابینجا تاکنون، سرویس خوب زرین‌پال تبدیل به یکی از بخش‌های کسب و کار ما شده است. ارائه‌ی ابزارهای گزارش‌گیری عالی، پشتیبانی منحصر به فرد و پیشرو بودن در خلق تجربه‌ی خرید آسان، زرین‌پال را تبدیل به راهکار اصلی ما برای پرداخت آنلاین کرده است.",
    img:   khani ,
  },
  {
    name: "علی حاجی محمدی",
    role: "بنیانگذار ژاکت",
    text: "زرین‌پال نه فقط بخاطر کاربرد درگاه پرداخت، بخاطر داشتن تیم قوی و فراهم کردن زیرساخت بسیار کاربردی، بهترین گزینه برای انتخاب به عنوان درگاه پرداخت می‌باشد.",
    img: haji ,
  },

];

export default function Testimonials() {
  return (
    <section className="w-full py-10" dir="rtl">
      <h2 className="text-center text-4xl font-bold ">نظر کاربران درباره زرین‌پال</h2>
      <p className="text-center mb-8">بازتاب تجربه پذیرندگان از خدمات زرین‌پال</p>
      {/* موبایل: اسکرول افقی | دسکتاپ: گرید */}
      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-hidden px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] bg-white shadow-md rounded-xl p-5 flex-shrink-0"
          >
            {/* ستاره‌ها */}
            <div className="flex text-yellow-400 mb-3">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>

            {/* متن */}
            <p className="text-gray-700 mb-4">{t.text}</p>

            {/* عکس و نام */}
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
