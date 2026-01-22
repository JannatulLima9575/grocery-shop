import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "./providers";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KachaBazer - Daily Price Tracker for Local Markets',
  description:
    'Stay updated with KachaBazer, your go-to app for tracking daily prices in local markets.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <ThemeProvider>
          {/* 🔐 AUTH PROVIDER */}
          <AuthProvider>
            <Navbar />
            <div className="min-h-screen bg-white dark:bg-gray-800">
              {children}
            </div>
            <Footer />
          </AuthProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}