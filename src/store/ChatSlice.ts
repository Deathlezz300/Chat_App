import { createSlice } from '@reduxjs/toolkit';
import {User } from '../interfaces/ChatInterfaces';

export const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
      status:'not-loading',
      chats:[] as User[],
      activeChat:{} as User
    },
    reducers: {
         setLoading:(state)=>{
            state.status='loading';
         },
         setChats:(state,{payload})=>{
            state.chats=payload;
            state.status='not-loading';
         },
         setActiveChat:(state,{payload})=>{
            state.activeChat=payload;
         }
    }
});


// Action creators are generated for each case reducer function
export const { setLoading,setChats,setActiveChat} = ChatSlice.actions;