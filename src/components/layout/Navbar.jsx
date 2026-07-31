import { useState } from "react";
import { Menu, X, Download } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">

        <h2 className="text-3xl font-bold text-white">
          Digital Rahul
        </h2>

        <ul className="hidden md:flex items-center gap-8 text-white">

          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-blue-500 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a
  href="/Rahul-Sharma-Resume.pdf"
  download
  className="hover:text-blue-500 transition flex items-center gap-1"
>
  <Download size={16} />
  Resume
</a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>

        </ul>

        <a
  href="#contact"
  onClick={() => setIsOpen(false)}
  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white"
>
  Hire Me
</a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <ul className="flex flex-col items-center py-6 gap-6 text-white">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href={resume}
                download="Rahul-Sharma-Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500 flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
              >
                Contact
              </a>
            </li>

            <a
  href="#contact"
  className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-medium transition"
>
  Hire Me
</a>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;