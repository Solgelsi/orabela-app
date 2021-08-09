import React, { useEffect, useState } from 'react';
import { taskPulsera } from '../../Apis/apis/pulseraApi.js';
import { taskAnillos } from '../../Apis/apis/anilloApi';
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {
    const [pulseras, setPulseras] = useState([]);
    const [anillos, setAnillos] = useState([]);

    /**
     * funcion que va a buscar por unica vez luego de que se renderize el componente
     * todas las pulseras y anillos
     */
    useEffect(() => {
        taskPulsera.then(result => { setPulseras(result) });
        taskAnillos.then(result => { setAnillos(result) });
    }, []);


    return (
        <div>
            <div className="text-center m-4">
                <h2>Pulseras</h2>
            </div>
            <div>
                <ItemList items={pulseras} />
            </div>
            <div className="text-center m-4">
                <h2>Anillos</h2>
            </div>
            <div>
                <ItemList items={anillos} />
            </div>
        </div>
    );
}

export default ItemListContainer;
