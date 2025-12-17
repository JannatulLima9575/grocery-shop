export default function AccountSecurity() {
  return (
    <section className="border border-red-300 dark:border-red-700 p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        Account Security
      </h2>

      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
        Logout
      </button>
    </section>
  );
}