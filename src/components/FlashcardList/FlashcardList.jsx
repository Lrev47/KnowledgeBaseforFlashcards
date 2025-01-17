// src/components/FlashcardList/FlashcardList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCards } from '../../store/Slices/cardsSlice';

function FlashcardList() {
  const dispatch = useDispatch();

  // Pull out data from Redux store
  const { items: cards, loading, error } = useSelector((state) => state.cards);

  // On mount, fetch all cards
  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  if (loading) return <div>Loading cards...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Flashcard List</h1>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        cards.map((card) => (
          <div key={card.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
            <h3>{card.question}</h3>
            <p>Author: {card.authorName}</p>
            <p>Difficulty: {card.difficulty}</p>
            {/* 
              If using React Router, you might link to "/cards/<id>" 
              so FlashcardDetail can display. 
            */}
          </div>
        ))
      )}
    </div>
  );
}

export default FlashcardList;
