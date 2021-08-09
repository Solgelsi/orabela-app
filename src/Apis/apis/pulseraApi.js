import { pulseras } from '../dataSource/pulseras';

export const taskPulsera = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(pulseras);
    },3000);
});