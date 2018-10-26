import React, {Component} from 'react';
import products from '../data/products.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Products extends Component{
    
    state = {
        products: products,
        filteredProducts: products,
        isActive: false
    }

    filterByCat = (cat) => {
        let filtered = this.state.products.filter( product => product.category === cat );
        this.setState({ filteredProducts: filtered });
    }

    filterBySize = (size) => {
        let filtered = this.state.products.filter( product => product.size === size );
        this.setState({ filteredProducts: filtered });
    }

    filterByColor = (color) => {
        let filtered = this.state.products.filter( product => product.color === color );
        this.setState({ filteredProducts: filtered });
    }

    sortBy = (e) => {
        // higher to lower
        console.log(e.target.value);
        let sorted;
        if(e.target.value === "high-to-low") sorted = this.state.filteredProducts.sort( (a,b) => b.price - a.price);
        if(e.target.value === "low-to-high") sorted = this.state.filteredProducts.sort( (a,b) => a.price - b.price);
        this.setState({ filteredProducts: sorted });
    }

    resetFilters = () => {
        this.setState({ filteredProducts: this.state.products });
    }


    showCategories = () => {
        const cats = this.state.products.map( product => product.category );
        let categories = [...new Set(cats)].sort();
        let show_categories = categories.map( (cat,i) => <li key={i} className="filter" onClick={ () => this.filterByCat(cat) }>{cat}</li> )
        return show_categories;
    }

    showSizes = () => {
        const sizes = this.state.products.map( product => product.size );
        let size = [...new Set(sizes)].sort( (a,b) => a-b );
        let show_sizes = size.map( (size,i) => <li key={i} className="filter" onClick={ () => this.filterBySize(size) }>{size}</li> )
        return show_sizes;
    }

    showColors = () => {
        const colors = this.state.products.map( product => product.color );
        let color = [...new Set(colors)].sort();
        let show_colors = color.map( (color,i) => <li key={i} className="filter" onClick={ () => this.filterByColor(color) }>{color}</li> )
        return show_colors;
    }


    render() {
        return(
            <div className="shop-container">
                <div className="filter">
                    <p className="filter-all" onClick={this.resetFilters}>Reset filters</p>
                    <ul>
                        <h3>Search by category:</h3>
                        {this.showCategories()}
                    </ul>
                    <ul>
                        <h3>Search by size:</h3>
                        {this.showSizes()}
                    </ul>
                    <ul>
                        <h3>Search by color:</h3>
                        {this.showColors()}
                    </ul>
                    <select id="sortBy" onChange={ (e) => this.sortBy(e) }>
                        <option value="high-to-low">price from higher to lower</option>
                        <option value="low-to-high">price from lower to higher</option>
                    </select>
                </div>
                <div className="products">
                    {this.state.filteredProducts.map( product => 
                        <div className="product" key={product.id}>
                            <h2 className="product-title">{product.name}</h2>
                            <div className="product-thumb" style={{backgroundImage: `url(${product.image})` }}></div>
                            <div className="product-meta">
                                <p className="product-price">{product.price} $</p>
                                <Link className="product-link" to={`/single-product/${product.id}`}>More info</Link>
                            </div>
                        </div> )}
                </div>
            </div>
        )
    }
}

export default Products;