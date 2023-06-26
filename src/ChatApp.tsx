import { AppRoutes } from "./Chat/Routes/AppRoutes"
import { useAuthStore } from "./Hooks/useAuthStore"
import { ChatRoutes } from "./Router/ChatRoutes"
import { useEffect } from "react"
import {Routes,Route, Navigate} from 'react-router-dom'

export const ChatApp = () => {

  const {StartAuthenticated,status}=useAuthStore();

  useEffect(()=>{
    StartAuthenticated();
  },[])

  if(status==='loading'){
    return <h2>Cargando...</h2>
  }

  return (
    <Routes>
          {
            status==='authenticated' ?  <Route path="/*" element={<AppRoutes/>}/> : <Route path="/*" element={<ChatRoutes/>}/>
          }      
    </Routes>
  )
}
