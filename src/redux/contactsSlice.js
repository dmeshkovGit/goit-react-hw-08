import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact} from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";
import { toast } from "react-hot-toast";

const slice = createSlice({
    name: "contacts",
    initialState: {
    items: [],
    loading: false,
    error: null
    },
    extraReducers: (builder) => 
        builder
            .addCase(fetchContacts.pending, (state) => {
            state.error = false;
            state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
                toast.error("Something went wrong(");
            })
            .addCase(addContact.pending, (state) => {
            state.error = false;
            state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
                toast.success("Contact added successfully");
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
                toast.error("Something went wrong(");
            })
            .addCase(deleteContact.pending, (state) => {
            state.error = false;
            state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((contact) => {
                return contact.id !== action.payload.id
                });
                toast.success("Contact deleted successfully");
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
                toast.error("Something went wrong(");
            }),
});

export default slice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
)
export const selectSortedContacts = createSelector(
    [selectFilteredContacts],
    (filteredContacts) => {
      return  filteredContacts.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    }
)