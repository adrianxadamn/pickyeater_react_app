import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.sendData = this.sendData.bind(this);
		this.state = {
			term: '',
			location: '',
			radius: 1609 // default value
		}
	};

	sendData(event) {
		event.preventDefault();
		const config = {
			headers: {
				'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
			},
			params: {
				term: this.state.term,
				location: this.state.location,
				radius: this.state.radius
			}
		};
		console.log(config.params);
		// axios.get('https://api.yelp.com/v3/businesses/search', config)
		// https://cors-anywhere.herokuapp.com/ is an url we can use to bypass CORS when making api calls
		axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
			.then((res) => {
				const businesses = res.data.businesses;
				console.log(businesses);
				this.props.getRestaurants(businesses.slice(0, 9));
			});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.sendData}>
				<div className="input-group">
			 		<label>Term</label>
			 		<input onChange={this.handleChange} type="text" name="term" placeholder="burgers, tacos, sushi..." required />
				</div>
				<div className="input-group">
			 		<label>Location</label>
			 		<input onChange={this.handleChange} type="text" name="location" placeholder="address, neighbordhood, city, state or zip" required/>
				</div>
				<select onChange={this.handleChange} className="input-select" name="radius">
					<option value="1609">1 mile</option>
					<option value="3219">2 miles</option>
					<option value="8047">5 miles</option>
				</select>
				<button type="submit">Search</button>
			</form>
		);
	}
};

export default Search;