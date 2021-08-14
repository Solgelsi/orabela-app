import React from 'react';
import './Loader.css';

const Loader = () => (
    <div className="container mt-5">
        <div className="row text-center">
            <div className="col">
                <div className="lds-roller">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    </div>
);

export default Loader;