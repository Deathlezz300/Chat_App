import { AppRoutes } from "./Chat/Routes/AppRoutes"
import { useAuthStore } from "./Hooks/useAuthStore"
import { ChatRoutes } from "./Router/ChatRoutes"
import { useEffect } from "react"
import {Routes,Route, Navigate} from 'react-router-dom'
import { Loader } from "./Chat/components/Loader"

export const ChatApp = () => {

  const {StartAuthenticated,status}=useAuthStore();

  useEffect(()=>{
    StartAuthenticated();
  },[])

  if(status==='loadingInit'){
    return <Loader/>
  }

  return (
    <>
    {
      status==='loading' ? <Loader/> :''
    }
    <Routes>
          {
            status==='authenticated' ?  <Route path="/*" element={<AppRoutes/>}/> : <Route path="/*" element={<ChatRoutes/>}/>
          }      
    </Routes>
    </>
  )
}
