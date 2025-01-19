// src/components/TopicTree/TopicDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopicById } from '../../store/Slices/topicsSlice';
import { useParams, useNavigate } from 'react-router-dom';

// NO direct CSS import here, as you'll import it in your index.css or aggregator.

function TopicDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { topicId } = useParams();

  const { selectedTopic: topic, loading, error } = useSelector((state) => state.topics);

  useEffect(() => {
    if (topicId) {
      dispatch(fetchTopicById(topicId));
    }
  }, [dispatch, topicId]);

  if (loading) return <div>Loading topic details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!topic) return <div>No topic loaded yet.</div>;

  // The parent's info is in topic.parentTopic if your API includes it
  const hasParent = !!topic.parentTopicId && topic.parentTopic;

  return (
    <div className="topic-detail-container">
      {/* If there's a parent, show a "Go Up" link */}
      {hasParent && (
        <div className="parent-topic-backbutton">
          <button onClick={() => navigate(`/topics/${topic.parentTopic.id}`)}>
            ← Back to {topic.parentTopic.name}
          </button>
        </div>
      )}

      <h2 className="topic-detail-title">{topic.name}</h2>
      {topic.overview && <p className="topic-detail-overview">{topic.overview}</p>}

      {/* 1) List direct subtopics only */}
      <div className="subtopics-section">
        <h3>Subtopics</h3>
        {topic.subTopics && topic.subTopics.length > 0 ? (
          topic.subTopics.map((sub) => (
            <div key={sub.id} className="subtopic-item">
              <button onClick={() => navigate(`/topics/${sub.id}`)}>
                {sub.name}
              </button>
            </div>
          ))
        ) : (
          <p>No subtopics found.</p>
        )}
      </div>

      {/* 2) List cards for this topic */}
      <div className="cards-section">
        <h3>Cards in {topic.name}</h3>
        {topic.cards && topic.cards.length > 0 ? (
          topic.cards.map((card) => (
            <div key={card.id} className="card-item">
              <strong>Q:</strong> {card.question}
              <br />
              <button onClick={() => navigate(`/cards/${card.id}`)}>
                View Card Detail
              </button>
            </div>
          ))
        ) : (
          <p>No cards found for this topic.</p>
        )}
      </div>
    </div>
  );
}

export default TopicDetail;
