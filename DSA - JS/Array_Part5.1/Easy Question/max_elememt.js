
// Find Max value element in array

let arr = [1, 2,6, 3, 4, 5]

let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }

}

console.log(max)


// firstly let there is max var 

//then let assume the arr[0] is max elm  - max = arr[0]

//then run the loop from 0 to arr.length -1

// and check for all arr value that max < arr[i]

// if true then max = arr[i]  - update max value


// max = 1

// i=1  - max=1 <  arr[i] =2  - max= arr[i] = 2
// i= 2  - max=2 <  arr[i] =6  - max= arr[i] = 6
// i= 3  - max=6  >  arr[i] =3  - max= arr[2] = 6
//...
// i=5  - max=6 >  arr[i] =5  - max= arr[2] = 6