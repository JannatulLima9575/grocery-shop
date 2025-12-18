const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          🥦 Vegetables
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Daily fresh vegetable prices from local markets
        </p>
      </div>

      {/* Placeholder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1,2,3,4].map((i) => (
          <div
            key={i}
            className="border rounded-xl p-4 bg-white dark:bg-gray-900"
          >
            <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
            <h3 className="font-semibold">Vegetable Name</h3>
            <p className="text-sm text-gray-500">Market Name</p>
            <p className="font-bold text-emerald-600 mt-1">
              ৳00 / kg
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default page;