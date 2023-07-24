import { createAsyncThunk } from "@reduxjs/toolkit";

import { privateApi } from "../../http/http";
import { IContact } from "../../types/contatctsTypes";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await privateApi.get("/contacts");
      return response.data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contact: Pick<IContact, 'name' | 'number'>, thunkApi) => {
    try {
      const response = await privateApi.post("/contacts", contact);

      return response.data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string, thunkApi) => {
    try {
      const response = await privateApi.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);
