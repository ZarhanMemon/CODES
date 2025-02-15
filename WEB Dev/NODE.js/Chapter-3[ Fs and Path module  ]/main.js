// Import the built-in fs (File System) module to interact with the file system
let fs = require('fs');


// 1. Creating a file using the synchronous method: writeFileSync()
 
console.log('Starting to create file');

fs.writeFileSync('myText.txt', "heeloo i am the my text file with sync nature");

console.log('File created synchronously');  


// 2. Creating a file using the asynchronous method: writeFile()
 
console.log('Starting to create file');

fs.writeFile('myText2.txt', "heeloo i am the my text file without sync", () => {
    console.log('File created asynchronously');  
});

console.log('This will run before the file is created asynchronously'); 



// 3. Reading the contents of a file: fs.readFile() (asynchronous method)

fs.readFile('myText.txt', (error, data) => {
    console.log(data.toString());
    
});


// 4. Appending to a file: fs.appendFile() (asynchronous method)
fs.appendFile("myText.txt", "\n heelooo i khana kha jana he", (e, d) => {
   console.log( d);
});


// Notes:
// - `fs.writeFileSync()` is a blocking method (synchronous), meaning it will complete the file writing before moving on to the next line of code.
// - `fs.writeFile()` is a non-blocking method (asynchronous), meaning the code execution continues without waiting for the file write to complete.
// - `fs.readFile()` and `fs.appendFile()` are also asynchronous methods.
// - For synchronous methods, you can use their `Sync` counterparts, e.g., `fs.appendFileSync()`, `fs.readFileSync()`.
// - Synchronous methods may be simpler to use in small scripts or when you need to guarantee that the operation finishes before continuing, but for performance reasons, asynchronous methods are preferred in larger applications where non-blocking behavior is desired.
