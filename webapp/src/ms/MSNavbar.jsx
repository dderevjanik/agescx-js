import React from 'react';

class MSNavbar extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="ms-NavBar">
				<ul className="ms-NavBar-items">{this.props.children}</ul>
			</div>
			);
	}
}

class MSNavbarItem extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		let selected = this.props.selected ? "is-selected" : "";
		return (
			<li className={`ms-NavBar-item ${selected} ${this.props.className}`} onClick={this.props.onClick}>
				{this.props.children}
			</li>
		);
	}
}

export default {MSNavbar, MSNavbarItem};