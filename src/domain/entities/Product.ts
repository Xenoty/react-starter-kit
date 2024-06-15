import { BaseEntity } from '../base/Entity';
import { Dimensions } from '../valueObjects/Dimensions';
import { Meta } from '../valueObjects/Meta';
import { Review } from '../valueObjects/Review';

/**
 * Example from: https://dummyjson.com/docs/products#products-all
 */
export interface Product extends BaseEntity {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}
