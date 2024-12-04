//Experiment No - 6.3
//Roll no - 35
//Div - A


#include <stdio.h>

void findFrequency(int arr[], int n, int target) {
    int frequency = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            frequency++;
        }
    }

    printf("Frequency of %d: %d\n", target, frequency);
}

int main() {
    int n, target;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the element to find frequency of: ");
    scanf("%d", &target);

    findFrequency(arr, n, target);

    return 0;
}


//Output 

//Enter the number of elements: 4
//Enter 4 elements:
//4
//2
//3
//3
//Enter the element to find frequency of: 3
//Frequency of 3: 2
