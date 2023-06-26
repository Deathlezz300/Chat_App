import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useDispatch } from "react-redux";
import { setChats, setLoading } from "../store/ChatSlice";
import ChatApi from "../Api/ChatApi";
import { PeticionMessages, User, userMessages } from "../interfaces/ChatInterfaces";

interface useChat{
    status:string,
    chats:User[],
    startLoadingChats:()=>void
}

export const useChatStore=():useChat=>{

    const dispatch=useDispatch();

    const {status,chats}=useSelector((state:RootState)=>state.chat);

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

    return{
        status,
        chats,
        startLoadingChats
    }

}