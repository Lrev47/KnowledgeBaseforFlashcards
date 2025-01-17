// src/pages/TopicPage/TopicPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import TopicList from '../../components/TopicTree/TopicList';
import SubTopicList from '../../components/TopicTree/SubTopicList';

function TopicPage() {
  const { topicId } = useParams();

  return (
    <div style={{ margin: '1rem' }}>
      {topicId ? (
        <>
          <h1>Topic Detail</h1>
          <SubTopicList />
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
