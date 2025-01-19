// src/components/FlashcardList/FlashcardList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCards } from '../../store/Slices/cardsSlice';
// No direct CSS import here, as you'll import it in index.css or elsewhere.

function FlashcardList() {
  const dispatch = useDispatch();
  const { items: cards, loading, error } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  if (loading) return <div>Loading cards...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flashcard-list">
      <h1>Flashcard List</h1>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        cards.map((card) => (
          <div key={card.id} className="flashcard-list-item">
            <h3>{card.question}</h3>
            <p>Author: {card.authorName}</p>
            <p>Difficulty: {card.difficulty}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FlashcardList;
