export function InternshipsSection() {
  const internships = [
    {
      company: 'Club Petrolero',
      type: 'Digital Transformation Lead — Sports Entertainment',
      description: 'Architected and delivered complete digital presence for 50K+ member organization. Built responsive public portal, CMS-driven content management, and staff admin dashboard.',
      metrics: '50K+ users | 10K monthly active | 99.8% uptime',
      achievements: [
        'Responsive web platform supporting 50K+ members',
        'Headless CMS integration for dynamic event/content updates',
        'Real-time member notifications and dashboard',
        'Role-based admin panel with member management'
      ],
      technologies: ['Responsive Web Design', 'Headless CMS', 'Member Portals', 'Real-time Notifications'],
      impact: 'Increased digital engagement by 300%, reduced manual content updates by 90%, modernized organization for digital-first audience.'
    },
    {
      company: 'TIGO (Millicom) — Telecom Powerhouse',
      type: 'Enterprise Automation Engineer',
      description: 'Architected and implemented georeferencing and workflow automation initiative for major Latin American telecom. Automated 10,000+ monthly field operations using geospatial analysis and process optimization.',
      metrics: 'Multiple millions BOB saved | 80% automation rate | 10K+ ops/month',
      achievements: [
        'Designed GIS-based field technician routing system reducing travel time',
        'Architected automation system for manual task assignment (80% automation rate)',
        'Optimized maintenance schedules reducing response time by 60%',
        'Implemented large-scale geospatial data processing (100M+ coordinates)',
        'Key contributor to multi-million Boliviano operational cost reduction'
      ],
      technologies: ['GIS Technology', 'Workflow Automation', 'Process Optimization', 'Enterprise Systems', 'Geospatial Data'],
      impact: 'Core architect of automation systems that enabled multiple millions in operational savings. Implemented systems leveraging by major telecom for enterprise-scale efficiency.'
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pb-4 relative inline-block w-full">
        <span className="gradient-text-purple">Internship Experience</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {internships.map((internship, index) => (
          <div key={index} className="card-hover animate-slide-in-up">
            <h3 className="text-2xl font-bold text-white mb-2">{internship.company}</h3>
            <div className="text-sm font-semibold text-sky-400 mb-2">{internship.type}</div>

            {internship.metrics && (
              <div className="bg-sky-500/5 border border-sky-500/20 rounded-lg p-3 mb-4">
                <p className="text-sky-300 font-semibold text-sm">{internship.metrics}</p>
              </div>
            )}

            <p className="text-slate-300 mb-4 leading-relaxed">{internship.description}</p>

            <div className="mb-4">
              <p className="text-sm text-purple-300 font-semibold mb-3">Key Achievements:</p>
              <ul className="pl-4 space-y-1 text-slate-300">
                {internship.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-sm before:content-['•'] before:mr-2 before:text-sky-400">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {internship.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-purple-300 italic">💼 {internship.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
