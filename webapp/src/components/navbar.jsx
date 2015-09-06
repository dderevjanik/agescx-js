import React from 'react';
import {MSNavbar, MSNavbarItem} from '../ms/MSNavbar.jsx';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selected: 0};
		this.navList = [
			{name: "Basic", className: "", icon: null},
			{name: "Upload", className: "ms-NavBar-item--right", icon: "ms-Icon ms-Icon--upload"}
		]
	}
	
	select(index){
		this.setState({selected: index});
	}
	
	render() {	
		let items = [];
		this.navList.forEach((item, index) => {

		});
		
		return (
			<MSNavbar>
				{this.navList.map((item, index) => {
					let selected = (index === this.state.selected) ? true : false;
					let icon = (item.icon) ? <i className={item.icon}></i> : "";
					return (
						<MSNavbarItem key={index} className={item.className} selected={selected} onClick={this.select.bind(this, index)}>
							{icon}
							<span>{item.name}</span>
						</MSNavbarItem>
					);  
				})}
			</MSNavbar>
		);
	}
}

export default Navbar;