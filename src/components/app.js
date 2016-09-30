import { h, Component } from 'preact';
import { hashHistory, Redirect, Router, Route } from 'react-router';

import Main from './main';
import One from './one';
import Two from './two';

export default class App extends Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="main" component={ Main }>
					<Route path="one" component={ One } />
					<Route path="two" component={ Two } />
				</Route>
				<Redirect from="/" to="/main/one" />
			</Router>
		);
	}
}
