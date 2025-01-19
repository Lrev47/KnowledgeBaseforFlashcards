// src/pages/homepage/homepage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1>Welcome to FlashCardMaker!</h1>
      <p className="homepage-description">
        This is your central hub for managing flashcards and exploring topics.
      </p>

      <div className="button-group">
        <button onClick={() => navigate('/cards')}>View All Cards</button>
        <button onClick={() => navigate('/topics')}>View All Topics</button>
      </div>
    </div>
  );
}

export default Homepage;
