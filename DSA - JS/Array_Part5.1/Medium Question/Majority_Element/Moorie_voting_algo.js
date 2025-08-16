// it has condition in array there will be only 2 different nums( unique )not more than it

let arr = [6,5,5];           // not work for [2,2,1,1,1,2,3]

let ans = arr[0]; // Step 1: Start with first element as candidate
let count = 1;

for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
        ans = arr[i];  // New candidate
        count = 1;
    } else if (arr[i] === ans) {
        count++;       // Same element → vote++
    } else {
        count--;       // Different → cancel out vote
    }
}

// Step 2: Count actual frequency
let freq = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ans) freq++;
}

// Final check
if (freq > Math.floor(arr.length / 2)) {
    console.log("✅ Majority Element is:", ans);
} else {
    console.log("❌ No majority element exists.");
}



// ✅ Moore’s Voting Algorithm
// → Goal: Find majority element (> n/2 times)
// → Step 1: Candidate selection using count++
// → Step 2: Verify if that candidate is actually majority
// → Time: O(n)
// → Space: O(1)
// → Works only when 1 majority element exists