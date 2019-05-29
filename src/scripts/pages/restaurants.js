import React, { Component } from 'react';
import axios from '../../config/axios-restaurants';
import Restaurant from '../components/Restaurant';
import Search from '../components/Search';
import '../../styles/pages/restaurants.scss';

class Restaurants extends Component {
	constructor(props) {
		super(props);
		this.getRestaurants = this.getRestaurants.bind(this);
		this.addRestaurant = this.addRestaurant.bind(this);
		this.state = {
			restaurants: []
		}
	};

	getRestaurants(config) {
		// axios.get('https://api.yelp.com/v3/businesses/search', config)
		// https://cors-anywhere.herokuapp.com/ is an url we can use to bypass CORS when making api calls
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
			.then(res => {
				const businesses = res.data.businesses;
				console.log(businesses);
				businesses.slice(0, 9)
				this.setState({
					restaurants: businesses
				});
			});
	}

	addRestaurant(data) {
		console.log('addRestaurant:', data);
		axios.post('/restaurants.json', data)
			.then(res => console.log(res))
			.then(err => console.log(err));
	};

	render() {
		const restaurants = this.state.restaurants.map(restaurant => {
			return <Restaurant {...restaurant} key={restaurant.id} addRestaurant={this.addRestaurant} />
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