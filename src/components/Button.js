import React from 'react';

export default class Button extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="buttonLeft">
				<p>{this.props.title}
					<img src="#" />
				</p>
			</div>
		);
	}
}