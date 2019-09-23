import React from 'react';
import perfil from "../img/perfil.png";

export default class NewPost extends React.Component {
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
			<div className="NC-header">
				<div>
					<a>X</a>
					<button>Tweetar</button>
				</div>
				<form onSubmit={this.handleSubmit}>
					<img src={perfil}/>
					<input value={this.state.newComentText}
						onChange={this.handleTextChange} />
					</form>
			</div>
		);
	}
}