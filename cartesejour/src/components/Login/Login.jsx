import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component{

	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	constructor (props){
		super(props);
		this.state={
			username:'',
			password:''
	 	}
	}		

	proceed = (event) => {
		console.log("vers newmap");
		event.preventDefault();
		fetch('http://localhost:8000/api-token-auth/', {
			method:'POST',
			headers: {
				'Authorization': 'Token 22b3fbdb436411f03ec509f67a2a9248e2434144',
				'Accept': 'application/json',
		    	'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({
		    	username: 'admin',
		    	password:'password123'
		    })
		    
		},)
		.then((response) => {
			console.log('then fetch() :'+response);
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
						<label htmlFor="input-login" id="label-login"className="form_inputGroup_label">Login</label>
						<input type="text" id="input-login" className="form_inputGroup_champ" placeholder="nom" required />
					</div>
						<div className="form_inputGroup">
						<label htmlFor="input-password" id="label-password"className="form_inputGroup_label">Password</label>
					<input type="password" id="input-password" className="form_inputGroup_champ" placeholder="mot de passe" required />
					</div>
					<div className="form_otherElements">
						<div className="checkbox_group">
							<input type="checkbox" id="checkbox_stayConnected" className="checkbox_case" /> 
							<label htmlFor="checkbox_stayConnected" className="checkbox_label">rester connecté</label>
						</div>
						<div className="hyperlink_div">
							<a className="linkRef" href="#">mot de passe oublié</a> 
						</div>
					</div>
					<div className="form_buttons">
						<input type='submit' className='form_buttons_submit' onClick={this.proceed} />
						<p>nouveau sur nomApp ?</p>
						<input type='button' className='form_buttons_2nd' value="sign up"/>
					</div>
				</form>
			</div>
		);
	}
}
export default Login;