// src/store/slices/topicSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import topicApi from '../../api/topicsApi';

// e.g. fetchAllTopics => GET /topics (all top-level or entire list)
export const fetchAllTopics = createAsyncThunk(
  'topics/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await topicApi.getAllTopics();
      return response.data.data; // array of topics
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// fetchTopicById => GET /topics/:topicId, which may include subTopics relation
export const fetchTopicById = createAsyncThunk(
  'topics/fetchById',
  async (topicId, { rejectWithValue }) => {
    try {
      const response = await topicApi.getTopicById(topicId);
      return response.data.data; // the single topic object
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const topicSlice = createSlice({
  name: 'topics',
  initialState: {
    items: [],       // list of topics
    selectedTopic: null, // single topic detail (including subtopics)
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAllTopics
      .addCase(fetchAllTopics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(fetchAllTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchTopicById
      .addCase(fetchTopicById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedTopic = null;
      })
      .addCase(fetchTopicById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTopic = action.payload;
      })
      .addCase(fetchTopicById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.selectedTopic = null;
      });
  },
});

export default topicSlice.reducer;
