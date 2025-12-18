const techs = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase Auth",
  "JWT",
  "Recharts",
];

export default function TechStack() {
  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Technology Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-green-100
                         text-green-700 dark:bg-green-900 dark:text-green-300
                         text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
