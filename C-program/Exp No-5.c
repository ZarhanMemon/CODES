#include <stdio.h>

// Function to compute the GCD of two numbers
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to compute the smallest divisor greater than 1
int smallest_divisor(int num) {
    for (int i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return i; // Return the first divisor greater than 1
        }
    }
    return num; // If no divisors are found, return the number itself (prime number)
}

int main() {
    int num1, num2;

    // Accept input from the user
    printf("Enter the first number: ");
    scanf("%d", &num1);
    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Compute and display the smallest divisor and GCD
    int divisor1 = smallest_divisor(num1);
    int divisor2 = smallest_divisor(num2);
    int common_gcd = gcd(num1, num2);

    printf("Smallest divisor of %d is: %d\n", num1, divisor1);
    printf("Smallest divisor of %d is: %d\n", num2, divisor2);
    printf("The greatest common divisor (GCD) of %d and %d is: %d\n", num1, num2, common_gcd);

    return 0;
}
