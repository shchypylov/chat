import axios from 'axios';
import history from './history';


const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,

});

axiosInstance.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(err);

});

export default axiosInstance;
