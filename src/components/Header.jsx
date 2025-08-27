import { useEffect, useState, useRef } from "react";

// Helper Component: Navigation Item
const NavItem = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-cyan-300 font-medium transition-colors duration-300 text-lg"
  >
    {text}
  </button>
);

// Helper Component: Apply Now Button
const ApplyNowButton = () => (
  <button
    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-400/30"
  >
    Apply Now
  </button>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // BUG FIX: Added missing state
  const headerRef = useRef(null); // Ref for the header element

  // Effect for handling scroll-based UI changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: Effect for closing menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <header
      ref={headerRef} // Attach the ref here
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0c1a21]/80 backdrop-blur-sm" : "bg-[#0c1a21]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          GDC
        </button>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem onClick={() => scrollToSection("cohort")} text="Program" />
          <NavItem onClick={() => scrollToSection("mentors")} text="Mentors" />
          <NavItem onClick={() => scrollToSection("contact")} text="Contact" />
          <ApplyNowButton />
        </nav>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu" // Accessibility improvement
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* --- ENHANCED: Animated Mobile Menu --- */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0c1a21]/90 backdrop-blur-md ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <NavItem onClick={() => scrollToSection("cohort")} text="Program" />
          <NavItem onClick={() => scrollToSection("mentors")} text="Mentors" />
          <NavItem onClick={() => scrollToSection("contact")} text="Contact" />
          <div className="pt-2">
            <ApplyNowButton />
          </div>
        </nav>
      </div>
    </header>
  );
}