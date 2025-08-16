# 💧 Trapping Rain Water (Brute Force)

## ✅ Problem Statement

Given an array `arr[]` representing height of blocks, find how much water can be trapped after raining.

### Example:
```js
Input: arr = [3, 0, 2, 0, 4]
Output: 7
```

---

## 🧠 Simple Logic (Hindi + English)

### Step-by-Step:

1. Har block `arr[i]` ke left aur right side ka **sabse bada block** dhoondho:
   - `leftMax`: maximum height to the left of `i`
   - `rightMax`: maximum height to the right of `i`

2. Block ke upar ruk sakne wala paani:
   - `water = min(leftMax, rightMax) - arr[i]`

3. Agar `water > 0` ho to total me add karo.

### 🔒 Note:
- First and last block par kabhi bhi paani nahi rukta.
- Negative water value ka matlab block already filled hai — so ignore.

---

## 🔁 Dry Run Table

For: `arr = [3, 0, 2, 0, 4]`

| Index (i) | arr[i] | leftMax | rightMax | minHeight | waterAbove |
|-----------|--------|---------|-----------|-----------|-------------|
| 1         |   0    |   3     |    4      |    3      |     3       |
| 2         |   2    |   3     |    4      |    3      |     1       |
| 3         |   0    |   3     |    4      |    3      |     3       |

**✅ Total Water = 3 + 1 + 3 = 7 units**

---

## 💻 Code (JS) – Brute Force

```js
let arr = [3, 0, 2, 0, 4];
let totalWater = 0;

for (let i = 1; i < arr.length - 1; i++) {
    let leftMax = 0;
    let rightMax = 0;

    // Find max block to the left
    for (let l = i-1 ; l >=0 ; l--) {
        leftMax = Math.max(leftMax, arr[l]);
    }

    // Find max block to the right
    for (let r = i + 1; r < arr.length; r++) {
        rightMax = Math.max(rightMax, arr[r]);
    }

    // Calculate water at current index
    let minHeight = Math.min(leftMax, rightMax);
    let water = minHeight - arr[i];

    if (water > 0) {
        totalWater += water;
    }
}

console.log("Total Water Trapped:", totalWater);
```

---

## ⏱️ Time & Space Complexity

| Approach       | Time Complexity | Space Complexity |
|----------------|------------------|-------------------|
| Brute Force    | O(n²)            | O(1)              |

---

## 📌 Keywords

`Rainwater trapping` `Two pointers` `Array problem` `Interview DSA` `Brute force` `Water storage`

---

## 👑 Tip

✅ Optimized version using **2-pointers** exists with O(n) time — try it next!
