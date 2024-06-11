import { GetUserResponse, getUser } from '../api/endpoints/userEndpoint';

export async function fetchUser(): Promise<GetUserResponse> {
  const result = await getUser({ id: 1 });
  return result;
}
