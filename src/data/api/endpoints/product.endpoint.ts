import { Product } from '../../../domain/entities/Product';
import DummyJsonApiClient from '../../../infrastructure/api/DummyJsonApiClient';

export interface GetAllProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function getAllProducts(getProductRequest: {
  limit?: number;
  skip?: number;
}): Promise<GetAllProductsResponse> {
  const response = await DummyJsonApiClient.get<GetAllProductsResponse>(
    `/products`,
    {
      params: getProductRequest,
    }
  );
  return response.data;
}
