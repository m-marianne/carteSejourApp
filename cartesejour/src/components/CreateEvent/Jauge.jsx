import React, { Component } from "react";
import styleJauge from "./Styles/styleJauge.css";

class Jauge extends Component {

    changeImportance = (event) => {
        this.props.changeImportance(event); //renvoit la valeur[i] choisie
        // this.props.changeAngleRandom(this.props.id, this.getAngle())
    };

    render() {

        return (

            <svg className="jauge" id={this.props.id} width="20em" height="20em">   


                <circle 
                    className="jauge_cercle" 
                    id="jauge_Importance_5" 
                    onClick={() => this.changeImportance(this.props.valeur[4])} 
                    cx="50%" 
                    cy="50%" 
                    r="50%" 
                />
                <text className="jauge_txt" id="jauge_cercle_5_txt" x="50%" y="7.5%">
                    {this.props.valeur && this.props.valeur.length>0 && this.props.valeur[4]}
                </text> 

                
                <circle 
                    className="jauge_cercle" 
                    id="jauge_Importance_4" 
                    onClick={() => this.changeImportance(this.props.valeur[3])} 
                    cx="50%" 
                    cy="60%" 
                    r="40%" 
                />
                <text className="jauge_txt" id="jauge_cercle_4_txt" x="50%" y="27.5%">
                    {this.props.valeur && this.props.valeur.length>0 && this.props.valeur[3]}
                </text>
                
                <circle 
                    className="jauge_cercle" 
                    id="jauge_Importance_3" 
                    onClick={() => this.changeImportance(this.props.valeur[2])} 
                    cx="50%" 
                    cy="70%" 
                    r="30%" 
                />
                <text className="jauge_txt" id="jauge_cercle_3_txt" x="50%" y="47.5%">
                    {this.props.valeur && this.props.valeur.length>0 && this.props.valeur[2]}
                </text>
                
                <circle 
                    className="jauge_cercle" 
                    id="jauge_Importance_2" 
                    onClick={() => this.changeImportance(this.props.valeur[1])} 
                    cx="50%" 
                    cy="80%" 
                    r="20%" 
                />
                <text className="jauge_txt" id="jauge_cercle_2_txt" x="50%" y="67.5%">
                    {this.props.valeur && this.props.valeur.length>0 && this.props.valeur[1]}
                </text>
                
                <circle 
                    className="jauge_cercle" 
                    id="jauge_Importance_1" 
                    onClick={() => this.changeImportance(this.props.valeur[0])} 
                    cx="50%" 
                    cy="90%" 
                    r="10%" 
                />
                <text className="jauge_txt" id="jauge_cercle_1_txt" x="50%" y="87.5%">
                    {this.props.valeur && this.props.valeur.length>0 && this.props.valeur[0]}
                </text> 
            </svg>
    	)
    };
}

export default Jauge;