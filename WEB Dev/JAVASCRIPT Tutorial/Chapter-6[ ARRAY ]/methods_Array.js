
//                                 METHODS OF ARRay


arr = [1 ,2 ,3 ,4 ,5];


console.log(arr.toString())  // convert array to string [its immutable]
  

console.log()



console.log(arr.join(" or "))  // join any string at end of every element in array 

//Note : .join convert array into string 
console.log(typeof arr.join(" or "))


console.log()


console.log(arr.pop())     // remove last element from array [its mutable] 
                           // lenght of arr is now 4
console.log(arr)           // [1, 2, 3, 4] 


console.log()


console.log(arr.push(3))  // add element at last index of array and return its lenght
console.log(arr)          //=> [ 1, 2, 3, 4, 3 ] and => lenght of arr is now 4


console.log()


console.log(arr.shift())  // remove first element from array and return that removal elm[1]
console.log(arr)          // [2, 3, 4, 3] 


console.log()


console.log(arr.unshift("hello"))  // add element at first index of array and return its lenght
console.log(arr)                   // [ 'hello', 2, 3, 4, 3 ]


console.log()


a = [2,4,5]
b = [20,42,51]

console.log(arr.concat(a,b));  // add all elements of a and b to arr and return new array dont change prev arrays


console.log();


console.log(arr.sort())  // sort array in ascending order


console.log();


console.log(arr.reverse()) // reverse array in descending order and it not rev in decending order


console.log()


b = [1,2,3,4,5,6];
b.splice(2,2 , "three","four")       // splice( position of start , no of elm to remove , add elm at removal elm plce)
console.log(b);                   // it only remove elm at 2 and 3 index and add no elm at that place 


console.log()


c = [ 0 ,1 ,2 ,3 ,4 ,5];

console.log(c.slice(2,6))   // slice( start index , end index + 1 )and it return removal elm (2,3,4,5) in new C dont change og C = [0,1,2,3,4,5]
console.log(c)              // donot alter c = [0,1,2,3,4,5]
