
// Q1 

// Note : -  Object.keys(obj) = harry ,rohan ,zarhan
//          Object.values(obj) = 0,1,2
//          Object.entries(obj) = [["harry",0],["rohan",1],["zarhan",2]


// if particularly no=0 ==>   Object.keys(obj)[0] =  harry
//                       Object.values(obj)[0]    = 98
//                       Object.entries(obj)[0]   = ["harry",98]


let obj = {
    harry : 98,         //keys =0  like id
    rohan: 23,         //keys =1
    zarhan:100        //keys =2
}

for (let no= 2; no >=0; no--) {
  let object_value = Object.values(obj);
  let object_keys  = Object.keys(obj)
  console.log(object_keys[no] + " = " +object_value[no])
  
}

console.log("\n")

// Q2

//  Note ->    for keys >>                            |  values = obj[keys]  ==> for  keys = 0,1,2
//                   "haary" ,"rohan" ,"zarhan"       |                            values = obj[0] = 98
//                                                    |                            values = obj[1] = 23
//                                                    |                           values = obj[2] = 100


for ( keys in obj) {
let  values = obj[keys];

console.log(keys + " = " +values);
}
