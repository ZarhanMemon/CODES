
// All 0s to left and 1s to right 

let arr = [1, 1, 0, 1, 1];


for (let i = 0, j = 0; i < arr.length && j <= i; i++) {

    console.log("i=", i, " - ", arr[i])
    console.log("j=", j, " - ", arr[j]);


    if (arr[i] === 0) {

        console.log("swap");

        [arr[i], arr[j]] = [arr[j], arr[i]];

        j++;
    }

    console.log(arr, "\n")
}

console.log(arr)