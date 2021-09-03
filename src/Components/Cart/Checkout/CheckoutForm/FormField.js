import React from 'react';

const FormField = ({ inputConfig }) => {
    const { type, label, name, placeholder, value, handleChange } = inputConfig;

    return (<div>
        <label htmlFor={name} className="form-label">{label}</label>
        <input type={type} value={value} className="form-control" onChange={handleChange} name={name} placeholder={placeholder} />
    </div>);
}

export default FormField;