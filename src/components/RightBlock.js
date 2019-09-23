import React from 'react';

export default class RightBlock extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="header-container">
				<form><input type="text"/></form>
				<div>
					<h2>Tendências de Brasil</h2>
					<a href="#"><p>#Hashtah1</p></a>
					<a href="#"><p>#Hashtah2</p></a>
					<a href="#"><p>#Hashtah3</p></a>
					<a href="#"><p>#Hashtah4</p></a>
					<a href="#"><p>#Hashtah5</p></a>
					<a href="#"><p><spam>Mostrar Mais</spam></p></a>
				</div>
			</div>
		);
	}
}