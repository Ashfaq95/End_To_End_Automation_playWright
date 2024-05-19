//let's assume the product code is unique for each products. To make any kind of query for a specific product this is necessary
const productCode: string = "A1030";

//to check the quantity
const productQty: number =50;

//product sold out
const isProductAvailable: boolean = true;

//to check the product price
const productPrice: number = 100;

//to check the products are vegan/vegetarian/meat-based/halal
const veganProduct: boolean = true;
const vegetarianProduct: boolean = true;
const meatBasedProduct: boolean = true;
const halalProduct: boolean = true;

//to check product details
const productDetails: string = "This is an electrolyte drink contained with .......";

//to check product ingredients. There could be multiple types of ingredients so I used string array 
const productIngredients: string[] = ["orange","sugar","salt","water"];

//to check if there's a promotion going on currently for this product
const productPromotion: boolean = true;

//to check the promotional message
const productPromotionalMsg: string = "khailei changa";


console.log(`Product Code: ${productCode}`);
console.log(`product quantity: ${productQty}`);
console.log(`Quantity left ${isProductAvailable ? "Yes" : "No"}`);
console.log(`Product Price: ${productPrice}`);
console.log(`Is the product vegan? ${veganProduct ? "Yes" : "No"}`);
console.log(`Is the product vegetarian? ${vegetarianProduct ? "Yes" : "No"}`);
console.log(`Is the product meat-based? ${meatBasedProduct ? "Yes" : "No"}`);
console.log(`Is the product halal? ${halalProduct ? "Yes" : "No"}`);
console.log(`Product Details: ${productDetails}`);
console.log(`Product Ingredients: ${productIngredients.join(", ")}`);
console.log(`Is there a promotion? ${productPromotion ? "Yes" : "No"}`);
console.log(`Product Promotion message: ${productPromotionalMsg}`);

