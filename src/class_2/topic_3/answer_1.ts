// Define the type for a product
type Product = { 
    name: string;
    price: number;
    quantity: number 
};

// Array of products
const products: Product[] = [
    { name: "Laptop", price: 1000, quantity: 5 },
    { name: "Phone", price: 500, quantity: 10 },
    { name: "Tablet", price: 300, quantity: 7 }
];

// Function to calculate total inventory value
function calculateTotalInventoryValue(products: Product[]): number {
    let totalValue = 0; // Initialize total value

    // Calculate total value using for of loop
    for (const { price, quantity } of products) {
        totalValue += price * quantity; // Add product value to total
    }

    return totalValue; // Return total inventory value
}

// Calculate and print total inventory value
const totalInventoryValue = calculateTotalInventoryValue(products);
console.log(`Total inventory value: $${totalInventoryValue}`);
