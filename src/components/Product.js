import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                
                <div className='card'>
                    <ProductConsumer> 
                    {(context)=>(
                        <div
                        className='img-container p-5'
                        onClick={() => context.handleDetails(id)}
                        > 
                        <Link to="/details">
                            <img src={img} alt="Product" className='card-img-top'/>
                        </Link>
                        <button className='cart-btn' 
                        disabled={inCart?true:false}
                        onClick={()=>{context.addToCart(id);
                        context.openModal(id);}}            > 
                        {
                            inCart?
                            (<p className='text-capitablized mb-0' disabled>InCart</p>)
                            :(<i className='fas fa-cart-plus'/>)
                        }
                        </button>
                    </div>
                    )}
                    </ProductConsumer>
                
                {/* Card Footer */}
                <div className='d-flex justify-content-between card-footer'>
                    <p className='align-self-center mb-0' style={{fontSize:20}}>{title}</p>
                    <h5 className='text-orange font-italic mb-0'>
                        <span className='mr-1'>
                            $
                        </span>
                        {price}
                    </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}

&:hover{
    .card{
        border:0.04rem solid rgba(1,1,1,0.5)
        box-shadow:2px 2px 5px 0px rgba(1,1,1,0.5)
    }

    .card-footer{
        background:rgba(247,247,247)
    }

    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.3);
    }
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem; 
    background:var(--mainBlack);
    border:none;
    color:var(--mainBlack);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100% ,100%);
    // from{opacity:100%;}
    // to{opacity:0;}
    
    transition:all 1s linear;
}

.img-container:hover .cart-btn{
    // from{opacity:0%;}
    // to{opacity:100%;}
    background:var(--mainCyan);
    color:white;
    transform:translate(0,0);
    transition:all 1s linear;
}

.cart-btn:hover{
    background:var(--mainCyan)!important;
    color:var(--darkCyan)!important;
}

// .title-fade-in{
//     opacity: 100;
//     animation-name: fade-in;
//     animation-duration: 2s;
// }

// .title-fade-out{
//     opacity: 0;
//     animation-name:fade-out;
//     animation-duration:2s; 
// }

// @keyframes fade-in{
//     from{opacity:0;}
//     to{opacity: 100;}
// }


// @keyframes fade-out{
//     from{opacity:100;}
//     to{opacity: 0;}
// }
`