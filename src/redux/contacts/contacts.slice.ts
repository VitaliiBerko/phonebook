import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IContact} from '../../types/contatctsTypes';
import { addContact, deleteContact, editContact, fetchContacts } from './contacts.operations';
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


        .addCase(deleteContact.pending, state =>{
            state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, {payload}: PayloadAction<IContact> )=>{
                state.isLoading =false;
                state.error= null;
                state.items= state.items.filter(({id})=>id!==payload.id)
        })
        .addCase(deleteContact.rejected, (state, {payload})=>{
            state.isLoading= false;
            state.error= payload;
            Notiflix.Notify.failure(payload as string)
        })


        .addCase(editContact.pending, state=>{
            state.isLoading = true;
        })
        .addCase(editContact.fulfilled,  (state, {payload} : PayloadAction<IContact>)=>{
                state.isLoading = false;
                state.error = null;
                const idx = state.items.findIndex(({id})=> id===payload.id);
                state.items[idx]= payload;
        })
        .addCase(editContact.rejected, (state, {payload})=>{
            state.isLoading= false;
            state.error = payload;
            Notiflix.Notify.failure(payload as string);
        })

        
    }

})


export const contactsReducer = contactsSlice.reducer;