"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Desktop dropdown states
  const [desktopCategoryOpen, setDesktopCategoryOpen] = useState(false);
  const [desktopPagesOpen, setDesktopPagesOpen] = useState(false);

  // Mobile dropdown states
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  // Profile menu
  const [profileOpen, setProfileOpen] = useState(false);

  const topRoutes = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/account", label: "My Account" },
  ];

  const mainRoutes = [
    { href: "/", label: "Home" },

    {
      key: "categories",
      href: "/categories",
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
    { href: "/about", label: "AboutUs" },

    {
      key: "pages",
      href: "/pages",
      label: "Pages",
      hasDropdown: true,
      subRoutes: [
        { href: "/pages/privacy", label: "Privacy Policy" },
        { href: "/pages/terms", label: "Terms & Conditions" },
        { href: "/pages/faq", label: "FAQ" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              <span>
                We are available 24/7, Need help? Call Us:{" "}
                <strong>+01234560352</strong>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {topRoutes.map((route, index) => (
                <div key={route.href} className="flex items-center">
                  <Link
                    href={route.href}
                    className="hover:text-green-300 transition-colors"
                  >
                    {route.label}
                  </Link>
                  {index < topRoutes.length - 1 && (
                    <span className="mx-2 text-gray-400">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Go to homepage">
              <div className="text-2xl font-bold text-green-600">grocery</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainRoutes.map((route) => (
                <div key={route.label} className="relative group">
                  
                  {route.hasDropdown ? (
                    <>
                      <button
                        aria-label={`Open ${route.label} menu`}
                        className="flex items-center text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
                        onClick={() => {
                          if (route.key === "categories") {
                            setDesktopCategoryOpen(!desktopCategoryOpen);
                            setDesktopPagesOpen(false);
                          } else {
                            setDesktopPagesOpen(!desktopPagesOpen);
                            setDesktopCategoryOpen(false);
                          }
                        }}
                      >
                        {route.label}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {(route.key === "categories"
                        ? desktopCategoryOpen
                        : desktopPagesOpen) && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-40">
                          {route.subRoutes.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 border-b last:border-b-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={route.href}
                      className="text-gray-700 hover:text-green-600 font-medium py-2"
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-green-500"
                />
                <button
                  aria-label="Search products"
                  className="absolute right-0 top-0 h-full px-4 bg-green-600 text-white rounded-r-md hover:bg-green-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor">
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Profile + Cart */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/login"
                className="px-4 py-1 border border-green-600 text-green-600 rounded hover:bg-green-50"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-1 border border-green-600 text-green-600 rounded hover:bg-green-50"
              >
                Register
              </Link>

              {/* Profile */}
              <div className="relative">
                <button
                  aria-label="Open profile menu"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-600"
                >
                  <Image
                    src="/default-avatar.png"
                    alt="User profile picture"
                    className="object-cover w-full h-full"
                    width={40}
                    height={40}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg border z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-green-50"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-green-50"
                    >
                      Dashboard
                    </Link>
                    <button className="w-full text-left px-4 py-2 hover:bg-green-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Cart */}
              <button
                aria-label="Open shopping cart"
                className="p-2 text-gray-600 hover:text-green-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
              />
              <button
                aria-label="Search products"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-green-600 text-white rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor">
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* -------- Mobile Menu -------- */}
        {open && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              
              {/* Mobile Route List */}
              {mainRoutes.map((route) => (
                <div key={route.label}>
                  {route.hasDropdown ? (
                    <>
                      <button
                        aria-label={`Open ${route.label} menu`}
                        className="flex w-full justify-between py-3 text-gray-700 font-medium border-b"
                        onClick={() => {
                          if (route.key === "categories") {
                            setMobileCategoryOpen(!mobileCategoryOpen);
                            setMobilePagesOpen(false);
                          } else {
                            setMobilePagesOpen(!mobilePagesOpen);
                            setMobileCategoryOpen(false);
                          }
                        }}
                      >
                        <span>{route.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            (
                              route.key === "categories"
                                ? mobileCategoryOpen
                                : mobilePagesOpen
                            )
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" strokeWidth="2" />
                        </svg>
                      </button>

                      {(route.key === "categories"
                        ? mobileCategoryOpen
                        : mobilePagesOpen) && (
                        <div className="pl-4 space-y-2 bg-gray-50 rounded-md mt-2">
                          {route.subRoutes.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 text-sm text-gray-600 hover:text-green-600 border-b"
                              onClick={() => setOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={route.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-gray-700 border-b hover:text-green-600"
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                <button
                  aria-label="Open shopping cart"
                  className="p-2 text-gray-600 hover:text-green-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor">
                    <path
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Open profile"
                  className="p-2 text-gray-600 hover:text-green-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor">
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}