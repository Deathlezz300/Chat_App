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
         }
    }
});


// Action creators are generated for each case reducer function
export const { SetUser,SetLoading } = AuthSlice.actions;