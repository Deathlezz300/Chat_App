import tigre from '../assets/Images/tigre.webp';
import toro from '../assets/Images/toro.webp';
import jirafa from '../assets/Images/jirafa.webp';
import venado from '../assets/Images/venado.webp';
import elefante from '../assets/Images/elefante.webp';

const imagenes=[tigre,toro,jirafa,venado,elefante];

export const RegresarImagen=():string=>{

    const aletaroio=Math.floor(Math.random()*5);
    return imagenes[aletaroio];

};