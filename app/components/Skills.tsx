// app/components/Skills.tsx
export default function Skills() {
  const skills = ["React", "Next.js", "Tailwind CSS", "Supabase", "OpenAI API", "GitHub"];

  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
