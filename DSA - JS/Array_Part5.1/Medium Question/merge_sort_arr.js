//Merge the sortd array

// 3 pionter used i , j ,k on each arr1 ,arr2, temp(and its size should define at start)

// and for logic use i , j  cha=eck which is small , then add it in k and move the k and i/j which is small 

// and if one of the i/j is exhyasted , but still there is remaining elm in one of arr , so for both arr loop to add arr1/arr2 elm in temp


let arr1 = [1, 3, 5, 7];

let arr2 = [2, 4, 6];

let temp = new Array(arr1.length + arr2.length);

let k = 0
let i = 0, j = 0;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        temp[k++] = arr1[i++];
    } else {
        temp[k++] = arr2[j++];
    }
}

// Copy remaining elements of arr1
while (j < arr1.length) {
    temp[k] = arr1[j]
    k++;
    j++;
}

// Copy remaining elements of arr2
while (i < arr2.length) {
    temp[k] = arr2[i]
    k++;
    i++;
}

console.log(temp)

// Time: O(n)  and Space: O(1) used extra space as temp



//---------------------------

// Merge Sort array - here U have to merge arr in arr1 only 

// No extra space-

let arr3 = [1, 2, 3, 0, 0, 0];
let arr4 = [2, 5, 6];

let m = 3, n = 3;

let k1 = arr3.length - 1;

m = m - 1;
n = n - 1;

while (m >= 0 && n >= 0) {

    if (arr3[m] > arr4[n]) {
        arr3[k1] = arr3[m];
        k1--;
        m--;
    } else {
        arr3[k1] = arr4[n];
        k1--;
        n--;
    }

}

console.log(arr3,m,n,k1)