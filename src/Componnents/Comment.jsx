import React from "react";

const reviews = [
  {
    id: 1,
    name: "مهدی عباس‌زاده",
    text: "دیگه نگران تمدید بیمه نیستم. ازکی با امکان مقایسه و خرید آنلاین، انتخاب بهترین گزینه رو خیلی راحت کرده. پرداخت قسطی هم که دیگه حرف نداره.",
  },
  {
    id: 2,
    name: "بهنام بحرانیان",
    text: "خرید بیمه با ازکی بسیار گویا و بدون پیچیدگی بود. خیلی سریع به نتیجه رسیدم و همه چیز شفاف بود.",
  },
  {
    id: 3,
    name: "سوسن محمدی",
    text: "تجربه خرید بیمه از ازکی خیلی راحت بود. قیمت‌ها کامل و شفاف و انتخاب‌ها زیاد بود.",
  },
];

const Comment = () => {
  return (
    <section
      dir="rtl"
      className="bg-gradient-to-b from-sky-50 to-white py-16 px-5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl  text-gray-900 mb-3">
            ازکی از نگاه مشتریان
          </h2>

          <h1 className="text-gray-500 text-4xl ">
            همیشه برای خواندن نظرات شما آماده‌ایم.
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {review.name}
              </h3>

              <div className="text-yellow-400 text-xl tracking-[4px] mb-4">
                ★★★★★
              </div>

              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-5 py-2 rounded-full mb-5">
                خریدار
              </span>

              <p className="text-gray-600 leading-8 text-sm">
                {review.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Comment;