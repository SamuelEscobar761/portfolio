export function HeroSection() {
  const techStack = ['React', 'Node.Js', 'NestJs', 'Django', 'Laravel', 'Kotlin', 'Flutter', 'ML', 'SQL'];

  return (
    <section className="animated-gradient flex items-center justify-center relative py-10 pt-20 px-4">
      <div className="relative-content text-center max-w-3xl z-10">
        <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Samuel Escobar <br />
          Full stack developer
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Self-driven full stack developer & collaborative team builder specializing in enterprise automation.
          <br className="hidden sm:block" />
          I design and build scalable systems that eliminate manual work, accelerate decision-making, and drive measurable business value.
          <br className="hidden sm:block" />
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="animate-fade-in-scale px-4 py-2 bg-sky-500/10 border border-sky-500 rounded-full text-sm font-semibold text-sky-300 hover:bg-purple-500/20 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
