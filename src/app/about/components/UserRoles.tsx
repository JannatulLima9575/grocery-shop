const roles = [
  {
    title: "Users",
    desc: "Track prices, compare markets, and purchase products.",
  },
  {
    title: "Vendors",
    desc: "Submit daily market prices and manage advertisements.",
  },
  {
    title: "Admins",
    desc: "Approve data, manage users, and ensure data accuracy.",
  },
];

export default function UserRoles() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Who Can Use KachaBazer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="p-6 rounded-xl bg-white dark:bg-carddark shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                {role.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}