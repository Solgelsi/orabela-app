import React, { useContext } from 'react';
import FormField from './FormField';
import { CartContext } from '../../../../Context/cartContext';

const CheckoutForm = () => {
    const { buyer, setBuyer } = useContext(CartContext);
    const { nombre, apellido, mail, edad, direccion } = buyer;

    const handleChange = (evt) => {
        setBuyer({ ...buyer, [evt.target.name]: evt.target.value });
    }

    return (<div>
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
                    <FormField inputConfig={{ type: "email", label: "Confirmación email", name: "conf-mail", placeholder: "Ingrese nuevamente su e-mail", value: '', handleChange }}></FormField>
                </div>
            </div>
            <div className="row no-gutters mt-2">
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "number", label: "Edad", name: "edad", placeholder: "Ingrese su edad", value: edad, handleChange }}></FormField>
                </div>
                <div className="col-sm-6 pr-sm-2">
                    <FormField inputConfig={{ type: "text", label: "Dirección", name: "direccion", placeholder: "Ingrese su dirección", value: direccion, handleChange }}></FormField>
                </div>
            </div>

        </div>
    </div>);
}

export default CheckoutForm;