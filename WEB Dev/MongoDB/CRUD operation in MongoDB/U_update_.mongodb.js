
use("MongoDB")

console.log(db);

//Update the ALL matched docs => ({target_doc},{changes}) 
db.Creating_document.updateMany({"age":"25"}, {$set:{"age":18}})

let a = db.Creating_document.find({"age":18})
console.log(a);



//Update the First Matched docs => ({target_doc},{changes}) 
db.Creating_document.updateOne({"age":18}, {$set:{"age":0}})

let b = db.Creating_document.find({"age":0})
console.log(b);