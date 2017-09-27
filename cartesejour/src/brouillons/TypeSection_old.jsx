import React, { Component } from 'react';
import styleType from './Styles/styleType.css';


const styles = {
	open: {
		display: 'inherit',
	},
	close: {
		display: 'none'
	}
}

class TypeSection extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			statue: "section"
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			open: !this.state.open,
		}); 
	}

	handleChangeEnfant = (event) => {
		this.props.eventType(event.target.value);
	};

	render() {
		const stateStyle = this.state.open ? styles.open : styles.close;

	    return (
	    	<div className={this.state.statue}>
				<div 
					className="EventType_List_Family"
					onClick={this.handleClick}
				>
				{this.props.familyName}
				<button className="EventType_button">></button>
				</div>
				<div className="EventType_Options" style={stateStyle} >
					<div 
						className="EventType_List"
						onChange={this.handleChangeEnfant}
					>
						{this.props.children}

					</div>
				</div>
			</div>
		)
	}
}

export default TypeSection;