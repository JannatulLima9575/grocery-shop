"use client";

import { useState } from "react";

interface MarketPrice {
  market: string;
  price: number;
}

interface ProductPrices {
  name: string;
  prices: MarketPrice[];
}

const data: ProductPrices[] = [
  {
    name: "Onion",
    prices: [
      { market: "Karwan Bazar", price: 60 },
      { market: "Jatrabari", price: 65 },
      { market: "Mirpur", price: 62 },
    ],
  },
  {
    name: "Tomato",
    prices: [
      { market: "Karwan Bazar", price: 40 },
      { market: "Jatrabari", price: 45 },
      { market: "Mirpur", price: 42 },
    ],
  },
  {
    name: "Potato",
    prices: [
      { market: "Karwan Bazar", price: 30 },
      { market: "Jatrabari", price: 32 },
      { market: "Mirpur", price: 31 },
    ],
  },
];

const PriceComparison = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductPrices>(data[0]);

  const maxPrice = Math.max(...selectedProduct.prices.map((p) => p.price));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Price Comparison</h2>
          <p className="text-gray-600 mt-1">
            Compare prices across different local markets
          </p>
        </div>

        {/* Dropdown */}
        <div className="mb-10 max-w-xs">
          <label className="block text-sm font-medium mb-2">
            Select Product
          </label>
          <select
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            value={selectedProduct.name}
            onChange={(e) =>
              setSelectedProduct(
                data.find((item) => item.name === e.target.value)!
              )
            }
          >
            {data.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Bar Chart */}
        <div className="space-y-6">
          {selectedProduct.prices.map((item) => (
            <div key={item.market}>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>{item.market}</span>
                <span>৳{item.price} / kg</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-600 h-4 rounded-full transition-all"
                  style={{ width: `${(item.price / maxPrice) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
