import React from 'react';

import { HashRouter, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Slider from 'react-slick';

import logo from './logo.svg';
import './App.css';

import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import LandingPage from './components/LandingPage';

import ProductResults from './components/productResults';
import AddProduct from './components/addProduct/addProduct';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/products" element={<ProductResults />} />
					<Route path="/addproduct" element={<AddProduct />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
