import { useState } from 'react';

interface QuestionnaireResponse {
  [key: string]: string | string[];
}

export function StrategicQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<QuestionnaireResponse>({});
  const [submitted, setSubmitted] = useState(false);

  const sections = [
    {
      title: 'Professional Impact & Metrics',
      description: 'Help us quantify your professional achievements',
      questions: [
        {
          id: 'revenue_impact',
          label: 'What\'s the total revenue/cost savings you\'ve generated across projects?',
          placeholder: 'e.g., $500K+, contributed to $2M+ in operational efficiency...',
          type: 'text'
        },
        {
          id: 'user_scale',
          label: 'What\'s the largest user base/scale you\'ve handled?',
          placeholder: 'e.g., 10K+ concurrent users, systems handling 1M+ transactions/day...',
          type: 'text'
        },
        {
          id: 'performance_improvements',
          label: 'What performance improvements have you delivered?',
          placeholder: 'e.g., 40% faster query times, 60% reduction in manual work, 3x throughput increase...',
          type: 'text'
        },
        {
          id: 'erp_specifics',
          label: 'ERP Systems - What specific modules/features did you build?',
          placeholder: 'e.g., inventory management, multi-warehouse, financial reporting, user role-based access control...',
          type: 'textarea'
        }
      ]
    },
    {
      title: 'Technical Leadership & Expertise',
      description: 'Highlight your technical depth and architectural decisions',
      questions: [
        {
          id: 'architecture_decisions',
          label: 'What architectural decisions did you make and why? (MVP, microservices, etc.)',
          placeholder: 'e.g., Chose PostgreSQL for ACID compliance in financial systems, implemented queue-based architecture for 10x scalability...',
          type: 'textarea'
        },
        {
          id: 'problem_solved',
          label: 'What was the hardest technical problem you solved and how?',
          placeholder: 'e.g., Optimized N+1 queries reducing API response time from 5s to 200ms...',
          type: 'textarea'
        },
        {
          id: 'innovation_examples',
          label: 'Any examples of innovation or unique solutions you created?',
          placeholder: 'e.g., Built custom real-time sync system, automated data migration pipeline...',
          type: 'textarea'
        }
      ]
    },
    {
      title: 'Client & Business Impact',
      description: 'Show how you\'ve directly impacted clients\' business metrics',
      questions: [
        {
          id: 'client_testimonials',
          label: 'Client success stories or testimonials (quantified)',
          placeholder: 'e.g., Reduced manual order processing by 80%, saving client 20 hours/week...',
          type: 'textarea'
        },
        {
          id: 'timeline_delivery',
          label: 'Your track record on project delivery timelines',
          placeholder: 'e.g., Consistently deliver 10% ahead of schedule, delivered 4 major systems on time...',
          type: 'text'
        },
        {
          id: 'industry_expertise',
          label: 'Which industries have you worked in? (retail, logistics, finance, etc.)',
          placeholder: 'e.g., E-commerce, Telecom, Sports, Logistics, Finance...',
          type: 'text'
        }
      ]
    },
    {
      title: 'Certifications & Recognition',
      description: 'Credentials that strengthen your profile',
      questions: [
        {
          id: 'certifications',
          label: 'Any relevant certifications or awards?',
          placeholder: 'e.g., AWS Certified, GCP Professional, published articles, speaking engagements...',
          type: 'textarea'
        },
        {
          id: 'open_source',
          label: 'Any open-source contributions or public projects?',
          placeholder: 'e.g., GitHub stars, NPM packages, contributions to major projects...',
          type: 'text'
        },
        {
          id: 'desired_roles',
          label: 'What roles are you targeting? (Full-time, freelance, consulting)',
          placeholder: 'e.g., Senior Full Stack Engineer, Technical Lead, CTO, Freelance Architect...',
          type: 'text'
        }
      ]
    }
  ];

  const handleChange = (id: string, value: string) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log the responses (in production, send to backend)
    console.log('Complete Questionnaire Responses:', responses);

    // Create a summary to display
    const summary = `
Strategic Profile Built:
- Revenue/Cost Impact: ${responses.revenue_impact || 'Not provided'}
- Scale Handled: ${responses.user_scale || 'Not provided'}
- Performance Wins: ${responses.performance_improvements || 'Not provided'}
- Architecture Expertise: ${responses.architecture_decisions || 'Not provided'}
- Industries: ${responses.industry_expertise || 'Not provided'}
- Target Roles: ${responses.desired_roles || 'Not provided'}

Your portfolio will be dynamically updated with this information to maximize recruiter attraction!
    `;

    console.log(summary);
    setSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setCurrentStep(0);
      setResponses({});
      setSubmitted(false);
    }, 5000);
  };

  const section = sections[currentStep];
  const progress = Math.round(((currentStep + 1) / sections.length) * 100);

  if (submitted) {
    return (
      <section className="py-20 px-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-xl p-12 text-center backdrop-blur">
          <div className="text-6xl mb-6 animate-bounce">✅</div>
          <h3 className="text-3xl font-bold text-green-400 mb-4">Profile Complete!</h3>
          <p className="text-slate-300 text-lg mb-4">
            Your strategic profile has been captured and will dynamically enhance your portfolio.
          </p>
          <p className="text-slate-400 text-sm">Redirecting to your updated portfolio...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <div className="bg-slate-900/80 border border-sky-500/20 rounded-xl p-8 md:p-10 backdrop-blur">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-white">
              Build Your Strategic Profile
            </h2>
            <span className="text-sm font-semibold text-sky-400">{progress}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-sky-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-sky-400 mb-2">
            Section {currentStep + 1} of {sections.length}
          </h3>
          <h4 className="text-2xl font-bold text-white mb-2">{section.title}</h4>
          <p className="text-slate-400">{section.description}</p>
        </div>

        {/* Questions Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {section.questions.map((question) => (
            <div key={question.id}>
              <label className="block text-white font-semibold mb-3 text-sm">
                {question.label}
              </label>
              {question.type === 'textarea' ? (
                <textarea
                  value={(responses[question.id] as string) || ''}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  placeholder={question.placeholder}
                  className="w-full px-4 py-3 bg-slate-800 border border-sky-500/30 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  rows={4}
                />
              ) : (
                <input
                  type="text"
                  value={(responses[question.id] as string) || ''}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  placeholder={question.placeholder}
                  className="w-full px-4 py-3 bg-slate-800 border border-sky-500/30 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                />
              )}
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-8">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="flex-1 btn-secondary"
              >
                ← Previous
              </button>
            )}

            {currentStep < sections.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 btn-primary"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 btn-primary"
              >
                Submit Profile
              </button>
            )}
          </div>

          {/* Optional Skip Message */}
          <p className="text-center text-slate-500 text-xs">
            Fill in as much detail as possible - this creates a powerful, recruiter-optimized profile.
          </p>
        </form>
      </div>
    </section>
  );
}
