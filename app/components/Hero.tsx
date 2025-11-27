// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-700 text-white text-center">
      <h1 className="text-6xl font-extrabold mb-6">Mahamed</h1>
      <p className="text-xl mb-8 max-w-xl">
        Computer Science Student | Web Developer passionate about modern web stacks and expressive design
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-8 py-4 bg-white text-purple-700 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform font-semibold"
        >
          View My Work
        </a>
        <a
          href="/Mahamed_Nor_Resume.pdf"
          download
          className="px-8 py-4 bg-purple-700 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform font-semibold"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
