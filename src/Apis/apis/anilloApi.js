import { anillos } from '../dataSource/anillos';

export const taskAnillos = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(anillos);
    },3000);
});