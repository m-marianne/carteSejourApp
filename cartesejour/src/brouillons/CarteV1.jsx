import React, { Component } from 'react';
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

class Carte extends Component {

	drawMap(element, i){
		const nodeD3 = new ReactFauxDOM.createElement('svg', i);
		nodeD3.key = i;

		//ensemble des datas
		let dataPicto = element.eventType;
		let dataPosHoryzontale1 = element.eventForecast;
		let dataPosHoryzontale2 = element.eventSurprising;
		let dataPosVerticale = element.eventImpression;
		let dataTailleBloc = element.eventImportance;
		let dataId = Object.keys(element.feeling);
		let dataColor = Object.values(element.feeling);
		let dataImportance = Object.values(element.feelingValue);
		let dataAngle = Object.values(element.angle);

		//création du container svg/D3
		let svgContBlocEvent = d3.select(nodeD3).attr('id', 'svgContBlocEventD3');
		//Prmière étape de visualisation sur une tablette, dimensions du SVG en dur
		//dimensions
		let svgWidth = 100; 
		let svgHeight = 85;
		let margin = 5;
		let width = svgWidth-(margin*2);
		let height = svgHeight-(margin*2);
		// let svgWidth=Math.round(1560/4.34); 
		// let svgHeight=Math.round(1560/4.34);
		let wCenter=svgWidth/2;
		let hCenter=svgHeight/2;
		let pictoR = (svgWidth/40)/2;
		console.log("------------------->"+pictoR)
		
		let uniteVerticale = height/100;
		let uniteHorizontale = width/100;
		console.log(uniteHorizontale);

		//svg
		svgContBlocEvent
				.attr('width', '100%')
				.attr('height', '100%')
				.attr('viewBox', '0 0 '+svgWidth+' '+svgHeight)
				.attr('preserveAspectRatio', 'xMidYMid');
		//fond
		// let fond = svgContBlocEvent.append('rect')
		// 						//.attr("xlink:href", '../../../img/fondCarte.svg')
		// 						.attr('id', 'fondCarte')
		// 						.attr('x', '0')
		// 						.attr('y', '0')
		// 						.attr('width', '100%')
		// 						.attr('height', '100%')
		// 						.attr('fill', 'white');
		// let repereH = svgContBlocEvent.append('line')
		// 							.attr('x1', 0)
		// 							.attr('y1', svgHeight/2)
		// 							.attr('x2', svgWidth)
		// 							.attr('y2', svgHeight/2)
		// 							.attr('stroke-width', 0.1)
		// 							.attr('stroke', 'black');
		// let repereV = svgContBlocEvent.append('line')
		// 							.attr('x1', wCenter)
		// 							.attr('y1', 0)
		// 							.attr('x2', wCenter)
		// 							.attr('y2', svgHeight)
		// 							.attr('stroke-width', 0.1)
		// 							.attr('stroke', 'black');


		//définition du dégradé svg (objet)
		let grads = svgContBlocEvent.append('defs')
								.selectAll('radialGradient')
							    .data(dataColor)
							   	.enter()
							    .append('radialGradient')
							    .attr('id', (d, i) => { return 'grad' + i; });
		//définition du rendu du dégradé (attributs)
		grads.append('stop')
		    .attr('offset', '15%')
		    .style('stop-color', (d, i) => { return dataColor[i] });

		grads.append('stop')
		    .attr('offset', '100%')
		    .style('stop-color', (d, i) => { return dataColor[i] })//"RGB(255,255,255)")
		    .style('stop-opacity', '0');

		console.log();
		//Bloc Evenement (regroupe le picto et les couleurs)
		let blocEvenement = svgContBlocEvent.append('g')
										.attr('id', 'blocEvenement')
										.attr('x', 0)
										.attr('y', 0)
										// .attr("transform", "scale("+dataTailleBloc+")" )
										//.attr("transform", (d, i) => {	console.log("translateValeur1: "+Math.round((100-dataPosVerticale)*uniteVerticale));
																		//console.log("translateValeur2: "+Math.round((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale) );
																		//return "translate(-"+Math.round((100-dataPosVerticale)*uniteVerticale)+", "+Math.round((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale)+")" })
										//.attr("transform", (d, i) => {	return "translate("+(-wCenter*((dataTailleBloc/1.2)-1))+", "+(-hCenter*((dataTailleBloc/1.2)-1))+") scale("+dataTailleBloc/1.2+","+dataTailleBloc/1.2+") translate(-"+Math.round((100-dataPosVerticale)*uniteVerticale)+", "+Math.round((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale)+")" })
									
										//.attr("transform", (d, i) => { return  "translate("+Math.round((100-dataPosVerticale)*uniteVerticale)+", "+Math.round((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale)+")"}); 
										//"translate("+(-wCenter*(dataTailleBloc-1)+", "+(-hCenter*(dataTailleBloc-1)+
										// .attr('width', (d, i)=> { return (d3.select(this).attr("width"))+dataTailleBloc[i] })
										// .attr('height', (d, i)=> { return (d3.select(this).attr("height"))+dataTailleBloc[i] });
		//Les couleurs
		let feelingsGroup = blocEvenement.append('g')
										.attr('id', 'feelingsGroup')
										.selectAll('circle')
										.data(dataImportance)
										.enter()
										.append('circle')
										.attr('id', (d, i) => { return dataId[i] })
										.attr('class', 'colorCircle')
										.attr('r', (d, i) => { return (d*pictoR) })
										.attr('fill', (d, i) => { return 'url(#grad' + i + ')'; })
										.attr('cx', (d, i) => { return (wCenter+pictoR ) })
										.attr('cy', (d, i) => { return (hCenter+pictoR ) })
										.attr('transform', (d, i) => { return ('rotate('+(dataAngle[i]*i)+', '+wCenter+', '+hCenter+')')} );
		
		//le picto
		let pictoEvent = blocEvenement.append("image")
										.attr("xlink:href", dataPicto)
										.attr('id', 'pictoEvent')
										.attr('x', wCenter-pictoR)
										.attr('y', hCenter-pictoR)
										.attr('width', pictoR*2)
										.attr('height', pictoR*2);

		let blocEvenementImportance = blocEvenement

		return nodeD3.toReact()
	}

	render() {
		return (
			<div className="niveau1">
				{ this.props.mapElements.map((element, i) => { 
					return (
						<div key={i}>
							{this.drawMap(element, i) }
						</div>
					)
				}) }
			</div>
		)	
   }
}

export default Carte;