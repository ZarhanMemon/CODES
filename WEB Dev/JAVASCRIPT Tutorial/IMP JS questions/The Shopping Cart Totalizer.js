// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


let products = [
    { "product": "Laptop", "price": 999.99 },
    { "product": "Smartphone", "price": 599.99 },
    { "product": "Headphones", "price": 149.99 },
    { "product": "Smartwatch", "price": 199.99 },
    { "product": "Bluetooth Speaker", "price": 89.99 },
    { "product": "Tablet", "price": 329.99 },
    { "product": "Wireless Mouse", "price": 29.99 },
    { "product": "External Hard Drive", "price": 79.99 }
];

function calculateTotal(products) {

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i].product} .................................... ${products[i].price}`);
    }

    num_of_items_added = prompt("Enter the total no of products to added :");

    if (isNaN(num_of_items_added) || num_of_items_added <= 0) {
        console.log("Please enter a valid number of items.");
        return;
    }

    let total_cost = 0;

    for (let j = 1; j <= parseInt(num_of_items_added); j++) {

        let productIndex = prompt("Enter the product number (1 to " + products.length + "):");

        if (isNaN(productIndex) || productIndex < 1 || productIndex > products.length) {
            console.log("Invalid product number. Please try again.");
            j--;
            continue;
        }

        let productQuantity = prompt("Enter the product quatity :");

        if (isNaN(productQuantity) || productQuantity < 0) {
            console.log("Invalid product quintity. Please try again.");
            j--;
            continue;
        }

        total_cost += parseInt(products[parseInt(productIndex) - 1].price * parseInt(productQuantity));

    }

    console.log("\n Total Cost: $" + total_cost);
    
}


calculateTotal(products)
