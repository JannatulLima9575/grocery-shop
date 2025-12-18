import Link from "next/link";

export default function CTASection() {
  return (
    <section className="text-center px-4">
      <h2 className="text-3xl font-semibold mb-4">
        Ready to explore local markets?
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Start tracking smarter market prices today.
      </p>

      <Link
        href="/markets"
        className="inline-block bg-green-600 text-white
                   px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        Explore Markets
      </Link>
    </section>
  );
}