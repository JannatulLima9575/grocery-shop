import Link from "next/link";

const subRoutes = [
  { href: "/categories/fresh-fruits", label: "Fresh Fruits", emoji: "🍎" },
  { href: "/categories/vegetables", label: "Vegetables", emoji: "🥦" },
  { href: "/categories/fish-meat", label: "Fish & Meat", emoji: "🐟" },
  { href: "/categories/dairy-bakery", label: "Dairy & Bakery", emoji: "🥛" },
];

const CategoriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Product Categories
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Browse products by category
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subRoutes.map(({ href, label, emoji }) => (
          <Link
            key={href}
            href={href}
            className="border rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{emoji}</div>
            <h2 className="text-xl font-semibold">{label}</h2>
            <p className="text-sm text-gray-500 mt-1">
              View all {label.toLowerCase()} items
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default CategoriesPage;