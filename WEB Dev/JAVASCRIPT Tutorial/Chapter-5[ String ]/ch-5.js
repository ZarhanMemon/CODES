console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); --> undefined 

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"

// PROPERTIES OF STRING
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1))
console.log(b.startsWith("S"))
console.log(b.startsWith("s"))
console.log(b.endsWith("h"))

console.log(b.replace("Sh", "77")) // it only replaces first Sh not last Sh
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))   // it works same like--> C.L( "djwnd" + "dwjnd")

console.log(b)    // string is immunable we cant permanently change string indirectly
