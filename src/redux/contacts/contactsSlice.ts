import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IContact } from '../../types/contatctsType';
import { fetchContacts } from './operations';
import Notiflix from 'notiflix';

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
    reducers: {},

    extraReducers: builder=>{
        builder.addCase(fetchContacts.pending, state=>{
            state.isLoading= true;
        })
        .addCase(fetchContacts.fulfilled, (state, {payload}: PayloadAction<IContact[]>)=>{
            state.isLoading= false;
            state.error= null;
            state.items= payload;
        })
        .addCase(fetchContacts.rejected, (state, {payload})=>{
            state.isLoading= false;
            state.error= payload;                        
            
            Notiflix.Notify.failure(String(payload));
        })
    }

})


export const contactsReducer = contactsSlice.reducer;