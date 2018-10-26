import React, { Component } from 'react';
import products from '../data/products.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SingleProduct extends Component {

    state = {
        products: products,
        productid: this.props.match.params.itemId,
        product: []
    }


    componentDidMount = () => {
        let single_product = this.state.products.filter( product => product.id == this.state.productid );
        this.setState({ product: single_product });
	}


  render() {
    const {itemId} = this.props.match.params;
    const {product} = this.state;
    return (
        <div className="single-product-wrapper">
            <div className="back-to-shop-btn">
                <Link to={`/products`}>&lsaquo; &lsaquo; &lsaquo;    back to shop</Link>
            </div>
            <div className="single-product">
                <div className="left-col">
                    <div className="product-thumb" style={{backgroundImage: `url(${product.map( p => p.image )})` }}></div>
                    <p className="product-price">{product.map( p => p.price )} $</p>
                </div>
                <div className="right-col">
                    {product.map( p => <h1 className="product-title">{p.name}</h1> )}
                    {product.map( p => <p className="product-description">{p.description}</p> )}
                </div>
            </div>
        </div>
    );
  }
}

export default SingleProduct;
