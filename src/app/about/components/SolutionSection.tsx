const features = [
  "Daily market price updates",
  "Market-wise price comparison",
  "Price trend visualization",
  "Vendor submitted data",
  "User reviews & watchlist",
];

export default function SolutionSection() {
  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Solution
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-carddark shadow"
            >
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}