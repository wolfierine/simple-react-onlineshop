import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
	render(){
		return (
			<nav>
                <div className="nav-grid">
                    <Link to={`/`} className="logo"><h1>Ekin</h1></Link>
                    <ul className="main-menu">
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/products`}>Shop</Link></li>
                    </ul>
                </div>
            </nav>
		)
	}
}



export default Nav