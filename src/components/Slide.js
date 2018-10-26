import React, { Component } from 'react';


class Slide extends Component {
	static defaultProps = {
    	slideDrinks: 3,
	}

	state = {
		drink: 1
	}

  	slider = () => {
  		this.setState({drink: this.state.drink < this.props.slideDrinks ? this.state.drink + 1 : 1 })
  	}

	componentDidMount = () => {
		setInterval(this.slider, 5000)
	}

	render() {
		const {clothesNum, clothesImg, clothesName} = this.props;
		return (
			<div className={"slide-drink " + (this.state.drink === parseInt(clothesNum) ? 'showtime' : '')}>
				<img src={clothesImg} alt={clothesName} />
				<h1>{clothesName}</h1>
			</div>
		)
	}

}

export default Slide;