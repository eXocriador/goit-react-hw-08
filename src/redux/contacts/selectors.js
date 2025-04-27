export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = (state) => {
  const { items } = state.contacts;
  const filter = state.filters.name.toLowerCase();

  return items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.toLowerCase().includes(filter)
  );
};
