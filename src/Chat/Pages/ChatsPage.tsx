import { useAuthStore } from "../../Hooks/useAuthStore"
import { useChatStore } from "../../Hooks/useChatStore"
import { ChatBox } from "../components/ChatBox"
import { ChatUserBox } from "../components/ChatUserBox"
import { Header } from "../components/Header"
import { useEffect } from "react"
import io from 'socket.io-client';
import {useMemo} from 'react'

export const ChatsPage = () => {

  const {chats,startLoadingChats,status,AgregarMensajeRecibido}=useChatStore();

  const {name,uid}=useAuthStore();

  const socket=useMemo(()=>{
      return io('http://localhost:8000',{
          extraHeaders:{
            'userid':uid
          }     
        })
    },[]);

    const DesconectarAntes=()=>{
      socket.disconnect();
    }


  useEffect(()=>{
    startLoadingChats();

  
    socket.on('nuevo_mensaje',message=>{
      console.log(message);
      AgregarMensajeRecibido(message);      
    });

    window.addEventListener('beforeunload',DesconectarAntes);

    return ()=>{
      window.removeEventListener('beforeunload',DesconectarAntes);
      socket.off('nuevo_mensaje');
    }
  
  },[]);


  if(status==='loading'){
    return <h1>No</h1>
  }

  return (
    <section className="w-[100%] flex flex-col justify-center items-center bg-[#222222]">
    <Header nombre={name} desconectar={()=>socket.disconnect()}/>
    <section className="flex justify-center h-auto items-center w-[100%] relative overflow-x-hidden">
        <div className="w-[100%] md:w-[40%] overflow-y-scroll" style={{height:'calc(100vh - 120px)'}}>
            {
                chats.map(mes=>{
                return <ChatUserBox pendientes={mes.user.pendientes} key={mes.user._id} id={mes.user._id}  mensajes={mes.user.messages} nombre={mes.user.name}/>
              }) 
            }
        </div>
        <div  id="chatbox" className="w-[100%] origin-right transition-all md:w-[60%] absolute md:relative 
         left-0 translate-x-[500%] md:translate-x-[0%]" style={{height:'calc(100vh - 120px)'}}>
            <ChatBox enviar1={socket}/>
        </div>
    </section>
    </section>
  )
}
