import React, { Component } from 'react';
import {storeProducts,detailProduct } from './data';

const ProductContext = React.createContext();
//Provider 

//Consumer

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        modalProduct:detailProduct
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleItem ={...item};
            tempProducts=[...tempProducts,singleItem];

        });
        this.setState(()=>{
            return {products:tempProducts}
    });
}
    getItem=id=>{
        const product=this.state.products.find(item => item.id===id);
        return product;
    }
    handleDetails=(id)=>{
        const p1=this.getItem(id);
        this.setState(()=>{
            return{detailProduct:p1};
        })
    }

    addToCart= id =>{
        // console.log(`Hello from add to cart id is ${id}`);
        let tempProducts=[...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price = product.price;
        product.total=price;
        this.setState({products:tempProducts,cart:[...this.state.cart,product]},()=>this.addTotals())
    }

    // tester=()=>{
    //     console.log(this.state.products[0].inCart);
    //     console.log(storeProducts[0].inCart);

    //     const tempProducts=[...this.state.products];
    //     tempProducts[0].inCart=true;
    //     this.setState(()=>{return {products:tempProducts}},
    //     ()=>{
            
    //                 console.log(this.state.products[0].inCart)
    //                 console.log(storeProducts[0].inCart)
    //         }
            
    //     )
    // }
    openModal=id=>{
        const product = this.getItem(id);
        this.setState({modalProduct:product,modalOpen:true})
    }

    closeModal=()=>{
        this.setState({modalOpen:false})
    }
    
    increment=(id)=>{
        //console.log('Increment function');
        let tempCart = [...this.state.cart];
        const selectedProducts=tempCart.find(item=>item.id===id)

        const index =tempCart.indexOf(selectedProducts);
        const product=tempCart[index];

        product.count+=1
        product.total= product.count*product.price;

        this.setState({cart:[...tempCart]},this.addTotals())
    }

    decrement=(id)=>{
        //console.log('Decrement function')
        let tempCart = [...this.state.cart];
        const selectedProducts=tempCart.find(item=>item.id===id)

        const index =tempCart.indexOf(selectedProducts);
        const product=tempCart[index];

        product.count=product.count-1;
        
        if(product.count===0){
            this.removeItem(id);
        }
        else{
            product.total=product.count*product.price;
            this.setState({cart:[...tempCart]},this.addTotals())
        }
    }

    removeItem=(id)=>{
        // console.log('Item Remove function')
        let tempProducts =[...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart=tempCart.filter(item=>item.id!==id);

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count=0;
        removedProduct.total=0;

        this.setState({cart:[...tempCart],products:[...tempProducts]},this.addTotals())
    }

    cartClear=()=>{
        // console.log('Cart Clear function')
        this.setState({cart:[]},
            ()=>{
                this.setProducts();
                this.addTotals();
            })
    }

    addTotals=()=>{
        let subTotal = 0 ;
        this.state.cart.map(item=>(subTotal +=item.total))
        const tempTax=subTotal*0.1;
        const tax=parseFloat(tempTax.toFixed(2));
        const total=subTotal+tax;
        this.setState({cartSubTotal:subTotal,cartTax:tax,cartTotal:total})
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails:this.handleDetails,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                cartClear:this.cartClear,}}>
                {/* <button onClick={this.tester}>Test Me</button> */}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider};
