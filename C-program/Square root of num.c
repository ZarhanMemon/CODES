#include <stdio.h>
#include <math.h>

 int main() {
    
    int a,b;   
    
    printf("Enter the number to square-root:");
   
        
    scanf("%d",&a);
    
      b = sqrt(a);    
      
    printf("\n /%d = +-%d",a,b);
    
    printf("\n The result of square root %d is +- %d",a,b);  

    return 0;
}
