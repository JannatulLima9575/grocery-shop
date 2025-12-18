"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-2">
        {product.name}
      </h1>

      <p className="text-gray-500 mb-4">
        {product.market} • {product.category}
      </p>

      <p className="text-emerald-600 text-xl font-bold mb-6">
        ৳{product.price}/{product.unit}
      </p>

      <h2 className="text-lg font-semibold mb-2">
        Price History
      </h2>

      <div className="flex gap-4">
        {product.history.map((price, index) => (
          <div
            key={index}
            className="px-4 py-2 border rounded"
          >
            ৳{price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;