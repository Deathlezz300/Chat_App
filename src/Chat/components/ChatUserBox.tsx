import { MostrarChatBox } from '../../Helpers/MoverChatBox'
import { mensaje } from '../../interfaces/ChatInterfaces'
import { useDispatch } from 'react-redux'
import { setActiveChat } from '../../store/ChatSlice'
import { RegresarImagen } from '../../Helpers/ImagenAleatorio'
import { useMemo } from 'react'


interface props{
  id:string,
  nombre:string,
  mensajes:mensaje[],
  pendientes:boolean | undefined
}


export const ChatUserBox = ({id,nombre,mensajes,pendientes}:props) => {

  const dispatch=useDispatch();


  const imagen1=useMemo(()=>RegresarImagen(),[]);

  const onClickBox=()=>{
    MostrarChatBox();
    dispatch(setActiveChat({
      _id:id,
      name:nombre,
      messages:mensajes,
      urlImage:imagen1
    }));

  };

  return (
    <div onClick={onClickBox} className="relative group w-[100%] flex justify-between gap-4 py-3 bg-[#373737] border-t-[1px] 
    border-gray-300 cursor-pointer shadow-md transition-all items-center">
        <div className='flex w-[100%] gap-2'>
          <img src={imagen1} className='object-cover max-h-[150px] ml-2 rounded-lg w-[14%] md:w-[22%] lg:w-[10%]' alt="" />
          <div className='flex flex-col h-auto md:w-[66%] w-[81%] justify-center'>
              <h2 className='text-[#19CC39] font-rubik font-bold'>{nombre}</h2>
              <p className='text-white font-rubik'>{mensajes?.length>0 ? mensajes[mensajes.length-1].mensaje : 'No hay mensajes'}</p>
          </div>
        </div>
        <div className="absolute top-0 h-full w-full z-5 opacity-0 bg-gray-400 transition-all group-hover:opacity-10" />
        <div className={`bg-[#19CC39] w-[13px] h-[13px] rounded-full mr-3 ${pendientes ? 'block' : 'hidden'}`}></div>
    </div>
  )
}
