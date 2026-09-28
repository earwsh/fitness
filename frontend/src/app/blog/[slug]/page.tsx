import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ChevronRight, 
  User, 
  Sparkles,
  Share2,
  Tag,
  Dumbbell
} from "lucide-react";
import Header from "@/components/Header";
import BlogCommentsSection from "@/components/BlogCommentsSection";

async function getPost(slug: string) {
  try {
    const res = await fetch(`http://localhost:8080/api/blog/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.post;
  } catch (e) {
    return null;
  }
}

async function getBlogCategories() {
  try {
    const res = await fetch("http://localhost:8080/api/blog-categories", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.categories || [];
  } catch (e) {
    return [];
  }
}

async function getRecentPosts() {
  try {
    const res = await fetch("http://localhost:8080/api/blog", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.posts?.slice(0, 4) || [];
  } catch (e) {
    return [];
  }
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  const categories = await getBlogCategories();
  const recentPosts = await getRecentPosts();

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col justify-center items-center p-6 text-center" dir="rtl">
        <div className="w-16 h-16 rounded-full bg-[#1e1e1e] border border-[#252525] flex items-center justify-center text-[#E86826] mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-[#e5e2e1] mb-2">مقاله یافت نشد</h1>
        <p className="text-xs text-[#64748b] max-w-sm mb-6">
          مقاله‌ای با آدرس <span className="font-mono-tag text-emerald-400">/{resolvedParams.slug}</span> در وبلاگ آکادمی پیدا نشد.
        </p>
        <Link
          href="/blog"
          className="px-6 py-2.5 rounded bg-[#E86826] hover:bg-[#ef7a3c] text-white text-xs font-bold transition-all shadow-md shadow-[#E86826]/30"
        >
          مشاهده آرشیو مقالات
        </Link>
      </main>
    );
  }

  const tagsList = post.tags ? post.tags.split(",").map((t: string) => t.trim()) : [];

  // JSON-LD Schema.org for BlogPosting (SEO Article Rich Snippets)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nazeri.fit/blog/${post.slug}`,
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image_url,
    "author": {
      "@type": "Person",
      "name": post.author_name || "استاد احسان ناظری",
      "jobTitle": post.author_role || "مربی ارشد بدنسازی",
      "url": "https://nazeri.fit",
    },
    "publisher": {
      "@type": "Organization",
      "name": "آکادمی بدنسازی و فیتنس احسان ناظری",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nazeri.fit/logo.png",
      },
    },
    "datePublished": post.created_at,
    "dateModified": post.updated_at || post.created_at,
    "articleSection": post.category,
    "keywords": post.tags,
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col selection:bg-[#E86826] selection:text-white pb-24" dir="rtl">
      
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <Header />

      {/* Main Full Width Content Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#64748b] pb-6 border-b border-[#252525]">
          <Link href="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          <Link href="/blog" className="hover:text-white transition-colors">وبلاگ و مقالات</Link>
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          <span className="text-[#E86826] font-bold truncate max-w-md">{post.title}</span>
        </div>

        {/* 2-Column Grid: Right Main Content (8 cols) & Left Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start w-full">
          
          {/* ستون راست: متن و محتوای اصلی مقاله (8 ستون) */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Category & Meta */}
            <div className="space-y-4 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E86826]/10 border border-[#E86826]/30 text-xs font-bold text-[#E86826]">
                <Tag className="w-3.5 h-3.5" />
                <span>{post.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">
                {post.title}
              </h1>

              {/* Author & Meta bar */}
              <div className="flex flex-wrap items-center gap-6 py-3 border-y border-[#252525] text-xs text-[#64748b]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E86826] text-white flex items-center justify-center font-bold text-xs">
                    اح
                  </div>
                  <div>
                    <span className="font-bold text-[#e5e2e1] block">{post.author_name || "استاد احسان ناظری"}</span>
                    <span className="text-[10px] text-[#64748b]">{post.author_role || "مربی ارشد بدنسازی"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#E86826]" />
                  <span>{post.created_at ? new Date(post.created_at).toLocaleDateString("fa-IR") : "شهریور ۱۴۰۴"}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time || "۶ دقیقه مطالعه"}</span>
                </div>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className="rounded-xl overflow-hidden border border-[#252525] bg-[#131313] shadow-2xl relative aspect-[16/9]">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>

            {/* Article Excerpt Callout */}
            {post.excerpt && (
              <div className="p-6 rounded-lg bg-[#161616] border-r-4 border-r-[#E86826] border-y border-l border-[#252525] text-sm sm:text-base text-[#e5e2e1] leading-relaxed text-justify font-medium">
                {post.excerpt}
              </div>
            )}

            {/* Full Article Content with HTML Rendering */}
            <div 
              className="p-6 sm:p-10 rounded-lg bg-[#131313] border border-[#252525] blog-content shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {tagsList.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-[#64748b] font-bold ml-2">برچسب‌ها:</span>
                {tagsList.map((tag: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 rounded bg-[#1c1b1b] border border-[#252525] text-xs text-[#e5e2e1]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* بخش دیدگاه‌های کاربران و شاگردان */}
            <BlogCommentsSection postSlug={post.slug} postTitle={post.title} />

          </article>

          {/* ستون چپ: سایدبار شامل سرچ، دسته‌بندی‌ها، آخرین مقالات و باکس CTA (4 ستون) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-28">
            
            {/* ۱. باکس جستجو در وبلاگ */}
            <div className="p-6 rounded-lg bg-[#131313] border border-[#252525] space-y-3">
              <h4 className="text-sm font-bold text-[#e5e2e1] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E86826]" />
                <span>جستجو در مقالات وبلاگ</span>
              </h4>
              <Link 
                href="/blog"
                className="w-full py-2.5 px-4 rounded bg-[#1c1b1b] border border-[#252525] hover:border-[#E86826] text-xs text-[#64748b] hover:text-[#e5e2e1] flex items-center justify-between transition-colors"
              >
                <span>مشاهده آرشیو و فیلتر مقالات...</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#E86826]" />
              </Link>
            </div>

            {/* ۲. باکس دسته‌بندی‌های وبلاگ */}
            <div className="p-6 rounded-lg bg-[#131313] border border-[#252525] space-y-4">
              <h4 className="text-sm font-bold text-[#e5e2e1] flex items-center gap-2 pb-3 border-b border-[#252525]">
                <Tag className="w-4 h-4 text-[#E86826]" />
                <span>دسته‌بندی‌های موضوعی</span>
              </h4>

              <div className="space-y-1.5">
                <Link
                  href="/blog"
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs bg-[#1c1b1b]/60 text-[#e5e2e1]/80 hover:bg-[#1e1e1e] hover:text-white transition-all"
                >
                  <span>همه مقالات</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#64748b]" />
                </Link>

                {categories.map((cat: any) => (
                  <Link
                    key={cat.id || cat.name}
                    href="/blog"
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs transition-all ${
                      post.category === cat.name
                        ? "bg-[#E86826] text-white font-bold shadow-md shadow-[#E86826]/30"
                        : "bg-[#1c1b1b]/60 text-[#e5e2e1]/80 hover:bg-[#1e1e1e] hover:text-white"
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <ArrowLeft className={`w-3.5 h-3.5 ${post.category === cat.name ? "text-white" : "text-[#64748b]"}`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* ۳. مقالات اخیر */}
            {recentPosts.length > 0 && (
              <div className="p-6 rounded-lg bg-[#131313] border border-[#252525] space-y-4">
                <h4 className="text-sm font-bold text-[#e5e2e1] flex items-center gap-2 pb-3 border-b border-[#252525]">
                  <Clock className="w-4 h-4 text-[#E86826]" />
                  <span>جدیدترین مقالات آکادمی</span>
                </h4>

                <div className="space-y-3">
                  {recentPosts.filter((p: any) => p.slug !== post.slug).slice(0, 3).map((rp: any) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.slug}`}
                      className="block p-3 rounded bg-[#1c1b1b]/40 hover:bg-[#1c1b1b] border border-[#252525] hover:border-[#E86826]/50 transition-all group"
                    >
                      <h5 className="text-xs font-bold text-[#e5e2e1] group-hover:text-[#E86826] transition-colors line-clamp-2 leading-relaxed">
                        {rp.title}
                      </h5>
                      <span className="text-[10px] text-[#64748b] block mt-1">
                        {rp.read_time || "۵ دقیقه مطالعه"}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ۴. باکس CTA معکوس رنگی جذاب نارنجی در سایدبار (فقط متن و دکمه) */}
            <div className="p-6 rounded-lg bg-[#E86826] text-black space-y-4 shadow-2xl relative overflow-hidden group">
              <div className="space-y-2 text-right">
                <h4 className="text-lg font-black text-black leading-snug">
                  دریافت برنامه تمرینی و غذایی
                </h4>
                <p className="text-xs font-bold text-black/85 leading-relaxed">
                  برنامه ۱۰۰٪ اختصاصی متناسب با بیومکانیک و اهداف شما توسط استاد احسان ناظری
                </p>
              </div>

              <Link
                href="/login?redirect=/get-plan"
                className="w-full py-3.5 rounded bg-black text-white hover:bg-[#1a1a1a] text-xs font-bold transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/cta"
              >
                <span>شروع دوره اختصاصی</span>
                <ArrowLeft className="w-4 h-4 group-hover/cta:-translate-x-1 transition-transform" />
              </Link>
            </div>

          </aside>

        </div>

      </div>

    </main>
  );
}
