
//                              LOOPS


//Types of LOOPS :-

// 1] for 
// 2] for in  - object
// 3] for do  - array & string
// 4] while
// 5] do-while - one time


// 1.
//    for ( statement1 , statement2 , statement3){
//       result }   

// st-1 - only runs first time for initializing loop 
// st-2 & st-3 -  runs every time for looping one after other 

for (let i = 0; i < 100; ++i) {
    let a = 1;

    console.log(a + i);
    
}


console.log("\n")
// -------------------------------------------------------------------------------------------

// 2. USES FOR Object

let obj = {
    name: " Zarhan",
    "roll_no": 12,
    school: " rosary"
}

for (const key in obj) {

    console.log(key +"="+ obj[key])
}


console.log("\n");
// -------------------------------------------------------------------------------------------


// 3.  USED FOR String & Array [ itrebeles]

let naam = "zarhan"

for (const letter of naam) {
    console.log(letter)
    
} 


console.log("\n");
// -------------------------------------------------------------------------------------------


// 4. 

let p = 0;
while(p<5){
    console.log(p);
    p++;
   
}


 console.log("\n");
// -------------------------------------------------------------------------------------------


// 5.  it is different than other it will print output once dispite of condition true or false


// Case-1 = if expression(i=0) obeys condition(i<5) then print i then i++
let i = 0;
do {
    console.log(i);              // |    ==>flow of data
    i++;                         // |
                                //  V
} while (i<5);


console.log("\n");


//Case-2 = if expression(n=0) not obey condition(n>5) then see it will first print n = 0 bcz it not in loop further n = 1,2,3,4,,, are in loop if condition meet
let n = 0;
do {                       // |  ==>flow of data
    console.log(n);        // |
    n++;                  //  V

} while (n>5);
