import React, { useContext, useEffect, useState } from 'react';
import FormField from './FormField';
import { CartContext } from '../../../../Context/cartContext';

const CheckoutForm = ({ onChangeForm }) => {
    const { buyer, setBuyer } = useContext(CartContext);
    const [confEmail, setConfEmail] = useState('');
    const { nombre, apellido, mail, edad, telefono } = buyer;

    const handleChange = (evt) => {
        setBuyer({ ...buyer, [evt.target.name]: evt.target.value });
    }
    const handleChangeEmail = (evt) => {
        setConfEmail(evt.target.value);
    }

    useEffect(() => {
        onChangeForm(!Object.values(buyer).some(v => v === "") && (mail === confEmail));
    }, [buyer, confEmail]);


    return (<div>
        <div className="card-header pb-0">
            <h5 className="">Detalles del comprador</h5>
            <hr className="my-0" />
        </div>
        <div className="mt-4">
            <div className="row no-gutters">
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "text", label: "Nombre", name: "nombre", placeholder: "Ingrese su nombre", value: nombre, handleChange }}></FormField>
                </div>
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "text", label: "Apellido", name: "apellido", placeholder: "Ingrese su apellido", value: apellido, handleChange }}></FormField>
                </div>
            </div>
            <div className="row no-gutters mt-2">
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "email", label: "Email", name: "mail", placeholder: "Ingrese su e-mail", value: mail, handleChange }}></FormField>
                </div>
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "email", label: "Confirmación email", name: "conf-mail", placeholder: "Ingrese nuevamente su e-mail", value: confEmail, handleChange: handleChangeEmail }}></FormField>
                </div>
            </div>
            <div className="row no-gutters mt-2">
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "number", label: "Edad", name: "edad", placeholder: "Ingrese su edad", value: edad, handleChange }}></FormField>
                </div>
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "number", label: "Teléfono", name: "telefono", placeholder: "Ingrese su teléfono", value: telefono, handleChange }}></FormField>
                </div>
            </div>

        </div>
    </div>);
}

export default CheckoutForm;