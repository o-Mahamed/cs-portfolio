// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-700 text-white">
      <h1 className="text-5xl font-bold mb-4">Mahamed</h1>
      <p className="text-xl mb-6">Computer Science Student | Web Developer</p>
      <a href="#projects" className="px-6 py-3 bg-white text-purple-700 rounded-lg shadow-lg hover:scale-105 transition">
        View My Work
      </a>
    </section>
  );
}
