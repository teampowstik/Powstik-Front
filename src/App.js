import React from 'react';

import { HashRouter, BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Slider from 'react-slick';

import logo from './logo.svg';
import './App.css';

import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import LandingPage from './components/LandingPage';

import ProductResults from './components/productResults';
import AddProduct from './components/addProductPage/addProduct';
import UpdateProduct from './components/updateProductPage/updateProductPage';
import AddService from './components/addServicePage/addServicePage';
import UpdateService from './components/updateServicePage/updateServicePage';

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
					<Route path="/updateproduct" element={<UpdateProduct />} />
					<Route path="/addservice" element={<AddService />} />
					<Route path="/updateservice" element={<UpdateService />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
