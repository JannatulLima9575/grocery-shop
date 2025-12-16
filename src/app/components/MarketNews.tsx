"use client";

import { Bell } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  time: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Onion prices increased by 10 BDT",
    description: "The price of onions has risen across major local markets today.",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Tomato prices dropped slightly",
    description: "A small decrease in tomato prices has been observed in city markets.",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "Fish prices remain stable",
    description: "No major changes in fish prices compared to yesterday.",
    time: "Today",
  },
  {
    id: 4,
    title: "Rice prices expected to rise",
    description: "Suppliers indicate a possible increase in rice prices next week.",
    time: "Today",
  },
];

const MarketNews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Latest Market News & Alerts</h2>
            <p className="text-gray-600 mt-1">
              Stay updated with daily market changes
            </p>
          </div>
          <Bell className="text-green-600 w-8 h-8" />
        </div>

        {/* News Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="border rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2 text-lg">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {news.description}
              </p>
              <span className="text-xs text-gray-400">{news.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketNews;