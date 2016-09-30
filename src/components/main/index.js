import { h, Component } from 'preact';

export default class Main extends Component {
	render() {
		return (
			<div>
				<h1>App header</h1>
				{ this.props.children }
			</div>
		);
	}
}
