import { UpdateProductDto } from '../dto/product.dto';
import { Product } from '../models/product.model';
import { Category } from './../models/category.model';
import axios from 'axios';
export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(protected url: string) {}
  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}
// const service = new BaseHttpService<string>();
// service.data = ['datos', 'darkMode'];

(async () => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const service = new BaseHttpService<Product>(url);
  const rta = await service.getAll();
  console.log(rta.length);
  const urlC = 'https://api.escuelajs.co/api/v1/categories';
  service.update<Product['id'], UpdateProductDto>(12, {
    title: 'andres',
  });
  const Categoryservice = new BaseHttpService<Category>(urlC);
  const rta1 = await Categoryservice.getAll();
  console.log(rta1.length);
})();
