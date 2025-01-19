// src/pages/TopicPage/TopicPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import TopicList from '../../components/TopicTree/TopicList';
import TopicDetail from '../../components/TopicTree/TopicDetail';

function TopicPage() {
  const { topicId } = useParams();

  return (
    <div className="topic-page-container">
      {topicId ? (
        <>
          <h1>Topic Detail</h1>
          <TopicDetail />
        </>
      ) : (
        <>
          <h1>All Topics</h1>
          <TopicList />
        </>
      )}
    </div>
  );
}

export default TopicPage;
