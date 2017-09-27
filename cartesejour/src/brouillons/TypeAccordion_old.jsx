import React, { Component } from 'react';
import TypeSection from './TypeSection';
import styleType from './Styles/styleType.css';


//test
const TypeList = ({eventItems}) => {
	let key = 1; 
	const listItems = Object.keys(eventItems).map(itemFamily => {
		return(
			<div>
				{itemFamily}
				{eventItems[itemFamily].map(itemChild => {
					return(
	
						<label className="EventType_Option">
							<img 
								className="type_picto"
								src={itemChild.img} 
								alt={itemChild.cle}
							/>
							<input 
								className="EventType_Option"
								type="radio"
								value={itemChild.cle}
							/>
								{itemChild.cle}
						</label>
					)
				})}
			</div>
		)
	})
	
	return(<div>{listItems}</div>);
};



class TypeAccordion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			eventItems: {
				"intéractions humaines": [
					{"cle": "rencontre", "img": "../../img/pictoEvent/rencontre.svg"},
        			{"cle": "dispute", "img": "../../img/pictoEvent/dispute.svg"},
        			{"cle": "discussion avec un(e) inconnu(e)", "img": "../../img/pictoEvent/discussionInconnu.svg"}
				],
				"activités": [
					{"cle": "rencontre", "img": "../../img/pictoEvent/rencontre.svg"},
        			{"cle": "dispute", "img": "../../img/pictoEvent/dispute.svg"},
        			{"cle": "discussion avec un(e) inconnu(e)", "img": "../../img/pictoEvent/discussionInconnu.svg"}
				]
			}
		};
	};
	
	changeEventType = (event) => {
		this.props.eventType(event);
	};

	render() {
		return (
			<div className="EventType_Main">
				<TypeList 
					eventItems={this.state.eventItems}
				/>
				<TypeSection 
					familyName="eventTypeFamily1"
					eventType={this.changeEventType}
				>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option1_1"
						/>
						option1_1
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option1_2"
						/>
						option1_2
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option1_3"
						/>
						option1_3
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option1_4"
						/>
						option1_4
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option1_5"
						/>
						option1_5
					</label>
						<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option1_6"
						/>
						option1_6
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option1_7"
						/>
						option1_7
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option1_8"
						/>
						option1_8
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option1_9"
						/>
						option1_9
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option1_10"
						/>
						option1_10
					</label>
				</TypeSection>
				<TypeSection 
					familyName="eventTypeFamily2"
					eventType={this.changeEventType}
				>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option2_1"
						/>
						option2_1
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option2_2"
						/>
						option2_2
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option2_3"
						/>
						option2_3
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option2_4"
						/>
						option2_4
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option2_5"
						/>
						option2_5
					</label>
				</TypeSection>
				<TypeSection 
					familyName="eventTypeFamily3"
					eventType={this.changeEventType}
				>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option3_1"
						/>
						option3_1
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option3_2"
						/>
						option3_2
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option3_3"
						/>
						option3_3
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option3_4"
						/>
						option3_4
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option3_5"
						/>
						option3_5
					</label>
				</TypeSection>
				<TypeSection 
					familyName="eventTypeFamily4"
					eventType={this.changeEventType}
				>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option4_1"
						/>
						option4_1
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option4_2"
						/>
						option4_2
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option4_3"
						/>
						option4_3
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"  
							value="option4_4"
						/>
						option4_4
					</label>
					<label className="EventType_Option">
						<object type="image/svg+xml" data="" className="type_picto" />
						<input 
							className="EventType_Option"
							type="radio"
							value="option4_5"
						/>
						option4_5
					</label>
				</TypeSection>
			</div>
		)
	}
}

export default TypeAccordion;

export default TypeAccordion;