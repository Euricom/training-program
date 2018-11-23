import axios, { AxiosRequestConfig } from 'axios';
import { Product } from '@/shared/models/product';

export interface IProductDTO {
  id: number;
  sku: string;
  title: string;
  desc: string;
  image?: string;
  stocked: boolean;
  basePrice: number;
  price: number;
}

export interface IProductsDTO {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: IProductDTO[];
}

const baseUrl = 'https://euri-test-api.now.sh/api/products';

export class ProductService {
  async getAll(page = 0, sortExpression = '') {
    const config: AxiosRequestConfig = {
      params: {
        page: page.toString(),
        sort: sortExpression,
      },
    };
    const res = await axios.get<IProductsDTO>(baseUrl, config);
    const dtoArray = res.data.selectedProducts;
    return dtoArray.map(dto => new Product(dto));
  }

  async getById(id: string | number): Promise<Product> {
    const res = await axios.get<IProductDTO>(`${baseUrl}/${id}`);
    return new Product(res.data);
  }

  async update(product: Product): Promise<Product> {
    const res = await axios.put<IProductDTO>(`${baseUrl}/${product.id}`, product);
    return new Product(res.data);
  }

  async create(product: Product): Promise<Product> {
    const res = await axios.post<IProductDTO>(baseUrl, product);
    return new Product(res.data);
  }

  save(product: Product): Promise<Product> {
    if (product.isNew()) {
      return this.create(product);
    }
    return this.update(product);
  }

  async delete(id) {
    const res = await axios.delete(`https://euri-test-api.now.sh/api/products/${id}`);
    return new Product(res.data);
  }
}

export default new ProductService();
