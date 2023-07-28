import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
export interface CreateProductDto
  extends Omit<Product, 'id' | 'category' | 'updatedAt' | 'creationAt'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface FindProductDto extends Readonly<Partial<Product>> {
  readonly tags: ReadonlyArray<string>;
}
