

use("MongoDB")

console.log(db);


//Delete all matched docs from db
db.Creating_document.deleteMany({"age":0})


//Delete First matched doc from db
db.Creating_document.deleteMany({"age":18})

 
//delete all DOCS - imp
// db.Creating_document.deleteMany({})