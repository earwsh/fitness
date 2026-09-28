"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Dumbbell, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  Users, 
  Clock, 
  FileText,
  Activity,
  Sparkles,
  Zap
} from "lucide-react";
import Header from "@/components/Header";

export default function GetPlanPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("nazeri_user");
    const token = localStorage.getItem("nazeri_token");
    if (user && token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handlePlanClick = (planId: string) => {
    if (isLoggedIn) {
      router.push(`/get-plan/intake?package=${planId}`);
    } else {
      router.push(`/login?redirect=/get-plan/intake?package=${planId}`);
    }
  };

  const plans = [
    {
      id: "workout",
      title: "برنامه تمرینی اختصاصی",
      subtitle: "طراحی سیستم تمرینی بر اساس تجهیزات و هدف شما",
      price: "۹۵۰,۰۰۰",
      period: "دوره ۴ الی ۶ هفته‌ای",
      badge: "تخصصی تمرین",
      icon: Dumbbell,
      popular: false,
      features: [
        "طراحی اختصاصی برای باشگاه یا تمرین در منزل",
        "تقسیم‌بندی عضلانی (Split) بر مبنای توان ریکاوری شما",
        "تنظیم دقیق ست‌ها، تکرارها، RPE و زمان‌های استراحت",
        "راهنمای ویدیویی و متنی اجرای صحیح حرکات ورزشی",
        "پشتیبانی مستقیم و امکان رفع ابهامات تمرینی",
        "یک‌بار بازبینی و اصلاح حرکات بر اساس بازخورد هفته اول",
      ],
      btnText: "انتخاب برنامه تمرینی",
    },
    {
      id: "diet",
      title: "برنامه غذایی و رژیم علمی",
      subtitle: "تغذیه اصولی متناسب با سفره ایرانی و هدف وزنی",
      price: "۹۵۰,۰۰۰",
      period: "دوره ۴ الی ۶ هفته‌ای",
      badge: "تغذیه و متابولیسم",
      icon: Flame,
      popular: false,
      features: [
        "محاسبه علمی کالری، پروتئین، کربوهیدرات و چربی",
        "منعطف و کاملاً بدون گرسنگی یا حذف وعده‌های اصلی",
        "جدول جایگزینی جامع غذاها برای تنوع روزانه",
        "برنامه مکمل‌های مجاز و مصرف بهینه (در صورت تمایل)",
        "پشتیبانی هفتگی و کنترل روند وزن و سایز",
        "دستورالعمل کنترل اشتهای کاذب و پیشگیری از استپ وزنی",
      ],
      btnText: "انتخاب برنامه غذایی",
    },
    {
      id: "combo",
      title: "برنامه تمرینی + رژیم غذایی (VIP)",
      subtitle: "جامع‌ترین پکیج تحول کامل فیزیک بدنی با بالاترین راندمان",
      price: "۱,۵۹۰,۰۰۰",
      oldPrice: "۱,۹۰۰,۰۰۰",
      period: "دوره کامل با پشتیبانی VIP",
      badge: "پیشنهاد ویژه و پرطرفدار",
      icon: Sparkles,
      popular: true,
      features: [
        "شامل تمامی امکانات برنامه تمرینی و برنامه غذایی به طور همزمان",
        "همگام‌سازی زمان‌بندی تغذیه پیرامون ساعات تمرین (Nutrient Timing)",
        "آنالیز هفتگی تغییرات سایز، وزن و عکس‌های ارسالی",
        "پشتیبانی مستقیم اولویت‌دار با مربی ارشد",
        "تنظیم برنامه مکمل‌ها متناسب با فاز کات یا حجم",
        "صرفه‌جویی مالی قابل توجه نسبت به دریافت تکی برنامه‌ها",
      ],
      btnText: "دریافت پکیج جامع تمرین + تغذیه",
    },
  ];

  const steps = [
    {
      number: "۰۱",
      title: "ثبت‌نام و ورود به پنل کاربری",
      desc: "با ایجاد حساب کاربری، پرونده اختصاصی شما در آکادمی تشکیل و فعال می‌شود.",
      icon: Users,
    },
    {
      number: "۰۲",
      title: "تکمیل پرسشنامه فیزیولوژی و هدف",
      desc: "اطلاعاتی شامل سابقه تمرین، آسیب‌دیدگی‌ها، حساسیت‌های غذایی و هدف دقیق ورزشی شما ثبت می‌شود.",
      icon: FileText,
    },
    {
      number: "۰۳",
      title: "طراحی علمی برنامه توسط مربی",
      desc: "برنامه تمرینی و غذایی به صورت اختصاصی بر اساس شرایط بدنی شما تدوین و در پنل بارگذاری می‌گردد.",
      icon: Dumbbell,
    },
    {
      number: "۰۴",
      title: "آنالیز و پشتیبانی هفتگی مستمر",
      desc: "هر هفته پیشرفت شما با چک‌این و عکس‌ها بررسی شده و برنامه برای نتایج بهتر به‌روزرسانی می‌شود.",
      icon: Activity,
    },
  ];

  const planFeatures = [
    "طراحی کاملاً شخصی‌سازی شده (بدون برنامه‌های تکراری یا کپی)",
    "محاسبه دقیق درشت‌مغذی‌ها و کالری‌ها متناسب با متابولیسم",
    "برنامه تمرینی سیستماتیک بر مبنای اصل اضافه‌بار تدریجی",
    "راهنمای ویدیویی و توضیحات اجرای صحیح حرکات",
    "پشتیبانی مستقیم و رفع ابهامات توسط مربی",
    "امکان تنظیم برنامه برای تمرین در باشگاه یا منزل",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col selection:bg-[#E86826] selection:text-white pb-24" dir="rtl">
      
      {/* هدر سایت */}
      <Header />

      {/* کانتینر اصلی تمام عرض هماهنگ با بقیه بخش‌های سایت */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36">
        
        {/* مسیر راهنما (Breadcrumb) */}
        <div className="flex items-center gap-2 text-xs text-[#64748b] pb-6 border-b border-[#252525]">
          <Link href="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          <span className="text-[#E86826] font-bold">دریافت برنامه تمرینی و غذایی</span>
        </div>

        {/* ۱. هیرو و توضیح کوتاه + جعبه CTA با پس‌زمینه معکوس */}
        <div className="py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* ستون راست: توضیحات کوتاه، معرفی و ویژگی‌های برنامه (۷ ستون) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-right">
              
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">
                  دریافت برنامه <span className="text-[#E86826]">تمرین و تغذیه اختصاصی</span>
                </h1>

                <p className="text-sm sm:text-base text-[#64748b] leading-relaxed font-medium text-justify">
                  برنامه‌ای کاملاً متناسب با ژنتیک، تیپ بدنی، سبک زندگی و هدف شما (کاهش وزن، عضله‌سازی، افزایش قدرت یا فرم‌دهی). تمام جزییات تمرینات و رژیم غذایی شما به صورت علمی محاسبه شده و همراه با آنالیز و پشتیبانی مستمر ارائه می‌گردد.
                </p>
              </div>

              {/* ویژگی‌های کلیدی به صورت تیک */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {planFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#e5e2e1]/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E86826] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 text-[11px] text-[#64748b] pt-2 border-t border-[#252525]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E86826]" />
                  <span>تحویل ظرف حداکثر ۲۴ الی ۴۸ ساعت</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E86826]" />
                  <span>گارانتی بازبینی و اصلاح برنامه</span>
                </span>
              </div>

            </div>

            {/* ستون چپ: باکس CTA با تم معکوس رنگی و تک‌دکمه (۵ ستون) */}
            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-2xl bg-[#E86826] text-black p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
                
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                    شروع مسیر تحول بدنی از همین امروز
                  </h3>

                  <p className="text-xs sm:text-sm text-black/90 font-medium leading-relaxed text-justify">
                    پس از ثبت‌نام و ورود، پرسشنامه فیزیولوژی و هدف خود را تکمیل فرمایید تا طراحی برنامه اختصاصی شما توسط استاد احسان ناظری آغاز گردد.
                  </p>
                </div>

                {/* تک دکمه اصلی دریافت برنامه */}
                <div className="pt-4">
                  <button
                    onClick={() => handlePlanClick("combo")}
                    className="w-full py-4 rounded bg-black hover:bg-[#1a1a1a] text-white text-xs sm:text-sm font-bold shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
                  >
                    <span>دریافت برنامه اختصاصی</span>
                    <ArrowLeft className="w-4 h-4 text-[#E86826] group-hover:-translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ۲. مراحل دریافت برنامه (۴ مرحله ساده) */}
        <div className="py-12 sm:py-16 border-t border-[#252525]">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">مراحل دریافت برنامه تا تحویل نهایی</h2>
            <p className="text-xs sm:text-sm text-[#64748b]">روند سیستماتیک و سریع آکادمی از ثبت درخواست تا شروع تمرین</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="p-6 rounded-xl bg-[#131313] border border-[#252525] hover:border-[#E86826]/40 transition-all space-y-4 text-right relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-[#1c1b1b] border border-[#282828] flex items-center justify-center text-[#E86826] group-hover:bg-[#E86826] group-hover:text-white transition-colors">
                    <st.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono-tag text-2xl font-black text-[#303030] group-hover:text-[#E86826]/40 transition-colors">
                    {st.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#e5e2e1] group-hover:text-[#E86826] transition-colors">{st.title}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ۳. بخش کارت‌های برنامه با توضیحات بولت پوینت و قیمت */}
        <div className="py-12 sm:py-16 border-t border-[#252525]">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">انتخاب نوع برنامه متناسب با نیاز شما</h2>
            <p className="text-xs sm:text-sm text-[#64748b]">تمامی پکیج‌ها دارای پشتیبانی مستقیم و طراحی علمی اختصاصی می‌باشند</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.id}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                    p.popular
                      ? "bg-[#141414] border-2 border-[#E86826] shadow-2xl shadow-[#E86826]/10"
                      : "bg-[#121212] border border-[#252525] hover:border-[#E86826]/40"
                  }`}
                >
                  {/* بج کارت محبوب */}
                  {p.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E86826] text-black text-[11px] font-black tracking-wide flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-3.5 h-3.5 fill-black" />
                      <span>{p.badge}</span>
                    </div>
                  )}

                  <div className="space-y-6 text-right">
                    
                    {/* هدر کارت: آیکون، عنوان و توضیح کوتاه */}
                    <div className="space-y-3 pb-6 border-b border-[#252525]">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          p.popular ? "bg-[#E86826] text-black" : "bg-[#1a1a1a] text-[#E86826] border border-[#2c2c2c]"
                        }`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        {!p.popular && (
                          <span className="font-mono-tag text-[10px] text-[#64748b] bg-[#1a1a1a] border border-[#282828] px-2.5 py-1 rounded">
                            {p.badge}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#e5e2e1]">{p.title}</h3>
                        <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{p.subtitle}</p>
                      </div>
                    </div>

                    {/* بخش قیمت و دوره */}
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-[#e5e2e1]">{p.price}</span>
                        <span className="text-xs text-[#64748b] font-bold">تومان</span>
                        {p.oldPrice && (
                          <span className="text-xs text-[#64748b] line-through mr-2">{p.oldPrice}</span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#E86826] font-medium block">{p.period}</span>
                    </div>

                    {/* لیست امکانات و توضیحات بولت‌پوینت */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold text-[#e5e2e1] block">شامل مشخصات و خدمات زیر:</span>
                      <ul className="space-y-2.5">
                        {p.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#e5e2e1]/85 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#E86826] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* دکمه انتخاب و اقدام کارت */}
                  <div className="pt-8">
                    <button
                      onClick={() => handlePlanClick(p.id)}
                      className={`w-full py-3.5 rounded text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        p.popular
                          ? "bg-[#E86826] hover:bg-[#ef7a3c] text-white shadow-lg shadow-[#E86826]/30 hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-[#1c1b1b] hover:bg-[#E86826] text-[#e5e2e1] hover:text-white border border-[#282828] hover:border-transparent"
                      }`}
                    >
                      <span>{p.btnText}</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

    </main>
  );
}
