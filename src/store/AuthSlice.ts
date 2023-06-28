import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      status:'not-authenticated',
      errorMessage:null,
      uid:'',
      name:''
    },
    reducers: {
         SetUser:(state,{payload})=>{
            state.uid=payload.uid;
            state.name=payload.name;
            state.status='authenticated';
            state.errorMessage=null;
         },
         SetLoading:(state)=>{
            state.status='loading';
         },
         clearAuthLogOut:(state)=>{
            state.uid='';
            state.name='';
            state.status='not-authenticated';
            localStorage.removeItem('x-token');
         },
         setLoadingInit:(state)=>{
            state.status='loadingInit';
         },
         setErrorMessage:(state,{payload})=>{
            state.errorMessage=payload;
         },
         clearErrorMessage:(state)=>{
            state.errorMessage=null;
         }
    }
});


// Action creators are generated for each case reducer function
export const { SetUser,SetLoading,clearAuthLogOut,setLoadingInit,setErrorMessage,clearErrorMessage } = AuthSlice.actions;