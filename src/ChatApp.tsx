import { AppRoutes } from "./Chat/Routes/AppRoutes"
import { ChatRoutes } from "./Router/ChatRoutes"


export const ChatApp = () => {
  return (
    <>
        <ChatRoutes/>
        <AppRoutes/>
    </>
  )
}
