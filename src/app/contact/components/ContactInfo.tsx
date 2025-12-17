const info = [
  {
    title: "Location",
    value: "Bangladesh",
  },
  {
    title: "Phone",
    value: "+880 1234-567890",
  },
  {
    title: "Email",
    value: "support@kachabazer.com",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        {info.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl bg-white dark:bg-carddark shadow"
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
