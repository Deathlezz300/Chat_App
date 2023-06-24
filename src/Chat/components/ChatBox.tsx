import logo from '../../assets/Images/logo.webp'
import enviar from '../../assets/Images/enviar.webp'
import regresar from '../../assets/Images/regresar.webp'
import { EsconderChatBox } from '../../Helpers/MoverChatBox'

export const ChatBox = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
        <div className="w-[100%] flex justify-start pl-4 items-center h-[12%] gap-2 bg-[#373737]">
            <button type='button' onClick={EsconderChatBox}>
              <img src={regresar} className='w-[30px]' alt="" />
            </button>
            <img src={logo} className='w-[10%] lg:w-[5%]' alt="" />
            <h2 className='text-white font-rubik font-medium'>Alejandro</h2>
        </div>
        <div className='bg-gray-200 h-[75%]'>
        </div>
        <div className='w-[100%] flex justify-center gap-3 items-center h-[14%]'>
          <input type="text" placeholder='Su mensaje aqui' className='font-rubik font-semibold text-black w-[84%] py-2 rounded-lg
          indent-2 shadow-md outline-none lg:w-[90%]' />
          <img src={enviar} className='w-[32px] cursor-pointer' alt="" />
        </div>
    </div>
  )
}
