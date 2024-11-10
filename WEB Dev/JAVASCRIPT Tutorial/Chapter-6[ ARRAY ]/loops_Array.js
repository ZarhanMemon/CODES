
//                              LOOPS + ARRAY


// 1]  For Loop


let a = [1, 2, 3, 4, 5];
let new_a = [];

for (let index_no = 0; index_no < a.length; index_no++) {
    const value = a[index_no];

    new_a.push(value-1);
    
}

console.log(new_a)
