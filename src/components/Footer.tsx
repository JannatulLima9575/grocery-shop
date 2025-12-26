'use client';



export default function Footer() {

  return (
    <footer className="bg-white dark:bg-gray-900 py-10 transition-colors">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-2xl md:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
            KachaBazer
          </h3>
        </div>

        {/* Theme Switch */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Appearance
          </h3>

          {/* Bottom */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} KachaBazer. All rights reserved. | terms | Privacy Policy
      </div>
        </div>
      </div>

    </footer>
  );
}
