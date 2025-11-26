export function SkillsSection() {
  const technicalSkills = [
    { name: 'React.js', category: 'Modern Frontend', exp: 'SPA Architecture, Hooks, State Management' },
    { name: 'Django', category: 'Enterprise Backend', exp: 'REST APIs, ORM Optimization, Multi-tenant' },
    { name: 'Python', category: 'Backend/AI', exp: 'Production Systems, Data Science, Automation' },
    { name: 'TypeScript', category: 'Type-Safe Dev', exp: 'Enterprise Codebases, Complex Types' },
    { name: 'Kotlin', category: 'Native Mobile', exp: 'Android Apps, High-performance mobile systems' },
    { name: 'Flutter', category: 'Cross-platform', exp: 'iOS/Android, Real-time sync, Offline-first' },
    { name: 'PostgreSQL', category: 'SQL Database', exp: 'Query Optimization, Indexing, Scale 100K+' },
    { name: 'MySQL', category: 'SQL Database', exp: 'High-throughput, Replication, Clustering' },
    { name: 'REST/GraphQL', category: 'API Design', exp: 'Scalable APIs, Rate limiting, Versioning' },
    { name: 'Machine Learning', category: 'AI/ML', exp: 'TensorFlow, CNN, Data preprocessing' },
    { name: 'System Design', category: 'Architecture', exp: 'Microservices, Load balancing, Caching' },
    { name: 'DevOps/Cloud', category: 'Infrastructure', exp: 'Docker, CI/CD, AWS/GCP deployment' }
  ];

  const softSkills = [
    { name: 'Enterprise Systems Architecture', description: 'Design complete ERP and business systems from requirements to production at scale' },
    { name: 'Test-Driven Development', description: 'Implement TDD practices for efficiency and reliability in enterprise codebases' },
    { name: 'Delivery Excellence', description: 'Consistently deliver 15% ahead of schedule with zero critical incidents across 4 major systems' },
    { name: 'Real-time Systems Design', description: 'Event-driven architecture for sub-300ms synchronization across distributed systems' },
    { name: 'Full Stack Ownership', description: 'Database → API → Frontend: end-to-end accountability from infrastructure to user interface' },
    { name: 'Compliance & Automation', description: 'Automated compliance checking and business rule enforcement preventing errors before transaction' }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pb-4 relative inline-block w-full">
        <span className="gradient-text">Skills & Expertise</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded"></span>
      </h2>

      {/* Technical Skills */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-sky-400 mb-8">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="card-hover text-center animate-slide-in-up">
              <div className="font-bold text-white mb-2">{skill.name}</div>
              <div className="text-xs text-sky-300 font-semibold mb-2">{skill.category}</div>
              <div className="text-xs text-slate-400">{skill.exp}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8">Soft Skills & Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="card-hover animate-slide-in-up">
              <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
              <p className="text-slate-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Me Different */}
      <div className="bg-sky-500/5 border border-sky-500/20 rounded-xl p-8 md:p-10">
        <h3 className="text-2xl font-bold text-white mb-6">What Makes Me Different</h3>
        <ul className="space-y-4 text-slate-300 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-sky-400 font-bold min-w-fit">🏗️</span>
            <span><strong className="text-sky-400">Full ERP Systems:</strong> Complete end-to-end enterprise solutions with inventory, sales, and financial reporting</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-400 font-bold min-w-fit">📱</span>
            <span><strong className="text-sky-400">Multi-Platform:</strong> Web + mobile development expertise (React, Django, Kotlin, Flutter)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-400 font-bold min-w-fit">🤖</span>
            <span><strong className="text-sky-400">AI/ML Experience:</strong> Real machine learning projects beyond just theory</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-400 font-bold min-w-fit">⚙️</span>
            <span><strong className="text-sky-400">Automation Specialist:</strong> Proven ability to build systems that create operational efficiency</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-400 font-bold min-w-fit">💼</span>
            <span><strong className="text-sky-400">Real Enterprise Impact:</strong> Experience with systems serving thousands of users and handling complex business logic</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
