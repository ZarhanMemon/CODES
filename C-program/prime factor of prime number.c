
#include <stdio.h>
int main()
{
    
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
    printf("\n The number %d is a prime number \n",num);
     
}
else{
    printf("\n The number %d is not a prime number",num);
}    

int factorial = 2;

if (is_prime){
printf("The prime factors of %d are :",num);
     
     while (num>1){
         if (num % factorial ==0){
             
             printf(" %d number", factorial);
             num = num / factorial;
         }
         else{
             factorial++;
         }
     }
}    
    
    return 0;
}
