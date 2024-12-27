// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.



async function brewCoffee() {
    const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    let type_coffee = ["Espresso", "Latte", "Cappuccino"];

    for (let i = 0; i < type_coffee.length; i++) {
        console.log(`${i + 1}. ${type_coffee[i]} \n`);
    }

    let prompt_inp = parseInt(prompt("Enter the coffee number (1, 2, or 3):"));

        if (prompt_inp > 0 && prompt_inp < type_coffee.length && (~isNaN(prompt_inp))) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`${type_coffee[prompt_inp-1]} is ready !`)
                }, randomTime);
            }
            )
        };
    }


brewCoffee()
    .then((message) => console.log(message));
