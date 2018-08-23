import axios from 'axios';
import history from './history';


const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': 'http://localhost:8080',
		// 'Access-Control-Allow-Headers':'Content-Type,Authorization',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		'Access-Control-Allow-Credentials': 'true'
	}
});

axiosInstance.interceptors.response.use(res => {
	return res;
}, err => {
	return Promise.reject(err);

});

export default axiosInstance;
