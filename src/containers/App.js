import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:[],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>  response.json())
			.then(users => this.setState({ robots: users }))
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
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>

		)
	}
	
}

export default App;