// app/components/Contact.tsx
"use client";
import { EnvelopeIcon, LinkIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "mahamednor780@gmail.com",
      href: "mailto:mahamednor780@gmail.com",
      icon: <EnvelopeIcon className="h-8 w-8 text-purple-600" />
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mahamed-nor-6b810b2b3",
      href: "https://www.linkedin.com/in/mahamed-nor-6b810b2b3/",
      icon: <LinkIcon className="h-8 w-8 text-purple-600" />
    },
    {
      label: "GitHub",
      value: "github.com/o-Mahamed",
      href: "https://github.com/o-Mahamed",
      icon: <CodeBracketIcon className="h-8 w-8 text-purple-600" />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Contact Me</h2>
        <p className="mb-10 text-lg max-w-xl mx-auto">
          Let’s connect — I’m always open to opportunities, collaboration, and new ideas.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transition"
            >
              {c.icon}
              <h3 className="mt-4 font-semibold text-purple-700">{c.label}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:mahamednor780@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-12 px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition font-semibold"
        >
          Let’s Talk
        </motion.a>
      </div>
    </section>
  );
}
