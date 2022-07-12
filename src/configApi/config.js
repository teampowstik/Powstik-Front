export const baseURL = 'https://powstik-back-test.azurewebsites.net';
export let access_token = '@@';

export const add_access_token = (token) => {
	console.log('calling access token');
	access_token = token;
	console.log('new at ', access_token);
};
