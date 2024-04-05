import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReuducer from "./filtersSlice"


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReuducer,
    }
})
