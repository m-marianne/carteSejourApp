import React, { Component } from 'react';
import styleType from './Styles/styleType.css';
import TypeAccordion from "./TypeAccordion";

const styles = {
	open: {
		display: 'inherit',
	},
	close: {
		display: 'none'
	}
}
const TypeList = ({itemsList}) => {
	let key = 1; 
	const items = itemsList[0].family1.map(child =>
	
		<label className="EventType_Option">
			<img 
				className="type_picto"
				src={child.img} 
				alt={child.item}
			/>
			<input 
				className="EventType_Option"
				type="radio"
				value={child.item}
			/>
				{child}
		</label>
	);	
	return(<div>{items}</div>);
};

const ListFamily = ({familyItems}) => {
	let key = 1;
	const ItemFamily = familyItems.map((name) =>
		<div 
			className="section"
			onClick={this.handleClick}
		> 
			{name.family}
			<button className="EventType_button">></button>
			<div 
				className="EventType_List"
				onChange={this.handleChangeEnfant}
				> <TypeList itemsList= {this.state.itemsList} />
			</div>
		</div>
	);
	return (<div className="section_Container">{ItemFamily}</div>)
};


class TypeSection extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			statue: "section",
			familyItems:  [	
				{family: "activités"},
				{family: "environnement"},
				{family: "intéractions humaines"},
				{family: "incidents"}
			],
			itemsList: [
				{
					family1: [
						{"item": "balade", "img": "../../img/pictoEvent/balade.svg"},
		        		{"item": "surf", "img": "../../img/pictoEvent/surf.svg"},
		        		{"item": "visite", "img": "../../img/pictoEvent/visite.svg"}
					]
				}
			]
		};
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick(){
		this.setState({
			open: !this.state.open,
		}); 
	}

	handleChangeEnfant = (event) => {
		this.props.eventType(event.target.value);
	};

	render(){
		const stateStyle = this.state.open ? styles.open : styles.close;
		return(
				<ListFamily familyItems={this.state.familyItems} style={stateStyle} />
		)
	}
}

export default TypeSection;

// className="EventType_List_Family"