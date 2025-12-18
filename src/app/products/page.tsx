"use client";

import Image from "next/image";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* 🔹 Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          All Products
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Browse daily market prices of fresh products
        </p>
      </div>

      {/* 🔹 Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">

        {/* Category Filter */}
        <select className="border rounded-lg px-4 py-2 dark:bg-gray-900">
          <option>All Categories</option>
          <option>Vegetables</option>
          <option>Fish</option>
          <option>Meat</option>
          <option>Fruits</option>
        </select>

        {/* Market Filter */}
        <select className="border rounded-lg px-4 py-2 dark:bg-gray-900">
          <option>All Markets</option>
          <option>Karwan Bazar</option>
          <option>New Market</option>
          <option>Local Market</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="flex-1 border rounded-lg px-4 py-2 dark:bg-gray-900"
        />
      </div>

      {/* 🔹 Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Product Card */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-900 border rounded-xl p-4 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative h-36 mb-4">
              <Image
                src="/placeholder.png"
                alt="product"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <h3 className="font-semibold text-lg">
              Potato
            </h3>

            <p className="text-sm text-gray-500">
              Karwan Bazar
            </p>

            <p className="text-emerald-600 font-bold mt-1">
              ৳45 / kg
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Updated 10 min ago
            </p>

            {/* Action */}
            <button className="mt-4 w-full border rounded-lg py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
              View Details
            </button>
          </div>
        ))}

      </div>

      {/* 🔹 Pagination */}
      <div className="flex justify-center gap-2 mt-12">
        <button className="px-4 py-2 border rounded-lg">Prev</button>
        <button className="px-4 py-2 border rounded-lg bg-gray-900 text-white">
          1
        </button>
        <button className="px-4 py-2 border rounded-lg">2</button>
        <button className="px-4 py-2 border rounded-lg">3</button>
        <button className="px-4 py-2 border rounded-lg">Next</button>
      </div>

    </div>
  );
};

export default Products;