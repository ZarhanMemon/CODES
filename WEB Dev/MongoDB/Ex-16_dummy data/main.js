// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 


import express from 'express'
import mongoose from 'mongoose'



// Define the schema for the 'id_cards' collection
let Employee_id = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

// Define the model (Human_id) for the 'id_cards' collection
const Human_id = mongoose.model("ID_card", Employee_id, 'id_cards'); // 'id_cards' is the collection name


let url = "mongodb://localhost:27017/DummyData"

mongoose.connect(url);  // Connecting to a local MongoDB instance with the database name "DB_wrt_Mongoose_npm"


const app = express()
const port = 3000


const randomNames = ["Harry", "John", "Emma", "Sophia", "James", "Oliver", "Isabella", "Mason", "Ava", "Ethan"];
const randomCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin"];
const randomLanguages = ["Python", "JavaScript", "Java", "C#", "Ruby", "Go", "Swift", "PHP", "C++", "Rust"];

app.set('view engine' , 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs' ,{foo:'FOO'} )
})



app.get('/employee', async (req, res) => {

    await Human_id.deleteMany({});


    for (let i = 0; i < 10; i++) {

        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];
        const randomLanguage = randomLanguages[Math.floor(Math.random() * randomLanguages.length)];

        let Employee_detail = await Human_id({
            name: randomName,
            salary: Math.floor(Math.random() * (100000 - 30000) + 30000),
            language: randomCity,
            city: randomLanguage,
            isManager: Math.random > .5

        })

        Employee_detail.save()

    }


    res.send("Done")

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
