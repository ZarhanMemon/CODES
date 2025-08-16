// ✅ Topic: Selection Sort (JavaScript)


// Time : O(n^2)    and  Space :O(1)

// 📘 Definition:
// Selection Sort ek simple algorithm hai jisme hum har baar unsorted part me se 
// smallest element dhoondh kar usse sahi jagah (starting position) par rakhte hain.

let arr = [10, 5, 1, 12, 9]; // 🔹 Unsorted array

// 🔁 Outer loop: har pass me starting se end tak iterate karta hai
for (let i = 0; i < arr.length - 1; i++) {

    // 🔹 Assume current index is minimum
    let minIndex = i;

    // 🔁 Inner loop: remaining unsorted part me smallest element dhundhta hai
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // 🔁 Agar minIndex change hua toh swap karna hoga
    if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// ✅ Final sorted array
console.log("Sorted Array:", arr); // Output: [1, 5, 9, 10, 12]
