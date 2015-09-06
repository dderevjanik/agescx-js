import React from 'react';

class MSGrid extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return <div className="ms-Grid">{this.props.children}</div>;
	}
}


class MSRow extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return <div className="ms-Grid-row">{this.props.children}</div>;
	}
}

class MSCol extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		let sm = this.props.sm ? `ms-u-sm${this.props.sm}` : "",
			md = this.props.md ? `ms-u-md${this.props.md}` : "",
			lg = this.props.lg ? `ms-u-lg${this.props.lg}` : "";
		return <div className={`ms-Grid-col ${sm} ${md} ${lg}`}>{this.props.children}</div>;
	}
}

export default {MSGrid, MSCol, MSRow};