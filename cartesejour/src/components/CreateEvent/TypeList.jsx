import React, { Component } from "react";
import styleType from "./Styles/styleType.css";
import {EVENT_ITEMS} from "../../config.json";
//test


const styles = {
	open: {
		display: 'inherit',
	},
	close: {
		display: 'none'
	}
}

class TypeList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick(){
		this.setState({
			open: !this.state.open
		}); 
	};

	changeEventType = (event) => {
	this.props.changeType(event.target.value);
	};
	// changeEventType = (event) => {
	// 	this.props.eventType(event);
	// };

	getTypeList(eventItems){
		let key = 1; 
		const stateStyle = this.state.open ? styles.open : styles.close;
		const listItems = Object.keys(eventItems).map((itemFamily, i) => {
			return(
				<div key={i} className="section">
					<div
						className="EventType_List_Family"
						onClick={this.handleClick}
					> 
						{itemFamily} 
					<button className="EventType_button">></button>
					</div>
					<div className="EventType_Options" style={stateStyle}>
					{eventItems[itemFamily].map((itemChild, i) => {
						return(
		
							<label key ={i} className="EventType_Option">
								<img 
									className="type_picto"
									src={itemChild.img} 
									alt={itemChild.cle}
								/>
								<input 
									className="EventType_Option"
									type="radio"
									value={itemChild.img}
									onChange={this.changeEventType}
								/>
									{itemChild.cle}
							</label>
						)
					})}
				</div>
			</div>
			)
		})
		
		return(<div>{listItems}</div>);
	};

	render() {
		const stateStyle = this.state.open ? styles.open : styles.close;
		return (
			<div className="EventType_Main">
				{this.getTypeList(EVENT_ITEMS)}
			</div>
		)
	}
}

export default TypeList;