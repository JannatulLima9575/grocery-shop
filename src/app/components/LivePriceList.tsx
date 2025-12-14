"use client";
import { useState } from "react";


interface PriceItem {
  product: string;
  price: number;
  market: string;
  updated: string;
}

const priceData: PriceItem[] = [
  {
    product: "Tomato",
    price: 70,
    market: "Karwan Bazar",
    updated: "10 min ago",
  },
  {
    product: "Onion",
    price: 60,
    market: "Jatrabari",
    updated: "15 min ago",
  },
  {
    product: "Potato",
    price: 30,
    market: "Mirpur",
    updated: "5 min ago",
  },
];

const LivePriceList = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex gap-8">
        {/* Table Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Live Price List</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            {["All", "Nearby Markets", "Popular Markets"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === tab
                    ? "bg-green-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3">Product</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Market</th>
                  <th className="text-left p-3">Updated</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{item.product}</td>
                    <td className="p-3">৳{item.price}</td>
                    <td className="p-3">{item.market}</td>
                    <td className="p-3 text-sm text-gray-500">
                      {item.updated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Filter Panel */}
        <aside className="w-64 hidden lg:block">
          <h3 className="font-semibold mb-4">Filter & Sort</h3>

          <div className="space-y-4">
            <select className="w-full border rounded-lg p-2">
              <option>Sort by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>

            <select className="w-full border rounded-lg p-2">
              <option>Freshness</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>

            <select className="w-full border rounded-lg p-2">
              <option>Popularity</option>
              <option>Most Viewed</option>
              <option>Least Viewed</option>
            </select>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default LivePriceList;