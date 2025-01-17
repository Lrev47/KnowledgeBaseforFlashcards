// src/api/topicApi.js
import axiosClient from './axiosClient';

const topicApi = {
  // GET /topics => get all topics
  getAllTopics: () => {
    return axiosClient.get('/topics');
  },

  // GET /topics/:topicId => single topic
  getTopicById: (topicId) => {
    return axiosClient.get(`/topics/${topicId}`);
  },

  // POST /topics => create new topic
  createTopic: (payload) => {
    return axiosClient.post('/topics', payload);
  },

  // PATCH /topics/:topicId => update
  updateTopic: (topicId, updates) => {
    return axiosClient.patch(`/topics/${topicId}`, updates);
  },

  // DELETE /topics/:topicId
  deleteTopic: (topicId) => {
    return axiosClient.delete(`/topics/${topicId}`);
  },

  // POST /topics/generate => AI-based generation
  generateTopicHierarchy: (payload) => {
    // payload might be { topicName: 'React', existingSubtopics: [] }
    return axiosClient.post('/topics/generate', payload);
  },

  // GET /topics/:topicId/ancestors
  getTopicAncestors: (topicId) => {
    return axiosClient.get(`/topics/${topicId}/ancestors`);
  },

  // GET /topics/:topicId/all-cards
  getTopicAllCards: (topicId) => {
    return axiosClient.get(`/topics/${topicId}/all-cards`);
  },
};

export default topicApi;
