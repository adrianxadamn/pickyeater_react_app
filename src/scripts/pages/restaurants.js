import React, { Component } from 'react';
import Restaurant from '../components/Restaurant';
import Search from '../components/Search';
import '../../styles/pages/restaurants.scss';

class Restaurants extends Component {
	constructor(props) {
		super(props);
		this.getRestaurants = this.getRestaurants.bind(this);
		this.state = {
			restaurants: []
		}
	};

	getRestaurants(data) {
		console.log('getRestaurants:', data);
		this.setState({
			restaurants: data
		});
	}

	render() {
		const restaurants = this.state.restaurants.map(restaurant => {
			return <Restaurant title={restaurant.name} body={restaurant.rating} key={restaurant.id} />
		});

		return (
			<div>
				<Search getRestaurants={this.getRestaurants}/>
				<ul className="restaurants">
					{restaurants}
				</ul>
			</div>
		);
	}
};

export default Restaurants;