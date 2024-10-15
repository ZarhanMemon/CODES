#include <stdio.h>

int main() {

int num,i;
int is_prime = 1;


printf("Enter the number for checking its prime number?:");
scanf("%d", &num);

if (num<=1)
{
    is_prime=0;
}

else{
    
    for (i=2;i*i<=num;i++)
    {
        
        if (num % i == 0)
        {
            is_prime=0;
            break;
        }
    }
}
if (is_prime){
    printf("\n The number %d is a prime number",num);
}
else{
    printf("\n The number %d is not a prime number",num);
}    

    return 0;
}
