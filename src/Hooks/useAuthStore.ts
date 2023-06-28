import {useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../store/store"
import ChatApi from "../Api/ChatApi";
import { SetLoading, SetUser, clearAuthLogOut, clearErrorMessage, setErrorMessage, setLoadingInit } from "../store/AuthSlice";
import { useDispatch } from "react-redux";
import { AxiosError } from "axios";
import { customAxiosError } from "../interfaces/ChatInterfaces";

interface AuthHook{
    status:string,
    uid:string,
    name:string,
    onLogin:(email:string,password:string)=>void,
    onCreateUser:(email:string,password:string,name:string)=>void,
    StartAuthenticated:()=>void,
    errorMessage:string | null,
    onClearErrorMessage:()=>void,
    onSetErrorMessage:(error:string)=>void
}

export const useAuthStore=():AuthHook=>{

    const {status,uid,name,errorMessage}=useSelector((state:RootState)=>state.auth);

    const dispatch=useDispatch();

    const onLogin=async(email:string,password:string)=>{
        dispatch(SetLoading());
        try{
            const resp=await ChatApi.post('/login',{email,password});
            const data=resp.data;

            if(data.ok){
                localStorage.setItem('x-token',data.token);
                dispatch(SetUser({uid:data.uid,name:data.name}));
            }

        }catch(error){
            const axiosError=error as AxiosError;
            const data=axiosError.response?.data as customAxiosError;
            dispatch(setErrorMessage(data.message));
            dispatch(clearAuthLogOut());
        }

    }

    const onCreateUser=async(email:string,password:string,name:string)=>{
        dispatch(SetLoading());
        try{
            const resp=await ChatApi.post('/registrar',{name,email,password});
            const data=resp.data;

            if(data.ok){
                localStorage.setItem('x-token',data.token);
                dispatch(SetUser({uid:data.uid,name:data.name}));
            }

        }catch(error){
            const axiosError=error as AxiosError;
            const data=axiosError.response?.data as customAxiosError;
            dispatch(setErrorMessage(data.message));
            //console.log(error);
            dispatch(clearAuthLogOut());
        }
    }

    const StartAuthenticated=async()=>{
        dispatch(setLoadingInit());
        try{

             if(localStorage.getItem('x-token')){
                const resp=await ChatApi.get('/renovar');
                const data=resp.data;
                if(data.ok){
                    localStorage.setItem('x-token',data.token);
                    dispatch(SetUser({uid:data.uid,name:data.name}))
                }
             }else{
                dispatch(clearAuthLogOut());
             }

        }catch(error){
            dispatch(clearAuthLogOut());
        }
    }

    const onClearErrorMessage=()=>{
        dispatch(clearErrorMessage());
    }

    const onSetErrorMessage=(error:string)=>{
        dispatch(setErrorMessage(error));
    }

    return{
        status,
        uid,
        name,
        onLogin,
        onCreateUser,
        StartAuthenticated,
        errorMessage,
        onClearErrorMessage,
        onSetErrorMessage
    }

}