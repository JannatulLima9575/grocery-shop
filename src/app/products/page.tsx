"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/data/products";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [market, setMarket] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "All" || product.category === category;

    const matchMarket =
      market === "All" || product.market === market;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchMarket && matchSearch;
  });

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
        <select
        title="Select Category"
          className="border rounded-lg px-4 py-2 dark:bg-gray-900"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fish">Fish</option>
          <option value="Meat">Meat</option>
          <option value="Fruits">Fruits</option>
        </select>

        <select
        title="Select Market"
          className="border rounded-lg px-4 py-2 dark:bg-gray-900"
          onChange={(e) => setMarket(e.target.value)}
        >
          <option value="All">All Markets</option>
          <option value="Karwan Bazar">Karwan Bazar</option>
          <option value="New Market">New Market</option>
          <option value="Local Market">Local Market</option>
        </select>

        <input
          type="text"
          placeholder="Search product..."
          className="flex-1 border rounded-lg px-4 py-2 dark:bg-gray-900"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔹 Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 border rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="relative h-36 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.market}</p>

            <p className="text-emerald-600 font-bold mt-1">
              ৳{item.price} / {item.unit}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Updated {item.updatedAt}
            </p>

            <button className="mt-4 w-full border rounded-lg py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
              View Details
            </button>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
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