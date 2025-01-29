import React from 'react';


function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Heading */}
        <h2 className="testimonials-heading">
          We aim to help learners 
          <span className="keyword-gold"> transform </span>
          their study experience 
          <br />
          and 
          <span className="keyword-gold"> excel </span> 
          in any subject with AI.
        </h2>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <img 
              src="https://via.placeholder.com/150"
              alt="User 1"
              className="testimonial-card__photo"
            />
            <h3 className="testimonial-card__name">Alex Johnson</h3>
            <p className="testimonial-card__quote">
              “StudyFlux helped me ace my calculus exams. The AI practice tests 
              were a game-changer!”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <img 
              src="https://via.placeholder.com/150"
              alt="User 2"
              className="testimonial-card__photo"
            />
            <h3 className="testimonial-card__name">Taylor Kim</h3>
            <p className="testimonial-card__quote">
              “The flashcards are spot on. I can breeze through vocab practice now!”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <img 
              src="https://via.placeholder.com/150"
              alt="User 3"
              className="testimonial-card__photo"
            />
            <h3 className="testimonial-card__name">Morgan Lee</h3>
            <p className="testimonial-card__quote">
              “I’ve tried other study apps, but the AI study guides here are truly next level.”
            </p>
          </div>

          {/* Testimonial 4 (optional) */}
          <div className="testimonial-card">
            <img 
              src="https://via.placeholder.com/150"
              alt="User 4"
              className="testimonial-card__photo"
            />
            <h3 className="testimonial-card__name">Jordan Smith</h3>
            <p className="testimonial-card__quote">
              “My reading comprehension improved so much with automated flashcards. Love it!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
