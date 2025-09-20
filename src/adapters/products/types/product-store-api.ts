import { RatingStoreApi } from '@adapters/products/types/rating-store-api';

export type ProductStoreApi = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingStoreApi;
};
