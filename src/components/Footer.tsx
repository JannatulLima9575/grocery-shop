'use client';

import Link from "next/link";
import { useTheme } from "@/app/providers";
import { Sun, Moon } from "lucide-react";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 transition-colors">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-900 dark:text-gray-100">
            KachaBazer
          </h3>
          <p className="text-sm accent dark:text-gray-400">
            Local market prices at your fingertips. Track daily updates, compare
            markets, and stay informed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/markets" className="hover:text-green-600">Markets</Link></li>
            <li><Link href="/prices" className="hover:text-green-600">Prices</Link></li>
            <li><Link href="/about" className="hover:text-green-600">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>📍 Bangladesh</li>
            <li>📞 +880 1234-567890</li>
            <li>✉️ support@kachabazer.com</li>
          </ul>
        </div>

        {/* Theme Switch */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Appearance
          </h3>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border
                       border-gray-300 dark:border-gray-700
                       hover:bg-gray-200 dark:hover:bg-gray-800
                       transition text-sm"
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} /> Light Mode
              </>
            ) : (
              <>
                <Moon size={18} /> Dark Mode
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} KachaBazer. All rights reserved.
      </div>
    </footer>
  );
}
