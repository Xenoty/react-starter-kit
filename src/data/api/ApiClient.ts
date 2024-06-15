import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../../infrastructure/config/config';

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, requestConfig?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({ baseURL, ...requestConfig });
  }

  async request<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: unknown,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url,
        data,
        ...requestConfig,
      });
      return response;
    } catch (error) {
      // Handle errors here (e.g., logging, error transformation)
      throw error;
    }
  }

  // Convenience methods (optional)
  async get<T>(url: string, requestConfig?: AxiosRequestConfig) {
    return this.request<T>('get', url, undefined, requestConfig);
  }

  async post<T>(
    url: string,
    data?: unknown,
    requestConfig?: AxiosRequestConfig
  ) {
    return this.request<T>('post', url, data, requestConfig);
  }

  // ... similar methods for put, patch, delete
}

const apiClient = new ApiClient(config.ApiUrl);

export default apiClient;
