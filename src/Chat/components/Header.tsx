import { RegresarImagen } from '../../Helpers/ImagenAleatorio';
import logo from '../../assets/Images/logo.webp';
import {useMemo} from 'react'
import salir from '../../assets/Images/salir.webp'
import { useDispatch } from 'react-redux';
import { clearDataChatLogOut } from '../../store/ChatSlice';
import { clearAuthLogOut } from '../../store/AuthSlice';

interface props{
  nombre:string,
  desconectar:()=>void
}

export const Header = ({nombre,desconectar}:props) => {

  const dispatch=useDispatch();

  const imagen=useMemo(()=>RegresarImagen(),[]);

  const onSalir=()=>{
    desconectar();
    dispatch(clearDataChatLogOut());
    dispatch(clearAuthLogOut());
  }

  return (
    <header className='bg-[#222222] h-[120px] gap-2 flex w-[100%] justify-center items-center'>
        <div id='head-izquierda' className='w-[100%] md:w-[40%] h-[100%] flex justify-between items-center md:flex border-r-[1px] border-white'>
            <div className='flex pl-4 items-center gap-3'>
              <img src={imagen} className='rounded-lg w-[15%]' alt="" />
              <h2 className='text-white font-rubik font-bold text-3xl'>{nombre}</h2>
            </div>
            <button type='button' onClick={onSalir} className='mr-2'>
                <img src={salir} className='w-[45px] md:w-[65px]' alt="" />
              </button>
        </div>
        <div id='head-derecha' className='hidden md:w-[60%] md:flex justify-center items-center h-[100%]'>
          <h1 className="font-rubik drop-shadow-lg text-white text-5xl 
          sm:text-6xl md:text-5xl lg:text-6xl font-bold after:content-['App'] after:text-[#19CC39]">Chat</h1>
          <img className='w-[10%] lg:w-[5%]' src={logo} alt="" />
        </div>
    </header>
  )
}
