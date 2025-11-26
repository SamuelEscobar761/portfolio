import { useState } from 'react';

interface QuestionnaireData {
  [key: string]: string;
}

export function ValueQuestionnaire() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [responses, setResponses] = useState<QuestionnaireData>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 'challenge',
      label: 'What\'s your biggest development challenge right now?',
      placeholder: 'e.g., scaling our ERP system, mobile app bottlenecks...'
    },
    {
      id: 'timeline',
      label: 'What\'s your ideal project timeline?',
      placeholder: 'e.g., ASAP, 3 months, flexible...'
    },
    {
      id: 'budget',
      label: 'What\'s your budget range?',
      placeholder: 'e.g., $5K-10K, $20K+, open to discuss...'
    },
    {
      id: 'goals',
      label: 'What measurable goals do you want to achieve?',
      placeholder: 'e.g., 30% performance improvement, reduce manual work by 50%...'
    }
  ];

  const handleChange = (id: string, value: string) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send to your backend
    console.log('Questionnaire responses:', responses);

    // For now, just show success
    setSubmitted(true);
    setTimeout(() => {
      setShowQuestionnaire(false);
      setSubmitted(false);
      setResponses({});
    }, 3000);
  };

  if (!showQuestionnaire) {
    return (
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/30 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Discuss Your Project?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            To provide you with the most accurate estimate and solution, I'd like to understand your specific needs better.
          </p>
          <button
            onClick={() => setShowQuestionnaire(true)}
            className="btn-primary"
          >
            Take Quick Assessment (2 min)
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <div className="bg-slate-900/80 border border-sky-500/20 rounded-xl p-8 md:p-10 backdrop-blur">
        <h3 className="text-2xl font-bold text-white mb-2">Project Assessment</h3>
        <p className="text-slate-300 mb-8">Help me understand your needs to provide the best solution</p>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-green-400 mb-2">Thank you!</h4>
            <p className="text-slate-300">I'll review your responses and reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((question) => (
              <div key={question.id}>
                <label className="block text-white font-semibold mb-3">
                  {question.label}
                </label>
                <textarea
                  value={responses[question.id] || ''}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  placeholder={question.placeholder}
                  className="w-full px-4 py-3 bg-slate-800 border border-sky-500/30 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                  required
                />
              </div>
            ))}

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 btn-primary"
              >
                Send Assessment
              </button>
              <button
                type="button"
                onClick={() => setShowQuestionnaire(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
