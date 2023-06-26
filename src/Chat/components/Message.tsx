import { FormatoFecha } from "../../Helpers/FormatoHoras"


interface props{
    mensaje:string,
    hora:string,
    userOwner:string,
    uid:string
}

export const Message = ({mensaje,hora,userOwner,uid}:props) => {
  return (
    <div className={`w-[100%] flex ${userOwner!=uid ? 'justify-start' : 'justify-end'} 
       items-center`}>
        <div className={`flex p-3 items-center justify-center gap-1 shadow-md 
            ${userOwner!=uid ? 'bg-[#292929] ml-2' : 'bg-[#1F772D] mr-2' } rounded-lg relative`}>
            <p className="font-rubik text-white">{mensaje}</p>
            <p className="text-gray-400 font-rubik text-[10px] absolute right-1 bottom-0">{FormatoFecha(hora)}</p>
        </div>
    </div>
  )
}
