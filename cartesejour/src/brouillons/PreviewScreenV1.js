import React, { Component } from "react";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

class PreviewScreen extends Component {
// componentWillReceiveProps(nextProps) {
// 	console.log("eeeeee")
// }

drawFeeling(){
	const nodeD3 = new ReactFauxDOM.createElement('svg');

	let dataId = Object.keys(this.props.feeling);
	let dataColor = Object.values(this.props.feeling);
	let dataImportance = Object.values(this.props.feelingValue);
	let dataPicto = this.props.eventType;
	
	let svgDimension = 370
	let svgCenter = svgDimension/2
	let maxR = Math.max(...dataImportance)*20;
	let pictoR = svgDimension/10

	//pour trouver le centre des cercles en périphérie du cercle socle:
	// cx = x0 + r*cos(t) ;  cy = y0 + r*sin(t) ==> (x0,y0) sont les coord du centre, r est le rayon, et t l'angle.							
	var cosRandom = Math.cos(Math.round(Math.random()*(360-1)+1)*(Math.PI/180)); //Math.cos(Math.round(Math.random()*(360-1)+1));
	var sinRandom = Math.sin(Math.round(Math.random()*(360-1)+1)*(Math.PI/180)); //Math.sin(Math.round(Math.random()*(360-1)+1))
	// console.log(cosRandom);
	// console.log(svgCenter+maxR*cosRandom);
	//console.log(this.props.eventType);
	// console.log(this.props.feelingValue)
	//console.log('le tableau des id : ' +dataId)
	//console.log('le tableau des color : ' +dataColor)
	//console.log('le tableau des tailles : ' +dataImportance)
		
		let svgContainer = d3.select(nodeD3)
							//.attr('width', svgDimension)
							//.attr('height',svgDimension)
							.attr('viewBox', '0 0'+" "+svgDimension+" "+svgDimension+"")
							.attr('preserveAspectRatio', 'xMidYMid meet')
							.attr('id', 'svgContainerD3');

		let rect = svgContainer.append('rect')
								.attr('x', '0')
								.attr('y', '0')
								.attr('width', svgDimension)
								.attr('height', svgDimension)
								.attr('fill', 'white');
	    //calque si trop de sélection
	    let toMuchCirclesGroup = svgContainer.append('g')
		 								.attr('id', 'errorToMuchFeelings')	
		 								.append('text')								
		 								.attr('x', svgCenter)
										.attr('y', svgCenter)
										.attr('text-anchor', 'middle')
										.attr('width', svgDimension)
										.attr('height', svgDimension)
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
	//Limiter les cercles au nombre de 3 :
		// if(dataImportance.size < 3){
			let evenementBloc = svgContainer.append('g')
											.attr('id', 'evenementBloc');
											
			let feelingsGroup = evenementBloc.append('g')
										.attr('id', 'feelingsGroup')
										.selectAll('circle')
										.data(dataImportance)
										.enter()
										.append('circle')
										.attr('id', (d, i) => { return dataId[i] })
										.attr('class', 'colorCircle')
										.attr('r', (d, i) => { return dataImportance[i]*20 })
										//.attr('fill',(d, i) => {return this.props.feeling[i]}) => couleur uni
										.attr('fill', (d, i) => { return 'url(#grad' + i + ')'; })
										//1- placer le cercle courant au milieu
										.attr('cx',  (d, i) => { return svgCenter})
										.attr('cy', (d, i) => { return svgCenter});
										//console.log(this.props.feelingId[i])
			//marche presque, problème si selectionne pour le "cercleSocle"
			d3.selectAll("circle[r='100']")
				.each(function(d, i) {
						d3.select(this)
							.transition()
							.attr('cx', svgCenter+pictoR*Math.cos(Math.round(Math.random()*(72-1)+1)*(Math.PI/180)) )
							.attr('cy', svgCenter+pictoR*Math.sin(Math.round(Math.random()*(72-1)+1)*(Math.PI/180)) )
				});
			d3.selectAll("circle[r='80']")
				.each(function(d, i) {
						d3.select(this)
							.transition()
							.attr('cx', svgCenter+pictoR*Math.cos(Math.round(Math.random()*(144-73)+73)*(Math.PI/180)) )
							.attr('cy', svgCenter+pictoR*Math.sin(Math.round(Math.random()*(144-73)+73)*(Math.PI/180)) )
				});
			d3.selectAll("circle[r='60']")
			.each(function(d, i) {
						d3.select(this)
							.transition()
							.attr('cx', svgCenter+pictoR*Math.cos(Math.round(Math.random()*(216-145)+145)*(Math.PI/180)) )
							.attr('cy', svgCenter+pictoR*Math.sin(Math.round(Math.random()*(216-145)+145)*(Math.PI/180)) )
				});
			d3.selectAll("circle[r='40']")
			.each(function(d, i) {
						d3.select(this)
							.transition()
							.attr('cx', svgCenter+(pictoR*1.5)*Math.cos(Math.round(Math.random()*(288-217)+217)*(Math.PI/180)) )
							.attr('cy', svgCenter+(pictoR*1.5)*Math.sin(Math.round(Math.random()*(288-217)+217)*(Math.PI/180)) )
				});
			d3.selectAll("circle[r='20']").each(function(d, i) {
						d3.select(this)
							.transition()
							.attr('cx', svgCenter+(pictoR*1.5)*Math.cos(Math.round(Math.random()*(360-218)+218)*(Math.PI/180)) )
							.attr('cy', svgCenter+(pictoR*1.5)*Math.sin(Math.round(Math.random()*(360-218)+218)*(Math.PI/180)) )
				});
			d3.xml()
			let pictoEvent = evenementBloc.append("image")
    										.attr("xlink:href", dataPicto)
											.attr('id', 'pictoEvent')
											.attr('x', svgCenter-(svgDimension/10))
											.attr('y', svgCenter-(svgDimension/10))
											.attr('width', (svgDimension/10)*2)
											.attr('height', (svgDimension/10)*2);
			
			//console.log("circleSocle : "+circleSocle);
			//2- changer la disposition des autres cercles, les placer sur le edge du cercle socle
			// d3.selectAll("circle[class='colorCircle']")
			// 	.each(function(d, i) {
			// 		d3.select(this)
			// 			.transition()
			// 			.attr('cx', (d, i) => { return (this === biggestCircle) ? svgCenter : svgCenter+maxR*Math.cos(Math.round(Math.random()*(180-1)+1)*(Math.PI/180)) })
			// 			.attr('cy', (d, i) => { return (this === biggestCircle) ? svgCenter : svgCenter+maxR*Math.sin(Math.round(Math.random()*(360-180)+180)*(Math.PI/180)) })

			// 	})

				// }).attr('cx',  (d, i) => { return svgCenter})
				// 	.attr('cy', (d, i) => { return svgCenter})
				// 	.attr('fill', "blue");

				
			// circleSet.selectAll('circle')
			// 	.each((d, i) => {


			// d3.selectAll("circle[class='colorCircle']").transition().attr('cx', svgCenter+maxR*Math.cos(Math.round(Math.random()*(360-1)+1)*(Math.PI/180)))
			// 														.attr('cy',  svgCenter+maxR*sinRandom);
			// // d3.selectAll("circle[r='50']").transition().attr('cx', svgCenter+maxR*cosRandom)
			// // 										.attr('cy', svgCenter+maxR*cosRandom);										
			// d3.selectAll("circle[r='40']").transition().attr('cx', svgCenter+maxR*cosRandom)
			// 										.attr('cy', svgCenter+maxR*sinRandom);
			// d3.selectAll("circle[r='30']").transition().attr('cx', svgCenter+maxR*cosRandom)
			// 										.attr('cy', svgCenter+maxR*sinRandom);
			// d3.selectAll("circle[r='20']").transition().attr('cx', svgCenter+maxR*cosRandom)
			// 										.attr('cy', svgCenter+maxR*sinRandom);
			// d3.selectAll("circle[r='10']").transition().attr('cx', svgCenter+maxR*cosRandom)
			// 										.attr('cy', svgCenter+maxR*sinRandom);
			//console.log(d3.selectAll("circle[class='colorCircle']"))
														
			

			//marche presque, problème si selectionne plusieurs fois la m^me valeur
			// d3.selectAll("circle[r='50']").transition().attr('cx', svgCenter)
			// 										.attr('cy', svgCenter);
			// d3.selectAll("circle[r='40']").transition().attr('cx', svgCenter+maxR*Math.cos(0))
			// 										.attr('cy', svgCenter+maxR*Math.sin(0));
			// d3.selectAll("circle[r='30']").transition().attr('cx', svgCenter+maxR*Math.cos(1.5))
			// 										.attr('cy', svgCenter+maxR*Math.sin(1.5));
			// d3.selectAll("circle[r='20']").transition().attr('cx', svgCenter+maxR*Math.cos(3))
			// 										.attr('cy', svgCenter+maxR*Math.sin(3));
			// d3.selectAll("circle[r='10']").transition().attr('cx', svgCenter+maxR*Math.cos(4.5))
			// .attr('cy', svgCenter+maxR*Math.sin(4.5));
			// }else{
			// 	console.log("--------------------------> + de trois !")		
			// 	toMuchCirclesGroup.attr("opacity", "1");
			// }
		return nodeD3.toReact()
	}

	render() {
		// console.log(this.props);
		return this.drawFeeling();
		
	}
}

export default PreviewScreen;