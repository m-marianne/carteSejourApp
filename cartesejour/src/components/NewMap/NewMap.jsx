import React, { Component } from "react";
import PropTypes from "prop-types";

class NewMap extends Component {

	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	    this.state = {
	    	tripName: '',
	    	tripId: '',
			mapName: '',
			mapId: ''
		}
	};

	handleChangeTripName = (event) => {
		this.props.changeTripName(event.target.value);
	}

	handleChangeMapName = (event) => {
		this.props.changeMapName(event.target.value);
	}

	handleFormSubmit = (event) => {
		var map_Id = 0;
		var	trip_Id = 0;
		
		event.preventDefault();

		fetch('http://localhost:8000/trips/', {
			method:'POST',
			headers: {
		    	'Accept': 'application/json',
		    	'Content-Type': 'application/json',
		    	'Authorization': 'Token 22b3fbdb436411f03ec509f67a2a9248e2434144'
		    },
		  	body: JSON.stringify({"trip_name": this.props.tripName}), 
		})
		.then((response) => {
			if(response.ok){
				response.json().then((data) => {  
					console.log(data); 
					trip_Id = data["id"]; 
					console.log(trip_Id)
					this.props.changeTripId(trip_Id)
				});
			} else {
				alert("FETCH TRIP = Tous les champs nécessaires au stokage de votre carte ne sont pas remplis")
			}	
		})
		.catch(function(error) {
  			console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
		})

		fetch('http://localhost:8000/maps/', {
			method:'POST',
			headers: {
		    	'Accept': 'application/json',
		    	'Content-Type': 'application/json',
		    	'Authorization': 'Token 22b3fbdb436411f03ec509f67a2a9248e2434144'
		    },
		  	body: JSON.stringify({"map_name": this.props.mapName}), 
		  	// redirect: 'follow'
		})
		.then((response) => {
			if(response.ok){
				console.log("tripName+mapName fetching = ok")
				response.json().then((data) => {  
        			console.log(data); 
        			map_Id = data["id"]; 
        			console.log(map_Id)
        			this.props.changeMapId(map_Id)
      			});
			} else {
				alert("FETCH MAP = Tous les champs nécessaires au stokage de votre carte ne sont pas remplis")
			}	
		})
		.catch(function(error) {
  			console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
		})
		this.context.router.history.push("/createevent");
	}

   render() {
      return (
		<div className="NewMap">
			<form>
				<div className="form_inputGroup">
					<label htmlFor="input-VoyageNom" id="label-VoyageNom" className="form_inputGroup_label">Nom du voyage</label>
						<input 
							type="text" 
							id="input-VoyageNom" 
							className="form_inputGroup_champ" 
							value={this.props.tripName}
							onChange={(event) => this.handleChangeTripName(event)}
							placeholder="nom du voyage" 
							required 
						/>
						<select id="tripSelect" className="VoyageNom_select">
							<option value={this.props.tripName}>{this.props.tripName}</option>
						</select>
				</div>
				<div className="form_inputGroup">
					<label htmlFor="input-carteNom" id="label-carteNom"className="form_inputGroup_label">Nom de la carte</label>
					<input 
						type="text" 
						id="input-carteNom" 
						className="form_inputGroup_champ" 
						value={this.props.mapName}
						onChange={(event) => this.handleChangeMapName(event)}
						placeholder="nom de la carte" 
						required 
					/>
				</div>
				<div className="form_buttons">
					<input type='submit' className='form_buttons_submit' value="Let's go !" onClick={this.handleFormSubmit}/>
				</div>
			</form>
		</div>
      )
   }
}

export default NewMap;




//<input 
// 	type="text" 
// 	id="input-VoyageNom" 
// 	className="form_inputGroup_champ" 
// 	value={this.props.tripName}
// 	onChange={(event) => this.handleChangeTripName(event)}
// 	placeholder="nom du voyage" 
// 	required 
// />