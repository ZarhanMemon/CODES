let promise = new Promise((resolve, reject) => {
    console.log("heelo");
    resolve("done");
})

// output:-

// heelo
// promise
// Promise {<fulfilled>: 'done'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "done"


//  IF PROMISE IS RESOLVED :- THEN what?

promise.then((res)=>{
    console.log("Promises hogya pura",res)  // res == resolve(message) == "done"
})


// --------------------------------------------------------------------
 


let promise2 = new Promise((resolve, reject) => {
    reject("error");
})

// output:-
// promises.js:23 Uncaught (in promise) error
// (anonymous)	@	promises.js:23
// (anonymous)	@	promises.js:22

// promise2
// Promise {<rejected>: 'error'}
// [[Prototype]] : Promise
// [[PromiseState]] : "rejected"
// [[PromiseResult]] : "error"


//  IF PROMISE2 IS REJECTED :- CATCH what?

promise2.catch((err)=>{
    console.log("Promise2 totgaya",err)  // err == reject(error) == "error msg"
})



// eg both :-

let promise3 = new Promise((resolve, reject) => {
    let a = 1;
    if (a>0){
    setTimeout(() => {
        console.log("heelo");
        resolve("done");
    }, 3000);
    }
    else{
        reject("some error");
    }
})


promise3.then((res)=>{
    console.log("Hogaya bahi balablae",res);
}).catch((err)=>{
    console.log("Nahi hora match",err)
})
