# ✅ TOPIC: Trapping Rain Water – Prefix LeftMaxArray & RightMaxArray Arrays (Better Approach)

## 🔹 LOGIC (Hindi + English Mix):

```js
/*
🔸 Is approach me hum har block ke left aur right me highest block ka height pehle se hi calculate karke rakh lete hain
    ✅ using 2 extra arrays:
        → leftMaxArray[]: har index ke left ka max height
        → rightMaxArray[]: har index ke right ka max height

🔸 Water tabhi rukega jab dono side walls hoon, aur rukega us min(height of left wall, height of right wall) tak

🔹 Step-by-Step:

1️⃣ leftMaxArray[i] = max(leftMaxArrayBlock...arr[i])
2️⃣ rightMaxArray[i] = max(rightMaxArrayBlock...arr[n-1])
3️⃣ water[i] = min(leftMaxArray[i], rightMaxArray[i]) - arr[i]

4️⃣ Total water = sum of all water[i] where water[i] > 0
*/
```

---

## 💻 CODE (Using Single Loop & Abstract Variables)

```js
// ✅ TOPIC: Trapping Rain Water – Brute Force

// Time: O(n) | Space: O(n)

// ✅ LOGIC: - More Better Explanation
// Step 1: One loop to build both leftMaxArray and rightMaxArray
// Step 2: Same loop calculates water above each block using:
//         → waterAboveBlock = min(leftMaxArray, rightMaxArray) - arr[i]
// Step 3: Add an loop fot waterAboveBlock to total it in totalWater  only if it's positive

let arr = [3, 0, 2, 0, 4];

let totalWater = 0;

let leftMaxArrayesArray = new Array(arr.length);
let rightMaxArrayesArray = new Array(arr.length);

let leftMaxArrayBlock = arr[0];
let rightMaxArrayBlock = arr[arr.length - 1];

for (let i = 0; i < arr.length; i++) {
    // Calculate left max so far
    leftMaxArrayBlock = Math.max(arr[i], leftMaxArrayBlock);
    leftMaxArrayesArray[i] = leftMaxArrayBlock;

    // Calculate right max so far 
    rightMaxArrayBlock = Math.max(arr[i], rightMaxArrayBlock);
    rightMaxArrayesArray[i] = rightMaxArrayBlock;
}

for (let i = 0; i < arr.length; i++) {
    let waterAboveBlock = Math.min(rightMaxArrayesArray[i], leftMaxArrayesArray[i]) - arr[i];

    if (waterAboveBlock >= 0) {
        totalWater += waterAboveBlock;
    }
}

console.log("Left Max Array:", leftMaxArrayesArray);
console.log("Right Max Array:", rightMaxArrayesArray);
console.log("Total Water Trapped:", totalWater);
```

---

## 📘 Example Dry Run: arr = [3, 0, 2, 0, 4]

| Index | arr[i] | leftMaxArray[i] | rightMaxArray[i] | min(leftMaxArray, rightMaxArray) | water |
|-------|--------|------------|-------------|-------------------------|--------|
|   0   |   3    |     3      |      4      |           3             |   0    |
|   1   |   0    |     3      |      4      |           3             |   3    |
|   2   |   2    |     3      |      4      |           3             |   1    |
|   3   |   0    |     3      |      4      |           3             |   3    |
|   4   |   4    |     4      |      4      |           4             |   0    |

✅ **Total Water = 3 + 1 + 3 = 7 units**

---

## ⏱️ Time & Space Complexity

| Step         | Time  | Space |
|--------------|-------|--------|
| Build left   | O(n)  | O(n)   |
| Build right  | O(n)  | O(n)   |
| Final loop   | O(n)  | —      |
| **Total**    | O(n)  | O(n)   |

---

## 🟢 Benefits over Brute Force:

❌ Brute force me har block ke liye poora left/right check hota hai → O(n²)

✅ Isme pehle hi max values calculate ho jaati hai → O(n)

---

Bhai agar chaho toh iska optimized **O(1) space** version bhi karwa doon ✌️
