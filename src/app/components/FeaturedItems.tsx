"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  market: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Onion",
    price: "৳60 / kg",
    market: "Karwan Bazar",
    image: "/Hero/FreshOnion",
  },
  {
    id: 2,
    name: "Red Tomato",
    price: "৳40 / kg",
    market: "New Market",
    image: "/Hero/RedTomato.avif",
  },
  {
    id: 3,
    name: "Hilsa Fish",
    price: "৳1200 / kg",
    market: "Chandpur Market",
    image: "/Hero/HilsaFish.jpg",
  },
  {
    id: 4,
    name: "Basmati Rice",
    price: "৳95 / kg",
    market: "Local Wholesale",
    image: "/Hero/BasmatiRice.png",
  },
];

const FeaturedItems = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Featured & Popular Items</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Most viewed and frequently updated market products
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-65 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="relative h-40 w-full rounded-t-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-green-600 font-bold">{product.price}</p>

                <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full mt-2">
                  {product.market}
                </span>

                <button className="mt-4 w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;

/* Optional (add to globals.css)
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/