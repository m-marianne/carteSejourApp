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
		let dataPosVerticale = 100-(element.eventImpression);
		let dataTailleBloc = (element.eventImportance)*0.5;
		let dataId = Object.keys(element.feeling);
		let dataColor = Object.values(element.feeling);
		let dataImportance = Object.values(element.feelingValue);
		let dataAngle = Object.values(element.angle);



		//Première étape de visualisation sur une tablette, dimensions du SVG en dur
		//dimensions
		let svgPere_Width = 120; 
		let svgPere_Height = 120;
		let margin = 10;
		let width = svgPere_Width-(margin*2);
		let height = svgPere_Height-(margin*2);
		let wCenter= width/2;
		let hCenter= height/2;

		//les paramètres de la viewBox
		let widthVB = Math.round(svgPere_Width/dataTailleBloc);
		let heightVB = Math.round(svgPere_Height/dataTailleBloc);

		//pour positionner les éléments
		let bornMaxW = width/2;
		let bornMaxH = height/2;
		let bornMinW = bornMaxW-widthVB;
		let bornMinH = bornMaxH-heightVB;

		//interval
		let uniteHorizontale = -(bornMaxW-bornMinW)/100;
		let uniteVerticale = -(bornMaxH-bornMinH)/100;

		//mise en place des scales
		var scaleW = d3.scale.linear()
							.domain([0, 100])
							.range([margin, width+margin]);
		var scaleH = d3.scale.linear()
							.domain([0, 100])
							.range([margin, height+margin]);

		let posH = scaleW(dataPosHoryzontale1+(dataPosHoryzontale2/2));
		let	posV = scaleH(dataPosVerticale);

		let pictoR = ((svgPere_Width/120)/2);

		

		//création du container svg/D3
		let blocEventWrapper = d3.select(nodeD3).attr('id', 'blocEventWrapper'+i+'')
												// .attr('width', svgWidth+'px')
												// .attr('height', svgHeight+'px')
												.attr('viewBox', posH+' '+posV+' '+widthVB+' '+heightVB)
												.attr('preserveAspectRatio', 'xMidYMid meet')

		//Bloc Evenement (regroupe le picto et les couleurs)
		let blocEvent = blocEventWrapper.append('g')
										.attr('class', 'blocEvent')
										//.attr('transform', 'translate('+margin+','+margin+')')

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