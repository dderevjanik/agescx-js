import React from 'react';
import Message from './message.jsx';
import {MSGrid, MSRow, MSCol} from '../ms/MSGrid.jsx';
import {MSPivot, MSPivotItem} from '../ms/MSPivot.jsx';

class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selected: 0}
		this.navList = ['instructions', 'Hints', 'Victory', 'Lose', 'History', 'Scout'];
	}
	
	select(index){
		this.setState({selected: index});
	}
	
	render() {	
		return (
			<MSRow>
				<MSCol sm="12">
					<MSPivot>
						{this.navList.map((item, index) => {
							if (index == this.state.selected) {
								return <MSPivotItem key={index} selected={true} onClick={this.select.bind(this, index)}>{item}</MSPivotItem>
							}
							return <MSPivotItem key={index} onClick={this.select.bind(this, index)}>{item}</MSPivotItem>;
						})}
					</MSPivot>
				</MSCol>
				<MSCol sm="12">
					<Message index={this.state.selected}/>
				</MSCol>
			</MSRow>
		);
	}
}

export default Messages;