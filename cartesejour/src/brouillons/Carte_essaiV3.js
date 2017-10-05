import React, { Component } from "react";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

class Carte extends Component {
	componentDidMount() {
	    this.drawElements();
	}

	drawElements(element, i){
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

		//Première étape de visualisation sur une tablette, dimensions du SVG en dur
		//dimensions
		let svgWidth = 100; 
		let svgHeight = 100;
		let margin = 2.5;
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

		//création du container svg/D3
		let blocEventWrapper = d3.select(this.refs.mapElements).attr('class', 'blocEventD3')
												.attr('width', svgWidth+'%')
												.attr('height', svgHeight+'%')
												// .attr('viewBox', '0 0 '+svgWidth+' '+svgHeight)
												// .attr('preserveAspectRatio', 'xMidYMid')

		//définition du dégradé svg (objet)
		let grads = blocEventWrapper.append('defs')
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
		let blocEvent = blocEventWrapper.append('g');

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
										.attr('fill', (d, i) => { return 'url(#grad' + i + ')'; })
										.attr('cx', (d, i) => { return (wCenter+pictoR ) })
										.attr('cy', (d, i) => { return (hCenter+pictoR ) })
										.attr('transform', (d, i) => { return ('rotate('+(dataAngle[i]*i)+', '+wCenter+', '+hCenter+')')} );
		
		//le picto
		let pictoEvent = blocEvent.append('image')
										.attr('xlink:href', dataPicto)
										.attr('id', 'pictoEvent')
										.attr('x', wCenter-pictoR)
										.attr('y', hCenter-pictoR)
										.attr('width', pictoR)
										.attr('height', pictoR);
		return nodeD3.toReact()
	}

	render() {
		return (
			<div className="viewMap_map">
				<img 
					className="viewMap_map_fondCarte"
					src="../../../img/fondCarte.svg"
					alt="fond de carte"
				/>
				{ this.props.mapElements.map((element, i) => { 
					return (
						<div key={i} className="viewMap_map_element">
							{this.drawElements(element, i) }
						</div>
					)
				}) }
			</div>
		)	
   }
}

export default Carte;