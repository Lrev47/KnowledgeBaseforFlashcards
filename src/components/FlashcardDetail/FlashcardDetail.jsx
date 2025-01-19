// src/components/FlashcardDetail/FlashcardDetail.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardById, updateCard } from '../../store/Slices/cardsSlice';
import { useParams } from 'react-router-dom';

// For previewing rendered Markdown
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/a11y-dark.css';

// Monaco Editor
import Editor from '@monaco-editor/react';

function FlashcardDetail() {
  const dispatch = useDispatch();
  const { cardId } = useParams();

  const { selectedCard: card, loading, error } = useSelector((state) => state.cards);

  const [editMode, setEditMode] = useState(false);
  const [tempMarkdown, setTempMarkdown] = useState('');

  useEffect(() => {
    if (cardId) {
      dispatch(fetchCardById(cardId));
    }
  }, [dispatch, cardId]);

  useEffect(() => {
    if (card && card.detailedExplanation && !editMode) {
      setTempMarkdown(card.detailedExplanation);
    }
  }, [card, editMode]);

  if (loading) return <div>Loading card...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!card) return <div>No card found or not loaded yet.</div>;

  const handleSave = async () => {
    await dispatch(
      updateCard({
        cardId: card.id,
        updates: { detailedExplanation: tempMarkdown },
      })
    );
    setEditMode(false);
  };

  return (
    <div className="flashcard-detail-container">
      <h2>Flashcard Detail</h2>

      {!editMode && (
        <button
          className="flashcard-detail-edit-btn"
          onClick={() => setEditMode(true)}
        >
          Edit Explanation
        </button>
      )}

      <div className="flashcard-meta">
        <h3>Question: {card.question}</h3>
        <p><strong>Answer:</strong> {card.answer}</p>
        <p><strong>Author:</strong> {card.authorName}</p>
        <p><strong>Difficulty:</strong> {card.difficulty}</p>
      </div>

      <section className="explanation-section">
        <h4>Detailed Explanation</h4>

        {editMode ? (
          <div>
            <div className="monaco-editor-wrapper">
              <Editor
                height="800px"
                defaultLanguage="markdown"
                theme="vs-dark"
                value={tempMarkdown}
                onChange={(value) => setTempMarkdown(value || '')}
                options={{ minimap: { enabled: false } }}
              />
            </div>
            <div className="editor-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            {card.detailedExplanation ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {card.detailedExplanation}
              </ReactMarkdown>
            ) : (
              <p>No explanation yet.</p>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default FlashcardDetail;
