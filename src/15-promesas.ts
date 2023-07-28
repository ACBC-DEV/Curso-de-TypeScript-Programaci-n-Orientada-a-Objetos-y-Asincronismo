import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }
  function getProduct() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  async function getProductAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta;
  }

  console.log('-----'.repeat(10));
  const rta = await delay(2000);
  console.log(rta);
  const products = await getProduct();
  console.log(products.data);
  const productsV2 = await getProductAsync();
  console.log(productsV2.data);
})();
