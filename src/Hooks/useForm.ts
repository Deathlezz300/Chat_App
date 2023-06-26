import { ChangeEvent,useState } from "react"
import { useEffect } from "react";

export const useForm=<T extends object>(initialState:T)=>{

    const [form,Setform]=useState(initialState);

    useEffect(()=>{
        onResetForm();
    },[initialState])

    const onInputChange=({target}:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=target;
        Setform({
            ...form,
            [name]:value
        });
    }

    const onResetForm=()=>{
        Setform(initialState);
    }


    return{
        ...form,
        onInputChange,
        onResetForm
    }

}