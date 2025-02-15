import mongoose from  'mongoose';

// Define the schema for Employee ID
const Employee_id = new mongoose.Schema({
    Name: String,
    salary: Number,
    date: String
});

// Create a model based on the schema
export const Human_id = mongoose.model('ID_card', Employee_id);