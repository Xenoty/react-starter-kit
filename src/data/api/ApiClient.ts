import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({ baseURL, ...config });
  }

  async request<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url,
        data,
        ...config,
      });
      return response;
    } catch (error) {
      // Handle errors here (e.g., logging, error transformation)
      throw error;
    }
  }

  // Convenience methods (optional)
  async get<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>('get', url, undefined, config);
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T>('post', url, data, config);
  }

  // ... similar methods for put, patch, delete
}

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL);

export default apiClient;
