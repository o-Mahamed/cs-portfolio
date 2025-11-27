// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-purple-700 text-white px-6 py-4 flex justify-between z-50">
      <h1 className="font-bold text-xl">Mahamed</h1>
      <div className="space-x-6">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
