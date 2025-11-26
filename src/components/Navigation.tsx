export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
          >
            Samuel Escobar
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('freelance')}
              className="text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors"
            >
              Freelance Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('internships')}
              className="text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors"
            >
              Internships
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 bg-gradient-to-r from-sky-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Navigation (shown on small screens) */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => scrollToSection('freelance')}
            className="text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('internships')}
            className="text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
          >
            Internships
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
          >
            Skills
          </button>
        </div>
      </div>
    </nav>
  );
}
