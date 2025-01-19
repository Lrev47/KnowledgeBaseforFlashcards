// src/store/slices/cardSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cardApi from '../../api/cardApi.js';  // ensure ".js" extension

// 1) FETCH ALL CARDS
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

// 2) FETCH CARD BY ID
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

// 3) UPDATE CARD (PATCH /cards/:cardId)
export const updateCard = createAsyncThunk(
  'cards/update',
  async ({ cardId, updates }, { rejectWithValue }) => {
    try {
      const response = await cardApi.updateCard(cardId, updates);
      // e.g. server returns { message: 'Card ... updated successfully', data: {...} }
      return response.data.data; // The updated card object
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],          // all cards
    selectedCard: null, // single-card detail
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 1) fetchAllCards
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

      // 2) fetchCardById
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
      })

      // 3) updateCard
      .addCase(updateCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCard = action.payload;

        // If the updated card is the currently selectedCard, update it
        if (state.selectedCard && state.selectedCard.id === updatedCard.id) {
          state.selectedCard = updatedCard;
        }

        // Optionally, update it in the items array
        const index = state.items.findIndex((c) => c.id === updatedCard.id);
        if (index !== -1) {
          state.items[index] = updatedCard;
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cardSlice.reducer;
