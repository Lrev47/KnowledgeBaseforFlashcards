import React from 'react';

function StudyTipsSection() {
  // For a real app, you might fetch or import these tips from a database or CMS
  const studyTips = [
    {
      id: 1,
      image: 'public/Learning-rafiki.png',
      title: 'Set Small Goals',
      description: 'Break your study sessions into manageable chunks to keep focus and reduce overwhelm.',
      link: '/blog/study-tip-1'
    },
    {
      id: 2,
      image: 'public/Book lover-bro.png',
      title: 'Active Recall',
      description: 'Test yourself regularly instead of just re-reading your notes for better retention.',
      link: '/blog/study-tip-2'
    },
    {
      id: 3,
      image: 'public/Online learning-pana.png',
      title: 'Teach Someone Else',
      description: 'Explaining concepts in your own words helps you master the material much faster.',
      link: '/blog/study-tip-3'
    },
    {
      id: 4,
      image: 'public/Learning-cuate.png',
      title: 'Use Practice Tests',
      description: 'Simulate exam conditions to identify knowledge gaps and reduce test anxiety.',
      link: '/blog/study-tip-4'
    },
  ];

  return (
    <section className="study-tips-section">
      <div className="study-tips-container">
        <h2 className="study-tips-heading">
          Read our <span className="keyword-blog">Study Tips</span>
        </h2>
        <div className="study-tips-grid">
          {studyTips.map((tip) => (
            <div className="tip-card" key={tip.id}>
              <img
                src={tip.image}
                alt={tip.title}
                className="tip-card__image"
              />
              <h3 className="tip-card__title">{tip.title}</h3>
              <p className="tip-card__description">
                {tip.description}
              </p>
              <a href={tip.link} className="tip-card__link">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudyTipsSection;
