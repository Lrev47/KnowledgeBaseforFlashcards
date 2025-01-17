// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../store/Slices/cardsSlice.js';
import topicReducer from '../store/Slices/topicsSlice.js';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    topics: topicReducer,
  },
});
