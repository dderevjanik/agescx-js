import React from 'react';

class MSLabel extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return <label className="ms-label">{this.props.children}</label>;
	}
}

export default {MSLabel};