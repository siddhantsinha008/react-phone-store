import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import './navbar.css';
import {ButtonContainer} from './ButtonContainer';
class Navbar extends Component {
    render() {
        return (
            <div className='nav1'>
                <nav className="navbar navbar-expand-sm g-primary navbar-dark px-sm-5"  >
                    <Link to='/'>
                        <img src={logo} alt='logo che' className="navbar-brand" style={{color:'#393939'}} />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className='nav-item'>
                            <Link to='/'>
                                <h2  style={{color:'#393939',textDecoration:'none',fontSize:27,marginLeft:'15px'}}>
                                    Product
                                </h2>
                            </Link>
                        </li>
                    </ul>
                    <Link to='/cart' className="ml-auto">
                        <ButtonContainer>
                            <i className='fas fa-cart-plus' />
                            My Cart
                        </ButtonContainer>
                    </Link>
                </nav>
            </div>
        );
    }
}





export default Navbar;  