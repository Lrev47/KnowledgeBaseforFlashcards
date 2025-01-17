// src/pages/FlashcardDetailPage/FlashcardDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import FlashcardDetail from '../../components/FlashcardDetail/FlashcardDetail';

function FlashcardDetailPage() {
  const { cardId } = useParams();

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Flashcard Detail Page</h1>
      {/* Pass the cardId prop if your FlashcardDetail relies on a prop 
          or rely on the slice usage that calls useParams inside FlashcardDetail itself. */}
      {/* 
        Option A: FlashcardDetail uses its own useParams -> no prop needed:
        <FlashcardDetail />
      */}
      
      {/* 
        Option B: If you want to pass it explicitly:
        <FlashcardDetail cardId={cardId} />
      */}
      <FlashcardDetail />
    </div>
  );
}

export default FlashcardDetailPage;
