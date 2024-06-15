// import config from '../config/config';
import ApiClient from './base/ApiClient';

// Example from: https://dummyjson.com/docs/products#products-all
// Hard-coded for now.
const apiClient = new ApiClient('https://dummyjson.com');
// const apiClient = new ApiClient(config.ApiUrl);

export default apiClient;
