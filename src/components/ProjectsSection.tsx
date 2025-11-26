export function ProjectsSection() {
  const projects = [
    {
      year: 2021,
      title: 'Medical AI — Pneumonia Detection System',
      description: 'Engineered deep learning model achieving 94% accuracy in pneumonia detection from chest X-rays. Processed 15K+ images leveraging CNN architecture with transfer learning (ResNet50).',
      impact: 'Reduced diagnostic time by 60% vs manual analysis. Potential to assist 1K+ patients if deployed.',
      stack: ['Python', 'TensorFlow', 'CNN Architecture', 'Transfer Learning', 'Kaggle Dataset'],
      focus: 'AI/ML — Healthcare'
    },
    {
      year: 2021,
      title: 'COVID-19 Crisis Response — Mobile Platform',
      description: 'Built native Android app deployed to 5K+ users during pandemic. Real-time location intelligence for critical health resources with integrated third-party services API.',
      stack: ['Kotlin', 'Google Maps API', 'YouTube API', 'Real-time Geolocation', 'Firebase'],
      features: [
        'Hospital Finder: Real-time availability & bed capacity',
        'Pharmacy Locator: Open pharmacies with supply status',
        'Emergency Numbers: Location-based ambulance dispatch',
        'Education: Integrated video content with 2M+ views'
      ],
      impact: 'Direct user impact: 5K+ lives assisted during critical shortage. Demonstrated crisis-driven product thinking.',
      focus: 'Mobile Development + Real-time APIs'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pb-4 relative inline-block w-full">
        <span className="gradient-text">Personal Projects</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card-hover animate-slide-in-up">
            <div className="text-sm text-sky-400 font-semibold mb-2">{project.year}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

            {project.impact && (
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3 mb-4">
                <p className="text-purple-300 font-semibold text-sm">💡 Impact: {project.impact}</p>
              </div>
            )}

            {project.features && (
              <div className="mb-4">
                <p className="text-sm text-purple-300 font-semibold mb-3">Key Features:</p>
                <ul className="pl-4 space-y-1 text-slate-300">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm before:content-['•'] before:mr-2 before:text-sky-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-sm text-sky-400 font-semibold">Focus: {project.focus}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
