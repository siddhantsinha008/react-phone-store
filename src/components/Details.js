import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer1,ButtonContainer2} from './ButtonContainer';
import {detailProduct} from '../data';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                        const {id,company,img,info,price,title,inCart}=value.detailProduct;
                        return(
                            <div className='container py-5'>
                                {/* title */}
                                <div className='row'>
                                    <div className='col-10 mx-auto text-center text-slanted text-orange my-5'>
                                    <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* end-title */}
                                {/* Product Info */}
                                <div className='row'>
                                    <div className='col-10 mx-auto col-md-6 text-captialize my-3 '>
                                        <img src={img} className="img-fluid" alt='Product   '/>
                                    </div>
                                    <div className='col-10 mx-auto col-md-6 text-captialize my-3 '>
                                        <h2>
                                            Model : {title}
                                        </h2>
                                        <h4 className='text-title text-muted text-uppercase mt-3 mb-2'>
                                            Made By: <span className='text-uppercase'>{company}</span>
                                        </h4>
                                        <h4 className='text-orange' >
                                            Price:<span>$</span>{price}
                                        </h4>
                                        <p className='text-uppercase mt-3 mb-0 '>
                                            some info about the Product:
                                        </p>
                                        <p className=' text-oranger text-muted lead'>
                                            {info}
                                        </p>
                                        <div>
                                            <Link to='/'>
                                            <ButtonContainer1>
                                                Back To Product
                                            </ButtonContainer1>
                                            </Link>
                                            <ButtonContainer2
                                                onClick={()=>{value.addToCart(id);
                                                            value.openModal(id);}
                                                            }
                                                disabled={inCart?true:false}>
                                                {inCart?'InCart':'Add To Cart'}
                                            </ButtonContainer2>
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* End of Product Info */}
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
