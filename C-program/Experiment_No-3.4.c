
//Experiment No - 3.4
//Roll no - 35
//Div - A

#include <stdio.h>

int main() {

int num ,i;

unsigned long long ans =1;
printf("Enter the number:");
scanf("%d",&num);

for (i=1;i<=num;i++){
    
    ans*=i;
    
}
printf(" Factorial : %d",ans);

    return 0;
}


//Output 

// Enter the number:5
// Factorial : 120
