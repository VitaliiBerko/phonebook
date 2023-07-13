import { RootState } from "../store";

export const selectAuthToken = (state : RootState)=> state.auth.token;
export const selectName = (state: RootState) => state.auth.user.name;
export const selectIsRefreshing = (state: RootState)=> state.auth.isRefreshing
export const selectIsLoading = (state: RootState)=>state.auth.isLoading;