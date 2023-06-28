import { createSlice } from '@reduxjs/toolkit';
import {User, mensaje, userMessages } from '../interfaces/ChatInterfaces';

export const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
      status:'not-loading',
      chats:[] as User[],
      activeChat:{} as userMessages,
      ultimoMensaje:{} as mensaje
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
            state.chats.forEach(chat=>{
               if(chat.user._id==payload._id){
                  chat.user.pendientes=false;
               }
            });
         },
         onNewAddMessage:(state,{payload}:{payload:mensaje})=>{
            state.ultimoMensaje=payload;
            state.chats.forEach(me=>{
               if(me.user._id==payload.userTo ||  me.user._id==payload.userOwner){
                  me.user.messages.push(payload);
                  if(me.user._id!=state.activeChat._id){
                     me.user.pendientes=true;
                     state.activeChat.pendientes=true;
                  }else{
                     state.activeChat.messages.push(payload);
                  }
               }
            });
         },
         clearDataChatLogOut:(state)=>{
            state.chats=[] as User[];
            state.activeChat={} as userMessages;
            state.ultimoMensaje={} as mensaje;
            state.status='not-loading';
         },
    }
});


// Action creators are generated for each case reducer function
export const { setLoading,setChats,setActiveChat,onNewAddMessage,clearDataChatLogOut} = ChatSlice.actions;