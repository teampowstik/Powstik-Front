import React from 'react';
import { HashRouter, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import LandingPage from './components/LandingPage';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
