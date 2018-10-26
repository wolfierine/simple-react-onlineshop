import React, { Component } from 'react';
import Slide from '../components/Slide';
import clothes2 from '../images/pants5.png';
import clothes3 from '../images/scarf1.png';

class Slider extends Component {
	render(){
		return (
			<div className="sliderContainer">
				<Slide clothesName="Dress, 79$" clothesImg="http://pngimg.com/uploads/dress/dress_PNG188.png" clothesNum='1' />
				<Slide clothesName="Jeans 119$" clothesImg={clothes2} clothesNum='2' />
				<Slide clothesName="Scarf, 20$" clothesImg={clothes3} clothesNum='3' />
			</div>
		)
	}
}



export default Slider