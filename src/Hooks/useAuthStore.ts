import {useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../store/store"
import ChatApi from "../Api/ChatApi";
import { SetLoading, SetUser, clearAuthLogOut } from "../store/AuthSlice";
import { useDispatch } from "react-redux";

interface AuthHook{
    status:string,
    uid:string,
    name:string,
    onLogin:(email:string,password:string)=>void,
    onCreateUser:(email:string,password:string,name:string)=>void,
    StartAuthenticated:()=>void
}

export const useAuthStore=():AuthHook=>{

    const {status,uid,name}=useSelector((state:RootState)=>state.auth);

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
            //console.log(error);
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
            //console.log(error);
            dispatch(clearAuthLogOut());
        }
    }

    const StartAuthenticated=async()=>{
        dispatch(SetLoading());
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
            //console.log(error);
            dispatch(clearAuthLogOut());
        }
    }

    return{
        status,
        uid,
        name,
        onLogin,
        onCreateUser,
        StartAuthenticated
    }

}