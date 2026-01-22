const features = [
  "Daily market price updates",
  "Market-wise price comparison",
  "Price trend visualization",
  "Vendor submitted data",
  "User reviews & watchlist",
  "Real-time notifications",
];

export default function SolutionSection() {
  return (
    <section className="px-4 bg-white dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-black dark:text-white font-semibold mb-6 md:mb-10 text-center">
          Our Solution
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow"
            >
              <p className="font-semibold text-base md:text-xl text-gray-800 dark:text-gray-200">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}