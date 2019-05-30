import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Modal from './components/Modal';
import Defaults from './components/Defaults';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route exact path='/' component={ProductList}/>
      <Route  path='/details' component={Details}/>
      <Route  path='/cart' component={Cart}/>
      <Route   component={Defaults}/>
      </Switch>    
      <Modal />
    </React.Fragment>
  );
}

export default App;
