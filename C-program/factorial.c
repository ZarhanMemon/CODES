#include <stdio.h>

int main() {

int num ,i;

unsigned long long ans =1;
printf("Enter the number:");
scanf("%d",&num);

for (i=1;i<=num;i++){
    
    ans*=i;
    
}
printf("%d",ans);

    return 0;
}
