import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await instance.get("/Contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
           try {
            const response = await instance.post("/Contacts", newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
           try {
               const response = await instance.delete(`/Contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const editContact = createAsyncThunk(
    "contact/edit", 
    async (contactInfo, thunkAPI) => {
        try {
            const response = await instance.patch(`/contacts/${contactInfo.id}`, contactInfo.newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

