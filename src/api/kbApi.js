// src/api/kbApi.js
import axiosClient from './axiosClient';

const kbApi = {
  // GET /kb/card/:cardId
  getCard: (cardId) => {
    return axiosClient.get(`/kb/card/${cardId}`);
  },

  // GET /kb/topic/:topicId
  getTopic: (topicId) => {
    return axiosClient.get(`/kb/topic/${topicId}`);
  },

  // GET /kb/topics => top-level topics
  getAllTopics: () => {
    return axiosClient.get('/kb/topics');
  },
};

export default kbApi;
