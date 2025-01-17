// src/components/TopicTree/TopicList.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTopics } from '../../store/Slices/topicsSlice';
import { useNavigate } from 'react-router-dom';

function TopicList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: topics, loading, error } = useSelector((state) => state.topics);

  useEffect(() => {
    dispatch(fetchAllTopics()); // fetch ALL topics from backend
  }, [dispatch]);

  if (loading) return <div>Loading topics...</div>;
  if (error) return <div>Error: {error}</div>;

  // Only show top-level topics: those without a parentTopicId
  const parentTopics = topics.filter((t) => !t.parentTopicId);

  return (
    <div>
      <h2>Top-Level Topics</h2>
      {parentTopics.length === 0 ? (
        <p>No top-level topics found.</p>
      ) : (
        parentTopics.map((topic) => (
          <div key={topic.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
            <h3>{topic.name}</h3>
            {/* Button to view subtopics => navigate("/topics/<id>") */}
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
