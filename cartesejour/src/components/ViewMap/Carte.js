import React, { Component } from "react";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

class Carte extends Component {

	drawElements(element, i){
		const nodeD3 = new ReactFauxDOM.createElement('svg', i);
		nodeD3.key = i;

		//ensemble des datas
		let dataPicto = element.eventType;
		let dataPosHoryzontale1 = parseInt(element.eventForecast, 10);
		let dataPosHoryzontale2 = element.eventSurprising;
		let dataPosVerticale = element.eventImpression;
		let dataTailleBloc = element.eventImportance;
		let dataId = Object.keys(element.feeling);
		let dataColor = Object.values(element.feeling);
		let dataImportance = Object.values(element.feelingValue);
		let dataAngle = Object.values(element.angle);

		//dimensions
		let svgWidth = 120; 
		let svgHeight = 120;
		let margin = 10;
		let width = svgWidth-(margin*2);
		let height = svgHeight-(margin*2);
		let pictoR = ((svgWidth/120)/2)*dataTailleBloc;

		//mise en place des scales pour positionner les éléments
		var xScale = d3.scaleLinear()
							.domain([100, 0])
							.range([width-margin, margin-(pictoR*2)]);
		var yScale = d3.scaleLinear()
							.domain([0, 100])
							.range([height-margin, margin-(pictoR*2)]);

		let posX = xScale(dataPosHoryzontale1+(dataPosHoryzontale2/2));
		let	posY = yScale(dataPosVerticale);

		//création du container svg/D3
		let blocEventWrapper = d3.select(nodeD3).attr('id', 'blocEventWrapper'+i+'')
												.attr('width', width+'%')
												.attr('height', height+'%')
												.attr('viewBox', '0 0 '+width+' '+height)
												.attr('preserveAspectRatio', 'xMidYMid meet')

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
		    .attr('stop-color', (d, i) => { return dataColor[i] });

		grads.append('stop')
		    .attr('offset', '100%')
		    .attr('stop-color', (d, i) => { return dataColor[i] })
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
										.attr('cx', (d, i) => { return (posX+pictoR ) })
										.attr('cy', (d, i) => { return (posY+pictoR ) })
										.attr('transform', (d, i) => { return ('rotate('+(dataAngle[i]*i)+', '+posX+', '+posY+')')} );
		//le picto
		let pictoEvent = blocEventWrapper.append('image')
										.attr('xlink:href', dataPicto)
										.attr('id', 'pictoEvent')
										.attr('x', posX)
										.attr('y', posY)
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
			<div className="viewMap_mapFond">
				<div className="viewMap_map" id='mapWrapper'>	
					{ this.props.mapElements.map((element, i) => { 
						return (
							<div 
								key={this.create_UUID()} 
								className="viewMap_map_element" 
							>
								{this.drawElements(element, i) }
							</div>
						)
					}) }
				</div>
			</div>
		)	
   }
}

export default Carte;