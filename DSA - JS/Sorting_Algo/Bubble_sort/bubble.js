// ✅ Topic: Bubble Sort (JavaScript)

// Time : O(n^2)    and   Space: O(1)


let arr = [10, 5, 1, 12, 3];

// Outer loop: runs for n-1 passes
for (let i = 0; i < arr.length - 1; i++) {

    // Inner loop: compares adjacent elements
    for (let j = 0; j < arr.length - 1 - i; j++) {
       
        // If current is greater than next → swap
        if (arr[j] > arr[j + 1]) {
            // Swap using destructuring
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

// Final sorted array
console.log(arr);  // Output: [1, 3, 5, 10, 12]
