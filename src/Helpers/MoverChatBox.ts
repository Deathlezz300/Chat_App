export const MostrarChatBox=()=>{
    const chatbox=document.getElementById("chatbox");
    chatbox?.classList.remove('translate-x-[500%]');
    chatbox?.classList.add('translate-x-[0%]');
    const logo=document.getElementById("head-derecha");
    logo?.classList.remove('hidden');
    logo?.classList.add('flex');
    const persona=document.getElementById("head-izquierda");
    persona?.classList.add('hidden');
}

export const EsconderChatBox=()=>{
    if(document.documentElement.clientWidth<768){
        const chatbox=document.getElementById("chatbox");
        chatbox?.classList.remove('translate-x-[0%]');
        chatbox?.classList.add('translate-x-[500%]');
        const logo=document.getElementById("head-derecha");
        logo?.classList.add('hidden');
        logo?.classList.remove('flex');
        const persona=document.getElementById("head-izquierda");
        persona?.classList.remove('hidden');
    }
}

export const AlinearChat=()=>{
    const chatbox=document.getElementById("divScroll") as HTMLElement;
    if(chatbox){
        chatbox.scrollTop=chatbox.scrollHeight;
    }
}