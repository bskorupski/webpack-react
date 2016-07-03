import '../sass/HelloForm.scss';

import HelloDude from './HelloDude';
import React, { Component } from 'react';

class HelloForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: 'world' };
	}

	render() {
		return (<div className="hello-form">
			<input type="text" onChange={this.onChange.bind(this)} />
			<HelloDude name={this.state.name} />
		</div>);
	}

	onChange(e) {
		this.setState({ name: e.target.value });
	}
}

export default HelloForm;