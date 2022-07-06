import { NotifyDanger, NotifySuccess, Toastcontainer } from '../util/notify';

import { baseURL } from '../configApi/config';
import axios from 'axios';

export const Submit = async (data, gurl, method) => {
	console.log(data);

	//const baseURL = 'https://powstik-back-test.azurewebsites.net';
	const url = baseURL + gurl;

	const data2 = JSON.parse(JSON.stringify(data));
	console.log(data2);

	const config = {
		headers: {
			'Content-Type': 'application/JSON',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	};
	if (method == 'post') {
		try {
			const response = await axios.post(url, data2, config);
			console.log(response);
			NotifySuccess('success ' + response.message);
		} catch (err) {
			console.log(err);
			NotifyDanger(err.message);
		}
	} else if (method == 'get') {
		try {
			const response = await axios.get(url, config);
			console.log(response);
			NotifySuccess('success ' + response.message);
		} catch (err) {
			console.log(err);
			NotifyDanger(err.message);
		}
	}
};
