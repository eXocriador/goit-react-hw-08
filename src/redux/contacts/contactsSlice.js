import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (_, action) => action.payload)
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
