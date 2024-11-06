
//                            Function

//  it is a block of code which we can store in a box and re use it whereever we want in our large code

//  how to use it ==>
function myFunction(){
    console.log("\nHello, World!");
}


myFunction()
myFunction()


// Function With Parameters/variable ==>

function myDetail(name,age = 17){   
    myFunction()                                         //we can use function in a function
    console.log("My name is"+ name+ "and age is "+age); 
}

myDetail(" zarhan ");                             //function direct call
myDetail(" rehan ",12);

student =  myDetail(" rehan ",12); 


 //console.log(person)                   -->  undefined because function does not return any value


//  Function With Return Value ==>

function myReturn_function(name,age){   
    myFunction();                                       
    return "My name is" + name+ "and age is "+age; 
}


person =  myReturn_function(' rohan ',10);      //function call as Variable

console.log(person)                       //  because function does return any value


// ARGUMENT FUNCTION:-  = ( parameter ) => {  //code  }

    // let hii =()=>{
    //     console.log("Hello, World!");
    // }

let sum = (a,b) => {

    console.log();
    return (a + " + " + b + " = " + (a+b));
}

y = sum(1,2);
console.log(y)


