export default function Mission() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Vision */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Vision
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
            Our vision is to create a trusted digital platform where local
            market prices are transparent, reliable, and accessible to everyone.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
            Our mission is to create a trusted digital platform where local
            market prices are transparent, reliable, and accessible to everyone.
          </p>
        </div>

      </div>
    </section>
  );
}