import React, { Component } from 'react';
import Nav from './Nav'; 
import '../../styles/header.css';

class Header extends Component {
	render() {
		return (
			<section className="header">
				<div className="logo">
					<img src="/assets/logo.png" alt="Logo" /> 
					<Nav />
				</div>
			</section>
		)
	}
};

export default Header;