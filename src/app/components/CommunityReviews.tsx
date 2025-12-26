"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Rahim Ahmed",
    rating: 5,
    comment: "Very helpful market prices. Saved my time today!",
  },
  {
    id: 2,
    name: "Sadia Khan",
    rating: 4,
    comment: "Good accuracy, but needs more markets.",
  },
];

const CommunityReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    if (!rating || !comment) return;

    const newReview: Review = {
      id: Date.now(),
      name: "Anonymous User",
      rating,
      comment,
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setComment("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Community Ratings & Reviews
          </h2>
          <p className="text-gray-600">
            Share your opinion about today’s market prices
          </p>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10 max-w-xl mx-auto">
          <h3 className="font-semibold mb-4">Leave a Review</h3>

          {/* Stars */}
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Comment */}
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your feedback..."
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{review.name}</h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityReviews;