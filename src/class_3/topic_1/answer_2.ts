type Product1 = {
  name: string;
  price: number;
  inStock: boolean;
};

const productsList: Product1[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 600, inStock: false },
  { name: "Tablet", price: 400, inStock: true },
  { name: "Monitor", price: 300, inStock: true }
];

type DiscountedProduct = {
  name: string;
  price: number;
};

function getDiscountedProducts(products: Product1[]): DiscountedProduct[] {
  return products.filter(product => product.inStock).map(product => ({ //filter: Filters out products that are out of stock and map: Transforms the remaining products to include only the name and the discounted price (10% discount applied).
    name: product.name,
    price: product.price * 0.9
  }));
}

const discountedProducts = getDiscountedProducts(productsList);
console.log(discountedProducts);
