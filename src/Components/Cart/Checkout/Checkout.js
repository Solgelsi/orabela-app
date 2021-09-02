import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (<div>
        <div className=" container-fluid my-5 ">
            <div className="row justify-content-center ">
                <div className="col-xl-10">
                    <div className="shadow-lg ">
                        <div className="row justify-content-around p-5">
                            <div className="col-md-5">
                                <div>
                                    <div className="card-header pb-0">
                                        <h2 className="card-title space ">Checkout</h2>
                                        <hr className="my-0" />
                                    </div>
                                    <div className="card-body">
                                        
                                        <div className="row mt-4">
                                            <div className="col">
                                                <p className="text-muted mb-2">Detalles</p>
                                                <hr className="mt-0" />
                                            </div>
                                        </div>
                                        <div className="form-group"> <label  className="small text-muted mb-1">Nombre</label> <input type="text" className="form-control form-control-sm" /> </div>
                                        <div className="form-group"> <label  className="small text-muted mb-1">Apellido</label> <input type="text" className="form-control form-control-sm"  /> </div>
                                        {/* <div className="row no-gutters">
                                            <div className="col-sm-6 pr-sm-2">
                                                <div className="form-group"> <label for="NAME" className="small text-muted mb-1">VALID THROUGH</label> <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="06/21" /> </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group"> <label for="NAME" className="small text-muted mb-1">CVC CODE</label> <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="183" /> </div>
                                            </div>
                                        </div> */}
                                        <div className="row mb-md-5">
                                            <div className="col"> <button type="button" name=""  className="btn btn-lg btn-success">PURCHASE $37 SEK</button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div>
                                    <div className="card-header">
                                        <p className="card-text text-muted mt-md-4 mb-2 space">YOUR ORDER <span className=" small text-muted ml-2 cursor-pointer">EDIT SHOPPING BAG</span> </p>
                                        <hr className="my-2" />
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="row justify-content-between">
                                            <div className="col-auto col-md-7">
                                                <div className="media flex-column flex-sm-row"> <img className=" img-fluid" src="https://i.imgur.com/6oHix28.jpg" width="62" height="62" />
                                                    <div className="media-body my-auto">
                                                        <div className="row ">
                                                            <div className="col-auto">
                                                                <p className="mb-0"><b>EC-GO Bag Standard</b></p><small className="text-muted">1 Week Subscription</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" pl-0 flex-sm-col col-auto my-auto">
                                                <p className="boxed-1">2</p>
                                            </div>
                                            <div className=" pl-0 flex-sm-col col-auto my-auto ">
                                                <p><b>179 SEK</b></p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="row justify-content-between">
                                            <div className="col-auto col-md-7">
                                                <div className="media flex-column flex-sm-row"> <img className=" img-fluid " src="https://i.imgur.com/9MHvALb.jpg" width="62" height="62" />
                                                    <div className="media-body my-auto">
                                                        <div className="row ">
                                                            <div className="col">
                                                                <p className="mb-0"><b>EC-GO Bag Standard</b></p><small className="text-muted">2 Week Subscription</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                                <p className="boxed">3</p>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                                <p><b>179 SEK</b></p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="row justify-content-between">
                                            <div className="col-auto col-md-7">
                                                <div className="media flex-column flex-sm-row"> <img className=" img-fluid " src="https://i.imgur.com/6oHix28.jpg" width="62" height="62" />
                                                    <div className="media-body my-auto">
                                                        <div className="row ">
                                                            <div className="col">
                                                                <p className="mb-0"><b>EC-GO Bag Standard</b></p><small className="text-muted">2 Week Subscription</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                                <p className="boxed-1">2</p>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                                <p><b>179 SEK</b></p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="row ">
                                            <div className="col">
                                                <div className="row justify-content-between">
                                                    <div className="col-4">
                                                        <p className="mb-1"><b>Subtotal</b></p>
                                                    </div>
                                                    <div className="flex-sm-col col-auto">
                                                        <p className="mb-1"><b>179 SEK</b></p>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-between">
                                                    <div className="col">
                                                        <p className="mb-1"><b>Shipping</b></p>
                                                    </div>
                                                    <div className="flex-sm-col col-auto">
                                                        <p className="mb-1"><b>0 SEK</b></p>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-between">
                                                    <div className="col-4">
                                                        <p><b>Total</b></p>
                                                    </div>
                                                    <div className="flex-sm-col col-auto">
                                                        <p className="mb-1"><b>537 SEK</b></p>
                                                    </div>
                                                </div>
                                                <hr className="my-0" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Checkout;