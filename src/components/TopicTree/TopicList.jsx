// src/components/TopicTree/TopicList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTopics } from '../../store/Slices/topicsSlice';
import { useNavigate } from 'react-router-dom';

// We do NOT import './TopicList.css' here, because you're aggregating in index.css.

function TopicList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: topics, loading, error } = useSelector((state) => state.topics);

  useEffect(() => {
    dispatch(fetchAllTopics()); // fetch all topics from backend
  }, [dispatch]);

  if (loading) return <div>Loading topics...</div>;
  if (error) return <div>Error: {error}</div>;

  // Only top-level topics => those with no parent
  const parentTopics = topics.filter((t) => !t.parentTopicId);

  return (
    <div className="topic-list-container">
      <h2>Top-Level Topics</h2>
      {parentTopics.length === 0 ? (
        <p>No top-level topics found.</p>
      ) : (
        parentTopics.map((topic) => (
          <div key={topic.id} className="topic-list-item">
            <h3>{topic.name}</h3>
            <button onClick={() => navigate(`/topics/${topic.id}`)}>
              View Subtopics
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TopicList;
