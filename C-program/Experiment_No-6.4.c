//Experiment No - 6.4
//Roll no - 35
//Div - A


#include <stdio.h>

void findAverage(int arr[], int n) {
    int sum = 0;

    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }

    float average = (float)sum / n;
    printf("Average of elements: %.2f\n", average);
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

    findAverage(arr, n);

    return 0;
}



//Output 

//Enter the number of elements: 4
//Enter 4 elements:
//3
//4
//2
//1

//Average of elements: 2.50



