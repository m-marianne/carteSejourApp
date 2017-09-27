import React, { Component } from 'react';
import TypeSection from './TypeSection';
import styleType from './Styles/styleType.css';

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

class TypeAccordion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			itemsList: [
				{
					family1: [
						{"item": "balade", "img": "../../img/pictoEvent/balade.svg"},
		        		{"item": "surf", "img": "../../img/pictoEvent/surf.svg"},
		        		{"item": "visite", "img": "../../img/pictoEvent/visite.svg"}
					]
				}
			]
			// family2: {
			// 	chaleur: "../../img/pictoEvent/chaleur.svg",
   //  			tempête: "../../img/pictoEvent/tempete.svg",
   //  			orage: "../../img/pictoEvent/orage.svg"
			// },
			// family3: {
			// 	rencontre: "../../img/pictoEvent/rencontre.svg",
   //      		dispute: "../../img/pictoEvent/dispute.svg",
   //      		discussion avec un(e) inconnu(e): "../../img/pictoEvent/discussionInconnu.svg"
			// },
			// family4: {
			// 	accident véhicule: "../../img/pictoEvent/accidentV.svg",
   //      		blessure: "../../img/pictoEvent/blessure.svg",
   //      		maladie: "../../img/pictoEvent/maladie.svg"
			// }
		};
	};
	
	changeEventType = (event) => {
		this.props.eventType(event);
	};

	render() {
		return (
			<TypeList itemsList= {this.state.itemsList} />
		)
	}
}

export default TypeAccordion;