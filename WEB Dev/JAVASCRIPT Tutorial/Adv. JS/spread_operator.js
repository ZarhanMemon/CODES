let arr = [ 1,2,3]

function sum(a,b,c) {
    return a + b +c;
}

console.log(sum(...arr));


let object = {...arr};  // object = { key : arr[index] ,'0': 1, '1': 2, '2': 3 }
console.log(object);
