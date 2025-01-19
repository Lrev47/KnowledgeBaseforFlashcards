// src/pages/FlashcardDetailPage/FlashcardDetailPage.jsx
// (Showcasing how you'd remove inline style and add the class)

import React from 'react';
import { useParams } from 'react-router-dom';
import FlashcardDetail from '../../components/FlashcardDetail/FlashcardDetail';
// No direct import of CSS here (as requested),
// we assume it's imported globally in your index.css.

function FlashcardDetailPage() {
  const { cardId } = useParams();

  return (
    <div className="flashcard-detail-page-container">
      <h1>Flashcard Detail Page</h1>
      <FlashcardDetail />
    </div>
  );
}

export default FlashcardDetailPage;
