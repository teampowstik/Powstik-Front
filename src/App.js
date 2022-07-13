import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import LandingPage from './components/LandingPage';
import Cart from './components/cart/cart';
import EditAccount from './components/editAccount/editAccount';
import AccountDetails from './components/accountDetails/account';

import ProductResults from './components/productResults';
import AddProduct from './components/addProductPage/addProduct';
import UpdateProduct from './components/updateProductPage/updateProductPage';
import AddService from './components/addServicePage/addServicePage';
import UpdateService from './components/updateServicePage/updateServicePage';
import ProductPage from './components/ProductPage';
import ServicePage from './components/servicePage';
import { getCategory } from './configApi/utilFunction';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/edit-account" element={<EditAccount />} />
					<Route path="/account-details" element={<AccountDetails />} />
					<Route path="/products" element={<ProductResults />} />
					<Route path="/addproduct" element={<AddProduct />} />
					<Route path="/updateproduct" element={<UpdateProduct />} />
					<Route path="/addservice" element={<AddService />} />
					<Route path="/updateservice" element={<UpdateService />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/service" element={<ServicePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
