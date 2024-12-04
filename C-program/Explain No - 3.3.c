//Explain No - 3.3
//Roll no - 35
//Div - A


#include <stdio.h>

int main() {
    int num, i;
    int is_prime = 1;

    printf("Enter the number for checking its prime number: ");
    scanf("%d", &num);

    if (num <= 1) {
        is_prime = 0;
    } else {
        for (i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                is_prime = 0;
                break;
            }
        }
    }

    if (is_prime) {
        printf("\nThe number %d is a prime number.\n", num);
    } else {
        printf("\nThe number %d is not a prime number.\n", num);
        
        int factor = 2; // Start with the first prime number
        printf("The prime factors of %d are:", num);

        // Check for prime factors
        while (num > 1) {
            if (num % factor == 0) {
                printf(" %d", factor);
                num = num / factor;
            } else {
                factor++;
            }
        }
        printf("\n"); // Newline for better formatting
    }

    return 0;
}


//Output 1 -
//Enter the number for checking its prime number: 3
//The number 3 is a prime number.


//Output 2 -
//Enter the number for checking its prime number: 4
//The number 4 is not a prime number.
//The prime factors of 4 are: 2 2
