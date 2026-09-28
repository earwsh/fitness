"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Award, 
  GraduationCap, 
  Users, 
  Flame, 
  ArrowLeft
} from "lucide-react";

export default function About() {
  const defaultData = {
    title_prefix: "درباره مربی و",
    title_highlight: "آکادمی ناظری",
    paragraph1: "آکادمی فیتنس و بدنسازی ناظری با هدایت استاد احسان ناظری، متدی نوین و متکی بر دانش روز دنیا را در عرصه تناسب اندام و مربیگری حرفه‌ای ارائه می‌دهد. باور بنیادین ما این است که بدن هر فرد یک ساختار فیزیولوژیکی و ژنتیکی کاملاً منحصربه‌فرد دارد؛ از این رو رویکردهای سنتی، کپی‌برداری از برنامه‌های عمومی و اعمال رژیم‌های طاقت‌فرسا نه تنها به نتیجه پایدار ختم نمی‌شوند، بلکه فرسودگی مفاصل و آسیب‌های جبران‌ناپذیر عضلانی را به همراه دارند.",
    paragraph2: "در این مجموعه، برنامه‌های تمرینی بر پایه دقیق‌ترین اصول بیومکانیک حرکتی، تحریک هایپرتروفی و ارتقای توان متابولیکی تنظیم می‌گردند. رژیم‌های غذایی ارائه‌شده نیز با حفظ احترام به سفره خانواده ایرانی و ترجیحات غذایی روزمره شاگرد تدوین شده تا بدون گرسنگی مفرط و افت انرژی، کاهش چربی اصولی و فرم‌گیری عضلات محقق شود. نظارت هفتگی و به‌روزرسانی مستمر روند پیشرفت، تضمین‌کننده دستیابی شما به اندامی ماندگار و سالم خواهد بود.",
    coach_name: "استاد احسان ناظری",
    coach_role: "مربی ارشد فدراسیون پرورش اندام",
    experience_badge: "+۸ سال سابقه",
    coach_image_url: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
    card1_title: "مدرک بین‌المللی مربیگری IFBB",
    card1_desc: "دارای گواهینامه رسمی مربیگری حرفه‌ای بدنسازی و پرورش اندام",
    card2_title: "کارشناس ارشد فیزیولوژی ورزشی",
    card2_desc: "طراحی برنامه‌های تمرینی بر پایه علم بیومکانیک و هایپرتروفی عضلانی",
    card3_title: "بیش از ۱,۲۰۰ شاگرد موفق",
    card3_desc: "ثبت تغییرات ماندگار و نتایج واقعی در شاگردان سراسر کشور",
    card4_title: "متخصص تغذیه و متابولیسم",
    card4_desc: "تنظیم رژیم‌های بدون گرسنگی متناسب با سفره غذایی و متابولیسم",
    btn_text: "مشاهده پکیج‌ها و شروع مربیگری",
    btn_href: "#packages",
  };

  const [data, setData] = useState(defaultData);

  // Fetch live About Section data from Go backend
  useEffect(() => {
    fetch("http://localhost:8080/api/about-section")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === "success" && resData.about) {
          setData(resData.about);
        }
      })
      .catch((err) => console.log("Using default About data", err));
  }, []);

  const achievements = [
    {
      icon: Award,
      title: data.card1_title || defaultData.card1_title,
      desc: data.card1_desc || defaultData.card1_desc,
    },
    {
      icon: GraduationCap,
      title: data.card2_title || defaultData.card2_title,
      desc: data.card2_desc || defaultData.card2_desc,
    },
    {
      icon: Users,
      title: data.card3_title || defaultData.card3_title,
      desc: data.card3_desc || defaultData.card3_desc,
    },
    {
      icon: Flame,
      title: data.card4_title || defaultData.card4_title,
      desc: data.card4_desc || defaultData.card4_desc,
    },
  ];

  return (
    <section id="about" className="relative w-full min-h-[100vh] py-24 sm:py-32 bg-[#0a0a0a] text-[#e5e2e1] border-t border-[#252525] flex items-center">
      
      {/* Full Width Container matching Header & Hero */}
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* 2-Column Layout: Right (Title, Justified Text, Cards, CTA) | Left (Coach Image Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Title -> Detailed Justified Text -> Cards -> CTA (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            
            {/* Title */}
            <div className="space-y-4 text-center lg:text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">
                {data.title_prefix}{" "}
                <span className="text-[#E86826]">{data.title_highlight}</span>
              </h2>
            </div>

            {/* Detailed Justified Description Text */}
            <div className="space-y-4 text-sm sm:text-base text-[#e5e2e1]/80 leading-relaxed text-justify">
              {data.paragraph1 && <p>{data.paragraph1}</p>}
              {data.paragraph2 && <p>{data.paragraph2}</p>}
            </div>

            {/* 4-Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-sm bg-[#131313] border border-[#252525] hover:border-[#E86826]/50 transition-colors space-y-2 text-right group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-sm bg-[#1c1b1b] border border-[#252525] flex items-center justify-center text-[#E86826] flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#e5e2e1]">{item.title}</div>
                    </div>
                    <div className="text-xs text-[#64748b] leading-relaxed pr-12">{item.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button placed directly after cards */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <Link
                href={data.btn_href || "#packages"}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-sm text-sm sm:text-base font-bold bg-[#E86826] hover:bg-[#ef7a3c] text-white transition-all duration-200 shadow-lg shadow-[#E86826]/25 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>{data.btn_text || "مشاهده پکیج‌ها و شروع مربیگری"}</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>

          </div>

          {/* Left Column in RTL: In RTL, the left column is physically aligned to the left using justify-end (or ml-0) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative rounded-lg overflow-hidden border border-[#252525] bg-[#131313] group shadow-2xl w-full max-w-lg ml-0">
              
              {/* Image Frame */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#131313] relative">
                <img
                  src={data.coach_image_url || defaultData.coach_image_url}
                  alt={data.coach_name || "استاد احسان ناظری"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-115 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-85" />
              </div>

              {/* Coach Badge Info on bottom */}
              <div className="absolute bottom-6 inset-x-6 p-4 rounded-sm bg-[#1c1b1b]/95 border border-[#252525] backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-[#e5e2e1]">{data.coach_name}</div>
                  <div className="text-xs text-[#64748b]">{data.coach_role}</div>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-sm bg-[#E86826]/15 text-[#E86826] font-bold border border-[#E86826]/30">
                  {data.experience_badge}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
