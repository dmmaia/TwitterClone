import React from 'react';
import Button from './Button.js';
import iconT from '../img/icon-t.png';

export default class LEftBlock extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="leftBlock">
				<img src={iconT} />
				<Button title="Página Inicial" />
				<Button title="Explorar" />
				<Button title="Notificações" />
				<Button title="Mensagens" />
				<Button title="Itens salvos" />
				<Button title="Listas" />
				<Button title="Perfil" />
				<Button title="Mais" />
				<button type="button" className="btn btn-primary left-B">Tweetar</button>
			</div>
		);
	}
}