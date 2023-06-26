export const FormatoFecha=(fecha:string):string=>{
    const fechaDate=new Date(fecha);

    const horas=fechaDate.getHours().toString().padStart(2,'0');
    const minutos=fechaDate.getMinutes().toString().padStart(2,'0');

    return `${horas}:${minutos}`;
}