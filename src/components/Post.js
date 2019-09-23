import React from 'react';
import perfil from "../img/perfil.png";


export default class Post extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Post">
				<img src={perfil} className="postPerfil"/>
				<spam>UserName</spam>@userarroba
				<div className="contentPost">{this.props.text}</div>
			</div>
		);
	}
}