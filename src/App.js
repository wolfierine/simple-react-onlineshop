import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import Products from './components/Products'
import SingleProduct from './components/SingleProduct';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
    	<Router>
        <div className="page-grid">
          <div className="main-nav">
            <Nav />
          </div>
          <div className="page-content">
            <Route exact path='/' component={Page} />
            <Route path='/products' component={Products} />
            <Route path='/single-product/:itemId' component={SingleProduct} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
