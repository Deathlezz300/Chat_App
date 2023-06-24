import { ChatBox } from "../components/ChatBox"
import { ChatUserBox } from "../components/ChatUserBox"
import { Header } from "../components/Header"


export const ChatsPage = () => {
  return (
    <section className="w-[100%] flex flex-col justify-center items-center bg-[#222222]">
    <Header/>
    <section className="flex justify-center h-auto items-center w-[100%]">
        <div className="w-[100%] md:w-[40%] overflow-y-scroll" style={{height:'calc(100vh - 120px)'}}>
            <ChatUserBox/>
            <ChatUserBox/>
        </div>
        <div className="w-[60%] border-2 border-white" style={{height:'calc(100vh - 120px)'}}>
            <ChatBox/>
        </div>
    </section>
    </section>
  )
}
