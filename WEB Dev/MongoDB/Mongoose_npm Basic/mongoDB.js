// https://www.npmjs.com/package/mongodb


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'DB_wrt_Mongodb_npm';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');


    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    // the following code examples can be pasted here...


    const findResult = await collection.find({ a: 1 }).toArray();   // create array of 2 x {a:1}
    console.log('Found documents =>', findResult);


    const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
    console.log('Updated documents =>', updateResult);
    //update the {a:3} ==> {b:1} 



    // const deleteResult = await collection.deleteMany({ a: 3 });
    // console.log('Deleted documents =>', deleteResult);
    // no file matches {a:3} hence error

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());