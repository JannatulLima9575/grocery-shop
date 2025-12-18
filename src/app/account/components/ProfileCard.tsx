"use client";

export default function ProfileCard() {
  // later this data will come from auth context / API
  const user = {
    name: "Jannatul Lima",
    email: "lima@email.com",
    role: "User",
    joined: "Jan 2025",
  };

  return (
    <section className="bg-white dark:bg-carddark p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

      <div className="space-y-2 text-sm">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Member Since:</strong> {user.joined}</p>
      </div>
    </section>
  );
}