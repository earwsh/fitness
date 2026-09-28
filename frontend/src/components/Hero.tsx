"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  Play
} from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSlides = [
    {
      id: 1,
      title_prefix: "تغییر ماندگار اندام شما، با",
      title_highlight: "دقت علمی و هوش مصنوعی",
      description: "دیگر نیازی به رژیم‌های سخت و تمرینات خسته‌کننده غیراصولی نیست. در آکادمی ناظری، برنامه‌های تمرینی و غذایی شما بر اساس ژنتیک، اهداف و سبک زندگی روزمره‌تان طراحی می‌شود.",
      primary_btn_text: "دریافت برنامه اختصاصی",
      primary_btn_href: "#packages",
      secondary_btn_text: "مشاهده نتایج شاگردان",
      secondary_btn_href: "#transformations",
      image_url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    },
    {
      id: 2,
      title_prefix: "طراحی هوشمند رژیم غذایی و",
      title_highlight: "برنامه تمرینی اختصاصی",
      description: "با تلفیق فیزیولوژی ورزشی و سیستم هوش مصنوعی اختصاصی، کالری‌ها و درشت‌مغذی‌های شما دقیقاً بر اساس ترجیحات غذایی روزمره‌تان محاسبه و تنظیم می‌گردد.",
      primary_btn_text: "شروع آنالیز هوشمند هدف",
      primary_btn_href: "#ai-planner",
      secondary_btn_text: "محاسبه آنلاین BMI",
      secondary_btn_href: "#calculator",
      image_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop",
    },
    {
      id: 3,
      title_prefix: "پشتیبانی و آنالیز هفتگی با",
      title_highlight: "استاد احسان ناظری",
      description: "هر هفته پیشرفت شما با ارسال عکس، اندازه‌گیری سایزها و بررسی نمودارهای بدنی تحلیل شده و برنامه متناسب با تغییرات بدنتان به‌روزرسانی می‌شود.",
      primary_btn_text: "مشاوره و ثبت‌نام VIP",
      primary_btn_href: "#packages",
      secondary_btn_text: "درباره سوابق مربی",
      secondary_btn_href: "#about",
      image_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
    },
  ];

  const [slides, setSlides] = useState(defaultSlides);

  // Fetch live hero slides from Go Backend
  useEffect(() => {
    fetch("http://localhost:8080/api/hero-slides")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && data.slides && data.slides.length > 0) {
          const activeOnes = data.slides.filter((s: any) => s.is_active);
          if (activeOnes.length > 0) {
            setSlides(activeOnes);
          }
        }
      })
      .catch((err) => console.log("Using default hero slides"));
  }, []);

  // Auto slide interval
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide] || defaultSlides[0];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex flex-col justify-center lg:justify-end">
      
      {/* Background Image Slider with Motion Fade & Scale */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${slide.image_url}')` }}
        />
      </AnimatePresence>

      {/* Subtle Lighter Overlays for High Photo Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E86826]/10 via-transparent to-transparent pointer-events-none" />

      {/* Main Content Container: Vertically Centered on Mobile, Bottom-Aligned on Desktop */}
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10 my-auto lg:my-0 lg:pb-8 sm:lg:pb-10 pt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Main Text Content: Perfectly Centered on Mobile horizontally & vertically */}
          <div className="max-w-3xl space-y-6 text-center lg:text-right mx-auto lg:mx-0">
            
            {/* Animated Headline */}
            <motion.h1
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#e5e2e1] leading-[1.2] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              {slide.title_prefix}
              <br />
              <span className="text-[#E86826] drop-shadow-[0_0_20px_rgba(232,104,38,0.25)]">
                {slide.title_highlight}
              </span>
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              key={`desc-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base lg:text-lg text-[#e5e2e1] max-w-2xl leading-relaxed mx-auto lg:mx-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons: Centered on mobile */}
            <motion.div
              key={`btns-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 max-w-md mx-auto lg:max-w-none lg:mx-0"
            >
              {slide.primary_btn_text && (
                <Link
                  href={slide.primary_btn_href || "#packages"}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-sm text-xs sm:text-base font-bold bg-[#E86826] hover:bg-[#ef7a3c] text-white transition-all duration-200 shadow-[0_0_20px_rgba(232,104,38,0.22)] hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>{slide.primary_btn_text}</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-200" />
                </Link>
              )}

              {slide.secondary_btn_text && (
                <Link
                  href={slide.secondary_btn_href || "#transformations"}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-sm text-xs sm:text-base font-medium text-[#e5e2e1] bg-[#1c1b1b]/80 hover:bg-[#252525] border border-[#252525] hover:border-[#64748b]/40 backdrop-blur-md transition-all duration-200"
                >
                  <Play className="w-4 h-4 text-[#E86826] fill-[#E86826]" />
                  <span>{slide.secondary_btn_text}</span>
                </Link>
              )}
            </motion.div>

          </div>

          {/* Desktop Navigation Controls: Left-aligned with Arrows & Bars */}
          <div className="hidden lg:flex items-center justify-start gap-4 flex-shrink-0 self-end">
            
            {/* Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-sm bg-[#1c1b1b]/90 border border-[#252525] text-[#e5e2e1] hover:text-[#E86826] hover:border-[#E86826] flex items-center justify-center transition-colors shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-sm bg-[#1c1b1b]/90 border border-[#252525] text-[#e5e2e1] hover:text-[#E86826] hover:border-[#E86826] flex items-center justify-center transition-colors shadow-lg"
                aria-label="Next slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Bars */}
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-sm ${
                    currentSlide === idx 
                      ? "w-8 bg-[#E86826]" 
                      : "w-3 bg-[#353534] hover:bg-[#64748b]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Mobile-Only Navigation: Dots only, positioned at bottom right corner */}
      <div className="flex lg:hidden absolute bottom-6 right-6 z-20 items-center gap-2 bg-[#1c1b1b]/70 backdrop-blur-md px-3 py-2 rounded-full border border-[#252525]">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx 
                ? "w-4 h-2 bg-[#E86826]" 
                : "w-2 h-2 bg-[#64748b]/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
