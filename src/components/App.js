import React from 'react';
import RightBlock from './RightBlock.js';
import MiddleBlock from './MiddleBlock.js';
import LeftBlock from './LeftBlock.js';
import './App.css';

export default class App extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Main-container">
				<LeftBlock />
				<MiddleBlock />
				<RightBlock />
			</div>	
		);
	}
}