import motamedTravel from "../assets/banner/motamed-travel.webp";
import badane from "../assets/banner/motamed-body.webp";
import omr from "../assets/banner/motamed-life.webp";
import sales from "../assets/banner/motamed-third.webp";
import {
  ArrowLeft,
} from "lucide-react";

const data = [
  {
    title: "بیمه شخص ثالث",
    image: sales,
    text: "بیمه شخص ثالث بیمه‌ای الزامی برای دارندگان وسایل نقلیه موتوری است. با ازکی امکان استعلام قیمت بیمه شخص ثالث و خرید آنلاین آن از تمامی شرکت‌های بیمه وجود دارد.",
  },
  {
    title: "بیمه بدنه",
    image: badane,
    text: "بیمه بدنه بیمه‌ای اختیاری است که می‌تواند به عنوان مکمل بیمه شخص ثالث استفاده شود. امکان استعلام قیمت و خرید آنلاین بیمه بدنه وجود دارد.",
  },
  {
    title: "بیمه عمر",
    image: omr,
    text: "بیمه عمر از شما و خانواده‌تان در طول زندگی محافظت می‌کند و حتی پس از فوت نیز پشتوانه‌ای برای خانواده خواهد بود.",
  },
  {
    title: "بیمه مسافرتی خارج از کشور",
    image: motamedTravel,
    text: "بیمه مسافرتی خارج از کشور از شما در برابر خطرات احتمالی سفر محافظت می‌کند و هزینه‌های درمانی و حوادث را پوشش می‌دهد.",
  },
];

export default function InsuranceSection() {
  return (
    <section className="bg-white justify-center items-center mb-20 lg:px-25 ">
      <div className="container mx-auto px-5">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-black text-slate-800 leading-relaxed " dir="rtl">
            همه چیز درباره انواع بیمه...
          </h2>

          <p className="mt-5 text-lg text-slate-500"  dir="rtl">
            اینجا می‌تونی اطلاعات مورد نیازت رو درباره تمام بیمه‌ها بخونی.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {data.map((item, index) => (
            <InsuranceCard key={index} {...item} />
          ))}

        </div>

      </div>
    </section>
  );
}

function InsuranceCard({ title, text, image }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      p-8
      flex
      flex-col
      justify-between
      min-h-[360px]
      "
    >
      <div className="flex flex-col md:flex-row-reverse gap-8">

        <img
          src={image}
          alt={title}
          className="
          w-40
          h-40
          object-contain
          mx-auto
          md:mx-0
          flex-shrink-0
          "
        />

        <div className="flex-1">

          <h3 className="text-3xl font-bold text-slate-800 mb-6 text-right">
            {title}
          </h3>

          <p className="text-slate-600 leading-9 text-lg text-right">
            {text}
          </p>

        </div>

      </div>

      <a
        href="#"
        className="
        mt-10
        text-blue-600
        font-bold
        inline-flex
        items-center
        gap-2
        hover:text-blue-700
        "
      >
        بیشتر
        <ArrowLeft size={18} />
      </a>
    </div>
  );
}