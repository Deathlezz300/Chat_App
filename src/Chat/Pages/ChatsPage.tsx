import { useChatStore } from "../../Hooks/useChatStore"
import { ChatBox } from "../components/ChatBox"
import { ChatUserBox } from "../components/ChatUserBox"
import { Header } from "../components/Header"
import { useEffect } from "react"

export const ChatsPage = () => {

  const {chats,startLoadingChats,status}=useChatStore();

  useEffect(()=>{
    startLoadingChats();
  },[]);

  if(status==='loading'){
    return <h1>No</h1>
  }

  return (
    <section className="w-[100%] flex flex-col justify-center items-center bg-[#222222]">
    <Header/>
    <section className="flex justify-center h-auto items-center w-[100%] relative overflow-x-hidden">
        <div className="w-[100%] md:w-[40%] overflow-y-scroll" style={{height:'calc(100vh - 120px)'}}>
            {
                chats.map(mes=>{
                return <ChatUserBox key={mes.user._id} id={mes.user._id}  mensajes={mes.user.messages} nombre={mes.user.name}/>
              }) 
            }
        </div>
        <div id="chatbox" className="w-[100%] origin-right transition-all md:w-[60%] absolute md:relative 
         left-0 translate-x-[500%] md:translate-x-[0%]" style={{height:'calc(100vh - 120px)'}}>
            <ChatBox/>
        </div>
    </section>
    </section>
  )
}
