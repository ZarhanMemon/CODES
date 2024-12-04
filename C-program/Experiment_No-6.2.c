//Experiment No - 6.2
//Roll no - 35
//Div - A


#include <stdio.h>

void findMaxElement(int arr[], int n) {
    int maxElement = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    printf("Maximum element: %d\n", maxElement);
}

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\n", n);

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    findMaxElement(arr, n);

    return 0;
}


//Output 

//Enter the number of elements: 4
//Enter 4 elements:
//1
//2
//3
//4
//Maximum element: 4

