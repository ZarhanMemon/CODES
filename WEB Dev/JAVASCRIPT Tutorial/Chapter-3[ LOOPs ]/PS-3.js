
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



// Q1


for (a = 0; a <=10; a++) {
    console.log(a);
    
}
console.log()



// Q3


 let number = [5 ,10 ,15 ,20,25];
for (const keys of number) {
    console.log(keys );
 
}
console.log()



//Q4


let string  = "hello";
for (let i = string.length-1; i >= 0; i--) {       // make h e l l o ==>  o l l e h  By changing condition and i value
   
   process.stdout.write(string[i]);               // Print without a newline
  
}

console.log()
console.log()




//Q5


let x = 2;
for (let num = 1; num <= 5; num++) {

    if (num % x == 0 && num !=2) {

        console.log(num + " is not prime\n")
    }
    else {
        
        if (num % x != 0) {
           
            console.log(num + " is a prime\n")
        }
        else{
            if (num==2){
                console.log(num + " is a prime\n")
            }
        }
    }

}
console.log()


