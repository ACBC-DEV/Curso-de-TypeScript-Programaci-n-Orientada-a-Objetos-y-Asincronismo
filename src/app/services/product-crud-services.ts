import { UpdateProductDto } from '../dto/product.dto';
import { Product } from '../models/product.model';
import { ProductHtttpService } from './product-http-service2';

export class ProdcutCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHtttpService(this.url);
  async update(id: Product['id'], dto: UpdateProductDto) {
    this.http.getAll();
    return this.http.update(id, dto);
  }
}
