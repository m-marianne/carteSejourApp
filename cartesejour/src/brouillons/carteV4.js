// import React, { Component } from "react";
// import * as d3 from "d3";
// import ReactFauxDOM from "react-faux-dom";

// class Carte extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			wrapperName: 'mapWrapper',
// 		};
// 	}

// 	drawElements(element, i){
// 		const nodeD3 = new ReactFauxDOM.createElement('svg', i);
// 		nodeD3.key = i;

// 		//ensemble des datas
// 		let dataPicto = element.eventType;
// 		let dataPosHoryzontale1 = parseInt(element.eventForecast, 10);
// 		let dataPosHoryzontale2 = element.eventSurprising;
// 		let dataPosVerticale = element.eventImpression;
// 		let dataTailleBloc = element.eventImportance;
// 		let dataId = Object.keys(element.feeling);
// 		let dataColor = Object.values(element.feeling);
// 		let dataImportance = Object.values(element.feelingValue);
// 		let dataAngle = Object.values(element.angle);

// 		console.log(
// 			"dataPosHoryzontale1-->"+dataPosHoryzontale1+"///////////"+
// 			"dataPosHoryzontale2-->"+dataPosHoryzontale2+"///////////"+
// 			"dataPosVerticale-->"+dataPosVerticale+"///////////"
// 		);

// 		//Première étape de visualisation sur une tablette, dimensions du SVG en dur
// 		//dimensions
// 		let svgWidth = 550; 
// 		let svgHeight = 580;
// 		let margin = 50;
// 		let width = svgWidth-(margin*2);
// 		let height = svgHeight-(margin*2);
// 		// let svgWidth=Math.round(1560/4.34); 
// 		// let svgHeight=Math.round(1560/4.34);
// 		let wCenter=svgWidth/2;
// 		let hCenter=svgHeight/2;
// 		let uniteVerticale = height/100;
// 		let uniteHorizontale = width/100;
// 		let pictoR = ((svgWidth/100)/2)*uniteHorizontale;
// 		console.log(uniteHorizontale);

// 		let xViewBox = Math.round((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale);
// 		let yViewBox = Math.round(dataPosVerticale*uniteVerticale);
// 		//création du container svg/D3
// 		let blocEventWrapper = d3.select(nodeD3).attr('id', 'svgD3_elements')
// 												.attr('width', svgWidth+'px')
// 												.attr('height', svgHeight+'px')
// 												.attr('viewBox', '0 0 '+svgWidth+' '+svgHeight)
// 												.attr('preserveAspectRatio', 'xMidYMid');

// 		//définition du dégradé svg (objet)
// 		let grads = blocEventWrapper.append('defs')
// 									.selectAll('radialGradient')
// 								    .data(dataColor)
// 								   	.enter()
// 								    .append('radialGradient')
// 								    .attr('id', (d, i) => { return 'grad' +i });
// 		//définition du rendu du dégradé (attributs)
// 		grads.append('stop')
// 		    .attr('offset', '15%')
// 		    .style('stop-color', (d, i) => { console.log("dataColor[i] - 1 ==> "+dataColor[i]); return dataColor[i] });

// 		grads.append('stop')
// 		    .attr('offset', '100%')
// 		    .style('stop-color', (d, i) => { console.log("dataColor[i] - 2 ==> "+dataColor[i]); return dataColor[i] })//"RGB(255,255,255)")
// 		    .style('stop-opacity', '0');

// 		//Bloc Evenement (regroupe le picto et les couleurs)
// 		let blocEvent = blocEventWrapper.append('g')
// 										.attr('class', 'blocEvent')

// 		//Les couleurs
// 		let feelingsGroup = blocEvent.append('g')
// 										.attr('id', 'feelingsGroup')
// 										.selectAll('circle')
// 										.data(dataImportance)
// 										.enter()
// 										.append('circle')
// 										.attr('id', (d, i) => { return dataId[i] })
// 										.attr('class', 'colorCircle')
// 										.attr('r', (d, i) => { return (d*pictoR)})
// 										.attr('fill', (d, i) => { return 'url(#grad' + i + ')'; })
// 										.attr('cx', (d, i) => { return (wCenter+pictoR ) })
// 										.attr('cy', (d, i) => { return (hCenter+pictoR ) })
// 										.attr('transform', (d, i) => { return ('rotate('+(dataAngle[i]*i)+', '+wCenter+', '+hCenter+')')} );
		
// 		//le picto
// 		let pictoEvent = blocEvent.append('image')
// 										.attr('xlink:href', dataPicto)
// 										.attr('id', 'pictoEvent')
// 										.attr('x', wCenter-pictoR)
// 										.attr('y', hCenter-pictoR)
// 										.attr('width', pictoR*2)
// 										.attr('height', pictoR*2);
// 		//marche
// 		 blocEvent.attr('transform', (d, i) => { return ('translate('	+Math.round((-(width/2)+(((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale)))/dataTailleBloc)
// 		 												+', '			+Math.round((-(height/2)+(((100-dataPosVerticale)*uniteVerticale)))/dataTailleBloc)
// 		 												+')'
// 		 										)} );

// 		 // 'translate('		+Math.round(-(width/2)+(((dataPosHoryzontale1+(dataPosHoryzontale2/2))*uniteHorizontale)))
// 		 // 														+', '		+Math.round(-(height/2)+(((100-dataPosVerticale)*uniteVerticale)))
// 		 // 												+'), 
// 		 //scale('		+dataTailleBloc +','		+dataTailleBloc+'), 

// 		return nodeD3.toReact()
// 	}

// 	render() {

// 	const divStyle = {
// 		width: "550px",
// 		height: "580px"
// 	};
// 		return (
// 			<div 
// 				className="viewMap_map" 
// 				id={this.state.wrapperName} 
// 				style = {divStyle}
// 			>
// 				{ this.props.mapElements.map((element, i) => { 
// 					return (
// 						<div key={i} className="viewMap_map_element" style = {divStyle}>
// 							{this.drawElements(element, i) }
// 						</div>
// 					)
// 				}) }
// 			</div>
// 		)	
//    }
// }

// export default Carte;