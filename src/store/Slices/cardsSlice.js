// src/store/slices/cardSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cardApi from '../../api/cardApi.js';  // ensure ".js" extension

// Example: fetchAllCards async thunk
export const fetchAllCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cardApi.getAllCards();
      // e.g. your API returns { message: '', data: [...] }
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCardById = createAsyncThunk(
  'cards/fetchById',
  async (cardId, { rejectWithValue }) => {
    try {
      const response = await cardApi.getCardById(cardId);
      // e.g. { message: '', data: { ...singleCard... } }
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],       // all cards
    selectedCard: null, // single-card detail
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAllCards
      .addCase(fetchAllCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // array from response
      })
      .addCase(fetchAllCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchCardById
      .addCase(fetchCardById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedCard = null;
      })
      .addCase(fetchCardById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCard = action.payload;
      })
      .addCase(fetchCardById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.selectedCard = null;
      });
  },
});

export default cardSlice.reducer;
