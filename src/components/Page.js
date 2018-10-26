import React, { Component } from 'react';
import Slider from './Slider';
import Products from './Products';

class Page extends Component {
  render() {
    return (
    	<div className="page">
            <Slider />
        </div>
    );
  }
}

export default Page;
