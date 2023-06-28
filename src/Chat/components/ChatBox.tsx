import enviar from '../../assets/Images/enviar.webp'
import regresar from '../../assets/Images/regresar.webp'
import { AlinearChat, EsconderChatBox } from '../../Helpers/MoverChatBox'
import { useChatStore } from '../../Hooks/useChatStore'
import { useAuthStore } from '../../Hooks/useAuthStore'
import { Message } from './Message'
import { useForm } from '../../Hooks/useForm'
import {useEffect,FormEvent} from 'react'
import { mensaje } from '../../interfaces/ChatInterfaces'
import {Socket} from 'socket.io-client'

const initalState={
  mensaje:''
}

interface props{
  enviar1:Socket
}

export const ChatBox = ({enviar1}:props) => {


  const {activeChat,onAddMessage}=useChatStore();

  const {uid}=useAuthStore();

  const {mensaje,onInputChange,onResetForm}=useForm(initalState);

  const onSendMessage=(evento:FormEvent<HTMLFormElement>)=>{
    evento.preventDefault();
    onAddMessage(activeChat._id,mensaje,enviar1);
    onResetForm();
  }

  useEffect(()=>{
    onResetForm();
  },[activeChat])

  return (
    <div className="flex flex-col w-[100%] h-[100%]">
        <div className="w-[100%] flex justify-start pl-4 items-center h-[12%] gap-2 bg-[#373737]">
            <button type='button' onClick={EsconderChatBox}>
              <img src={regresar} className='w-[30px]' alt="" />
            </button>
            <img src={activeChat.urlImage} className='w-[10%] sm:w-[6%] lg:w-[5%] rounded-lg' alt="" />
            <h2 className='text-white font-rubik font-medium'>{activeChat.name}</h2>
        </div>
        <div className='bg-gray-200 h-[75%] flex flex-col gap-1 overflow-y-scroll py-2'>
          {
            activeChat.messages?.map(me=>{
              return <Message key={me._id} mensaje={me.mensaje} hora={me.fecha} userOwner={me.userOwner} uid={uid}/>
            })
          }
        </div>
        <form onSubmit={onSendMessage} id='form-mes' className='w-[100%] flex justify-center gap-1 sm:gap-3 items-center h-[14%]'>
          <input type="text" placeholder='Su mensaje aqui' className='font-rubik font-semibold text-black w-[82%] py-2 rounded-lg
          indent-2 shadow-md outline-none md:w-[88%]' name='mensaje' value={mensaje} onChange={onInputChange} />
          <button className='border-none' type='button' form='form-mes'>
            <img  src={enviar} className='w-[32px] cursor-pointer' alt="" />
          </button>
        </form>
    </div>
  )
}
