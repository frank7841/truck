import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Dispatch from './components/Dispatch';

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/dispatch" exact component={Dispatch} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
