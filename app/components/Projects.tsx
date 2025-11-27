// app/components/Projects.tsx
export default function Projects() {
  const projects = [
    {
      title: "FeelBetter AI",
      description: "Emotionally supportive chatbot with sentiment analysis and animated UI.",
      tech: "React, Next.js, Tailwind, OpenAI API",
      link: "https://github.com/yourusername/feelbetter-ai"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills.",
      tech: "Next.js, Tailwind CSS",
      link: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 px-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.description}</p>
            <p className="mt-2 text-sm text-gray-600">{p.tech}</p>
            <a href={p.link} className="mt-4 inline-block text-purple-700 font-bold">View Repo →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
