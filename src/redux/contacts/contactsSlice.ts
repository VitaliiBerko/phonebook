import {createSlice} from '@reduxjs/toolkit'
import { IContact } from '../../types/contatctsType';

interface IContactsState {
    items: IContact[],
    isLoading: boolean,
    error: unknown
}

const initialState: IContactsState= {
    items: [],
    isLoading: false, 
    error: null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder=>{
        builder.addCase()
    }

})


export const contactsReducer = contactsSlice.reducer;