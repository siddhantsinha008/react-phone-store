import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './ButtonContainer';
import {ProductConsumer} from '../context';
// import {ModalContainer} from 'react-router-modal'
import Product from './Product';
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                    const {img,title,price}=value.modalProduct;

                    if(modalOpen === false){
                        return null;
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className='container'>
                                <div className='row'>
                                    <div
                                    id='modal'
                                    className='col-8 text-capitalize text-center mx-auto col-md-6 col-lg-4'>
                                        <h5>Item added</h5>
                                        <img src={img} className='img-fluid' alt='product-image' />
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>Price : $ {price}</h5>
                                        <Link to='/'><ButtonContainer onClick={()=>{closeModal()}}>
                                                Continue Shopping
                                        </ButtonContainer></Link>
                                        <Link to='/cart'><ButtonContainer onClick={()=>{closeModal()}}>
                                                Go To Cart
                                        </ButtonContainer></Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }  
                }
                }
            </ProductConsumer>
        )
    }
}

const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(57,57,57,0.1)!important;
display:flex;
align-items:center;
justify-content:center;
#modal{
    color:#c0c0c0!important;
    background:var(--mainCyan)!important;
    opacity:1;
}
`