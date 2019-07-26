import React , { Component }from 'react';
import { connect } from 'react-redux';
import './containers/App.css';
import MainPage from './components/MainPage';
import { setSearchField,requestRobots } from './action'

const mapStateToProps =  state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error

	}
}

const mapDispathToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	render() {
		return <MainPage { ...this.props }/>
	}
}

export default connect(mapStateToProps,mapDispathToProps)(App);