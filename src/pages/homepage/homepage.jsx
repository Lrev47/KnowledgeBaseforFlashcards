import React from 'react';
import Hero from '../../components/hero/hero';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import StudyTipsSection from '../../components/StudyTipsSection/StudyTipsSection';

function Homepage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <StudyTipsSection />
      {/* Other sections if needed */}
    </>
  );
}

export default Homepage;
