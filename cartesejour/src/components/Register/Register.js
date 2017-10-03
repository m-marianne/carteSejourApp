import React, { Component } from 'react';
import styleForm from "../Login/styles/styleForm.css";

class Register extends Component {
   render() {
      return (
         <div className="register">
				<form>
					<div className="form_inputGroup">
						<label for="input-nom" className="form_inputGroup_label">Nom</label>
						<input type="text" id="input-nom" className="form_inputGroup_champ" placeholder="nom" required />
					</div>
					<div className="form_inputGroup">
						<label for="input-prenom" className="form_inputGroup_label">Prénom</label>
						<input type="text" id="input-prenom" className="form_inputGroup_champ" placeholder="prénom" required />
					</div>
					<div className="form_inputGroup">
						<label for="input-email" className="form_inputGroup_label">email</label>
						<input type="email" id="input-email" className="form_inputGroup_champ" placeholder="example@example.com" required />
					</div>
					<div className="form_inputGroup">
						<label for="input-password" className="form_inputGroup_label">Password</label>
						<input type="text" id="input-password" className="form_inputGroup_champ" placeholder="password" required />
					</div>
					<div className="form_buttons">
						<input type="submit" className="form_buttons_submit" value="Welcome !"/>
						<p>déjà un compte nomApp ?</p>
						<input type="button" className="form_buttons_2nd" value="Login"/>
					</div>
				</form>
			</div>
      )
   }
}

export default Register;