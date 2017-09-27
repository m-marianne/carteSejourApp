import React, { Component } from "react";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

class PreviewScreen extends Component {
// componentWillReceiveProps(nextProps) {
// }

	drawFeeling(){
		const nodeD3 = new ReactFauxDOM.createElement('svg');

		let dataId = Object.keys(this.props.feeling);
		let dataColor = Object.values(this.props.feeling);
		let dataImportance = Object.values(this.props.feelingValue);
		let dataPicto = this.props.eventType;
		let dataAngle = Object.values(this.props.angle);
		
		let svgWidth = 520; 
		let svgHeight = 520;
		let margin = 20;
		let width = svgWidth-(margin*2);
		let height = svgHeight-(margin*2);
		
		let wCenter = width/2;
		let hCenter = height/2;
		let pictoR = (width/10)/2;

		let uniteVerticale = height/10;
		let uniteHorizontale = width/10;
		
		//svg
		let svgContainer = d3.select(nodeD3)
							.attr('width', '100%')
							.attr('height', '100%')
							.attr('viewBox', '0 0'+" "+svgWidth+" "+svgHeight+"")
							.attr('preserveAspectRatio', 'xMidYMid meet')
							.attr('id', 'svgContainerD3');
		//fond
		let fond = svgContainer.append('rect')
								.attr('x', '0')
								.attr('y', '0')
								.attr('width', svgWidth)
								.attr('height', svgHeight)
								.attr('fill', 'white');
	    
	    //calque si trop de sélection
		let toMuchCirclesGroup = svgContainer.append('g')
		 								.attr('id', 'errorToMuchFeelings')	
		 								.append('text')								
		 								.attr('x', wCenter)
										.attr('y', hCenter)
										.attr('text-anchor', 'middle')
										.attr('width', svgWidth)
										.attr('height', svgHeight)
										.attr('fill', 'white')
				 						.style("font-family", "'roboto', sans-serif")
		 								.style('font-weight', 600)
		 								.style('font-size', '14px')
		 								.style('fill', 'rgba(22, 34, 40,1)')
		 								.text('oups, le nombre de sentiment est limité à 3 !')
		 								.attr('opacity', 0);

		//définition du dégradé svg (objet)
		let grads = svgContainer.append('defs')
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


		//blocEvenement qui regroupe le picto et les couleurs
		let blocEvenement = svgContainer.append('g')
										.attr('id', 'blocEvenement');
		//Limiter les cercles au nombre de 3 :
//		if(){
			//console.log("dataColor.length : "+dataColor.length)
			//les couleurs
			let feelingsGroup = blocEvenement.append('g')
										.attr('id', 'feelingsGroup')
										.selectAll('circle')
										.data(dataImportance)
										.enter()
										.append('circle')
										.attr('id', (d, i) => { return dataId[i] })
										.attr('class', 'colorCircle')
										.attr('r', (d, i) => { return d*pictoR })
										.attr('fill', (d, i) => { return 'url(#grad' + i + ')'; })
										.attr('cx', (d, i) => { return (wCenter+pictoR) })
										.attr('cy', (d, i) => { return (hCenter+pictoR) })
										.attr("transform", (d, i) => { return ("rotate("+(dataAngle[i]*i)+", "+wCenter+", "+hCenter+")")} );
			
			let pictoEvent = blocEvenement.append("image")
											.attr("xlink:href", dataPicto)
											.attr('id', 'pictoEvent')
											.attr('x', wCenter-pictoR)
											.attr('y', hCenter-pictoR)
											.attr('width', pictoR*2)
											.attr('height', pictoR*2);
//		}else{
//			console.log("--------------------------> + de trois !")		
// 			toMuchCirclesGroup.attr("opacity", "1");
//		}
		return nodeD3.toReact()
	}

	render() {
		// console.log(this.props);
		return this.drawFeeling();
	}
}

export default PreviewScreen;