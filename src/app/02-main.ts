import { ProductMenoryService } from './services/product-memory.services';
const productService = new ProductMenoryService();

productService.create({
  title: 'producto1',
  price: 100,
  description: 'blalsda',
  categoryId: 23,
  images: [],
});
const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'cambiar nombre',
});

console.log(productService.findOne(productId));
