// app/components/Experience.tsx
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "First National Financial",
      period: "Sep 2025 – Present",
      location: "Toronto, ON",
      tech: "C#, .NET Core, SQL, Vue.js",
      highlights: [
        "Architected 15+ RESTful microservices serving 50K+ daily users across Canada.",
        "Enhanced system performance by 30% via caching and query optimization.",
        "Spearheaded CI/CD pipelines with Azure DevOps, Docker, and automated testing.",
        "Integrated Stripe/SendGrid APIs, improving reliability by 25%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "MOR Initiative (Non-Profit)",
      period: "Jun 2025 – Sep 2025",
      location: "Remote",
      tech: "AWS, PostgreSQL, Python, Docker, ARM",
      highlights: [
        "Designed and deployed a scalable web platform enabling 10K+ monthly users.",
        "Implemented secure authentication with JWT, OAuth2, and encrypted PostgreSQL storage.",
        "Built CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 50%.",
        "Led AWS S3 CloudFormation setup for backups, reducing data loss risk by 90%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-700">Experience</h2>
        <div className="grid md:grid-cols-2 gap-10 justify-center">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-8 transition-transform hover:scale-105 flex flex-col items-center text-center"
            >
              <BriefcaseIcon className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
              <p className="text-sm text-purple-600 font-medium mb-4">{exp.tech}</p>
              <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
