import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.scss';

class Nav extends Component {
	render() {
		return (
				<nav className="navigation">
					<ul className="navigation__list">
						<li className="navigation__item"><NavLink className="navigation__link" activeClassName={"is-active"} to={"/"} title="Home">Home</NavLink></li>
						<li className="navigation__item"><NavLink className="navigation__link" activeClassName={"is-active"} to={"/my-lists"} title="My Lists">My Lists</NavLink></li>
						<li className="navigation__item"><NavLink className="navigation__link" activeClassName={"is-active"} to={"/restaurants"} title="Restaurants">Restaurants</NavLink></li>
						<li className="navigation__item"><NavLink className="navigation__link" activeClassName={"is-active"} to={"/randomize"} title="Randomize">Randomize</NavLink></li>
					</ul>
				</nav>
		);
	}
};

export default Nav;