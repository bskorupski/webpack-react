import React, { Component } from 'react';

export default class HelloDude extends React.Component {
	render() {
		return <p>Hello {this.props.name}!</p>;
	}
}