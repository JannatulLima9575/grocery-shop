"use client";

import { ArrowUp, ArrowDown, Search, Star } from "lucide-react";

const MarketHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Today’s Market Highlights</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Top Price Increase */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <ArrowUp className="text-red-500 mb-3" />
            <h3 className="font-semibold">Top Price Increase</h3>
            <p className="text-gray-600 mt-1">Onion +৳10</p>
          </div>

          {/* Top Price Drop */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <ArrowDown className="text-green-600 mb-3" />
            <h3 className="font-semibold">Top Price Drop</h3>
            <p className="text-gray-600 mt-1">Tomato −৳8</p>
          </div>

          {/* Most Searched */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Search className="text-blue-600 mb-3" />
            <h3 className="font-semibold">Most Searched Product</h3>
            <p className="text-gray-600 mt-1">Potato</p>
          </div>

          {/* Best Deal */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Star className="text-yellow-500 mb-3" />
            <h3 className="font-semibold">Best Deal Product</h3>
            <p className="text-gray-600 mt-1">Green Chili</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarketHighlights;