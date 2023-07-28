import { ProductHttpService } from './services/product-http-service';
(async () => {
  const ProductService = new ProductHttpService();
  try {
    console.log('getALL---'.repeat(10));
    const products = await ProductService.getAll();
    console.log(products.length);
    console.log('map---'.repeat(10));
    console.log(products.map((i) => i.price));

    const productId = products[0].id;
    await ProductService.update(productId, {
      price: 1200,
    });
    const product = await ProductService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
})();
