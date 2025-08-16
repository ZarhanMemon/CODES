
let str = "mawdam";

let revStr ='';

for (let i = str.length; i >= 0 ; i--) {
    revStr = revStr + str.charAt(i)
}

(revStr===str) ? console.log('is Palindrom') : console.log('no Palindrome');


//========================================



let str1 = "madam";
let ans = false;

let j =0;
for (let i = str1.length; i >j ; i-- ,j++) {
    if (str1.charAt(i)===str1.charAt(j)){
        ans = !(ans);
    }else{
        ans = !(ans);
    }
}

(ans) ? console.log('is Palindrom') : console.log('no Palindrome');
