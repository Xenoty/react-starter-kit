import config from '../config/config';
import ApiClient from './base/ApiClient';

const apiClient = new ApiClient(config.ApiUrl);

export default apiClient;
