import React from 'react';

const CurrencyFormater = ({ price }) => {
    return <>{new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(price)}</>
}
export default CurrencyFormater;