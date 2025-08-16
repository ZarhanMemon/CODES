// Kadane’s Algorithm – Max Subarray Sum

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let sum = 0;                          // current subarray ka sum
let maxSum = -Infinity;              // ab tak ka max sum

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];                   // current number ko add karo

    if (sum > maxSum) {
        maxSum = sum;                // max sum update karo agar bada mile
    }

    if (sum < 0) {
        sum = 0;                     // agar sum negative ho gaya to reset
    }

    // Debugging ke liye (optional)
    console.log("sum:", sum, " i:", i, " maxSum:", maxSum);
}

console.log("Max Subarray Sum:", maxSum);  // Output: 6


// Kadane's Algo:
// → Find max sum of subarray (contiguous elements)
// → Use two variables:
//    sum = 0, maxSum = -∞
// → Loop through array:
//    1. sum += arr[i]
//    2. if sum > maxSum → update
//    3. if sum < 0 → reset sum = 0
// → maxSum holds final answer
// → Time: O(n), Space: O(1)
