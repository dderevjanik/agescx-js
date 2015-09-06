import React from 'react';

class MsToggle extends React.Component{
	
	constructor(props) {
		super(props);
	}
	
	click (event) {
		this.props.checked = !this.props.checked;
		this.forceUpdate();
	}
	
	render() {
		let textLeft = (this.props.textLeft) ? "ms-Toggle--textLeft" : "";
		return (
			<div className={`ms-Toggle ${textLeft}`}>
				<span className="ms-Toggle-description">{this.props.description}</span>
				<input type="checkbox" id={this.props.id} className="ms-Toggle-input" checked={this.props.checked} onClick={this.click.bind(this)}/>
				<label htmlFor={this.props.id} className="ms-Toggle-field">
					<span className="ms-Label ms-Label--off">{this.props.off}</span>
					<span className="ms-Label ms-Label--on">{this.props.on}</span>
				</label>
			</div>
		);
	}
};
/**
msToggle.propTypes = {
	checked: React.propTypes.bool,
	description: React.propTypes.string,
	id: React.propTypes.string.isRequired,
	off: React.propTypes.string,
	on: React.propTypes.string
}
msToggle.defaultProps = {
	checked: true
}
*/
export default MsToggle;