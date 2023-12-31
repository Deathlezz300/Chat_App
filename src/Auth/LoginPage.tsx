import { useForm } from "../Hooks/useForm"
import logo2 from '../assets/Images/logo.webp'
import {Link} from 'react-router-dom'
import {FormEvent} from 'react'
import { useAuthStore } from "../Hooks/useAuthStore"
import { Error } from "./Error"
const initialState={
    email:'',
    password:''
}

export const LoginPage = () => {

   const {email,password,onInputChange}=useForm(initialState);

   const {onLogin,errorMessage,onClearErrorMessage,onSetErrorMessage}=useAuthStore();

   const onSubmitLogin=(evento:FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
        if(!email){
          return ;
        }

        if(password.length<6){
          onSetErrorMessage('La clave debe ser de mas de 6 caracteres');
        }else{
          onLogin(email,password);
        }
   }

  return (
    <>
    
        <section className="bg-[#222222] w-[100%] min-h-screen flex flex-col justify-center
        items-center">
          <form id="form1" onSubmit={onSubmitLogin} className={`py-6 w-[90%] md:w-[48%] xl:w-[35%] bg-[#141414] rounded-lg 
          shadow-md flex flex-col justify-center items-center ${!errorMessage ? 'gap-3' : 'gap-2'}`}>

            <div className="flex w-[90%] justify-center gap-1 items-center">
                <h1 className="font-rubik drop-shadow-lg text-white text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold after:content-['App'] after:text-[#19CC39]">Chat</h1> 
                <img src={logo2} className="w-[20%] drop-shadow-2xl" alt="" />   
            </div> 

            <div className='input-group'>
                <input required className='input-form font-rubik text-white font-medium' type="email" name='email' placeholder=' ' onChange={onInputChange} value={email} />
                <label className='label-input font-rubik'>Correo</label>
            </div>
            <div className='input-group'>
                <input required className='input-form font-rubik text-white font-medium' type="password" name='password' placeholder=' ' onChange={onInputChange} value={password} />
                <label className='label-input font-rubik'>Contraseña</label>
            </div>
            {
              errorMessage ? <Error errorMessage={errorMessage}/> : ''
            }
            <button type="submit" form="form1"
                className="w-[90%] font-rubik font-bold p-3 rounded-lg 
                shadow-md text-lg text-white bg-[#19CC39]">Iniciar Sesion</button>
            <div className="w-[90%] flex justify-end items-center gap-1 pt-2">
                <p className="text-white font-medium">¿No tienes cuenta?</p>
                <Link to='/register' onClick={()=>onClearErrorMessage()} className="text-[#19CC39] underline font-medium">Registrarse</Link>    
            </div>
          </form>
        </section>

    </>
  )
}
