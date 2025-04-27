export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = (state) => {
  const filter = state.filters.name.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
