import { RootState } from "../store";

export const selectContacts= (state: RootState)=>state.contacts.items;
export const selectIsloading = (state: RootState)=> state.contacts.isLoading;
export const selectError = (state: RootState)=> state.contacts.error;