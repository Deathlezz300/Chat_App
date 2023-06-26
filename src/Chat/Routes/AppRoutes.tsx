import {Routes,Route,Navigate} from 'react-router-dom'
import { ChatsPage } from '../Pages/ChatsPage'

export const AppRoutes = () => {
  return (
    <Routes>

        <Route path='chats' element={<ChatsPage/>}/>
        <Route path='/*' element={<Navigate to='/chats'/>}/>
    </Routes>
  )
}
