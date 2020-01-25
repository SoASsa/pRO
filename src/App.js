import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Footer from "./components/footer";
import AdBootom from "./components/ad_bottom";
import Search from "./components/search";
import Header from "./components/header";
import Logo from "./components/header/logo";
import Navigation from "./components/header/nav";
import NavButtons from "./components/header/buttons";
import NavCart from "./components/header/cart";
import NavSochial from "./components/header/soch";


// import {connect} from 'react-redux';
// import {
// 	CardColumns,
// 	Container,
// 	Row,
// 	Col,
// } from 'react-bootstrap';
// import MovieCard from "./components/card";
// // import { bindActionCreators } from '../../../Users/Admin/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
// import * as ActionCreators from './store/action_creators'

// connect
// class App extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			moviesList: [],
// 			watched: {},
// 		}
// 	}
// }

function App(props) {
	return (
		<React.Fragment>
			<Search/>
			<div className="main-content-wrapper d-flex clearfix">
				<Header>
					<Logo/>
					<Navigation/>
					<NavButtons/>
					<NavCart/>
					<NavSochial/>
				</Header>
				{ props.children }
			</div>
		<AdBootom />
		<Footer />
		</React.Fragment>
	);
}

// componentDidMount() {
// 	const movies = fetch('https://api.tvmaze.com/search/shows?q=batman');
// 	movies. 
// 	then((data) => {
// 		return data.json();
// 	}).then( (data) => {
// 		// this.setState( {moviesList: data });
// 	this.props.updateMovies(data)
// 	}).
// 	catch((e) => {
// 		console.log("ERROR while loading data from url", e);
// 	});
// }



// const mapStateToProps = (state) => {
// return {
// 	moviesList: state.app.moviesList,
// 	watched: state.app.watched,
// }
// };

// function mapDispatchToProps(dispatcher) {
// 	return {
// 		updateMovies: (payload) => dispatcher(bindActionCreators.updateMovies(payload)), 
// 		getMovies: () => dispatcher(ActionCreators.getMovies(payload)),
// 	}
// }

// const connected = connect (mapStateToProps, mapDispatchToProps)(App);
// export default connected;
export default App;
