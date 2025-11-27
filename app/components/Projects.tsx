// app/components/Projects.tsx
import { CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  const projects = [
    {
      title: "FeelBetterAI",
      description:
        "Emotionally supportive chatbot with sentiment analysis, mood tracking, and animated UI.",
      tech: "React, Next.js, Tailwind, OpenAI API, Supabase",
      repo: "https://github.com/o-Mahamed/FeelBetterAI",
      demo: "https://feelbetterai-b5k1.onrender.com"
    },
    {
      title: "CodeSync",
      description:
        "Real-time collaborative coding platform with live editing, multi-language support, chat, and GitHub integration.",
      tech: "Next.js 14, React, TypeScript, Tailwind CSS, Node.js, Socket.IO, Monaco Editor",
      repo: "https://github.com/o-Mahamed/codesync",
      demo: "" // Add later if deployed
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-md hover:shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <CodeBracketIcon className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl font-semibold text-purple-700">{p.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <p className="text-sm text-gray-500 mb-6">{p.tech}</p>
              <div className="flex gap-4">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition font-semibold"
                >
                  View Repo
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition font-semibold flex items-center gap-2"
                  >
                    <RocketLaunchIcon className="h-5 w-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
