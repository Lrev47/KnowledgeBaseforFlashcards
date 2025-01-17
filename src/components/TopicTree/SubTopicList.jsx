// src/components/TopicTree/SubTopicList.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopicById } from '../../store/Slices/topicsSlice';
import { useParams, useNavigate } from 'react-router-dom';

function SubTopicList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { topicId } = useParams();

  const { selectedTopic: topic, loading, error } = useSelector((state) => state.topics);

  useEffect(() => {
    if (topicId) {
      dispatch(fetchTopicById(topicId));
    }
  }, [dispatch, topicId]);

  if (loading) return <div>Loading subtopics...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!topic) return <div>No topic loaded yet.</div>;

  // direct subTopics array
  const { subTopics } = topic;

  return (
    <div>
      <h2>Subtopics of {topic.name}</h2>

      {subTopics && subTopics.length > 0 ? (
        subTopics.map((st) => (
          <div key={st.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
            <h4>{st.name}</h4>
            {/* 
              If you click "View Subtopics" for this child,
              go to "/topics/<childId>" 
            */}
            <button onClick={() => navigate(`/topics/${st.id}`)}>
              View Subtopics
            </button>
          </div>
        ))
      ) : (
        <p>No subtopics found for this topic.</p>
      )}
    </div>
  );
}

export default SubTopicList;
