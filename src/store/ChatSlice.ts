import { createSlice } from '@reduxjs/toolkit';
import {User, mensaje, userMessages } from '../interfaces/ChatInterfaces';

export const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
      status:'not-loading',
      chats:[] as User[],
      activeChat:{} as userMessages
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
         },
         onNewAddMessage:(state,{payload}:{payload:mensaje})=>{
            state.activeChat.messages.push(payload);
            state.chats.forEach(me=>{
               if(me.user._id==payload.userTo ||  me.user._id==payload.userOwner){
                  me.user.messages.push(payload);
               }
            });
         },
         clearDataChatLogOut:(state)=>{
            state.chats=[] as User[];
            state.activeChat={} as userMessages;
            state.status='not-loading';
         }
    }
});


// Action creators are generated for each case reducer function
export const { setLoading,setChats,setActiveChat,onNewAddMessage,clearDataChatLogOut} = ChatSlice.actions;