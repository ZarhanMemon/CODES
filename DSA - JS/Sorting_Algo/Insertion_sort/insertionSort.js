// ✅ Insertion Sort Algorithm (JS Version)
// Time: O(n^2) | Space: O(1)

let arr = [10, 5, 1, 8, 13, 7];
let n = arr.length;

// Start from the 2nd element (index 1)
for (let i = 1; i < n; i++) {

    let key = arr[i];         // 🔑 Current element to insert
    let j = i - 1;

    // Shift elements greater than key one step to the right
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    // Insert key at the correct position
    arr[j + 1] = key;
}

console.log("Sorted Array:", arr);
