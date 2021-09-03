import React from 'react';

const CheckOutDetail = ({ purchase }) => {
    const { quantity, item: { title, img, description, price } } = purchase;

    return (<div>
        <div className="row justify-content-between">
            <div className="col-auto col-md-7">
                <div className="media flex-column flex-sm-row"> <img className="img-fluid" alt={title} src={img} width="100" height="100" />
                    <div className="media-body my-auto">
                        <div className="row ">
                            <div className="col-auto">
                                <p className="mb-0"><b>{title}</b></p><small className="text-muted">{description}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" pl-0 flex-sm-col col-auto my-auto">
                <p className="boxed-1">{quantity}</p>
            </div>
            <div className=" pl-0 flex-sm-col col-auto my-auto">
                <p className="boxed-1">$ {price}</p>
            </div>
            <div className=" pl-0 flex-sm-col col-auto my-auto ">
                <p><b>$ {price * quantity}</b></p>
            </div>
        </div>
        <hr className="my-2" />
    </div>);
}

export default CheckOutDetail;