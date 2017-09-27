import React, { Component } from "react";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

class Carte extends Component {

	constructor(props) {
		super(props);
		this.state = {
			wrapperName: 'mapWrapper',
		};
	}

	drawElements(element, i){
		const nodeD3 = new ReactFauxDOM.createElement('svg', i);
		nodeD3.key = i;
		//ensemble des datas
		let dataPicto = element.eventType;
		let dataPosHoryzontale1 = parseInt(element.eventForecast, 10);
		let dataPosHoryzontale2 = element.eventSurprising;
		let dataPosVerticale = 100-(element.eventImpression);
		let dataTailleBloc = (element.eventImportance)*0.5;
		let dataId = Object.keys(element.feeling);
		let dataColor = Object.values(element.feeling);
		let dataImportance = Object.values(element.feelingValue);
		let dataAngle = Object.values(element.angle);

		//Première étape de visualisation sur une tablette, dimensions du SVG en dur
		//dimensions
		let svgPere_Width = 550; 
		let svgPere_Height = 580;
		let margin = 50;
		let width = svgPere_Width-(margin*2);
		let height = svgPere_Height-(margin*2);
		// let svgWidth=Math.round(1560/4.34); 
		// let svgHeight=Math.round(1560/4.34);
		let wCenter=svgPere_Width/2;
		let hCenter=svgPere_Height/2;

		//les paramètres de la viewBox
		let widthVB = Math.round(svgPere_Width/dataTailleBloc);
		let heightVB = Math.round(svgPere_Height/dataTailleBloc);

		//pour positionner les éléments
		let bornMaxW = svgPere_Width/2;
		let bornMaxH = svgPere_Height/2;
		let bornMinW = bornMaxW-widthVB;
		let bornMinH = bornMaxH-heightVB;

		//interval
		let uniteHorizontale = -(bornMaxW-bornMinW)/100;
		let uniteVerticale = -(bornMaxH-bornMinH)/100;
		
		let posH = wCenter+(dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale;
		let	posV = hCenter+dataPosVerticale*uniteVerticale;

		let pictoR = ((svgPere_Width/100)/2);

		//création du container svg/D3
		let blocEventWrapper = d3.select(nodeD3).attr('id', 'blocEventWrapper'+i+'')
												// .attr('width', svgWidth+'px')
												// .attr('height', svgHeight+'px')
												.attr('viewBox', posH+' '+posV+' '+widthVB+' '+heightVB)
												.attr('preserveAspectRatio', 'xMidYMid')

		//Bloc Evenement (regroupe le picto et les couleurs)
		let blocEvent = blocEventWrapper.append('g')
										.attr('class', 'blocEvent')
		let grads = blocEvent.append('defs')
							.selectAll('radialGradient')
							.data(dataColor)
							.enter()
							.append('radialGradient')
							.attr('id', (d, j) => { return 'grad' +i+j });
		//définition du rendu du dégradé (attributs)
		grads.append('stop')
		    .attr('offset', '15%')
		    .attr('stop-color', (d, i) => { console.log("dataColor[i] - 1 ==> "+dataColor[i]); return dataColor[i] });

		grads.append('stop')
		    .attr('offset', '100%')
		    .attr('stop-color', (d, i) => { console.log("dataColor[i] - 2 ==> "+dataColor[i]); return dataColor[i] })//"RGB(255,255,255)")
		    .attr('stop-opacity', '0');

		//Les couleurs
		let feelingsGroup = blocEvent.append('g')
										.attr('id', 'feelingsGroup')
										.selectAll('circle')
										.data(dataImportance)
										.enter()
										.append('circle')
										.attr('id', (d, i) => { return dataId[i] })
										.attr('class', 'colorCircle')
										.attr('r', (d, i) => { return (d*pictoR)})
										.attr('fill', (d, j) => { return 'url(#grad' + i +j+ ')'; })
										//.attr('fill', (d, i) => { return dataColor[i]; })
										.attr('cx', (d, i) => { return (wCenter+pictoR ) })
										.attr('cy', (d, i) => { return (hCenter+pictoR ) })
										.attr('transform', (d, i) => { return ('rotate('+(dataAngle[i]*i)+', '+wCenter+', '+hCenter+')')} );
		//le picto
		let pictoEvent = blocEventWrapper.append('image')
										.attr('xlink:href', dataPicto)
										.attr('id', 'pictoEvent')
										.attr('x', wCenter-pictoR)
										.attr('y', hCenter-pictoR)
										.attr('width', pictoR*2)
										.attr('height', pictoR*2);
		return nodeD3.toReact()
	}

	create_UUID(){
		var dt = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			var r = (dt + Math.random()*16)%16 | 0;
			dt = Math.floor(dt/16);
			return (c=='x' ? r :(r&0x3|0x8)).toString(16);
		});
		return uuid;
	}

	render(){
		return (
			<div 
				className="viewMap_map" 
				id={this.state.wrapperName} 
			>	
				{ this.props.mapElements.map((element, i) => { 
					return (
						<div 
							key={this.create_UUID()} 
							className="viewMap_map_element" 
							// x="0"
							// y="0"
							// width="550px"
							// height="580px"
							// xlinkHref="#blocEventWrapper"
						>
							{this.drawElements(element, i) }
						</div>
					)
				}) }
			</div>
		)	
   }
}

export default Carte;