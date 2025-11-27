// app/components/Skills.tsx
export default function Skills() {
  const categories = {
    Languages: ["Python", "JavaScript", "TypeScript", "C#", "Java", "SQL", "HTML/CSS","Go","Rust"],
    Frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "Vue.js",
      "Redux"
    ],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server"],
    Tools: [
      "Git",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Azure DevOps",
      "GitHub Actions"
    ],
    Cloud: ["AWS (EC2, S3, RDS, Lambda)", "Azure", "Heroku"],
    Concepts: [
      "REST APIs",
      "Microservices",
      "CI/CD",
      "OAuth2",
      "JWT",
      "Agile/Scrum",
      "TDD",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "NLP",
      "Real-time Communication",
      "WebSockets",
      "GraphQL",
      "Prompt Engineering",
      "Prompt Chaining",
      "API Rate-limiting",
      "Content Moderation"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
