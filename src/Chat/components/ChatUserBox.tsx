import { MostrarChatBox } from '../../Helpers/MoverChatBox'
import foto from '../../assets/Images/logo.webp'

export const ChatUserBox = () => {


  const onClickBox=()=>{
    MostrarChatBox();
  }

  return (
    <div onClick={onClickBox} className="relative group w-[100%] flex gap-4 py-3 bg-[#373737] border-t-[1px] 
    border-gray-300 cursor-pointer shadow-md transition-all">
        <img src={foto} className='ml-2 rounded-full w-[14%] md:w-[22%] lg:w-[10%]' alt="" />
        <div className='h-auto flex flex-col md:w-[66%] w-[81%] justify-center'>
            <h2 className='text-[#19CC39] font-rubik font-bold'>Alejandro</h2>
            <p className='text-white font-rubik'>Este es el ultimo mensaje enviado</p>
        </div>
        <div className="absolute top-0 h-full w-full z-5 opacity-0 bg-gray-400 transition-all group-hover:opacity-10" />
    </div>
  )
}
