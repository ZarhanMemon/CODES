

use("MongoDB")

console.log(db);

//Give all matched result
let a = db.Creating_document.find({ "occupation": `Teacher` })
console.log(a.count());
console.log(a);


//Give first matched result
let b = db.Creating_document.findOne({"hiegth":`6'3"`})
console.log(b);








