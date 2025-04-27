import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.name.toLowerCase();

    if (!normalizedFilter.trim()) {
      return contacts;
    }

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);
