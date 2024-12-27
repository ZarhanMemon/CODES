// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.



let password = "ab2cDefgh";

if (password.length >= 8) {

    Upper = password.toUpperCase();
    lower = Upper.toUpperCase();

    let have_upper = false;
    let have_lower = false;
    let have_num = false;

    for (const element of password) {
        if (element === Upper.charAt(password.indexOf(element)) && element === Upper.charAt(password.indexOf(element)) && /\d/.test(password)) {
            have_lower = true;
            have_upper = true;
            have_num = true;
        }
    }

    if (have_lower && have_upper && have_num) {
        console.log('VALID PASSWORD');
    } else {
        console.log('Enter password which contains num , upper,lower');

    }
} else {
    console.log('No enter password atleast 8 char');

}
