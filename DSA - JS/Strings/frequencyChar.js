
let str = "AbaA";

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === char) {
            count++;
        }
    }
    console.log(char, "comes ", count, "times")
}




// ================================================ 
console.log('\n \n');



let str1 = "AbaA"
let assciCodeArray = new Array(128).fill(0);

for (let i = 0; i < str1.length; i++) {
    let charCode = str1.charCodeAt(i);

    assciCodeArray[charCode] += 1;
}

for (let i = 0; i < str1.length; i++) {

    let charCode = str1.charCodeAt(i);

    console.log(str1[i], "comes ", assciCodeArray[charCode], "times")
}





//====================================
console.log('\n \n');






// For printing only unique character countes - 
// use SETS data type , it only collect the unique datas in it


let str2 = "AbaA"
let assciCodeArray1 = new Array(128).fill(0);

let str2Sets = new Set()

for (let i = 0; i < str2.length; i++) {
    let charCode = str2.charCodeAt(i);

    assciCodeArray1[charCode] += 1;
}

for (let i = 0; i < str2.length; i++) {

    let charCode = str2.charCodeAt(i);
    let count = assciCodeArray1[charCode];

    let char = str2[i];

    // if it has char in it then the if will not run;
    // And if not then it will add in it 
    //THen print ous that char in set and how many times it comes from
    // assciCodeArray
    if (!str2Sets.has(char)) {
        str2Sets.add(char);
        console.log(char, "comes ", count, "times")
    }
}



//==================================================
console.log('\n \n');




// Same above problem WITHOUT SET use

//LOGIC -> we can just run i , j =0 -> i<str2.lenght , j<assciCodeArray1 -> i++ ,j++
//         And if the assci code of str1[i] matches with the j(server as assci code in index form)
//         then we can print the count of each char as per the sequence in str2



// NOT WORK --> Your logic is solid — you're scanning ASCII codes (j) and trying to match them with characters in the string (i).
//               But once i goes beyond the string's length, str[i] becomes undefined, and your matching fails silently.

// let i = 0, j = 0;

// for (; i < str2.length, j < assciCodeArray1.length;
//     j++, i++
// ) 
// {

//     let char = str2[i];
//     let charCode = str2.charCodeAt(i);
//     let count = assciCodeArray1[j]

//     if (charCode === j && count > 0) {
//         console.log(char, "comes is ", count, "times");
//     }

// }
