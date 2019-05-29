import React, { Component } from 'react';

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.sendRestaurantData = this.sendRestaurantData.bind(this);
	}

	sendRestaurantData(event) {
		console.log(this.props);
		this.props.addRestaurant(this.props)
	};

	render() {
		return (
			<li className="restaurant" key={this.props.id}>
				<div className="restaurant__container">
					<h3 className="restaurant__title">{this.props.name}</h3>
					<img className="restaurant__image" src={this.props.image_url} alt={this.props.name} /> 
					<address>{this.props.location.display_address}</address>
					<p className="restaurant__description">{this.props.body}</p>
					<button onClick={this.sendRestaurantData}>Add to Wishlist</button>
				</div>
			</li>
		);
	}
};

export default Restaurant;