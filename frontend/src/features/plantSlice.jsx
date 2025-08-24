import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL ='https://mini-plantstore-urvann.onrender.com/api/plants';

export const fetchPlants = createAsyncThunk(
  'plants/fetchPlants',
  async ({ search = '', category = '' }) => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (category) params.append('category', category);

    const res = await fetch(`${API_URL}?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch plants');
    return res.json();
  }
);

export const addPlant = createAsyncThunk('plants/addPlant', async (plantData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(plantData),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Failed to add plant');
  }
  return res.json();
});

const plantSlice = createSlice({
  name: 'plants',
  initialState: {
    plants: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.plants = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addPlant.fulfilled, (state, action) => {
        state.plants.push(action.payload);
      })
      .addCase(addPlant.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default plantSlice.reducer;
