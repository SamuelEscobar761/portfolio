export function FreelanceSection() {
  const freelanceProjects = [
    {
      year: 2022,
      title: 'Ticketing Platform — High-Volume Production System',
      description: 'Built and deployed a full ticketing platform handling 500+ daily transactions with role-based access, automated workflows, and a real-time admin dashboard for 2K+ concurrent users.',
      metrics: '500+ daily transactions | 2K+ concurrent users | <200ms response',
      stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'WebSockets'],
      impact: 'Streamlined ticket management, reduced errors, and enabled real-time monitoring for operational efficiency.'
    },
    {
      year: 2023,
      title: 'LALAS Restaurant Management — Web + Mobile',
      description: 'Delivered a web admin panel and native Flutter app for 2K restaurants, supporting 2K+ daily orders with real-time menu updates, order tracking, and kitchen integration.',
      metrics: '2K+ clients | 2K+ daily orders | <300ms sync',
      stack: ['PHP', 'MySQL', 'Flutter', 'REST APIs', 'WebSockets'],
      impact: 'Digitized restaurant operations, tripled order capacity, and improved workflow efficiency.'
    },
    {
      year: 2024,
      title: 'ERP — Product Catalog & Inventory',
      description: 'Developed a production ERP for 100 products across multiple warehouses, integrating accounting, intelligent product grouping, and real-time dashboards.',
      metrics: '100 products | Multi-warehouse sync | Real-time analytics',
      stack: ['Django', 'PostgreSQL', 'React', 'REST APIs'],
      impact: 'Optimized inventory accuracy, reduced stock errors by 25%, and enabled data-driven business decisions.'
    },
    {
      year: 2025,
      title: 'Scalable ERP — Equipment Distribution',
      description: 'Engineered a scalable ERP managing 800 products, multi-currency transactions, supplier relationships, automated compliance, and real-time sync across 5 warehouses.',
      metrics: '800 products | 5 warehouses | Multi-currency | Automated compliance',
      stack: ['NestJS', 'PostgreSQL', 'React'],
      impact: 'Enabled enterprise-scale operations, removed bottlenecks, and ensured regulatory compliance.'
    }
  ];

  return (
    <section id="freelance" className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pb-4 relative inline-block w-full">
        <span className="gradient-text-purple">Freelance Experience 4 years</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded"></span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-purple-500 -translate-x-1/2"></div>

        <div className="space-y-12">
          {freelanceProjects.map((project, index) => (
            <div key={index} className="timeline-item md:flex md:mb-12">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                <div className="card-hover">
                  <div className="text-sky-400 font-bold text-lg mb-2">{project.year}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="bg-sky-500/5 border border-sky-500/20 rounded-lg p-3 mb-4">
                    <p className="text-sky-300 font-semibold text-sm">{project.metrics}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-purple-300 italic text-sm">💰 {project.impact}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex md:w-12 justify-center">
                <div className="w-4 h-4 bg-sky-500 border-4 border-slate-950 rounded-full"></div>
              </div>

              {/* Empty space for odd items */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
