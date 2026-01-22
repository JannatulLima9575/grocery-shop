import Link from "next/link";

export default function CTASection() {
  return (
    <section className="text-center bg-white dark:bg-gray-900 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
        Ready to explore local markets?
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-6">
        Start tracking smarter market prices today.
      </p>

      <Link
        href="/products"
        className="inline-block bg-green-600 text-white
                   px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        Explore Markets
      </Link>
    </section>
  );
}