export const MostrarChatBox=()=>{
    const chatbox=document.getElementById("chatbox");
    chatbox?.classList.remove('translate-x-[500%]');
    chatbox?.classList.add('translate-x-[0%]');
}

export const EsconderChatBox=()=>{
    if(document.documentElement.clientWidth<768){
        const chatbox=document.getElementById("chatbox");
        chatbox?.classList.remove('translate-x-[0%]');
        chatbox?.classList.add('translate-x-[500%]');
    }
}