import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IContact } from '../../types/contatctsTypes';
import { addContact, delateContact, fetchContacts } from './contacts.operations';
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

        .addCase(addContact.pending, state=>{
            state.isLoading = true;
        })
        .addCase(addContact.fulfilled, (state, {payload}: PayloadAction<IContact>)=>{
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        })
        .addCase(addContact.rejected, (state, {payload})=>{
            state.isLoading= false;
            state.error = payload;
            Notiflix.Notify.failure(payload as string);
        })


        .addCase(delateContact.pending, state =>{
            state.isLoading = true;
        })
        .addCase(delateContact.fulfilled, (state, {payload}: PayloadAction<IContact> )=>{
                state.isLoading =false;
                state.error= null;
                state.items= state.items.filter(({id})=>id!==payload.id)
        })
        .addCase(delateContact.rejected, (state, {payload})=>{
            state.isLoading= false;
            state.error= null;
            Notiflix.Notify.failure(payload as string)
        })
    }

})


export const contactsReducer = contactsSlice.reducer;