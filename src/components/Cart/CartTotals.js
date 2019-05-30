import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const{cartSubTotal,cartTax,cartTotal,cartClear}=value; 
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 text-capitalize text-right mt-2 ml-sm-5 ml-md-auto col-sm-8'>
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                            onClick={()=>cartClear()}
                            type='button'>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className='text-title'>subtotal -</span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>Tax -</span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className='text-title'>total -</span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
