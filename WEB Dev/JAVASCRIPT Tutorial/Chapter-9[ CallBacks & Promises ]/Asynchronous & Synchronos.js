// synchronous  = Executes line by line consecutively in a sequential manner 
//                             Code that waits for an operation to complete.


console.log("Task1");
console.log("Task2");
console.log("Task3\n\n");




// asynchronous = Allows multiple operations to be performed 
//                               concurrently without waiting. Doesn't block the execution 
//                               flow and allows the program to continue.
//                               (I/O operations, network requests, fetching data)
//
//Handled with: Callbacks, Promises, Async/Await



setTimeout(() => {
    console.log("Task0")
}, 0);

console.log("Task1");
console.log("Task2");
console.log("Task3");
