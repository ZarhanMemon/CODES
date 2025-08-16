// Find second max element 

let arr = [10,20,20,8]

let max = -Infinity , secondMax = -Infinity;

for(let i = 0 ; i<arr.length ; i++){

    if(max<arr[i]){
        secondMax = max;
        max =arr[i]
    }else if( arr[i]>secondMax && arr[i] !== max ){
        secondMax = arr[i]
    }

    console.log(i , arr[i] , max , secondMax)
}


//Logic - 
 
// - Track max and secondMax

// - if max < element ->  update max = elm  and secondMax = prev_max 

// - if element > secondMax and element != max ->  then  secondMax = element


// Note u can also swap the max to arr elemt same for secondMax , but in this output arr would change