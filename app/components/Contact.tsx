// app/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-4">Let’s connect! You can reach me via:</p>
      <div className="space-x-6">
        <a href="mailto:your.email@example.com" className="text-purple-700 font-bold">Email</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-purple-700 font-bold">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" className="text-purple-700 font-bold">GitHub</a>
      </div>
    </section>
  );
}
