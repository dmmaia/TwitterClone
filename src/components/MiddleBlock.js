import React from 'react';
import Post from './Post.js';

import perfil from "../img/perfil.png";

export default class MiddleBlock extends React.Component {
	constructor(props){
		super(props);

		this.state={
			coments: [],
			newComentText: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleSubmit(e){
		this.setState({
			coments: [
				...this.state.coments,
				{ text: this.state.newComentText}
			]
		});

		this.setState({ newComentText: '' })

		e.preventDefault();
	}

	handleTextChange(e){
this.setState({ newComentText: e.target.value })
	}

	render(){
		return(
			<div className="middleBlock">
				<h2>Página Inicial</h2>
				<div className="middleHeader">
					<div><img src={perfil}/></div>
					<form onSubmit={this.handleSubmit}>
					<input value={this.state.newComentText}
						onChange={this.handleTextChange} />
					</form>
				</div>
				<div className="Feed">
					{this.state.coments.map((coment, index) => {
					return <Post key= {index}text={coment.text} />
				})}
				</div>
			</div>
		);
	}
}