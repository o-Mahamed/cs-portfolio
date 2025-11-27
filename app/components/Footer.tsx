// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-700 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mahamed Nor. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/Mahamed_Nor_Resume.pdf" download className="hover:underline">Resume</a>
          <a href="https://github.com/o-Mahamed" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/mahamed-nor-6b810b2b3/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:mahamednor780@gmail.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
