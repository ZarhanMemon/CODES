
// A callback is a function passed as an argument to another function.

// It allows that function to be called later, typically after some task is completed.

// Your explanation was mostly correct but could benefit from more clarity about the order of execution and the reason we use callbacks (such as handling asynchronous tasks).

//In JavaScript, callbacks are often used in asynchronous operations (e.g., setTimeout, event handling, API calls). 

//It's not just "calling an external function"; rather, the main function calls the callback when the time is right.

// dont use callback with callback() since we pass it with argument


// eg of call back in sync
function add(a,b) {
    console.log(a+b);    
}
 
function sub(a,b) {
    console.log(a-b);   
}


function Calci(a,b,operation) {
return operation(a,b); 
}

Calci(2,3,add)


//eg of call in asyn

const hello = () =>{
    console.log("hello")
};

setTimeout( hello, 3000);  //hello is callback 



//CALLBACK HELL [ pyramid of Doom ] :-  callback me callback............................like recurssion

 
 getData = (data,getData) => {
   setTimeout(() => {
    console.log("data :",data);
    if (getData){
        getData(data+1);
    }
   }, 2000);
}

getData(1,()=>{getData(2,getData)}
)
