// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


function placeOrder() {
    const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Your order is placed")
        }, randomTime);
    })
}

async function main() {
    console.log("Give your order");

    setTimeout(() => {
        console.log("Placing your order...");
    }, 600);

    const confirmation = await placeOrder(); 
    console.log(confirmation);
}


main()
