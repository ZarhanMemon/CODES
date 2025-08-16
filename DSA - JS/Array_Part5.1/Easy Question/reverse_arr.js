
// Reverse the array

let arr = [0,1,2,3,4]

for (let i=0 , j= arr.length-1 ; i<j ; i++ , j--){

    console.log("i=",i ,"j=", j ,":")

    console.log(arr, arr[i] , arr[j] ) ;

    [arr[i] , arr[j]] = [arr[j] , arr[i]];

    console.log(arr , arr[i] , arr[j] , "\n") ;

}