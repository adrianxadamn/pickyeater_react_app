import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from './../components/Restaurant';
import '../../styles/pages/restaurants.scss';

const config = {
	headers: {
		'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
	},
	params: {
		term: 'tacos',
		location: 'main 123st'
	}
};

class Restaurants extends Component {

	state = {
		restaurants: []
	}

	componentDidMount() {
		// axios.get('https://api.yelp.com/v3/businesses/search', config)

		// https://cors-anywhere.herokuapp.com/ is a url we can use to bypass CORS when making api calls
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
			.then((res) => {
				const businesses = res.data.businesses;
				console.log(businesses);
				this.setState({ restaurants: businesses.slice(0, 9) });
			});
	}

	render() {

		const restaurants = this.state.restaurants.map(restaurant => {
			return <Restaurant title={restaurant.name} body={restaurant.rating} key={restaurant.id} />
		});

		return (
			<ul className="restaurants">
				{restaurants}
			</ul>
		);
	}
};

export default Restaurants;