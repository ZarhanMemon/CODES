// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


let array = [1, 2, 3, 4, 5];


async function arrayprinting(array) {
    let new_arr = []
    for (const element of array) {
        await new Promise((resolve) => {
            setTimeout(() => {
                let a = element * 2;
                new_arr.push(a)
                resolve()
            }, 500);

        })
        console.log(new_arr);
    }
}



arrayprinting(array)

// ===========================================================================================

// let array = [1, 2, 3, 4, 5];


// async function arrayprinting(array) {
//     let new_arr = array.map((element) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 let a = element * 2;
//                 resolve(a)
//             }, 500);

//         })
//     })
//     let result = await Promise.all(new_arr)
//     console.log(result);

// }



// arrayprinting(array)


