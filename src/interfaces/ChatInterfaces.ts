export interface mensaje{
    _id:string,
    mensaje:string,
    fecha:string,
    userOwner:string,
    userTo:string
}

export interface userMessages{
    _id:string,
    name:string,
    messages:mensaje[],
    urlImage?:string
}

export interface User{
    user:userMessages
}

export interface PeticionMessages{
    ok?:boolean,
    MensajesFull:User[]
}

