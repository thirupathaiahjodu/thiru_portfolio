import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("#home");

  // Theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleScrollToSection = (href) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActive(href);
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar row */}
        <div className="grid grid-cols-3 items-center h-16">

          {/* Logo */}
          <div className="flex justify-start">
            <button
              onClick={() => handleScrollToSection("#home")}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              JTP
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center gap-8">

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollToSection(link.href)}
                className={`text-base font-medium transition-colors duration-300
                ${
                  active === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}

          </div>

          {/* Right Side */}
          <div className="hidden md:flex justify-end items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:scale-110 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="/Thirupathaiah_Jodu_Python_Developer.pdf"
              download
              className="gradient-btn px-5 py-2 rounded-lg text-base font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              <Download size={16} />
              Resume
            </a>

          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex justify-end items-center gap-2 col-span-2">

            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition"
              >
                {link.label}
              </button>
            ))}

            <a
              href="/Thirupathaiah_Jodu_Python_Developer.pdf"
              download
              className="block mx-3 gradient-btn px-4 py-2 rounded-lg text-base font-semibold text-center"
            >
              <Download size={16} className="inline mr-2" />
              Resume
            </a>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
