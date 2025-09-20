import { ProductStoreApi } from '@adapters/products/types';
import axios from 'axios';

export default class ProductsApiAdapter {
  public static async findProductApi<T>(url: string): Promise<T> {
    return (await axios.get<T>(url)).data;
  }

  public static async getAllProducts(): Promise<ProductStoreApi[]> {
    return await this.findProductApi<ProductStoreApi[]>(
      'https://fakestoreapi.com/products',
    );
  }

  public static async getProductById(id: number): Promise<ProductStoreApi> {
    return await this.findProductApi<ProductStoreApi>(
      `https://fakestoreapi.com/products/${id}`,
    );
  }
}
