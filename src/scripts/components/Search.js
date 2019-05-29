import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.sendConfig = this.sendConfig.bind(this);
		this.state = {
			term: '',
			location: '',
			radius: 1609 // default value
		}
	};

	sendConfig(event) {
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
		this.props.getRestaurants(config);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.sendConfig}>
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