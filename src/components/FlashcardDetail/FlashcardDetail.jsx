// src/components/FlashcardDetail/FlashcardDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardById } from '../../store/Slices/cardsSlice';
// If using React Router:
import { useParams } from 'react-router-dom';

function FlashcardDetail() {
  const dispatch = useDispatch();
  // If using React Router
  const { cardId } = useParams();

  // Access the Redux store
  const { selectedCard: card, loading, error } = useSelector((state) => state.cards);

  useEffect(() => {
    if (cardId) {
      dispatch(fetchCardById(cardId));
    }
  }, [dispatch, cardId]);

  if (loading) return <div>Loading card...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!card) return <div>No card found or not loaded yet.</div>;

  return (
    <div style={{ border: '1px solid #555', padding: '12px' }}>
      <h2>Flashcard Detail</h2>
      <h3>Question: {card.question}</h3>
      <p>Answer: {card.answer}</p>
      <p>Author: {card.authorName}</p>
      <p>Difficulty: {card.difficulty}</p>
      
      {card.detailedExplanation && (
        <section style={{ marginTop: '12px' }}>
          <h4>Detailed Explanation</h4>
          <p>{card.detailedExplanation}</p>
        </section>
      )}

      {/* If you store code snippet in card.examples?.code or so */}
      {card.answerType === 'CODE_SNIPPET' && card.examples?.code && (
        <section>
          <h4>Code Snippet</h4>
          <pre>{card.examples.code}</pre>
        </section>
      )}
    </div>
  );
}

export default FlashcardDetail;
