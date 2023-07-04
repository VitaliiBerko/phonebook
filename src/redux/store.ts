import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { contactsReducer } from "./contacts/contactsSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        // filter: 
        // auth: 
    },

    devTools: true,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor=persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch;

