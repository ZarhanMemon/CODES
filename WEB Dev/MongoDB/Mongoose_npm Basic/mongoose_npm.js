// Importing mongoose for interacting with MongoDB and express to create the server
import mongoose from "mongoose";
import express from "express";

// Importing the Employee model (assumed to be defined in './model/Employee.js')
import { Human_id } from './model/Employee.js';

// Establishing connection to MongoDB database using mongoose
let db = await mongoose.connect("mongodb://localhost:27017/DB_wrt_Mongoose_npm");  // Connecting to a local MongoDB instance with the database name "DB_wrt_Mongoose_npm"

const app = express();  // Creating an Express application instance
const port = 5000;  // Port where the server will listen for requests

// Route for the home page
app.get('/', (req, res) => {
    res.send('Hello World!');  // Sends a simple "Hello World!" response when accessing the root route
});

// Route for creating and saving a new employee
app.get('/employee', async (req, res) => {

    // Creating a new instance of the Human_id model, which represents an employee document
    let ID_CARD = new Human_id({
        "Name": "zarhan",  // Assigning the employee's name
        "salary": Math.floor(Math.random() * (1000000 - 2000 + 1)) + 2000, 
        "date": "21/22/33"  
    });

    

    ID_CARD.save();  // Saving the employee document to the MongoDB collection

    
    let selective_employ = await Human_id.findOne({ "salary": 225513 });  // Searching for an employee with a specific salary

 
    console.log(selective_employ);  // Logs the employee details that match the search query


    // Responding with the employee details in JSON format
    res.json({
        Name: selective_employ.Name,  // Returning the employee's name
        Salary: selective_employ.salary,  // Returning the employee's salary
        Date: selective_employ.date  // Returning the employee's date (ensure the date is in a valid format)
    });
});

// Starting the Express server and listening on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);  // Logging to console when the server is successfully running
});
