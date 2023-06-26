import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      status:'not-authenticated',
      uid:'',
      name:''
    },
    reducers: {
         SetUser:(state,{payload})=>{
            state.uid=payload.uid;
            state.name=payload.name;
            state.status='authenticated';
         },
         SetLoading:(state)=>{
            state.status='loading';
         },
         clearAuthLogOut:(state)=>{
            state.uid='';
            state.name='';
            state.status='not-authenticated';
            localStorage.removeItem('x-token');
         }
    }
});


// Action creators are generated for each case reducer function
export const { SetUser,SetLoading,clearAuthLogOut } = AuthSlice.actions;