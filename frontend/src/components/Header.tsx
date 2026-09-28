"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Dumbbell, Menu, X, UserCheck } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navMenuItems = [
    { name: "صفحه اصلی", href: "/" },
    { name: "دریافت برنامه", href: "/get-plan" },
    { name: "شاگردان و قهرمانان", href: "/students" },
    { name: "وبلاگ و مقالات", href: "/blog" },
    { name: "درباره مربی", href: "/about" },
    { name: "تماس با ما", href: "/contact" },
  ];

  // Dynamically determine active menu item based on current URL pathname
  const getActiveItemName = () => {
    if (pathname.startsWith("/get-plan")) {
      return "دریافت برنامه";
    }
    if (pathname.startsWith("/students")) {
      return "شاگردان و قهرمانان";
    }
    if (pathname.startsWith("/blog")) {
      return "وبلاگ و مقالات";
    }
    if (pathname.startsWith("/about")) {
      return "درباره مربی";
    }
    if (pathname.startsWith("/contact")) {
      return "تماس با ما";
    }
    if (pathname === "/") {
      return "صفحه اصلی";
    }
    return "صفحه اصلی";
  };

  const activeItem = getActiveItemName();
  const currentSelection = hoveredItem || activeItem;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-[#131313]/90 border-b border-[#252525] transition-all duration-200">
      {/* Full width container matching hero with generous uniform padding */}
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* راست: لوگو و برندینگ */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-sm bg-[#E86826] flex items-center justify-center text-white font-bold transition-transform duration-200 group-hover:scale-[1.02]">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#e5e2e1] flex items-center gap-2">
                  آکادمی ناظری
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E86826] animate-pulse"></span>
                </span>
                <span className="font-mono-tag text-[10px] text-[#64748b] tracking-wider uppercase">
                  NAZERI.FIT // SYSTEM
                </span>
              </div>
            </Link>
          </div>

          {/* وسط: منوی ناوبری با انیمیشن Framer Motion بر اساس مسیر زنده URL */}
          <nav 
            onMouseLeave={() => setHoveredItem(null)}
            className="hidden lg:flex items-center justify-center relative gap-4 xl:gap-6"
          >
            {navMenuItems.map((item) => {
              const isSelected = currentSelection === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  className={`relative text-xs xl:text-sm font-medium px-3 xl:px-3.5 py-2 rounded-sm whitespace-nowrap transition-colors duration-200 flex items-center ${
                    isSelected ? "text-white font-bold" : "text-[#e5e2e1]/75 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="header-gliding-pill"
                      className="absolute inset-0 bg-[#E86826] rounded-sm -z-10 shadow-[0_0_20px_rgba(232,104,38,0.25)]"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 26,
                        mass: 0.8,
                      }}
                    />
                  )}

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* سمت چپ: دکمه ورود / ثبت‌نام */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/login"
              className="text-xs xl:text-sm font-bold bg-[#E86826] hover:bg-[#ef7a3c] text-white px-5 py-2.5 rounded-sm transition-all duration-200 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <UserCheck className="w-4 h-4 text-white group-hover:scale-105 transition-transform" />
              <span>ورود | ثبت‌نام</span>
            </Link>
          </div>

          {/* منوی موبایل */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/login"
              className="text-xs font-bold bg-[#E86826] text-white px-3 py-2 rounded-sm flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>ورود</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-sm bg-[#1e1e1e] text-[#e5e2e1] hover:text-[#E86826] border border-[#252525]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* منوی دراور موبایل */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#252525] bg-[#131313]/98 backdrop-blur-2xl px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navMenuItems.map((item) => {
              const isSelected = activeItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-[#E86826] text-white font-bold"
                      : "text-[#e5e2e1]/80 hover:bg-[#1e1e1e] hover:text-[#E86826]"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#252525]">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center text-xs font-bold bg-[#E86826] text-white py-3 rounded-sm flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>ورود | ثبت‌نام در آکادمی</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
