import { ProductStoreApi } from '@adapters/products/types';
import { Product } from '@products/entities';

export const parseProductListApiToProductList = (
  input: ProductStoreApi[],
): Product[] => {
  return input.map(
    (item: ProductStoreApi) =>
      ({
        id: item.id,
        title: item.title,
        review: item.description,
        image: item.image,
      }) as Product,
  );
};

export const parseProductApiToProduct = (input: ProductStoreApi): Product => {
  return {
    apiId: input.id,
    title: input.title,
    review: input.description,
    price: input.price,
    image: input.image,
  } as Product;
};
