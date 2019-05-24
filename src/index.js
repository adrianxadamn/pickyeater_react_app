import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import './styles/box-sizing.scss';
import './styles/normalize.scss';
import './styles/reset.scss';
import Header from './scripts/components/Header';
import Homepage from './scripts/pages/homepage';
import MyList from './scripts/pages/my-list';
import * as serviceWorker from './serviceWorker';

function App() {
	return (
		<div className="App">
		  <BrowserRouter>
				<Header />
		    <Switch>
		      <Route path="/my-lists" component={MyList} />
		      <Route path="/" component={Homepage} />
		    </Switch>
		  </BrowserRouter>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
