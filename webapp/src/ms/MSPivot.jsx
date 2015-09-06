import React from 'react';

class MSPivot extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (<ul className="ms-Pivot">{this.props.children}</ul>);
	}
}

class MSPivotItem extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		let selected = this.props.selected ? "is-selected" : "";
		return (<li className={`ms-Pivot-link ${selected}`} onClick={this.props.onClick}>{this.props.children}</li>);
	}
}

export default {MSPivot, MSPivotItem};