import React from 'react';
import MsToggle from '../ms/msToggle.jsx';
import {MSGrid, MSRow, MSCol} from '../ms/MSGrid.jsx';

class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ""};
	}
	
	handleChange(event){
		this.setState({value: event.target.value});
	}
	
	click(event){
		console.log(event.target.checked);
	}
	
	render() {
		return (
		<MSRow>
			<MSCol sm="12">
				<div className="ms-TextField ms-TextField--multiline">
					<textarea type="text" className="ms-TextField-field" onChange={this.handleChange.bind(this)}/>
				</div>
			</MSCol>
			<MSCol sm="12">
				<span>{this.state.value.length}</span>
			</MSCol>
		</MSRow>
		);
	}
}

export default Message;