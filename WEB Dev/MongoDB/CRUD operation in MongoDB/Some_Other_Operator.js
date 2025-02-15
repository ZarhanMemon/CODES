// Here’s a summary of MongoDB's most important operators, along with a brief description of their uses:



// ### **1. Comparison Operators** (Used for comparing field values)
// - **`$eq`**: **Equal to**  
//   Matches documents where the field is equal to a specified value.  
//   Example: `db.users.find({ "age": { $eq: 25 } })`
  
// - **`$ne`**: **Not equal to**  
//   Matches documents where the field is not equal to a specified value.  
//   Example: `db.users.find({ "age": { $ne: 25 } })`

// - **`$gt`**: **Greater than**  
//   Matches documents where the field is greater than a specified value.  
//   Example: `db.users.find({ "age": { $gt: 18 } })`

// - **`$gte`**: **Greater than or equal to**  
//   Matches documents where the field is greater than or equal to a specified value.  
//   Example: `db.users.find({ "age": { $gte: 18 } })`

// - **`$lt`**: **Less than**  
//   Matches documents where the field is less than a specified value.  
//   Example: `db.users.find({ "age": { $lt: 30 } })`

// - **`$lte`**: **Less than or equal to**  
//   Matches documents where the field is less than or equal to a specified value.  
//   Example: `db.users.find({ "age": { $lte: 30 } })`

// - **`$in`**: **In an array**  
//   Matches documents where the field’s value is in the provided array.  
//   Example: `db.users.find({ "age": { $in: [25, 30, 35] } })`

// - **`$nin`**: **Not in an array**  
//   Matches documents where the field’s value is not in the provided array.  
//   Example: `db.users.find({ "age": { $nin: [25, 30] } })`



// ---



// ### **2. Logical Operators** (Used to combine conditions)
// - **`$and`**: **Logical AND**  
//   Matches documents that satisfy all conditions in an array.  
//   Example: `db.users.find({ $and: [{ "age": { $gt: 18 } }, { "age": { $lt: 30 } }] })`

// - **`$or`**: **Logical OR**  
//   Matches documents that satisfy at least one condition.  
//   Example: `db.users.find({ $or: [{ "age": { $gt: 18 } }, { "name": "John" }] })`

// - **`$nor`**: **Logical NOR**  
//   Matches documents that do not satisfy any conditions in an array.  
//   Example: `db.users.find({ $nor: [{ "age": { $gte: 18 } }, { "name": "John" }] })`

// - **`$not`**: **Negates a condition**  
//   Inverts the effect of other operators.  
//   Example: `db.users.find({ "age": { $not: { $gte: 18 } } })`



// ---



// ### **3. Element Operators** (Used to test the existence or type of a field)
// - **`$exists`**: **Field existence**  
//   Matches documents that contain the specified field.  
//   Example: `db.users.find({ "address": { $exists: true } })`

// - **`$type`**: **Field data type**  
//   Matches documents where the field is of the specified data type.  
//   Example: `db.users.find({ "age": { $type: "int" } })`



// ---



// ### **4. Update Operators** (Used to modify existing documents)
// - **`$set`**: **Set a field’s value**  
//   Sets a field to a specified value. If the field doesn’t exist, it is created.  
//   Example: `db.users.updateOne({ "name": "John" }, { $set: { "age": 30 } })`

// - **`$unset`**: **Remove a field**  
//   Removes a field from a document.  
//   Example: `db.users.updateOne({ "name": "John" }, { $unset: { "address": "" } })`

// - **`$inc`**: **Increment a field’s value**  
//   Increments the value of a field by a specified amount.  
//   Example: `db.users.updateOne({ "name": "John" }, { $inc: { "age": 1 } })`

// - **`$push`**: **Add an element to an array**  
//   Adds a value to an array field.  
//   Example: `db.users.updateOne({ "name": "John" }, { $push: { "hobbies": "Football" } })`

// - **`$pull`**: **Remove an element from an array**  
//   Removes a specific value from an array.  
//   Example: `db.users.updateOne({ "name": "John" }, { $pull: { "hobbies": "Football" } })`



// ---



// ### **5. Array Operators** (Used for querying and modifying arrays)
// - **`$all`**: **Matches all array elements**  
//   Matches documents where the array contains all specified elements.  
//   Example: `db.users.find({ "hobbies": { $all: ["Reading", "Gaming"] } })`

// - **`$elemMatch`**: **Match a specific array element**  
//   Matches documents where at least one array element satisfies the condition.  
//   Example: `db.users.find({ "hobbies": { $elemMatch: { $eq: "Reading" } } })`

// - **`$size`**: **Match array length**  
//   Matches documents where the array has a specific number of elements.  
//   Example: `db.users.find({ "hobbies": { $size: 2 } })`



// ---



// ### **6. Aggregation Operators** (Used for complex transformations)
// - **`$group`**: **Group documents**  
//   Groups documents by a specified field, often used with aggregations like `sum` or `count`.  
//   Example: `db.users.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }])`

// - **`$match`**: **Filter documents**  
//   Filters documents by criteria (similar to `find()`).  
//   Example: `db.users.aggregate([{ $match: { "age": { $gt: 20 } } }])`

// - **`$sort`**: **Sort documents**  
//   Sorts the documents in ascending or descending order.  
//   Example: `db.users.aggregate([{ $sort: { "age": 1 } }])`

// - **`$project`**: **Reshape documents**  
//   Specifies which fields to include or exclude from the results.  
//   Example: `db.users.aggregate([{ $project: { name: 1, age: 1 } }])`

// ---



// ### **7. Geospatial Operators** (Used for geographic queries)
// - **`$near`**: **Find near a point**  
//   Finds documents near a given point on a 2D or 3D sphere.  
//   Example: `db.places.find({ location: { $near: { $geometry: { type: "Point", coordinates: [ -73.97, 40.77 ] }, $maxDistance: 5000 } } })`

// ---


// ### **8. Text Search Operators** (Used for performing text searches)
// - **`$text`**: **Text search**  
//   Performs a text search on indexed fields (requires a text index).  
//   Example: `db.articles.find({ $text: { $search: "mongodb" } })`





// ---=======================================================================================------

// ### Summary Recap:

// - **Comparison Operators**: `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`  
//   - **Use**: To filter documents based on value comparisons.
  
// - **Logical Operators**: `$and`, `$or`, `$nor`, `$not`  
//   - **Use**: To combine or negate conditions in queries.
  
// - **Element Operators**: `$exists`, `$type`  
//   - **Use**: To check if fields exist or match specific types.
  
// - **Update Operators**: `$set`, `$unset`, `$inc`, `$push`, `$pull`  
//   - **Use**: To modify the values of fields or remove them.

// - **Array Operators**: `$all`, `$elemMatch`, `$size`  
//   - **Use**: To query and modify arrays.

// - **Aggregation Operators**: `$group`, `$match`, `$sort`, `$project`  
//   - **Use**: For complex data transformations and aggregations.

// - **Geospatial Operators**: `$near`  
//   - **Use**: For queries based on geographic locations.

// - **Text Search Operators**: `$text`  
//   - **Use**: For searching documents using full-text search.

