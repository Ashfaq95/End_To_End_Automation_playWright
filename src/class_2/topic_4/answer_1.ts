function calculateNetPrice(productPrice: number,discount: number,serviceCharge: number,tax: number): number {
    
    const discountPrice = productPrice * (1 - discount / 100); // Apply discount
    const priceWithTax = discountPrice * (1 + tax / 100); // Apply tax
    const finalPrice = priceWithTax * (1 + serviceCharge / 100); // Apply service charge

    return finalPrice;
}

// A product that has 10% discount
const priceWithDiscount = calculateNetPrice(100, 10, 3, 5);
console.log(`Price with 10% discount: ${priceWithDiscount.toFixed(2)}`); 

// A product that has 200% tax
const priceWithHighTax = calculateNetPrice(100, 0, 3, 200);
console.log(`Price with 200% tax: ${priceWithHighTax.toFixed(2)}`);

// A product that has been waived off of the service charge
const priceWithNoServiceCharge = calculateNetPrice(100, 0, 0, 5);
console.log(`Price with no service charge: ${priceWithNoServiceCharge.toFixed(2)}`);
