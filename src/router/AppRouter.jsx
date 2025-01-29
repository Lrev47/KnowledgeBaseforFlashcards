// src/router/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from '../components/header/header.jsx';
import Homepage from '../pages/homepage/homepage.jsx';
import FlashcardList from '../components/FlashcardList/FlashcardList.jsx';
import FlashcardDetailPage from '../pages/FlashcardDetailPage/FlashcardDetailPage.jsx';
import TopicPage from '../pages/TopicPage/TopicPage.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        {/* 1) Homepage at "/" */}
        <Route path="/" element={<Homepage />} />

        {/* 2) Flashcard List at "/cards" */}
        <Route path="/cards" element={<FlashcardList />} />

        {/* 3) Flashcard Detail at "/cards/:cardId" */}
        <Route path="/cards/:cardId" element={<FlashcardDetailPage />} />

        {/* 4) Topic Page at "/topics" */}
        <Route path="/topics" element={<TopicPage />} />
        <Route path="/topics/:topicId" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
