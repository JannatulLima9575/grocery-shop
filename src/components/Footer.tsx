'use client';

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          {/* 🔹 Left: Brand */}
          <div className="font-bold text-lg md:text-2xl text-green-500 dark:text-green-600">
            KachaBazer
          </div>

          {/* 🔹 Center: Copyright */}
          <div className="text-gray-700 dark:text-gray-400 text-center text-sm md:text-base">
            © {new Date().getFullYear()} KachaBazer. All rights reserved.{" "}
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-green-600">Terms</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:text-green-600">Privacy Policy</a>
          </div>

          {/* 🔹 Right: Scroll To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-green-500 hover:bg-green-600 text-white shadow-lg
                       transition"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}