// Sort an array containing only 0s, 1s, and 2s
// Using Dutch National Flag Algorithm (3-pointer method)

let arr = [1, 2, 1, 0, 0, 2, 1];

let i = 0;             // current index pointer
let j = 0;             // pointer to place 0s
let k = arr.length - 1; // pointer to place 2s

while (i <= k) {
    if (arr[i] === 0) {
        // Swap 0 to front
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j++;
    } else if (arr[i] === 2) {
        // Swap 2 to end
        [arr[i], arr[k]] = [arr[k], arr[i]];
        k--;
        // ❗ Don't move i here, check swapped value again
    } else {
        // arr[i] is 1, just move ahead
        i++;
    }
}

console.log(arr); // Output: [0, 0, 1, 1, 1, 2, 2]
