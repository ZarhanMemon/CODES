//Remove dublicate element from then sorted array

// we use 3 POINTER method i ,j , i+1 


let arr = [1, 1, 1, 1, 1, 1, 1, 1];

let j = 1;

for (let i = 0; i < arr.length - 1; i++) {

    // and i , i+1 used for comparision of elements if true then make j elm = elm i+1 and 

    if (arr[i] !== arr[i + 1]) {
        arr[j] = arr[i + 1];
        j++;
        // where j only move when i is not equal to i+1 element
    } else if (arr[i] !== arr[i + 1]) {
        // if all elm is same then break the loop [1,1,1] and j=1
        //  [1,'_','_']
        break;
    }
}

for (let i = j; i < arr.length; i++) {
    arr[i] = "_";
    // and we use j pointer to keep track of the last non duplicate element in the array

}

console.log(arr)

// Time : O(n) and space : O(1)   because we are not using any extra space.