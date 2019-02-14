import React, { Component } from 'react';
import './styles/nav.css';

class Nav extends Component {
	render() {
		return (
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__item"><a className="navigation__link" href="" title="Home">Home</a></li>
					<li className="navigation__item"><a className="navigation__link" href="" title="My Lists">My Lists</a></li>
					<li className="navigation__item"><a className="navigation__link" href="" title="Restaurants">Restaurants</a></li>
					<li className="navigation__item"><a className="navigation__link" href="" title="Randomize">Randomize</a></li>
				</ul>
			</nav>
		)
	}
};

export default Nav;