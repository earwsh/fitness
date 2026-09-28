"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Eye
} from "lucide-react";

export default function BlogSection() {
  const [articles, setArticles] = useState<any[]>([
    {
      id: 1,
      slug: "hypertrophy-science-biomechanics",
      title: "اصول علمی هایپرتروفی: چگونه بدون آسیب بیشترین عضله‌سازی را داشته باشیم؟",
      excerpt: "بررسی فاکتورهای تنش مکانیکی، استرس متابولیک و آسیب عضلانی به همراه راهنمای انتخاب دامنه تکرار مناسب برای رشد حداکثری عضلات.",
      category: "علم تمرین و فیزیولوژی",
      read_time: "۶ دقیقه مطالعه",
      created_at: "2026-09-02",
      image_url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      slug: "fat-loss-without-muscle-loss",
      title: "چربی‌سوزی پایدار بدون افت عضلانی: راهنمای گام‌به‌گام کات اصولی",
      excerpt: "تنظیم شیب کالری، میزان پروتئین دریافتی روزانه و زمان‌بندی درشت‌مغذی‌ها بدون احساس گرسنگی و افت انرژی در طول روزمره.",
      category: "تغذیه و متابولیسم",
      read_time: "۸ دقیقه مطالعه",
      created_at: "2026-09-01",
      image_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      slug: "progressive-overload-rules",
      title: "قانون اضافه بار تدریجی (Progressive Overload): کلید عبور از فلات تمرینی",
      excerpt: "چرا افزایش وزنه تنها راه پیشرفت نیست؟ ۷ روش علمی برای پیشرفت مستمر در بدنسازی بدون گیر افتادن در رکود و فلات عضلانی.",
      category: "برنامه‌نویسی تمرین",
      read_time: "۵ دقیقه مطالعه",
      created_at: "2026-08-30",
      image_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
    },
  ]);

  // Fetch live latest 3 articles from Go API
  useEffect(() => {
    fetch("http://localhost:8080/api/blog")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && data.posts && data.posts.length > 0) {
          setArticles(data.posts.slice(0, 3));
        }
      })
      .catch((err) => console.log("Using fallback blog articles", err));
  }, []);

  return (
    <section id="blog" className="relative w-full py-20 sm:py-28 bg-[#0d0d0d] text-[#e5e2e1] border-t border-[#252525] overflow-hidden">
      
      {/* Full Width Container matching Header & Hero */}
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 sm:pb-12 border-b border-[#252525]">
          <div className="text-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">
              مقالات و <span className="text-[#E86826]">دانش تخصصی فیتنس</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#1e1e1e] hover:bg-[#252525] text-xs font-bold text-[#e5e2e1] border border-[#252525] hover:border-[#E86826]/50 transition-all"
            >
              <span>مشاهده آرشیو مقالات</span>
              <BookOpen className="w-4 h-4 text-[#E86826]" />
            </Link>
          </div>
        </div>

        {/* 3-Column Grid for the 3 Latest Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {articles.map((post) => (
            <article
              key={post.id}
              className="rounded-lg bg-[#131313] border border-[#252525] hover:border-[#E86826]/60 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-[#E86826]/10 text-right"
            >
              {/* Top Image Frame with Category Pill */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a] flex-shrink-0">
                <img
                  src={post.image_url || post.image || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-sm bg-black/85 backdrop-blur-md border border-[#252525] text-[10px] font-bold text-[#E86826]">
                  {post.category}
                </div>
              </div>

              {/* Article Content Body with natural comfortable spacing */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-[#64748b]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E86826]" />
                    <span>{post.created_at ? new Date(post.created_at).toLocaleDateString("fa-IR") : "شهریور ۱۴۰۴"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.read_time || post.readTime || "۵ دقیقه مطالعه"}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#e5e2e1] group-hover:text-[#E86826] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed text-justify line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Article Button linked to /blog/[slug] */}
                <div className="pt-4 border-t border-[#252525]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full py-3 rounded-sm bg-[#1e1e1e] hover:bg-[#E86826] text-[#e5e2e1] hover:text-white border border-[#252525] hover:border-[#E86826] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-[#E86826] group-hover/btn:text-white transition-colors" />
                    <span>مشاهده و مطالعه مقاله</span>
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform mr-1" />
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}
