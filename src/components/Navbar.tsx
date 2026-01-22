"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";
import { useTheme } from "@/app/providers";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user } = useAuth();
  const isLoggedIn = !!user;

  const { theme, toggleTheme } = useTheme();

  // 🔹 Logout handler
  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  const mainRoutes = [
    { href: "/", label: "Home" },
    {
      href: "#",
      label: "Categories",
      hasDropdown: true,
      subRoutes: [
        { href: "/categories/fresh-fruits", label: "Fresh Fruits" },
        { href: "/categories/vegetables", label: "Vegetables" },
        { href: "/categories/fish-meat", label: "Fish & Meat" },
        { href: "/categories/dairy-bakery", label: "Dairy & Bakery" },
      ],
    },
    { href: "/products", label: "Products" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-gray-800 dark:bg-black text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            We are available 24/7, Need help? Call Us:{" "}
            <span className="font-bold text-green-400">+01234560352</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-green-400 transition">
              About Us
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/contact" className="hover:text-green-400 transition">
              Contact Us
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/account" className="hover:text-green-400 transition">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="text-2xl font-extrabold text-green-600 tracking-tight">
                KachaBazer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {mainRoutes.map((route) => (
                <div key={route.label} className="relative group">
                  {route.hasDropdown ? (
                    <div className="relative">
                      <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-green-600 font-medium py-2 transition-colors">
                        {route.label}{" "}
                        <ChevronDown
                          size={14}
                          className="ml-1 group-hover:rotate-180 transition-transform"
                        />
                      </button>
                      <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border dark:border-gray-700 z-50">
                        {route.subRoutes?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 border-b dark:border-gray-700 last:border-0"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={route.href}
                      className="text-gray-700 dark:text-gray-200 hover:text-green-600 font-medium transition-colors"
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-full focus:ring-2 focus:ring-green-500 outline-none transition dark:text-white"
                />
                <button
                  title="Search"
                  className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-green-600 transition"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                title="Toggle theme"
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} />
                )}
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className="p-2 relative text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
              >
                <ShoppingCart size={22} />
                <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Login/Profile Conditional Rendering */}
              <div className="hidden sm:flex items-center border-l dark:border-gray-700 ml-2 pl-4 space-x-3">
                {isLoggedIn ? (
                  <div className="relative">
                    <button
                      onClick={() => setProfileOpen(!profileOpen)}
                      className="flex items-center focus:outline-none"
                      aria-haspopup="menu" // note: lowercase "aria-haspopup"
                      aria-expanded={profileOpen} // boolean value works fine
                      aria-label="Open profile menu"
                      title="Profile menu"
                    >
                      <div className="w-9 h-9 rounded-full border-2 border-green-500 p-0.5 overflow-hidden">
                        <Image
                          src={user?.photoURL || "/default-avatar.png"}
                          alt="User profile picture"
                          width={36}
                          height={36}
                          className="rounded-full"
                        />
                      </div>
                    </button>

                    {profileOpen && (
                      <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border dark:border-gray-700 overflow-hidden z-60">
                        <Link
                          href="/profile"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700"
                        >
                          <User size={16} className="mr-2" /> My Profile
                        </Link>
                        <Link
                          href="/dashboard"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
                        >
                          <LayoutDashboard size={16} className="mr-2" />{" "}
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                        >
                          <LogOut size={16} className="mr-2" /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    {/* LOGIN */}
                    <Link
                      href="/login"
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition
      ${
        pathname === "/login"
          ? "bg-green-600 text-white"
          : "text-gray-700 dark:text-gray-200 hover:text-green-600"
      }
    `}
                    >
                      Login
                    </Link>

                    {/* REGISTER */}
                    <Link
                      href="/signup"
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition
      ${
        pathname === "/signup"
          ? "bg-green-600 text-white"
          : "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
      }
    `}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                title={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`lg:hidden fixed inset-0 z-100 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>
          <nav className="relative w-80 h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col overflow-y-auto">
            <div className="p-5 flex items-center justify-between border-b dark:border-gray-800">
              <span className="text-xl font-bold text-green-600">
                KachaBazer
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                title="Close menu"
                className="p-1 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {/* Profile section inside mobile menu if logged in */}
              {isLoggedIn && (
                <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-xl mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-green-500 overflow-hidden">
                    <Image
                      src={user?.photoURL || "/default-avatar.png"}
                      alt="Profile"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-gray-800 dark:text-white">
                      {user?.displayName || "User"}
                    </p>
                    <Link
                      href="/profile"
                      className="text-xs text-green-600 font-medium"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              )}

              {mainRoutes.map((route) => (
                <div key={route.label}>
                  {route.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setCategoryOpen(!categoryOpen)}
                        className="flex items-center justify-between w-full p-3 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      >
                        {route.label}{" "}
                        <ChevronDown
                          size={18}
                          className={`${categoryOpen ? "rotate-180" : ""} transition-transform`}
                        />
                      </button>
                      {categoryOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-green-500">
                          {route.subRoutes?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="block p-3 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 transition"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={route.href}
                      onClick={() => setOpen(false)}
                      className="block p-3 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Auth/Account Actions */}
            <div className="mt-auto p-5 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              {isLoggedIn ? (
                <button
                  onClick={async () => {
                    await signOut(auth);
                    setOpen(false);
                  }}
                  className="flex items-center justify-center w-full py-3 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-600/20"
                >
                  <LogOut size={18} className="mr-2" /> Logout
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center py-3 border border-green-600 text-green-600 rounded-xl font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-600/20"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
