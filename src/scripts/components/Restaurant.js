import React from 'react';

const restaurant = (props) => (
	<li className="restaurant">
		<div class="restaurant__container">
			<h3 className="restaurant__title">{props.title}</h3>
			<p className="restaurant__description">{props.body}</p>
		</div>
	</li>
);

export default restaurant;