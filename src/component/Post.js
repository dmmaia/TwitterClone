import React from 'react';

import Coment from './Coment';

export default class Post extends React.Component{
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
			<div>
				<h2>{this.props.title}</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.newComentText}
						onChange={this.handleTextChange}
					 />
					<button type="submit">Comentar</button>
				</form>
				{this.state.coments.map((coment, index) => {
					return <Coment key= {index}text={coment.text} />
				})}
			</div>
		)
	}
}