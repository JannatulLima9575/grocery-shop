'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Top bar routes
  const topRoutes = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/account', label: 'My Account' },
  ];

  // Main navigation routes
  const mainRoutes = [
    { href: '/', label: 'Home' },
    {
      href: '/categories',
      label: 'Categories',
      hasDropdown: true,
      subRoutes: [
        { href: '/fresh-fruits', label: 'Fresh Fruits' },
        { href: '/vegetables', label: 'Vegetables' },
        { href: '/fish-meat', label: 'Fish & Meat' },
        { href: '/dairy-bakery', label: 'Dairy & Bakery' },
      ],
    },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'AboutUs' },
    {
      href: '/pages',
      label: 'Pages',
      hasDropdown: true,
      subRoutes: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms & Conditions' },
        { href: '/faq', label: 'FAQ' },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left: Contact Info */}
            <div className="mb-2 md:mb-0">
              <span>
                We are available 24/7, Need help? Call Us:{' '}
                <strong>+01234560352</strong>
              </span>
            </div>

            {/* Right: Top Links */}
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
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-green-600">grocery</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainRoutes.map((route) => (
                <div key={route.href} className="relative group">
                  {route.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                      >
                        {route.label}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border">
                        {route.subRoutes?.map((subRoute) => (
                          <Link
                            key={subRoute.href}
                            href={subRoute.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 border-b last:border-b-0"
                          >
                            {subRoute.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={route.href}
                      className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart & User Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Search Bar - Mobile */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {mainRoutes.map((route) => (
                <div key={route.href}>
                  {route.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 text-gray-700 font-medium border-b"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                      >
                        <span>{route.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            categoryOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {categoryOpen && (
                        <div className="pl-4 space-y-2 bg-gray-50 rounded-md mt-2">
                          {route.subRoutes?.map((subRoute) => (
                            <Link
                              key={subRoute.href}
                              href={subRoute.href}
                              className="block py-2 text-sm text-gray-600 hover:text-green-600 border-b last:border-b-0"
                              onClick={() => setOpen(false)}
                            >
                              {subRoute.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={route.href}
                      className="block py-3 text-gray-700 font-medium border-b hover:text-green-600"
                      onClick={() => setOpen(false)}
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                <button className="p-2 text-gray-600 hover:text-green-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-600 hover:text-green-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
