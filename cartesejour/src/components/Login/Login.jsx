import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component{

	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	constructor(props){
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.state={
			username: '',
			password: '',
			token: '',
			userId: ''
	 	}
	};

	handleChangeUsername = (event) => {
		this.props.getUsername(event.target.value);
	}

	handleChangePassword = (event) => {
		this.props.getPassword(event.target.value);
	}		

	handleFormSubmit = (event) => {
		var user_id = 0;

		event.preventDefault();

		fetch('http://localhost:8000/api-token-auth/', {
			method:'POST',
			headers: {
				'Accept': 'application/json',
		    	'Content-Type': 'application/json',
		    	'Authorization': 'Token 59edfa58d59b3b55eec1faf695e2ab34fe9d92fe' //'Token 22b3fbdb436411f03ec509f67a2a9248e2434144'
		    },
		    body: JSON.stringify({
		    	"username": this.props.username,
		    	"password": this.props.password
		    }),   
		})
		.then((response) => {
			if(response.ok){
				response.json().then((data) => {
					console.log(data);
					user_id = data["id"];
					console.log(user_id)
					this.props.getUserId(user_id)
				});
			} else {
				alert("FETCH LOGIN = Tous les champs nécessaires à l'identification ne sont pas remplis")
			}
		})
		.catch(function(err) {
			console.log('catch fetch() :'+err);
		});
		this.context.router.history.push("/newmap");
	}

	render(){
		return(
			<div className="identification">
				<form>
					<div className="form_inputGroup">
						<label 
							htmlFor="input-login" 
							id="label-login"
							className="form_inputGroup_label"
						>Login
						</label>
						<input 
							type="text" 
							id="input-login" 
							className="form_inputGroup_champ" 
							value={this.props.username}
							onChange={(event) => this.handleChangeUsername(event)}
							placeholder="nom" 
							required 
						/>
					</div>
						<div className="form_inputGroup">
						<label 
							htmlFor="input-password" 
							id="label-password"
							className="form_inputGroup_label"
						>Password
						</label>
					<input 
						type="password" 
						id="input-password" 
						className="form_inputGroup_champ" 
						value={this.props.password}
						onChange={(event) => this.handleChangePassword(event)}
						placeholder="mot de passe" 
						required 
					/>
					</div>
					<div className="form_otherElements">
						<div className="checkbox_group">
							<input 
								type="checkbox" 
								id="checkbox_stayConnected" 
								className="checkbox_case" 
							/> 
							<label 
								htmlFor="checkbox_stayConnected" 
								className="checkbox_label"
							>rester connecté
							</label>
						</div>
						<div className="hyperlink_div">
							<a className="linkRef" href="#">mot de passe oublié</a> 
						</div>
					</div>
					<div className="form_buttons">
						<input type='submit' className='form_buttons_submit' onClick={this.handleFormSubmit} />
						<p>nouveau sur nomApp ?</p>
						<input type='button' className='form_buttons_2nd' value="sign up"/>
					</div>
				</form>
			</div>
		);
	}
}
export default Login;