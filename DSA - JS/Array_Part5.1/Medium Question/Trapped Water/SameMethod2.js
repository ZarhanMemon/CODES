// ✅ TOPIC: Trapping Rain Water – Brute Force


// Time: O(n) | Space: O(n)


// ✅ LOGIC: - more better explaination 

// Step 1: One loop to build both leftMaxesArray and rightMaxesArray

// Step 2: Same loop calculates water above each block using:
//         → waterAboveBlock = min(leftMax, rightMax) - arr[i]

// Step 3: Add loop for waterAboveBlock to total it in totalWater only if it's positive


let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

let totalWater = 0;

let leftMaxesArray = new Array(arr.length);
let rightMaxesArray = new Array(arr.length);

let leftMaxBlock = arr[0];
let rightMaxBlock = arr[arr.length - 1];

for (let i = 0; i < arr.length; i++) {
    // Calculate left max so far
    leftMaxBlock = Math.max(arr[i], leftMaxBlock);
    leftMaxesArray[i] = leftMaxBlock;

    // Calculate right max so far 
    rightMaxBlock = Math.max(arr[i], rightMaxBlock);
    rightMaxesArray[i] = rightMaxBlock;
}

for (let i = 0; i < arr.length; i++) {
    let waterAboveBlock = Math.min(rightMaxesArray[i], leftMaxesArray[i]) - arr[i];

    if (waterAboveBlock >= 0) {
        totalWater += waterAboveBlock;
    }
}

console.log("Left Max Array:", leftMaxesArray);
console.log("Right Max Array:", rightMaxesArray);
console.log("Total Water Trapped:", totalWater);
