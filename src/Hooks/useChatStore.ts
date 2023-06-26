import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useDispatch } from "react-redux";
import { onNewAddMessage, setChats, setLoading } from "../store/ChatSlice";
import ChatApi from "../Api/ChatApi";
import {  User, userMessages } from "../interfaces/ChatInterfaces";

interface useChat{
    status:string,
    chats:User[],
    activeChat:userMessages
    startLoadingChats:()=>void,
    onAddMessage:(userTo:string,mensaje:string)=>void
}

export const useChatStore=():useChat=>{

    const dispatch=useDispatch();

    const {status,chats,activeChat}=useSelector((state:RootState)=>state.chat);

    const startLoadingChats=async()=>{

        dispatch(setLoading());

        try{

            const resp=await ChatApi.get('/chats');
            const data=resp.data;

            if(data.ok){
                dispatch(setChats(data.MensajesFull));
            }

        }catch(error){
            console.log(error);
        }
        

    }

    const onAddMessage=async(userTo:string,mensaje:string)=>{

        try{

            const fecha=new Date()
            const resp=await ChatApi.post('/mensaje',{userTo,mensaje,fecha});
            const data=resp.data;

            if(data.ok){
                dispatch(onNewAddMessage({
                    _id:data.MensajeGuardado._id,
                    fecha:data.MensajeGuardado.fecha,
                    userTo:data.MensajeGuardado.userTo,
                    mensaje:data.MensajeGuardado.mensaje,
                    userOwner:data.MensajeGuardado.userOwner
                }));
            }

        }catch(error){
            console.log(error);
        }

    }

    return{
        status,
        chats,
        startLoadingChats,
        activeChat,
        onAddMessage
    }

}