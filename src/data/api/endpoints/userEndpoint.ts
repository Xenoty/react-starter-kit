import apiClient from '../ApiClient';
import { User } from '../../../domain/entities/User';

export interface GetUserRequest {
  id: number;
}

// Response
export interface GetUserResponse {
  user: User;
}

// Endpoint
export async function getUser(
  getUserRequest: GetUserRequest
): Promise<GetUserResponse> {
  const response = await apiClient.get<GetUserResponse>(
    `/users/${getUserRequest.id}`
  );
  return response.data;
}
