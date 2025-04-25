import { createSlice } from '@reduxjs/toolkit';

const selectFilter = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = selectFilter.actions;
export default selectFilter.reducer;
