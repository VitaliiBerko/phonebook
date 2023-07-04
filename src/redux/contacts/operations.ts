import {createAsyncThunk} from '@reduxjs/toolkit'

import { privateApi } from '../../http/http'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi)=>{
        try {
            const response = await privateApi.get('/contacts');
            return response.data;
        } catch (error) {
            let message;
            if(error instanceof Error) message= error.message;
            else message= String(error)
            return thunkApi.rejectWithValue(message);
        }
    }
)
