// src/pages/homepage/homepage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to FlashCardMaker!</h1>
      <p>This is your central hub for managing flashcards and exploring topics.</p>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/cards')} style={{ margin: '0 1rem' }}>
          View All Cards
        </button>
        <button onClick={() => navigate('/topics')} style={{ margin: '0 1rem' }}>
          View All Topics
        </button>
      </div>
    </div>
  );
}

export default Homepage;

