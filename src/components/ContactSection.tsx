export function ContactSection() {
  const contactEmail = 'samuelescobarbejarano@gmail.com'; // Replace with actual email
  const linkedinUrl = 'https://www.linkedin.com/in/samuel-escobar7/'; // Replace with actual LinkedIn
  const githubUrl = 'https://github.com/SamuelEscobar761'; // Replace with actual GitHub

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 pb-4 relative inline-block w-full">
        <span className="gradient-text-purple">Ready to Drive Enterprise Impact?</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded"></span>
      </h2>

      <p className="text-lg md:text-xl text-slate-300 mb-4 leading-relaxed max-w-2xl mx-auto">
        If you're building enterprise systems, scaling distributed teams, or need an architect who speaks business & code:
      </p>
      <p className="text-base md:text-lg text-sky-300 font-semibold mb-12 max-w-2xl mx-auto">
        Let's discuss how to deliver measurable ROI.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-12">
        <button
          onClick={handleEmailClick}
          className="btn-primary"
        >
          📧 Schedule Consultation
        </button>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          🔗 LinkedIn Profile
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          💻 GitHub Work
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        <div className="bg-sky-500/5 border border-sky-500/20 rounded-xl p-6">
          <div className="text-3xl mb-3">⚡</div>
          <h4 className="text-white font-bold mb-2">Available For</h4>
          <p className="text-slate-400 text-sm">Full-time roles, Strategic consulting, Freelance architecture</p>
        </div>
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6">
          <div className="text-3xl mb-3">🎯</div>
          <h4 className="text-white font-bold mb-2">Response Time</h4>
          <p className="text-slate-400 text-sm">24-48 hours for meaningful opportunities</p>
        </div>
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
          <div className="text-3xl mb-3">💼</div>
          <h4 className="text-white font-bold mb-2">Sweet Spot</h4>
          <p className="text-slate-400 text-sm">Enterprise scale, technical challenges, impact focus</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 rounded-xl p-8 md:p-10 max-w-2xl mx-auto">
        <p className="text-slate-300 text-base leading-relaxed mb-4">
          <strong className="text-sky-300">Track Record:</strong> Consistently deliver 15% ahead of schedule with zero critical incidents. Built enterprise systems serving 2K+ concurrent users managing 500K+ products. Proven ability to reduce manual work by 90% while maintaining data integrity and compliance.
        </p>
        <p className="text-sm text-slate-400">
          I review every inquiry personally and prioritize substantive opportunities that drive mutual value.
        </p>
      </div>
    </section>
  );
}
