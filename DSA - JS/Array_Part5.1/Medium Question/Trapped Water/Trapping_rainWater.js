// ✅ TOPIC: Trapping Rain Water – Brute Force


// Time: O(n^2) | Space: O(1)


// 🔹 LOGIC – Steps to Follow (Simple & Clear):

/*
🔸 Hum calculate kar rahe hain ki total kitna rain water trap ho sakta hai block ke upar.

🔹 STEP-BY-STEP LOGIC:

1️⃣ Loop chalao har block (arr[i]) ke liye
    🔸 Start from i = 1 to i < arr.length - 1
    🔸 First aur last block pe paani nahi rukta

2️⃣ Har block ke left mein sabse uncha block dhoondo
    🔸 leftMax = max(arr[i-1...->0])

3️⃣ Har block ke right mein sabse uncha block dhoondo
    🔸 rightMax = max(arr[i+1...->n-1])

4️⃣ Dono walls me se jo chhoti wall hai, wahi paani ko rokegi
    🔸 minHeight = min(leftMax, rightMax)

5️⃣ Us min wall se current block ka height hata do
    🔸 water = minHeight - arr[i]

6️⃣ Agar water > 0 hai to answer mein add karo

7️⃣ Loop ke baad totalWater print karo

🎯 Formula: water = min(leftMax, rightMax) - arr[i]
*/


let arr = [3, 0, 2, 0, 4];

let totalWater = 0;

for (let i = 1; i < arr.length - 1; i++) { // first & last index par kabhi paani nahi rukta

    let leftMax = 0;
    let rightMax = 0;

    // 🔹 Find Left Max height from index i-1 to 0
    for (let left = i-1 ; left >=0 ; left--) {
        leftMax = Math.max(leftMax, arr[left]);
    }

    // 🔹 Find Right Max height from index i+1 to end
    for (let right = i + 1; right < arr.length; right++) {
        rightMax = Math.max(rightMax, arr[right]);
    }

    // 🔹 Min of both will decide max water that can stay above arr[i]
    let minHeight = Math.min(leftMax, rightMax);

    let waterAboveBlock = minHeight - arr[i];

    if (waterAboveBlock > 0) {
        totalWater += waterAboveBlock; // only add if water is above
    }
}

console.log("Total Water Trapped:", totalWater);  // ✅ Output: 7




// ✅ BONUS: Ek Simple Explanation
/*
👉 Water tabhi rukta hai jab block ke dono taraf walls hoon.

🏞️ Imagine:
   left wall 3      block 0      right wall 4

   Toh 0 ke upar max 3 level tak paani ruk sakta hai.

🔐 Isliye hum har i ke left aur right max walls find karte hain,
    phir unke beech jitna gap hota hai wo paani banata hai.

🚫 Kabhi bhi water < 0 ho toh ignore karte hain.
*/