import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'pickyeater-1287.firebaseapp.com'
});

class Nav extends Component {

	state = { isSignedIn: false };

	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
		  firebase.auth.GoogleAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccess: () => false
		}
	};

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignedIn: !!user });
		});
	};

	render() {
		return (
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__item"><NavLink className="navigation__link" to={"/"} title="Home">Home</NavLink></li>
					<li className="navigation__item"><NavLink className="navigation__link" to={"/my-lists"} title="My Lists">My Lists</NavLink></li>
					<li className="navigation__item"><NavLink className="navigation__link" to={"/restaurants"} title="Restaurants">Restaurants</NavLink></li>
					<li className="navigation__item"><NavLink className="navigation__link" to={"/randomize"} title="Randomize">Randomize</NavLink></li>
					{this.state.isSignedIn ? (
						<div>
							<h6>Welcome, {firebase.auth().currentUser.displayName }!</h6>
							<img src={firebase.auth().currentUser.photoURL} alt="Profile of User" />
							<button onClick={() => firebase.auth().signOut()}>Sign out!</button>	
						</div>
					) : (
						<StyledFirebaseAuth 
							uiConfig={this.uiConfig} 
							firebaseAuth={firebase.auth()}
						/>
					)}
				</ul>
			</nav>
		);
	}
};

export default Nav;