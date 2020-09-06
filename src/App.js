import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:robots,
			searchField: ''
		}
	}

	onsearchchange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return (
			<div className='tc'> 
				<h1 className='f1'> My Robot Friends</h1>
				<SearchBox searchChange={this.onsearchchange}/>
				<CardList robots={filteredRobots}/>
			</div>

		)
	}
	
}

export default App;