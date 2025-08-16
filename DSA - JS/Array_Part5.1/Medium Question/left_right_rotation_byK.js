// Left rotation by k element  -  




let arr = [1, 2, 3, 4, 5]

let k = 2
k = k % arr.length; // it gives min no to shifht the array in left 



// METHOD - 1 ( using Two pointer & swap )

for (let i = 0; i < k; i++) {

    for (let i = 0; i < arr.length - 1; i++) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
}

console.log(arr)

// Time - O(n*k) and Space - O(no extra space)

// Note -> Right rotation is similar to left rotation, we just need to change the direction of rotation.
//  -> i = arr.lenght-1   till  i>0




// METHOD - 2 ( using extra variable )
let temp = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length]

    // Right rotation - swap indexes ->  temp[ (i+k)%arr.lenght] = arr[i]
}
// Time - O(n) and Space - O(1) [eg:temp]

console.log(temp)



// METHOD - 3 ( using REVERSE BLOCK  )

// Right rotation - just change the i,j indexing limit as per the pattern of right shift arr , same u solve Left rotation

for (let i = 0, j = k - 1; i < j; i++, j--) {

    [arr[i], arr[j]] = [arr[j], arr[i]] // [1,2] for front - rev block

}

for (let i = k, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]] //[3,4,5] for back - rev block 

}

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]] //[2,1,5,4,3] for whole - rev block 

}

// Time - O(n) and Space - O(1)


console.log(arr)  // rev ( [2,1] + [5,4,3]) = [3,4,5,1,2]