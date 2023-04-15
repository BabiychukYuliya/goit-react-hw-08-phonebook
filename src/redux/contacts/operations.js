import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const {data} = await axios.post("/contacts", contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const patchContacts = createAsyncThunk(
  'contacts/patchContact',
  async ({ name, id, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);