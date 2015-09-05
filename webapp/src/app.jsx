'use strict';

var React = require('react');

class App extends React.Component {
	render() {
		return <div>Hello World</div>
	}
}

React.render(<App/>, document.getElementById('app'));