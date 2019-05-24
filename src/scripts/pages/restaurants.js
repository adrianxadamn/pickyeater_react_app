import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from './../components/Restaurant';
import '../../styles/pages/restaurants.scss';

class Restaurants extends Component {

	state = {
		restaurants: []
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				const restarurants = res.data.slice(0, 9);
				this.setState({ restaurants: restarurants });
			});
	}

	render() {

		const restaurants = this.state.restaurants.map(restaurant => {
			return <Restaurant title={restaurant.title} body={restaurant.body} />
		});

		return (
			<ul className="restaurants">
				{restaurants}
			</ul>
		);
	}
};

export default Restaurants;