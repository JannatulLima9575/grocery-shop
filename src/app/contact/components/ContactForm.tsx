export default function ContactForm() {
  return (
    <section className="px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Send Us a Message
        </h2>

        <form className="space-y-6 bg-white dark:bg-carddark p-8 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg
                         dark:bg-darkbg dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg
                         dark:bg-darkbg dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg
                         dark:bg-darkbg dark:border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3
                       rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}