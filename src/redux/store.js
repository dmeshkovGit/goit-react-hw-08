import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filtersReuducer from "./filters/slice"


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReuducer,
    }
})
