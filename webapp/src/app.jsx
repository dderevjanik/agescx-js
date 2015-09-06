'use strict';

import React from 'react';
import Navbar from './components/navbar.jsx';
import Messages from './components/messages.jsx';
import {MSGrid, MSRow, MSCol} from './ms/MSGrid.jsx';
import {MSLabel} from './ms/MSLabel.jsx';

class App extends React.Component {
	render() {
		return (
			<MSGrid>
				<Navbar/>
				<Messages/>
			</MSGrid>
		);
	}
}

React.render(<App/>, document.getElementById('app'));