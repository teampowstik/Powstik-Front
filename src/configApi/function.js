import { NotifyDanger, NotifySuccess, Toastcontainer } from '../util/notify';

import { baseURL } from '../configApi/config';
import axios from 'axios';

export const Submit = async (data, gurl, method) => {
	// console.log('submit caleed');

	//const baseURL = 'https://powstik-back-test.azurewebsites.net';
	const url = baseURL + gurl;

	const data2 = JSON.parse(JSON.stringify(data));
	console.log('data sending to server= ', data2);

	const config = {
		headers: {
			Authorization: 'Bearer ' + localStorage.access,
			'Content-Type': 'application/JSON',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	};
	if (method == 'post') {
		try {
			const response = await axios.post(url, data2, config);
			console.log(url, ' response = ', response);
			NotifySuccess('success! ' + response.data.message);
			// NotifySuccess('success!');
			return response;
		} catch (err) {
			console.log(err);
			NotifyDanger(err.message);
			return err;
		}
	} else if (method == 'get') {
		try {
			const response = await axios.get(url, config);
			console.log(url, ' response = ', response);
			NotifySuccess('success ' + response.data.message);
			return response;
		} catch (err) {
			console.log(err);
			NotifyDanger(err.message);
			return null;
		}
	}
};

export const SubmitWithFile = async (data, gurl, method) => {
	// console.log('submit caleed');

	//const baseURL = 'https://powstik-back-test.azurewebsites.net';
	const url = baseURL + gurl;
	const data2 = data;
	console.log('data sending to server= ', data2);
	for (var pair of data.entries()) {
		console.log(pair[0] + ', ' + pair[1]);
	}

	const config = {
		headers: {
			Authorization: 'Bearer ' + localStorage.access,
			'Content-Type': 'multipart/form-data',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	};
	if (method == 'post') {
		try {
			const response = await axios.post(url, data2, config);
			console.log(url, ' response = ', response);
			NotifySuccess('success! ' + response.data.message);
			// NotifySuccess('success!');
			return response;
		} catch (err) {
			console.log(err);
			NotifyDanger(err.message);
			return err;
		}
	} else if (method == 'get') {
		try {
			const response = await axios.get(url, config);
			console.log(url, ' response = ', response);
			NotifySuccess('success ' + response.data.message);
			return response;
		} catch (err) {
			console.log(err);
			NotifyDanger(err.message);
			return null;
		}
	}
};
