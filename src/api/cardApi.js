// src/api/cardApi.js

import axiosClient from './axiosClient.js';  // ensure we add ".js" if using ESM with Vite

// Create an object with our API methods
const cardApi = {
  // GET /cards
  getAllCards() {
    return axiosClient.get('/cards');
  },

  // GET /cards/topic/:topicId
  getCardsByTopic(topicId) {
    return axiosClient.get(`/cards/topic/${topicId}`);
  },

  // GET /cards/:cardId
  getCardById(cardId) {
    return axiosClient.get(`/cards/${cardId}`);
  },

  // GET /cards/topic/:topicId/all-subtopics
  getAllDescendantCards(topicId) {
    return axiosClient.get(`/cards/topic/${topicId}/all-subtopics`);
  },

  // POST /cards
  createCard(payload) {
    return axiosClient.post('/cards', payload);
  },

  // PATCH /cards/:cardId
  updateCard(cardId, updates) {
    return axiosClient.patch(`/cards/${cardId}`, updates);
  },

  // DELETE /cards/:cardId
  deleteCard(cardId) {
    return axiosClient.delete(`/cards/${cardId}`);
  },

  // POST /cards/generate
  generateCards() {
    return axiosClient.post('/cards/generate');
  },
};

export default cardApi;  // <--- important default export
